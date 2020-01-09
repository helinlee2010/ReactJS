// Jan 8, 2020

// Require React & ReactDOM module for using these packages

var React = require("react");
var ReactDOM = require("react-dom");

/*Using React to create h1 element w/o editing the HTML file
Method: render(What to show, Where to show, optional callback) */

//JSX (HTML code inside JS file) is compiled backed to javascript by Babel inside React package

ReactDOM.render(<h1>Welcome</h1>,document.getElementById("root"));

//Above is the same as doing the following pure JS codes
var h1= document.createElement("h1");
h1.innerHTML = "Welcome";
document.getElementById("root").appendChild(h1);


