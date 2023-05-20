import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("greeting", () => {
  render(<Greet />);
  const greeting = screen.getByText(/Hello, world!/i);
  expect(greeting).toBeInTheDocument();
});
