import React, { useState } from "react";
import ListItem from "./ListItem";

function App() {

  const [inputText, setInputText] = useState("")
  const [list, setList] = useState([])

  function addItem() {
    inputText !== "" && setList(
      [...list, inputText]
    )
    setInputText("")
  }

  function deleteItem(id) {
    // console.log(id + " is the value")
    setList(prevValues => prevValues.filter((value, index) => index !== id))
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
          {list.map((listValue, listIndex) => (
            <ListItem text={listValue} onCheck={deleteItem} key={listIndex} id={listIndex} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
