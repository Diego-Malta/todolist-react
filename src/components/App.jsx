import React, { useState } from "react";

function App() {

  const [inputText, setInputText] = useState("")
  const [list, setList] = useState([])

  function addItem() {
    inputText !== "" && setList(
      [...list, inputText]
    )
    setInputText("")
  }

  function handleChange(event) {
    setInputText(event.target.value)
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" name="listItem" value={inputText} onChange={handleChange} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map(listValue => (
            <li>{listValue}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
