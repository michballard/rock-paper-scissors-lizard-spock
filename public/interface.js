$(document).ready(function(){

	var player1 = new Player('Player 1');
	var player2 = new Player('Player 2');
	var game = new Game(player1, player2);

	$('.choices img').on('click', function(){
		player1.picks($(this).data('pick'));
		var options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
		var player2pick = options[Math.floor(Math.random() * options.length)];
		player2.picks(player2pick);
		
		$("<li>" + game.winningMessage() + "</li>").prependTo('#results').slideDown();
		$("#results li:gt(3)").fadeOut(function(){
			$(this).remove();
		});

	});
});