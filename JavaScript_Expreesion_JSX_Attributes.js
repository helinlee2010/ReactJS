import React from "react";
import ReactDOM from "react-dom";

const name = "Helin";
const currentYear = new Date().getFullYear();
console.log(currentYear);
const img = "https://picsum.photos/200";

//Change to type="text/JSX" in the html script section
//JSX use Camel-casting
//Use "ClassName" instead of "class"
// place holder for javascript code:{}

ReactDOM.render(
  <div>
    <h1 contentEditagle="true" spellCheck="false"> Random Image</h1>
    <img alt="random" src={img} />
    <p>Created by {name}</p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);
