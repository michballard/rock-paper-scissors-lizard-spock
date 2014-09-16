function Game(player1, player2) {
	this.player1 = player1;
	this.player2 = player2;
}

// Version 1

// Game.prototype.PAIRS = {
// 	rock: {crushes: 'scissors', smashes: 'lizard'},
// 	paper: {covers: 'rock', disproves: 'spock'},
// 	scissors: {cuts: 'paper', decapitates: 'lizard'},
// 	lizard: {eats: 'paper', poisons: 'spock'},
// 	spock: {bends: 'scissors', vapourises: 'rock'}
// };

// Game.prototype._checkVerb = ['crushes', 'smashes', 'covers', 'disproves', 'cuts', 'decapitates', 'eats', 'poisons', 'bends', 'vapourises'];

// Game.prototype.winner = function() {
// 	var game = this;
// 	if(this._isSamePick()) return null;
// 	var p1Wins = false;
// 	this._checkVerb.forEach(function(verb) {
// 		if(game.PAIRS[game.player1.pick][verb] === game.player2.pick) {
// 			p1Wins = game.player1;
// 		}
// 	});
// 		return p1Wins || this.player2;
// };

// Game.prototype.loser = function() {
// 	if( this.winner() === this.player1 ) {
// 		return this.player2;
// 	} else {
// 		return this.player1;
// 	}
// };

// Game.prototype._isSamePick = function() {
// 	return this.player1.pick === this.player2.pick;
// };

// Version 2

// Game.prototype.PAIRS = {
// 	rock: {beats: ['scissors', 'lizard']}, 
// 	paper: {beats: ['rock', 'spock']}, 
// 	scissors: {beats: ['paper', 'lizard']},
// 	lizard: {beats: ['paper', 'spock']},
// 	spock: {beats: ['scissors', 'rock']}
// }

// Game.prototype.winner = function() {
// 	if(this._isSamePick()) return null; 
// 	if(this.PAIRS[this.player1.pick]['beats'].indexOf(this.player2.pick) > -1) {
// 		return this.player1;	
// 	} else {
// 		return this.player2;
// 	}
// }

// Game.prototype._isSamePick = function() {
// 	return this.player1.pick === this.player2.pick
// }

// Version 3

Game.prototype.PAIRS = {
	rock: {scissors: 'crushes', lizard: 'smashes'},
	paper: {rock: 'covers', spock: 'disproves'},
	scissors: {paper: 'cuts', lizard: 'decapitates'},
	lizard: {paper: 'eats', spock: 'poisons'},
	spock: {scissors: 'bends', rock: 'vapourises'}
};

Game.prototype.winner = function() {
	if(this._isSamePick()) return null;
	if(this._victoryVerbFor(this.player1.pick, this.player2.pick)) {
		return this.player1;
	}
	else {
		return this.player2;
	}
};

Game.prototype.loser = function() {
	if( this.winner() === this.player1 ) {
		return this.player2;
	} else {
		return this.player1;
	}
};

Game.prototype._victoryVerbFor = function(pick, opponentPick) {
	return this.PAIRS[pick][opponentPick];
};

Game.prototype._isSamePick = function() {
	return this.player1.pick === this.player2.pick;
};

Game.prototype.winningMessage = function() {
	var message;
	if( this.winner() === null ) {
		message = "Draw";
		return message;
	} 
	else {
		var verb = this.PAIRS[this.winner().pick][this.loser().pick];
		message = this.winner().name + "'s " + this.winner().pick + " " + verb + " " + this.loser().name + "'s " + this.loser().pick;
		return message;
}};

