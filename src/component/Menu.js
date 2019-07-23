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
						<div className="menu-btn">NEW GAME</div>
						<div className="menu-btn">RESTART</div>
						<div className="menu-btn">HINT</div>
						<div className="menu-btn">UNDO</div>
					</div>
				</div>
				<div className="menu-margins" />
			</div>
		);
	}
}
export default Menu;