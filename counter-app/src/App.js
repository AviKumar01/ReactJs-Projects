import React, { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  const incrementNo = () => {
    setNum(num + 1);
  };
  const decrementNo = () => {

    if(num>0){
      setNum(num - 1);  
    }
    else{
      alert('Zero limit Reached')
      setNum(0);
    }
  };
  return (
    <div className="App">
      <div className="center_div">
        <h1>{num}</h1>

        <div className="btn_div">
          <button onClick={incrementNo}>Increment</button>
          <button onClick={decrementNo}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
