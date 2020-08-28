import React from "react";
import "./Playlist.css";

//Creating delete-button with properties to be reusable
export default function DeleteButton({ value, handleClick }) {
  return (
    <div>
      <button className="deletebtn" onClick={handleClick}>
        {value}
      </button>
    </div>
  );
}
