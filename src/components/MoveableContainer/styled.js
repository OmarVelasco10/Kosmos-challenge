import styled from "styled-components";

export const MainContainer = styled.main`
  height: 100%;
  width: 100%;
`;

export const AddItemButtom = styled.button`
  background-image: linear-gradient(
    92.88deg,
    #455eb5 9.16%,
    #5643cc 43.89%,
    #673fd7 64.72%
  );
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 3rem;
  padding: 0 1rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all 0.5s;
  user-select: none;
  margin: 50px auto;
  display: block;
  &:hover {
    box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
    transition-duration: 0.1s;
  }
`;

export const MoveableParent = styled.div`
  position: relative;
  background: #3d3d3d;
  height: 80vh;
  width: 80vw;
  margin: 0 auto;
`;
