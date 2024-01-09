import { useState, useEffect } from 'react'
import './App.css'

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

	function shuffleCharacters() {
		for (let i = characters.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[characters[i], characters[j]] = [characters[j], characters[i]];
		}
	}

	return (
		<>
			
		</>
	)
}

export default App
