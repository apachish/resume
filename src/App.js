import React, { Component } from "react";
import Menu from './components/Menu';
import TitlesSection from './sections/TitlesSection';
import AboutSection from './sections/AboutSection';
import SkillSection from './sections/SkillSection';
import propTypes from "prop-types";
import "./App.css";


class App extends Component {
  constructor() {
    super();
    this.state = {
      color: "white",
      backgroundColor : "black",
      snowColor : "red"
    };
    this.randomColor = this.randomColor.bind(this);

  }
  randomColor() {
      
    var letters = "0123456789ABCDEF";
    var colory = "#";
    var backgroundColory = "#"
    var snowColory = "#"
    for (var i = 0; i < 6; i++) {
      colory += letters[Math.floor(Math.random() * 16)];
      backgroundColory += letters[Math.floor(Math.random() * 16)];
      snowColory += letters[Math.floor(Math.random() * 16)];
    }
    console.log(backgroundColory)
    this.setState({
      color:colory,
      backgroundColor:backgroundColory,
      snowColor:  snowColory
    })
  }
  render() {
    return (
      <div className="App" >
        <Menu color={this.state.color} randomColor={this.randomColor}/>
        <TitlesSection color={this.state.color} backgroundColor={this.state.backgroundColor} snowColor={this.state.snowColor}/>
        <AboutSection color={this.state.color} backgroundColor={this.state.backgroundColor} snowColor={this.state.snowColor}/>
        <SkillSection color={this.state.color} backgroundColor={this.state.backgroundColor} snowColor={this.state.snowColor}/>
      </div>
    );
  }
}
App.propTypes = {
  color: propTypes.string.isRequired
};
App.defaultProps ={
  color:"white",
}
export default App;
