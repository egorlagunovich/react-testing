import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter";

describe("counter", () => {
  test("counter renders", () => {
    render(<Counter />);
    const count = screen.getByRole("heading");
    expect(count).toBeInTheDocument();
  });

  test("button render", () => {
    render(<Counter />);
    const buttonElement = screen.getByRole("button", {
      name: "Increase",
    });
    expect(buttonElement).toBeInTheDocument();

    const count = screen.getByRole("heading");
    expect(count).toHaveTextContent("0");
  });

  test("after 1 click", async () => {
    render(<Counter />);
    const buttonElement = screen.getByRole("button", {
      name: "Increase",
    });
    await user.click(buttonElement);
    const count = screen.getByRole("heading");
    expect(count).toHaveTextContent("1");
  });

  test("after adding 10", async () => {
    render(<Counter />);
    const inputElement = screen.getByRole("spinbutton");
    await user.type(inputElement, "10");
    expect(inputElement).toHaveValue(10);
    const buttonElement = screen.getByRole("button", {
      name: "Add",
    });
    await user.click(buttonElement);
    const count = screen.getByRole("heading");
    expect(count).toHaveTextContent("10");
  });
});
