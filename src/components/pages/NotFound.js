import React from "react";

const NotFound = () => {
  const errorStyle = {
    color: "red",
  };
  return (
    <>
      <h1 style={errorStyle}>Error 404</h1>
      <p>The page that you are looking for does not exist!</p>
    </>
  );
};

export default NotFound;
