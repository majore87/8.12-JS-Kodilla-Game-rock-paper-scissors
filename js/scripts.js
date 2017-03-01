var newGameButton = document.getElementById('js-newGameElement');
newGameButton.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock'),
	pickPaper = document.getElementById('js-playerPick_paper'),
	pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click' , function () { playerPick('paper') });
pickScissors.addEventListener('click', function() {playerScissors('scissors') });

// Game Logic

var gameState = 'notStarted',
	player = {
		name: '',
		score: 0
	},
	computer = {
		score: 0
	};
