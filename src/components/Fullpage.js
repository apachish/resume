import React, {Component} from 'react';
import SnowStorm from 'react-snowstorm';

import './Fullpage.css'

class Fullpage extends Component {
    render() {
        const backgroundColor = this.props.backgroundColor;
        console.log(backgroundColor);
        const { children } = this.props
        return (
            <div className={`fullpage ${this.props.className || ''}`} style={{
                backgroundColor: backgroundColor
              }}>
            				<SnowStorm snowColor={this.props.snowColor} animationInterval={2}  snowCharacter="."/>

                {children}
            </div>
        )
    }
}

export default Fullpage