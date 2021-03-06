import React from "react";
import { css } from "@emotion/core";
import { BounceLoader, BarLoader, BeatLoader } from "react-spinners";
import "./App.css";

const loaderCSS = css`
  margin-top: 25px;
  margin-bottom: 25px;
`;

function App() {
  return (
    <div className="App">
      <BounceLoader css={loaderCSS} size={24} color="red" loading />
      <BarLoader css={loaderCSS} size={48} color="orange" loading />
      <BeatLoader css={loaderCSS} size={72} color="maroon" loading />
    </div>
  );
}

export default App;
