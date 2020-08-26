import React from "react";

//Creating delete-button with properties to be reusable
export default function DeleteButton({ value, handleClick }) {
  return (
    <div>
      <button onClick={handleClick}>{value}</button>
    </div>
  );
}
