import React from 'react';
import './Game.css';
import S1 from '../img/cards_background/S1.png';
import S2 from '../img/cards_background/S2.png';
import S3 from '../img/cards_background/S3.png';
import S4 from '../img/cards_background/S4.png';
import S5 from '../img/cards_background/S5.png';
import S6 from '../img/cards_background/S6.png';
import S7 from '../img/cards_background/S7.png';
import S8 from '../img/cards_background/S8.png';
import S9 from '../img/cards_background/S9.png';
import S10 from '../img/cards_background/S10.png';
import S11 from '../img/cards_background/S11.png';
import S12 from '../img/cards_background/S12.png';
import S13 from '../img/cards_background/S13.png';
import H1 from '../img/cards_background/H1.png';
import H2 from '../img/cards_background/H2.png';
import H3 from '../img/cards_background/H3.png';
import H4 from '../img/cards_background/H4.png';
import H5 from '../img/cards_background/H5.png';
import H6 from '../img/cards_background/H6.png';
import H7 from '../img/cards_background/H7.png';
import H8 from '../img/cards_background/H8.png';
import H9 from '../img/cards_background/H9.png';
import H10 from '../img/cards_background/H10.png';
import H11 from '../img/cards_background/H11.png';
import H12 from '../img/cards_background/H12.png';
import H13 from '../img/cards_background/H13.png';
import D1 from '../img/cards_background/D1.png';
import D2 from '../img/cards_background/D2.png';
import D3 from '../img/cards_background/D3.png';
import D4 from '../img/cards_background/D4.png';
import D5 from '../img/cards_background/D5.png';
import D6 from '../img/cards_background/D6.png';
import D7 from '../img/cards_background/D7.png';
import D8 from '../img/cards_background/D8.png';
import D9 from '../img/cards_background/D9.png';
import D10 from '../img/cards_background/D10.png';
import D11 from '../img/cards_background/D11.png';
import D12 from '../img/cards_background/D12.png';
import D13 from '../img/cards_background/D13.png';
import C1 from '../img/cards_background/C1.png';
import C2 from '../img/cards_background/C2.png';
import C3 from '../img/cards_background/C3.png';
import C4 from '../img/cards_background/C4.png';
import C5 from '../img/cards_background/C5.png';
import C6 from '../img/cards_background/C6.png';
import C7 from '../img/cards_background/C7.png';
import C8 from '../img/cards_background/C8.png';
import C9 from '../img/cards_background/C9.png';
import C10 from '../img/cards_background/C10.png';
import C11 from '../img/cards_background/C11.png';
import C12 from '../img/cards_background/C12.png';
import C13 from '../img/cards_background/C13.png';

function covertNumToSuit(num) {
	switch (num) {
	case 1:
		return S1;
	case 2:
		return S2;
	case 3:
		return S3;
	case 4:
		return S4;
	case 5:
		return S5;
	case 6:
		return S6;
	case 7:
		return S7;
	case 8:
		return S8;
	case 9:
		return S9;
	case 10:
		return S10;
	case 11:
		return S11;
	case 12:
		return S12;
	case 13:
		return S13;
	case 14:
		return H1;
	case 15:
		return H2;
	case 16:
		return H3;
	case 17:
		return H4;
	case 18:
		return H5;
	case 19:
		return H6;
	case 20:
		return H7;
	case 21:
		return H8;
	case 22:
		return H9;
	case 23:
		return H10;
	case 24:
		return H11;
	case 25:
		return H12;
	case 26:
		return H13;
	case 27:
		return D1;
	case 28:
		return D2;
	case 29:
		return D3;
	case 30:
		return D4;
	case 31:
		return D5;
	case 32:
		return D6;
	case 33:
		return D7;
	case 34:
		return D8;
	case 35:
		return D9;
	case 36:
		return D10;
	case 37:
		return D11;
	case 38:
		return D12;
	case 39:
		return D13;
	case 40:
		return C1;
	case 41:
		return C2;
	case 42:
		return C3;
	case 43:
		return C4;
	case 44:
		return C5;
	case 45:
		return C6;
	case 46:
		return C7;
	case 47:
		return C8;
	case 48:
		return C9;
	case 49:
		return C10;
	case 50:
		return C11;
	case 51:
		return C12;
	case 52:
		return C13;
	default:
		return 'None';
	}

}

class CardStack extends React.Component {
	render() {
		const cards = this.props.cards;
		return (
			<div className="card-stack">
				{cards.map((p, i) => {
					return (
						<div className="hidden-slot" key={i}><img className="card-size" src={covertNumToSuit(p)} alt="card" /></div>
					);
				})}
			</div>
		);
	}
}
export default CardStack;