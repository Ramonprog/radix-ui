import { Content } from "@radix-ui/react-dialog";
import styled from "styled-components";

export const CustomContent = styled(Content)`
  background-color: gray;
  border-radius: 3px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 700px;
  position: absolute;
`;
