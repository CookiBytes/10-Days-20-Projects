import React from "react";
import Tippy from "@tippy.js/react";
import "./App.css";
import "tippy.js/dist/tippy.css";

function App() {
  return (
    <div className="App">
      <Tippy content="Basic Tooltip">
        <button>Hover</button>
      </Tippy>
    </div>
  );
}

export default App;
