import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ format: evt.target.value }, () => {
      this.props.handleChange(this.state.format);
    });

    // this.setState({ format: evt.target.value });
  }
  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;
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
        <div className="select-container">
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value={"hex"}>HEX - #ffffff</MenuItem>
            <MenuItem value={"rgb"}>RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value={"rgba"}>RGBA - rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}

export default Navbar;
