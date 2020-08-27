import React from "react";

//Creating play-button with properties to be reusable
export default function PlayButton({ value, handleClick }) {
  return (
    <div>
      <button onClick={handleClick}>{value}</button>
    </div>
  );
}
