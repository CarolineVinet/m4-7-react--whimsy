import React from "react";
import styled, { keyframes } from "styled-components";

const PoppingCircle = ({ size, color }) => {
  return (
    <Wrapper style={{ width: size, height: size, background: color }}></Wrapper>
  );
};

const fade = keyframes`
  from {
    opacity:1
    
  }
  to {
    opacity:0

  }
`;

const size = keyframes`
from{
transform: scale(0)
}
to{
     transform:scale(1)   
}`;

const Wrapper = styled.div`
  border-radius: 50%;
  display: block;
  animation: ${fade} 500ms ease-in forwards, ${size} 250ms ease-in forwards;
`;

export default PoppingCircle;
