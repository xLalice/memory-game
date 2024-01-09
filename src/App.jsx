import { useState, useEffect } from 'react'
import logo from "./assets/logo.png";
import './App.css'
import Card from './Card';

function App() {
	const [characters, setCharacters] = useState([
		'Walter White',
		'Jesse Pinkman',
		'Skyler White',
		'Hank Schrader',
		'Saul Goodman',
		'Gus Fring',
		'Mike Ehrmantraut',
		'Walter White Jr.',
		'Jane Margolis',
		'Tuco Salamanca',
		'Gale Boetticher',
		'Lydia Rodarte-Quayle',
		'Hector Salamanca',
		'Marie Schrader',
		'Skinny Pete'
	]);
	const [score, setScore] = useState(0);
	const [highscore, setHighscore] = useState(0);
	const [cards, setCards] = useState([])

	useEffect(() => {
		shuffleCharacters()
		initializeCards()
	}, [])

	function initializeCards() {
		const initialCards = characters.slice(0, 5);
	
		setCards(initialCards);
	}

	function shuffleCharacters() {
		let newArray = [...characters]
		for (let i = newArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
		}

		setCharacters(newArray);
	}

	

	return (
		<>
			<img src={logo} alt="Breaking Bad"/>
			<div className="counter">
				<h1>Score: {score}</h1>
				<h1>Highscore: {highscore}</h1>
			</div>
			<div className="container">
				{cards.map((item, index) => {
					return (<Card
						key={index}
						name={item}
					/>	)
				})}
			</div>


			
		</>
	)
}

export default App
