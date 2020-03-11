import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

	const [ personsState, setPersonsState ] = useState({
		persons: [
			{ name: 'Jane', age: 22 },
			{ name: 'Mark', age: 8 },
			{ name: 'Patricia', age: 43 }
		],
		otherState: 'Some other value'
	});

	switchNameHandler = (newName) => {
		console.log('Was CLicked !');
		setPersonsState({
			persons: [
				{ name: newName, age: 22 },
				{ name: 'Mark', age: 100 },
				{ name: 'Philippe', age: 43 }
			],
			otherState: personsState.otherState
		});
	};

	return (
		<div className="App">
			<h1>HELLO</h1>
			<button onClick={this.switchNameHandler.bind(this)}>Switch Name</button>
			<Person 
				name={personsState.persons[0].name} 
				age={personsState.persons[0].age}
			/>
			<Person 
				name={personsState.persons[1].name} 
				age={personsState.persons[1].age}
				click={this.switchNameHandler}
			/>
			<Person 
				name={personsState.persons[2].name} 
				age={personsState.persons[2].age}
			/>
		</div>
	);
}

export default App;


// state = {
// 	persons: [
// 		{ name: 'Jane', age: 22 },
// 		{ name: 'Mark', age: 8 },
// 		{ name: 'Patricia', age: 43 }
// 	],
// 	otherState: 'some other value'
// }

// switchNameHandler = () => {
// 	console.log('Was CLicked !');
// 	this.setState({persons: [
// 		{ name: 'Louis', age: 22 },
// 		{ name: 'Mark', age: 100 },
// 		{ name: 'Philippe', age: 43 }
// 		]
// 	})
// }