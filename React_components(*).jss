//project folder/src/components--->App.jsx & Heading.jsx & List.jsx
//project folder/src/index.js

//File: index.js

import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App.jsx";

/* Relative Path:
  ./ is the the folder that the working file is in:
  Example:
    in /index.htm ./ is the root directory
    but in /css/style.css ./ is the css folder.
*/

ReactDOM.render(<App />, document.getElementById("root"));

/* Convention: if an HTML element has no children
use the self closing tag like: 
  <aaaaa />
*/



//File: Heading.jsx

/* We are using HTML inside javascrpit code
So need to import React
*/
import React from "react";

function Heading() {
  return <h1>My Favourite Foods</h1>;
}

export default Heading;

//Don't export Heading();



//File: List.jsx

import React from "react";

function List() {
  return (
    <ul>
      <li>Ramen</li>
      <li>Coffee</li>
      <li>Sushi</li>
    </ul>
  );
}

export default List;         //Don't export List();


//File: App.jsx  *****
import React from "react";
import Heading from "./Heading";
import List from "./List";

function App() {
  return (
    <div>
      <Heading />
      <List />
    </div>
  );
}

export default App;


