import React from "react";
import Tweet from "./components/Tweet";
export const TweetContext = React.createContext(null);

const TweetProvider = () => {
  return (
    <TweetContext.Provider
      value={{
        displayName: Tweet.displayName,
        username: Tweet.username,
        avatarSrc: Tweet.avatarSrc,
        tweetContents: Tweet.tweetContents,
        isRetweetedByCurrentUser: Tweet.isRetweetedByCurrentUser,
        isLikedByCurrentUser: Tweet.isLikedByCurrentUser,
      }}
    ></TweetContext.Provider>
  );
};

export default TweetProvider;
