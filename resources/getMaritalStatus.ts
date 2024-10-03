import { MaritalStatus } from "@/interfaces/MaritalStatus";

export async function getMaritalStatus() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-api-key": "G3yCDUD91N4nW6YghwTdjJoA32gauL36pq2mWZH1",
      authorization:
        "Basic dmljdG9yZW5yaXF1ZWJhZXpsb3BlekBnbWFpbC5jb206TmFyYW5qYWR1bGNlMDkwNTY0",
    },
  };

  const response = await fetch(
    "https://api-sandbox.lafise.com/obl/v2/banks/BLNI/catalogs/MaritalStatus/detail",
    options
  );
  const jsonResponse = await response.json();
  return jsonResponse as MaritalStatus[];
}
