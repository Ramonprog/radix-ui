import styled from "styled-components";
import { Trigger, Content, SubContent } from "@radix-ui/react-dropdown-menu";

export const StyledTrigger = styled(Trigger)`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: #f8eaab;
  }
`;

export const StyledContent = styled(Content)`
  min-width: 220px;
  background-color: white;
  border-radius: 6px;
  padding: 5px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
`;

export const StyledSubContent = styled(SubContent)`
  background-color: #ffc891;
`;
