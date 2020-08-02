import React, { Component } from "react";
import "./App.css";
import Histo from "./components/Histo";
import staticData from "./Data";

class App extends Component {
  render() {
    return (
      <div>
        <Histo data={staticData} />
      </div>
    );
  }
}

export default App;
