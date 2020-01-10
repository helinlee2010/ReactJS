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


//Insdie the { } we can write any JavaScript we want, example:

ReactDOM.render(<h2> Random Number provided is: {Math.random()} </h2>, getElementById("root"));


//ES6 example
const fName = "Suzy";
const lName = "Bae";

.....<h1> Hello {`${fName} ${lName}`} </h1>....
