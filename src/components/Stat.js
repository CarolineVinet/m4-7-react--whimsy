import React, { useContext } from "react";
import styled from "styled-components";
import { TweetContext } from "../TweetContext";

const Stats = () => {
  const { numberOfLikes, numberOfRetweets } = useContext(TweetContext);
  return (
    <StatsDiv>
      <RetweetStat>
        <BoldStatNum>{numberOfRetweets}</BoldStatNum>
        <StatTitle>Retweets</StatTitle>
      </RetweetStat>
      <LikesStat>
        <BoldStatNum>{numberOfLikes}</BoldStatNum>
        <StatTitle>Likes</StatTitle>
      </LikesStat>
    </StatsDiv>
  );
};

const StatsDiv = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  margin: 10px;
`;

const RetweetStat = styled.div`
  margin-right: 30px;
`;

const LikesStat = styled.div``;

const BoldStatNum = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const StatTitle = styled.span``;

export default Stats;
