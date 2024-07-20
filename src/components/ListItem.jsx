import React from "react";
import currentDateAndTime from "../currentDateAndTime.js";
import Zoom from "@mui/material/Zoom";

function ListItem(props) {

  return (
    <Zoom in timeout={500}>
      <div onClick={() => props.onCheck(props.id)}>
        <li>
          {`\"${props.text}\"`}
          <span className="current-date">
            {` - ${currentDateAndTime()}`}
          </span>
        </li>
      </div>
    </Zoom>
  );
}

export default ListItem