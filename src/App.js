import React, { Component } from "react";
import { generatePalette } from "./colorHelper";
import Palette from "./Palette";
import seedColors from "./seedColors";

class App extends Component {
  render() {
    return <Palette {...seedColors[0]} />;
  }
}

export default App;
