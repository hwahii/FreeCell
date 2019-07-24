import React from 'react';
import './Game.css';
import KingHappyImg from '../img/king_happy.png';
import SImg from '../img/S.png';
import HImg from '../img/H.png';
import DImg from '../img/D.png';
import CImg from '../img/C.png';
import CardStack from './CardStack';

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
							<div className="fill-slot"><img className="suit-size" src={SImg} alt="spade" /></div>
							<div className="fill-slot"><img className="suit-size" src={HImg} alt="heart" /></div>
							<div className="fill-slot"><img className="suit-size" src={DImg} alt="diamond" /></div>
							<div className="fill-slot"><img className="suit-size" src={CImg} alt="club" /></div>
						</div>
					</div>
					<div className="game-box-top-bottom-margin"></div>
					<div className="game-box-bottom-row">
						<CardStack cards={[1, 2, 3, 4, 5, 6, 7]} />
						<CardStack cards={[8, 9, 10, 11, 12, 13, 14]} />
						<CardStack cards={[15, 16, 17, 18, 19, 20, 21]} />
						<CardStack cards={[22, 23, 24, 25, 26, 27, 28]} />
						<CardStack cards={[29, 30, 31, 32, 33, 34]} />
						<CardStack cards={[35, 36, 37, 38, 39, 40]} />
						<CardStack cards={[41, 42, 43, 44, 45, 46]} />
						<CardStack cards={[47, 48, 49, 50, 51, 52]} />
					</div>
				</div>
				<div className="game-margins" />
			</div>
		);
	}
}
export default Game;