import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import SkillCard from "../components/SkillCard";

import "./SkillSection.css";

class SkillSection extends Component {
  render() {
    const backgroundColor = this.props.backgroundColor;
        const snowColor = this.props.snowColor

    return (
      <Fullpage className="third" backgroundColor={backgroundColor} snowColor={snowColor}>
        <h3>{data.sections[1].title}</h3>
        <div
          className="cards-wrapper"
          
        >
          {data.sections[1].items.map(eachSkill => {
            return <SkillCard skill={eachSkill} />;
          })}
        </div>
      </Fullpage>
    );
  }
}

export default SkillSection;
