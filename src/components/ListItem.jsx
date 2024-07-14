import React, { useState } from "react";

function ListItem(props) {

  const {text: itemText} = props
  const[isItemChecked, setIsItemChecked] = useState(false)

  function handleClick(){
    setIsItemChecked(prevValue => !prevValue)
  }
  
  return (
    <li onClick={handleClick} style={{textDecoration: isItemChecked ? "line-through" : "none"}}>
      {itemText}
    </li>
  );
}

export default ListItem