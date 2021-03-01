import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { generatePalette } from "./colorHelper";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import seedColors from "./seedColors";

class App extends Component {
  findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList palettes={seedColors} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          path="/palette/:paletteId/:colorId"
          render={() => <h1>Single Color Page</h1>}
        ></Route>
      </Switch>
    );
  }
}
export default App;
