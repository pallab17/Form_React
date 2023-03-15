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
/* 
we want our h1 to change when 
submit button gets tipuni
so we need to use useState hooks to change the state of the h1 
and pass the 1st element of the useState array to the h1 content area


*/
/* 

style={{ backgroundColor: isMouseOver ? "black" : "white" }}
instyle style dicchi plus using ternary operator and useState hooks i.e. isMouseOver

*/
/*

concepts used-
1. event functions
2.inline styling
3. ternary operator
4. useState hooks
*/

