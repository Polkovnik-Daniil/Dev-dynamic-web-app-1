import React from 'react';
import "./App.css";
import Task2 from "./Task2";
import Task3 from "./Task3";

function App() {
  let ts2 = Task2();
  var ts3 = Task3();
  return (
    <div className="App">
      <body>
        <div>
          {
            ts2
          }
        </div>
        <div>
          {
            ts3
          }
        </div>  
      </body>
    </div>
  );
}

export default App;
