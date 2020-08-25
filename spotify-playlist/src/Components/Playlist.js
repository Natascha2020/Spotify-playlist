import React from "react";
import PlayButton from "./PlayButton";
import DeleteButton from "./DeleteButton";

export default function Playlist({ title, description, genre, author, release, album, image }) {
  return (
    <div className="Playlist">
      <div className="song">
        <div>{title}</div>
        <div>{description}</div>
        <div>{genre}</div>
        <div>{author}</div>
        <div>{release}</div>
        <div>{album}</div>
        <img src={image} className="Image" />
      </div>
      <PlayButton />
      <DeleteButton />
    </div>
  );
}
