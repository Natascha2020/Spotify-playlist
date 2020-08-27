import React from "react";
import PlayButton from "./PlayButton";
import DeleteButton from "./DeleteButton";

import "./Playlist.css";

//Creating blueprint for song-Layout and Button-Functions
export default function Playlist({ title, description, genre, author, release, album, image, itemIndex, playHandler, removeHandler }) {
  //Creating button-events by accessing Song-Data through play-Handler property from parent(PlaylistView) using index of each song
  const playSong = (e, itemIndex) => {
    playHandler(itemIndex);
  };

  const deleteSong = (e, itemIndex) => {
    removeHandler(itemIndex);
  };

  //Importing Play- and Deletebutton and calling respective events (playSong and deleteSong)
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
          <PlayButton
            value="Play"
            handleClick={(e) => {
              playSong(e, itemIndex);
            }}
          />
          <DeleteButton
            value="Delete"
            handleClick={(e) => {
              deleteSong(e, itemIndex);
            }}
          />
        </div>
      </div>
    </div>
  );
}
