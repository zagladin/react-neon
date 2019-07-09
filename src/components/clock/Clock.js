import React, { Component } from 'react';
import './Clock.scss';

class Clock extends Component {

		constructor(props) {
				super(props);

				this.state = {
						fullDate: '',
						hours: 0,
						minutes: '',
						seconds: '',
				}
		}

		updateDate() {
				let date = new Date(),
					fullDate = date.toLocaleDateString("en-EN", {
							weekday: 'long',
							month: 'long',
							day: 'numeric'
					});
				// navigator.language === "ru-RU" ? fullDate = date.toLocaleDateString("ru-RU", {
				// 		day: 'numeric',
				// 		month: 'long',
				// 		weekday: 'long'
				// }) : fullDate = date.toLocaleDateString("en-EN", {
				// 		weekday: 'long',
				// 		month: 'long',
				// 		day: 'numeric'
				// });
				this.setState({
						fullDate: fullDate
				});
		}

		updateTime() {
				let date = new Date(),
					minutes = date.getMinutes(),
					seconds = date.getSeconds();

				if (minutes < 10) {
						minutes = '0' + minutes.toString();
				}
				if (seconds < 10) {
						seconds = '0' + seconds.toString();
				}

				this.setState({
						hours: date.getHours(),
						minutes: minutes,
						seconds: seconds,
				});
		}

		currentTime() {
				this.updateDate();
				this.updateTime();
				this.timerID = setInterval(() => this.updateTime());
		}

		componentDidMount() {
				this.currentTime();
		}

		componentWillUnmount() {
				clearInterval(this.timerID);
		}

		render() {

				return (
					<div className="timedate">
						<div className="caption">
							Today is
						</div>
						<div className="full-date">{this.state.fullDate}</div>
						<hr/>
						<div className="time">
							<div className="hours">{this.state.hours}</div>
							<div className="minutes">{this.state.minutes}</div>
							<div className="seconds">{this.state.seconds}</div>
						</div>
					</div>
				)
		}
}

export default Clock;
