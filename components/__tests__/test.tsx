import { render, fireEvent } from "@testing-library/react-native";
import { Pills } from "../Pills";
import { getMaritalStatus } from "@/resources/getMaritalStatus";
let pills: any;
describe("<Pills />", () => {
  beforeEach(() => {
    pills = render(<Pills />);
  });
  test("Componente Pills renderizado correctamente", () => {
    expect(pills).toBeDefined();
    expect(pills.getByTestId("activity-indicator")).toBeDefined();
    expect(pills.queryAllByTestId("marital-status-container").length).toEqual(
      0
    );
  });

  test("Lista de estados maritales traída correctamente", async () => {
    const maritalStatus = JSON.stringify(await getMaritalStatus());
    const expected = JSON.stringify([
      { code: "1", description: "Soltero/a", bank_id: "BLHN" },
      { code: "2", description: "Casado/a", bank_id: "BLHN" },
      { code: "3", description: "Union Libre", bank_id: "BLHN" },
      { code: "4", description: "Viudo/a", bank_id: "BLHN" },
      { code: "5", description: "Cohabitante", bank_id: "BLHN" },
    ]);
    expect(maritalStatus).toBe(expected);
  });
});
