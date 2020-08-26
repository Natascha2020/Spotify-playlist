import React from "react";
import PlayButton from "./PlayButton";
import DeleteButton from "./DeleteButton";
import CSS from "./Playlist.css";

export default function Playlist({ title, description, genre, author, release, album, image, item }) {
  const playSong = (item) => {
    console.log("Hello");
    console.log(playSong);
    console.log(item);
  };

  return (
    <div className="Playlist">
      <div className="song">
        <img src={image} className="Image" alt="" />

        <div className="text">
          <h2 className="title">{title}</h2>
          <h3 className="author">{author}</h3>

          <div className="sideInfo">
            <span className="genre">{genre}</span>
            <span className="release">{release}</span>
          </div>
          <h4 className="album">{album}</h4>
          <div className="description">{description}</div>
        </div>

        <div className="buttons">
          <PlayButton value="Play now" onClick={() => playSong(item)} />
          <DeleteButton value="Delete" /* onClick={() => deleteSong()} */ />
        </div>
      </div>
    </div>
  );
}
