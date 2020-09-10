import React from "react";
import ReactPlayer from "react-player";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ReactPlayer
        width="480px"
        height="240px"
        controls
        url="https://www.youtube.com/watch?v=7sDY4m8KNLc&list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM&index=12"
        onError={() => console.log("onReady callbakc")}
        onStart={() => console.log("onStart callbakc")}
        onPause={() => console.log("onPause callbakc")}
        onEnded={() => console.log("onEnded callbakc")}
        onError={() => console.log("onReady callbakc")}
      />
    </div>
  );
}

export default App;
