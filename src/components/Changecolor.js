import React, { Component } from "react";

import data from "../data.json";
import App from "../App.js";

class changeColor extends Component {
  constructor() {
    super();
    this.state = {
      color: "white"
    };
  }
  render() {
    return (
      <div>
        <div className="color" onClick={this.props.randomColor}>
          <img src={data.changeColor.image} />
          <div className="title-color">{data.changeColor.title}</div>
        </div>
      </div>
    );
  }
}

export default changeColor;
