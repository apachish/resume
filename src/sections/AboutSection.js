import React, { Component } from "react";
import { Link, Element } from "react-scroll";

import Fullpage from "../components/Fullpage";
import DownIcon from "../components/DownIcon";

import data from "../data.json";
import "./AboutSection.css";

class AboutSection extends Component {
  render() {
    const color = this.props.color
    const backgroundColor = this.props.backgroundColor
    const snowColor = this.props.snowColor

    return (
      <div>
        <Fullpage className="second" backgroundColor={backgroundColor} snowColor={snowColor}>
          <h3 
          style={{
            color: color
          }}
          >{data.sections[0].title}</h3>
          <div
          style={{
            color: color
          }}
          >
            {data.sections[0].items.map(p => {
              return <p>{p.content}</p>;
            })}
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="skill"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          delay={0}
        >
          <DownIcon
            icon={data.icons.down}
            onClick={() => console.log("im working")}
          />
        </Link>
        <Element name="skill" className="element" />
      </div>
    );
  }
}

export default AboutSection;
