import React, { useState } from "react";

function App() {
  const [hT, sHT] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);
  function hC() {
    // console.log("yo");
    sHT("Submitted");
  }
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{hT}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={hC}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;


