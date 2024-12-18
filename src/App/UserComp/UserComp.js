import React from "react";
import "./UserComp.css";
export default function UserComp({ id, text }) {
  return (
    <div id={id} className="user-component">
      <h1 className="text-container">{text}</h1>
    </div>
  );
}
