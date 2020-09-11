import React, { useState } from "react";
import { ChromePicker } from "react-color";
import "./App.css";

function App() {
  const [colour, setColour] = useState("#fff");
  const [showColourPicker, setShowColourPicker] = useState(false);

  return (
    <div>
      <h1>Colour Picker</h1>

      <div className="container">
        <button
          onClick={() =>
            setShowColourPicker((showColourPicker) => !showColourPicker)
          }
        >
          {showColourPicker ? "Close colour picker" : "Pick a colour"}
        </button>
        {showColourPicker && (
          <ChromePicker
            color={colour}
            onChange={(updatedColour) => setColour(updatedColour.hex)}
          />
        )}

        <p>You picked {colour}</p>
      </div>
    </div>
  );
}

export default App;
