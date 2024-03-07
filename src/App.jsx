import { useState, useEffect } from 'react';
import './App.scss';
import Card from './Card';
import Confetti from 'react-confetti';
import { useWindowSize } from "@uidotdev/usehooks";

function App() {
	const [characters, setCharacters] = useState([
		'Walter White',
		'Jesse Pinkman',
		'Skyler White',
		'Hank Schrader',
		'Saul Goodman',
		'Gus Fring',
		'Mike Ehrmantraut',
		'Walter White Jr',
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
	const [clickedCharacters, setClickedCharacters] = useState([]);
	const [showConfetti, setShowConfetti] = useState(false);
	const { width, height } = useWindowSize();

	useEffect(() => {
		shuffleCharacters()
	}, [score]);

	// useEffect(() => {
	// 	if (score > highscore) {
	// 		console.log("Score: " + score);
	// 		console.log("Highscore: " + score);
	// 		setHighscore(score);
	// 		if (score === highscore + 1) {
	// 			console.log("SCORE===HIGHSCORE: " + score)
	// 			console.log(highscore);
	// 			setShowConfetti(true);
	// 		}
	// 	}
	// }, [score, highscore]);

	function shuffleCharacters() {
		let newArray = [...characters]
		for (let i = newArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
		}

		setCards(newArray);
	}

	function handleCardClick(hero){
		if (clickedCharacters.includes(hero)) {
			resetScore()
		} else {
			updateScore()
			setClickedCharacters([...clickedCharacters, hero])
		}
	}

	function updateScore() {
		setScore(prevScore => prevScore + 1);
		if (score >= highscore) {
			updateHighscore();
		}
	}

	const updateHighscore = () => {
		setHighscore((previousHighscore) => previousHighscore + 1);
		if (highscore >= 14) {
			setShowConfetti(true);
		}
	}

	function resetScore(){
		setScore(0);
		setClickedCharacters([]);
	}

	return (
		<>
			{showConfetti && <Confetti width={width} height={height} />}
			<div className="counter">
			<img className="logo" src="logo.png" alt="Breaking Bad"/>
			<div>
				<h1>Score: {score}</h1>
				<h1>Highscore: {highscore}</h1>
			</div>
			</div>
			<div className="container">
			{cards.map((item, index) => {
				return (
				<Card
					key={index}
					name={item}
					onClick={handleCardClick}
				/>
				)
			})}
			</div>
			</>

	)
}

export default App;
