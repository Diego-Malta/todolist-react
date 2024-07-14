import React from "react";

function ListItem(props) {

  return (
    <div onClick={() => props.onCheck(props.id)}>
      <li>
        {props.text}
      </li>
    </div>
  );
}

export default ListItem