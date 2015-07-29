

// create mongo collection for games
games = new Mongo.Collection('games');


// example document
exampleGame = {
	name: 'a game',
	created: new Date(),

	playerA: {
		id: null,
		score: 0,
		position: 0
	},

	playerB: {
		id: null,
		score: 0,
		position: 0
	},

	ball: {
		x: 0,
		y: 0
	}
}

