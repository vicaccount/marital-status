import { MaritalStatus } from "@/interfaces/MaritalStatus";

export async function getMaritalStatus() {
  const x_api_key = "";
  const authorization = "";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-api-key": x_api_key,
      authorization,
    },
  };

  const response = await fetch(
    "https://api-sandbox.lafise.com/obl/v2/banks/BLNI/catalogs/MaritalStatus/detail",
    options
  );
  const jsonResponse = await response.json();
  return jsonResponse as MaritalStatus[];
}
