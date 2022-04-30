import styled from "styled-components";
import { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  border: 2px solid pink;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  ${(props) =>
    props.dragging &&
    css`
      opacity: 0;
    `}
`;
