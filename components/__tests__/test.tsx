import { render, screen, fireEvent } from "@testing-library/react-native";
import { Pills } from "../Pills";
import { ReactElement } from "react";
let component: any;
describe("<Pills />", () => {
  beforeEach(() => {
    component = render(<Pills />);
  });
  test("Renderiza el componente", () => {
    expect(component).toBeDefined();
  });
});
