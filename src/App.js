import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { generatePalette } from "./colorHelper";
import Palette from "./Palette";
import seedColors from "./seedColors";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <h1>Palette list goes here!</h1>}
          />
          <Route
            exact
            path="/palette:id"
            render={() => <h1>Individual palette</h1>}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

this.props.