import React from "react";
import styled from "styled-components";
import TweetProvider from "../TweetContext";
import Tweet from "./Tweet";
import avatar from "../assets/carmen-sandiego.png";

const App = () => {
  return (
    <Wrapper>
      <TweetProvider>
        <Tweet />
      </TweetProvider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;

export default App;
