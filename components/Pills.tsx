import { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  Pressable,
  View,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from "react-native";
const image = require("../assets/images/logo.png");
const arrowBack = require("../assets/images/arrow_back.png");
import { getMaritalStatus } from "../resources/getMaritalStatus";
import { MaritalStatus } from "@/interfaces/MaritalStatus";

export function Pills() {
  const [maritalStatus, setMaritalStatus] = useState<MaritalStatus[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  useEffect(() => {
    getMaritalStatus()
      .then((response: MaritalStatus[]) => setMaritalStatus(response))
      .catch((err: Error) => console.log(err));
  }, []);
  const onSelect = (code: string) => setSelectedStatus(code);
  return (
    <>
      <View style={styles.progressBarContainer}>
        <Pressable style={styles.backBtn}>
          <Image source={arrowBack} style={styles.backBtn}></Image>
        </Pressable>
        <View style={styles.progressBar}>
          <View style={styles.progress} />
        </View>
      </View>

      <Text style={styles.barText}>Completa tu Perfil</Text>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image}></Image>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>¿Cuál es tu estado civil?</Text>
      </View>
      {!maritalStatus.length ? (
        <ActivityIndicator testID="activity-indicator" size="large" color="#018765" />
      ) : (
        <View testID="marital-status-container" style={styles.radioContainer}>
          {maritalStatus.map((status) => {
            return (
              <Pressable
                onPress={() => onSelect(status.code)}
                style={
                  selectedStatus === status.code
                    ? styles.radioSelected
                    : styles.radio
                }
                key={status.code}
              >
                <Text style={styles.radioText}>{status.description}</Text>
                <View
                  style={
                    selectedStatus === status.code
                      ? styles.radioCircleSelected
                      : styles.radioCircle
                  }
                >
                  <View
                    style={[
                      {
                        display:
                          selectedStatus === status.code ? "flex" : "none",
                      },
                      styles.radioSecondCircle,
                    ]}
                  ></View>
                </View>
              </Pressable>
            );
          })}
        </View>
      )}
      <View style={styles.continueContainer}>
        <Pressable
          disabled={!selectedStatus}
          style={selectedStatus ? styles.continue : styles.continueDisabled}
        >
          <Text
            style={
              selectedStatus ? styles.continueText : styles.continueTextDisabled
            }
          >
            Continuar
          </Text>
        </Pressable>
      </View>
    </>
  );
}

const radio = {
  padding: 15,
  borderWidth: 2,
  borderStyle: "solid",
  borderRadius: 10,
  width: "100%",
  height: 60,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
} as ViewStyle;

const radioCircle = {
  width: 30,
  height: 30,
  borderColor: "#e7e9ee",
  borderWidth: 2,
  borderStyle: "solid",
  borderRadius: 50,
  justifyContent: "center",
  alignItems: "center",
} as ViewStyle;

const btnContinue = {
  width: "90%",
  height: 55,
  borderRadius: 50,
  alignItems: "center",
  justifyContent: "center",
} as ViewStyle;

const btnContinueText = {
  textAlign: "center",
  fontSize: 16,
  fontWeight: "bold",
  letterSpacing: 1,
} as TextStyle;

const styles = StyleSheet.create({
  progressBarContainer: {
    marginTop: 50,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  backBtn: { position: "absolute", left: "7%", width: 20, height: 20 },
  progressBar: {
    height: 5,
    width: "50%",
    backgroundColor: "#dfe2e8",
    borderRadius: 100,
  },

  progress: {
    backgroundColor: "#00abec",
    borderRadius: 100,
    height: "100%",
    width: "13%",
  },
  barText: {
    fontWeight: "800",
    fontSize: 16,
  },
  imageContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginLeft: 25,
  },
  titleContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#181b25",
    marginLeft: 30,
  },
  radioContainer: {
    width: "85%",
    gap: 15,
  },

  radio: {
    ...radio,
    borderColor: "#e7e9ee",
  },

  radioSelected: {
    ...radio,
    borderColor: "#90cebe",
    backgroundColor: "#e6f9f4",
  },

  radioText: {
    fontSize: 16,
    fontWeight: "500",
  },
  radioCircle,
  radioCircleSelected: {
    ...radioCircle,
    backgroundColor: "#018765",
  },
  radioSecondCircle: {
    width: 12,
    height: 12,
    borderColor: "#e7e9ee",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 50,
    backgroundColor: "#fff",
  },
  continueContainer: {
    height: 90,
    width: "100%",
    padding: 20,
    borderTopColor: "#e7e9ed",
    borderTopWidth: 2,
    borderStyle: "solid",
    flexDirection: "row",
    justifyContent: "center",
  },
  continue: {
    ...btnContinue,
    backgroundColor: "#018765",
  },
  continueDisabled: {
    ...btnContinue,
    backgroundColor: "#eff2f5",
  },
  continueText: {
    ...btnContinueText,
    color: "#fff",
  },
  continueTextDisabled: {
    ...btnContinueText,
    color: "#000",
    opacity: 0.2,
  },
});
