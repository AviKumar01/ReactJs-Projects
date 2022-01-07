import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  return (
    <div className="App">
      <div className="center_div">
        <h2>TODO-LIST</h2>
        <input
          type="text"
          placeholder="Add Items "
          value={inputList}
          onChange={itemEvent}
        ></input>
        <button onClick={listOfItems}>+</button>

        <ol className="list">
          {Items.map((itemval) => {
            return <li>{itemval}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
