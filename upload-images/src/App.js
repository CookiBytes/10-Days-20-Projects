import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    selectedFile: null,
  };

  selectHandler = (e) => {
    this.setState({
      selectedFile: e.target.files[0],
    });
  };

  render() {
    return (
      <div className="App">
        <input type="file" onChange={this.selectHandler} />
      </div>
    );
  }
}

export default App;
