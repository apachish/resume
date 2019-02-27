import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import SkillCard from "../components/SkillCard";
import DownIcon from "../components/DownIcon";
import { Link, Element } from "react-scroll";

import "./SkillSection.css";

class SkillSection extends Component {
  render() {
    const backgroundColor = this.props.backgroundColor;
    const snowColor = this.props.snowColor;

    return (
      <div>
        <Fullpage
          className="third"
          backgroundColor={backgroundColor}
          snowColor={snowColor}
        >
          <h3>{data.sections[1].title}</h3>
          <div className="cards-wrapper">
            {data.sections[1].items.map(eachSkill => {
              return <SkillCard skill={eachSkill} />;
            })}
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="title"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          delay={0}
        >
          <DownIcon
            icon={data.icons.up}
            onClick={() => console.log("im working")}
          />
        </Link>
      </div>
    );
  }
}

export default SkillSection;
