import React from "react";
import "./style.css";

function Empty() {
  return (
    <div className="card text-center">
      <div className="card-body bg-dark">
        <h3 className="header" id="saved">
          You haven't saved any books yet. Search for books to save them.
        </h3>
      </div>
    </div>
  );
}

export default Empty;
