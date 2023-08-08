import styled from "styled-components";

interface ButtonContainerProps {
  variant: ButtonVariant;
}
export type ButtonVariant = "primary" | "secondary" | "danger" | "sucess";

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 6.25rem;
  height: 2.5rem;

  border-radius: 4px;
  border: 0;
  margin: 0.5rem;

  background-color: ${(props) => props.theme["gray-300"]};

  color: ${(props) => props.theme.white};
`;
