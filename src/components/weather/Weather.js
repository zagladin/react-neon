import React, {Component, Fragment} from 'react';
import './Weather.scss';

import axios from 'axios';

class Weather extends Component {

  constructor(props) {
    super(props);

    this.state = {
      city: '',
      temperature: '',
      humidity: '',
      pressure: '',
      clouds: '',
      accuracy: '',
      weatherIcon: '',
      loader: 'none',
    };
  };

  getCoordinates() {

    const makeRequest = position => {

      const url = 'https://api.openweathermap.org/data/2.5/weather',
          APIKey = '23cea5f070c059e9dfe4160788742b59';

      let entrypoint = `${url}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${APIKey}`;

      this.setState({
        accuracy: position.coords.accuracy.toFixed(0),
      });

      axios.get(entrypoint).then(res => {
        this.setState(
            {weatherIcon: `https://openweathermap.org/img/w/${res.data.weather[0].icon}.png`});
        this.getWeather(res.data.name,
            parseFloat(res.data.main.temp - 273.15).toFixed(1),
            res.data.main.humidity, res.data.main.pressure * 0.75,
            res.data.clouds.all);
      });
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(makeRequest);
    } else {
      alert('Geolocation is not supported by this browser.');
    }
    this.setState({loader: 'none'});

  };

  getWeather(city, temp, humidity, pressure, clouds) {
    this.setState({
      city: city,
      temperature: temp,
      humidity: humidity,
      pressure: pressure,
      clouds: clouds,
    });
  };

  weatherUpdate(timeout) {
    setInterval(() => {
      this.getCoordinates();
    }, timeout);
  };

  componentDidMount() {
    this.getCoordinates();
    this.weatherUpdate(1800000);
  }

  render() {
    return (
        <div className="weather-info">
          <div className="weather-city-name">
            <div className="weather-icon">
              <img src={this.state.weatherIcon} alt="weather icon"/>
            </div>
            {this.state.city} <span
              className="value"> (~ {this.state.accuracy} m.)</span>
          </div>
          <div className="weather-values">
            <div className="weather__temperature">
              <span className="value"> {this.state.temperature} °C </span>
              <span className="text-label">Temperature️ </span>
            </div>
            <div className="weather__humidity">
              <span className="value"> {this.state.humidity} % </span>
              <span className="text-label">Humidity </span>
            </div>
            <div className="weather__pressure">
										<span className="value"> {this.state.pressure}
                      <span className="value-small">mmHg</span>
										</span>
              <span className="text-label">Pressure </span>
            </div>
            <div className="weather__clouds">
              <span className="value"> {this.state.clouds} % </span>
              <span className="text-label">Clouds </span>
            </div>
          </div>
        </div>
    );
  }
}

export default Weather;
