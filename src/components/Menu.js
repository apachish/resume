import React, { Component } from "react";
import { Link, Element } from "react-scroll";
import Changecolor from "../components/Changecolor";

import data from "../data.json";

import "./menu.css";

class Menu extends Component {
  constructor() {
    super();
  }
  render() {
    const color = this.props.color
    return (
      <header>
        <nav id="desktop-nav">
          <ul>
          {data.navigation.map(nav => {
            return (
              <li>
                <Link
          activeClass="active"
          to={nav.link}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          delay={0}
          style={{
            color: color
          }}
        >
                {nav.title}
                </Link>
            </li>
            );
          })}
          </ul>
        </nav>
        <Changecolor randomColor={this.props.randomColor}/>
      </header>
    );
  }
}

export default Menu;
