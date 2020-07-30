import React from "react";
import moment from "moment";
import Tweet from "./components/Tweet";
import avatar from "./assets/carmen-sandiego.png";
export const TweetContext = React.createContext(null);

const TweetProvider = ({ children }) => {
  const [isRetweeted, setIsRetweeted] = React.useState(false);
  const [numOfLikes, setNumOfLikes] = React.useState(460);
  const [numOfRetweets, setNumOfRetweets] = React.useState(65);
  const [isLiked, setIsLiked] = React.useState(false);
  const date = new Date();
  const formattedDate = moment(date).format("h:mm a - MMMM Do YYYY");

  const handleToggleLike = () => {
    if (isLiked === false) {
      setIsLiked(true);
      setNumOfLikes(numOfLikes + 1);
    } else if (isLiked === true) {
      setIsLiked(false);
      setNumOfLikes(numOfLikes - 1);
    }
  };

  const handleToggleRetweet = () => {
    if (isRetweeted === false) {
      setIsRetweeted(true);
      setNumOfRetweets(numOfRetweets + 1);
    } else if (isRetweeted === true) {
      setIsRetweeted(false);
      setNumOfRetweets(numOfRetweets - 1);
    }
  };

  return (
    <>
      <TweetContext.Provider
        value={{
          tweetContents: "Where in the world am I?",
          displayName: "Carmen Sandiego ✨",
          username: "carmen-sandiego",
          avatarSrc: avatar,
          isRetweetedByCurrentUser: isRetweeted,
          numberOfLikes: numOfLikes,
          numberOfRetweets: numOfRetweets,
          isLiked: isLiked,
          date: formattedDate,
          handleToggleLike,
          handleToggleRetweet,
        }}
      >
        {children}
      </TweetContext.Provider>
    </>
  );
};

export default TweetProvider;
