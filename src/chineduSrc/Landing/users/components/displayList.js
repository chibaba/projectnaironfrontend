import React from "react";

import DisplayItem from "./displayItem";

import "./displayList.css";

const DisplayList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No Content yet, Please check back</h2>
      </div>
    );
  }
  return (
    <ul>
      {props.items.map((display) => {
        return <DisplayItem />;
      })}
    </ul>
  );
};

export default DisplayList;
