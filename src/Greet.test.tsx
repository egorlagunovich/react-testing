import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("greet renders correctly", () => {
  render(<Greet />);
  const greeting = screen.getByText("Hello John");
  expect(greeting).toBeInTheDocument();
});

test("greet name renders correctly", () => {
  render(<Greet name="Jurek" />);
  const greeting = screen.getByText("Hello Jurek");
  expect(greeting).toBeInTheDocument();
});
