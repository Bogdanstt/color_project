import React, { Component } from "react";
import { generatePalette } from "./colorHelper";
import Palette from "./Palette";
import seedColors from "./seedColors";

class App extends Component {
  render() {
    return <Palette palette={generatePalette(seedColors[4])} />;
  }
}

export default App;
