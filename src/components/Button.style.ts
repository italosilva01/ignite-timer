import styled, { css } from "styled-components";

interface ButtonContainerProps {
  variant: ButtonVariant;
}
export type ButtonVariant = "primary" | "secondary" | "danger" | "sucess";

const buttonVariantes = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  sucess: "green",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 6.25rem;
  height: 2.5rem;

  border-radius: 4px;
  border: 0;
  margin: 0.5rem;
  /* ${(props) =>
    css`
      background-color: ${buttonVariantes[props.variant]};
    `} */
  background-color: ${(props) => props.theme.primary};

  color: ${(props) => props.theme.primary};
`;
