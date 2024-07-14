import React, { useState } from "react";

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
      </button>
    </div>
  )
}

export default InputArea