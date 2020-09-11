import React from "react";
import "./App.css";
import Typical from "react-typical";
import logo from "./image.png";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Hi, I'm toffi</h1>
      <p>
        I'm a{" "}
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={["developer", 1000, "programmer", 1000]}
        />
      </p>
    </div>
  );
}

export default App;
