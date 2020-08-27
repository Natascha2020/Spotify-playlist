import React, { useState } from "react";
import Playlist from "./Playlist";
import FixedHeader from "./FixedHeader.js";
import * as externalData from "../Data/SongData";
import "../App.css";

export default function PlaylistView() {
  //Creating state variable with importet Data list as initial state
  const [songs, setSongs] = useState(externalData.SongData);

  //Creating function for play-Button using index of song-element
  const handlePlayItem = (indexToPlay) => {
    /*  console.log("playing index: " + indexToPlay); */
  };

  //Creating function for delete-Button using index of song-element to delete by filtering an array without selected song-element
  const handleRemoveItem = (indexToDelete) => {
    /* console.log("deleting index: " + indexToDelete); */
    let updatedSongs = songs.filter(
      (element, index) => index !== indexToDelete
    );
    // ... ensures that REACT recognizes the changes inside the filtered array and therefore re-renders
    setSongs([...updatedSongs]);
  };

  // Mapping through all songs (SongData) in order to apply blueprint of Playlist.js
  // Passing functions to manage state as properties to child for beeing able to access
  return (
    <div className="App">
      <FixedHeader />
      {songs.map((element, index) => (
        <div key={`song-${index}`}>
          <Playlist
            title={element.title}
            description={element.description}
            genre={element.genre}
            author={element.author}
            release={element.release}
            album={element.album}
            image={element.image}
            itemIndex={index}
            playHandler={handlePlayItem}
            removeHandler={handleRemoveItem}
          />
        </div>
      ))}
    </div>
  );
}
