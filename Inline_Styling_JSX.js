import React from "react";
import ReactDOM from "react-dom";

//Javascript Object Format:
/*{
   key (variable): value (string),
   key: value
 }
*/

//Example: The following is a JavaScript object (use comma)
/*
{
  color: "red"
}     
*/

const customStyle = {
  color: "purple",
  fontSize: "50px",
  border: "1px solid yellow"
};

//We can update the style by:

customStyle.color = "blue";

//Can't use <h1 style="color: red"> in JSX
//Because they don't accept string for style, but accept JavaScrpt Object

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);

//Or ...style={{color: "red"}}...
