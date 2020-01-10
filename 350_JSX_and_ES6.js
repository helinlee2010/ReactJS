//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

const name = "Mina";
const luckyNum = 6;

ReactDOM.render(
  <div>
    <h1>Hello {name}! </h1>
    <h2>Your lucky number is: {luckyNum}</h2>
    <h3>Sum of our lucky number is { 6 + 6 } </h3>
    <ul>
      Hobbies
      <li>Singing</li>
      <li>Guitar</li>
      <li>Cooking</li>
    </ul>
  </div>,
  document.getElementById("root")
);


// Understand what's the difference between expression & statement in Javascript, check video
//Insdie the { } we can write any JavaScript EXPRESSION we want,but NOT statement, example:

ReactDOM.render(<h2> Random Number provided is: {<h2> Math.floor(Math.random() * 10)} </h2>, getElementById("root")); //this works

ReactDOM.render(<h2> Random Number provided is: {<h2>
                if (name === "Mina")
                  return 6;
                </h2>, getElementById("root"));   //this WON'T work because it's a statement


//ES6 example
const fName = "Suzy";
const lName = "Bae";

.....<h1> Hello {`${fName} ${lName}`} </h1>....
