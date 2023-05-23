import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter";

describe("counter", () => {
  test("mocking button clicked", async () => {
    const mockingHandler = jest.fn();
    render(<Counter clickHandler={mockingHandler} />);
    const buttonElement = screen.getByRole("button", {
      name: "Mocking",
    });
    await user.click(buttonElement);
    expect(mockingHandler).toHaveBeenCalledTimes(1);
  });
});
