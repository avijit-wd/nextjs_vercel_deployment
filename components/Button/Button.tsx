import styled from "@emotion/styled";
import { css, SerializedStyles } from "@emotion/react";
import { MouseEvent } from "react";

export type Color = "primary" | "secondary" | "danger" | "warning";

export type ButtonProps = {
  children: string;
  color?: Color;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const getColors = (color?: Color): SerializedStyles => {
  switch (color) {
    case "primary":
      return css`
        background-color: violet;
        color: "white";
      `;
    case "secondary":
      return css`
        background-color: green;
        color: "white";
      `;
    case "danger":
      return css`
        background-color: red;
        color: "white";
      `;
    case "warning":
      return css`
        background-color: yellow;
        color: "white";
      `;
    default:
      return css``;
  }
};

export const Button = styled.button<ButtonProps>`
  all: unset;
  display: flex;
  align-items: center;
  justify-self: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  font-size: 1.6rem;
  width: 15rem;
  height: 4rem;
  border-radius: 1rem;
  transition: all 0.4s ease;
  ${({ color }) => getColors(color)};
  &:hover {
    opacity: 0.9;
  }
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  &:active {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
`;

Button.defaultProps = {
  color: "primary",
};
