import React, { useState } from "react";
// import { Fab } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import { Fab, AddIcon } from '@mui/material';

function InputArea(props) {

  const [inputText, setInputText] = useState("")

  function handleChange(event) {
    setInputText(event.target.value)
  }

  return (
    <div className="form">
      <input type="text" name="listItem" value={inputText} onChange={handleChange} />
      <button onClick={() => {
        props.onAdd(inputText)
        setInputText("")
      }}>
        <span>Add</span>
        {/* <span><AddIcon /></span> */}
      </button>
    </div>
  )
}

export default InputArea