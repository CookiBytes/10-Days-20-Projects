import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  return (
    <React.Fragment>
      <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />
      <form>
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
          onFocus={(event) => setFocus(event.target.name)}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          onFocus={(event) => setFocus(event.target.name)}
        />
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY Expiry"
          value={expiry}
          onChange={(event) => setExpiry(event.target.value)}
          onFocus={(event) => setFocus(event.target.name)}
        />
        <input
          type="tel"
          name="cvc"
          placeholder="CVC"
          value={cvc}
          onChange={(event) => setCvc(event.target.value)}
          onFocus={(event) => setFocus(event.target.name)}
        />
      </form>
    </React.Fragment>
  );
}

export default App;
