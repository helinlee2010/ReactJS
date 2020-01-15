//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.


import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentHour = date.getHours();

//For testing, can change the time by:
//const date = new Date(2020,1,15, 22); --> Good Evening

//Declare only
let greeting;

var style = {
  color: ""
};

if (0 <= currentHour && currentHour < 12) {
  greeting = "Good Morning ";
  style.color = "red";
} else if (12 <= currentHour && currentHour < 18) {
  greeting = "Good Afternoon ";
  style.color = "green";
} else {
  greeting = "Good Evening ";
  style.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={style}>
    {greeting}{" "}
  </h1>,
  document.getElementById("root")
);
