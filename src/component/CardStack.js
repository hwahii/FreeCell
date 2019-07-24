import React from 'react';
import './Game.css';
import Card from './Card';

class CardStack extends React.Component {
	render() {
		const cards = this.props.cards;
		return (
			<div className="card-stack">
				{cards.map((p, i) => {
					if (p !== 0) {
						return (
							<div className="hidden-slot" key={i}><Card num={p} /></div>
						);
					} else {
						return (
							<div className="hidden-slot" key={i}></div>
						);
					}
				})}
			</div>
		);
	}
}
export default CardStack;