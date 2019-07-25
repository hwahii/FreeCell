import React from 'react';
import './Menu.css';
import icon from '../img/info.png';

class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.startTimer = this.startTimer.bind(this);
		this.stopTimer = this.stopTimer.bind(this);
		this.resetTimer = this.resetTimer.bind(this);
		this.state = {
			time: 0,
			isOn: false,
			start: 0
		};
	}

	startTimer() {
		if (this.state.isOn === false) {
			this.setState({
				isOn: true,
				time: this.state.time,
				start: Date.now() - this.state.time
			});
			this.timer = setInterval(() => this.setState({
				time: Date.now() - this.state.start
			}), 1000);
		}
	}
	stopTimer() {
		this.setState({ isOn: false });
		clearInterval(this.timer);
	}
	resetTimer() {
		this.setState({ time: 0, isOn: false });
	}
	render() {
		return (
			<div className="menu-container">
				<div className="menu-margins" />
				<div className="menu-box">
					<div className="menu-left">
						<div className="menu-icon-circle">
							<img className="menu-icon" src={icon} alt="icon"></img>
						</div>
						<div className="menu-text">TIME: {new Intl.DateTimeFormat('zh-TW', {
							minute: '2-digit',
							second: '2-digit'
						}).format(this.state.time)}</div>
						<div className="menu-text">SCORE: 0</div>
					</div>
					<div className="menu-right">
						<button className="menu-btn" onClick={this.startTimer}>NEW GAME</button>
						<button className="menu-btn">RESTART</button>
						<button className="menu-btn">HINT</button>
						<button className="menu-btn">UNDO</button>
					</div>
				</div>
				<div className="menu-margins" />
			</div>
		);
	}
}
export default Menu;