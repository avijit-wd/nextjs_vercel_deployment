import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button test case", () => {
  it("Render check", () => {
    const mockFn = jest.fn();
    const { asFragment } = render(<Button onClick={mockFn}>Button</Button>);

    expect(asFragment()).toMatchSnapshot();
  });

  it("Check onClick callback", () => {
    const onClick = jest.fn();

    render(<Button onClick={onClick}>Button</Button>);

    const element = screen.getByRole("button");

    userEvent.click(element);
  });
});
