import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    const { level, changeLevel } = this.props;
    const railStyle = { height: "10px" };
    const handleStyle = [
      {
        backgroundColor: "green",
        outline: "none",
        border: "2px solid green",
        boxShadow: "none",
        width: "15px",
        height: "15px",
        marginLeft: "-7px",
        marginTop: "-2.75px",
      },
    ];
    const trackStyle = [
      {
        backgroundColor: "transparent",
      },
    ];
    return (
      <header className="Navbar">
        <div className="logo">
          <a>reactcolorpicker</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
              railStyle={railStyle}
              handleStyle={handleStyle}
              trackStyle={trackStyle}
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
