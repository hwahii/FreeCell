import React from 'react';
import './Game.css';
import KingHappyImg from '../img/king_happy.png';

class Game extends React.Component {
	render() {
		return (
			<div className="game-container">
				<div className="game-margins" />
				<div className="game-box">
					<div className="game-box-margin-top"></div>
					<div className="game-box-top-row">
						<div className="game-box-top-row-side">
							<div className="empty-slot"></div>
							<div className="empty-slot"></div>
							<div className="empty-slot"></div>
							<div className="empty-slot"></div>
						</div>
						<div className="game-box-top-row-center">
							<img className="game-king-img" src={KingHappyImg} alt="freecell" />
							<div className="game-name">FREECELL</div>
						</div>
						<div className="game-box-top-row-side">
							<div className="fill-slot"></div>
							<div className="fill-slot"></div>
							<div className="fill-slot"></div>
							<div className="fill-slot"></div>
						</div>
					</div>
					<div className="game-box-top-bottom-margin"></div>
					<div className="game-box-bottom-row"></div>
				</div>
				<div className="game-margins" />
			</div>
		);
	}
}
export default Game;