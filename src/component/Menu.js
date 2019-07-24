import React from 'react';
import './Menu.css';
import icon from '../img/info.png';

class Menu extends React.Component {
	render() {
		return (
			<div className="menu-container">
				<div className="menu-margins" />
				<div className="menu-box">
					<div className="menu-left">
						<div className="menu-icon-circle">
							<img className="menu-icon" src={icon} alt="icon"></img>
						</div>
						<div className="menu-text">TIME: 00:00</div>
						<div className="menu-text">SCORE: 0</div>
					</div>
					<div className="menu-right">
						<button className="menu-btn">NEW GAME</button>
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