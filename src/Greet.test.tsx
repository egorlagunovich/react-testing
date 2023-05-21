import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("greet", () => {
  test("greet renders correctly", () => {
    render(<Greet />);
    const greeting = screen.getByText("Hello John");
    expect(greeting).toBeInTheDocument();

    const inputElement = screen.getByPlaceholderText("name");
    expect(inputElement).toBeInTheDocument();

    const spanElement = screen.getByTitle("close");
    expect(spanElement).toBeInTheDocument();

    const inputElement1 = screen.getByLabelText("Ok");
    expect(inputElement1).toBeInTheDocument();

    const inputElement2 = screen.getByDisplayValue("haha");
    expect(inputElement2).toBeInTheDocument();

    const imgElement = screen.getByAltText("nothing");
    expect(imgElement).toBeInTheDocument();

    const divElement = screen.getByTestId("23");
    expect(divElement).toBeInTheDocument();
  });

  test("greet name renders correctly", () => {
    render(<Greet name="Jurek" />);
    const greeting = screen.getByText("Hello Jurek");
    expect(greeting).toBeInTheDocument();
  });

  test("button renders correcly", () => {
    render(<Greet />);
    const buttonElement = screen.getByRole("button", { name: "Submit" });
    expect(buttonElement).toBeInTheDocument();

    const buttonElements = screen.getAllByRole("button");
    expect(buttonElements).toHaveLength(2)
  });

  test("header renders correctly", () => {
    render(<Greet />);
    const headerElement = screen.getByRole("heading", {
      name: "Greeting form",
    });
    expect(headerElement).toBeInTheDocument();
  });
});
