import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import { generatePalette } from "./colorHelper";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox background={color.hex} name={color.name} />
    ));
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
      <div className="Palette">
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.changeLevel}
            railStyle={railStyle}
            handleStyle={handleStyle}
            trackStyle={trackStyle}
          />
        </div>

        {/* navbar */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}

export default Palette;
