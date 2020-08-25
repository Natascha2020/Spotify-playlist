import React from "react";
import "./App.css";
import App from "./App";

export default ({
  title,
  description,
  genre,
  author,
  release,
  album,
  image,
}) => {
  return (
    <div className="Playlist">
      <div>{title}</div>
      <div>{description}</div>
      <div>{genre}</div>
      <div>{author}</div>
      <div>{release}</div>
      <div>{album}</div>
      <img src={image} className="Image" />
    </div>
  );
};
