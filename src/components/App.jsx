import React, { useState } from "react";
import ListItem from "./ListItem";
import InputArea from "./InputArea";

function App() {

  const [list, setList] = useState([])

  function addItem(inputText) {
    inputText !== "" && setList(
      [...list, inputText]
    )
  }

  function deleteItem(id) {
    setList(prevValues => prevValues.filter((value, index) => index !== id))
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        onAdd={addItem}
      />
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
