import React from "react";
import "./Playlist.css";

//Creating play-button with properties to be reusable
export default function PlayButton({ value, handleClick }) {
  return (
    <div>
      <button className="playbtn" onClick={handleClick}>
        {value}
      </button>
    </div>
  );
}
