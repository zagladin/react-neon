import React, {Component} from 'react';
import './Wrapper.scss';

import Weather from '../weather/Weather';
import Clock from '../clock/Clock';
import Contacts from '../contacts/Contacts';

class Wrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      background: '#000000',
      mobileDevice: false,
    };

    this.changeBackground = this.changeBackground.bind(this);
  }

  changeBackground = (color) => {
    this.setState({background: color});
  };

  render() {
    return (
        <div className="background">
          <div className="grid-container">
            <div className="weather">
              <Weather/>
            </div>
            <div className="clock">
              <Clock/>
            </div>
            <div className="contacts">
              <Contacts/>
            </div>
          </div>
        </div>
    );
  }
}

export default Wrapper;
