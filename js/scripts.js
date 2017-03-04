var newGameBtn = document.getElementById('js-newGameButton'),
	newGameElem = document.getElementById('js-newGameElement'),
	pickElem = document.getElementById('js-playerPickElement'),
	resultsElem = document.getElementById('js-resultsTableElement');

newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock'),
	pickPaper = document.getElementById('js-playerPick_paper'),
	pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { playerPick('rock'); });
pickPaper.addEventListener('click' , function () { playerPick('paper'); });
pickScissors.addEventListener('click', function() { playerPick('scissors'); });

// Game Logic

var gameState = 'notStarted',
	player = {
		name: '',
		score: 0
	},
	computer = {
		score: 0
	};

function setGameElements () {
	switch(gameState) {
		case 'started':
			newGameElem.style.display = 'none';
			pickElem.style.display = 'block';
			resultsElem.style.display = 'block';
		break;
		case 'ended':
			newGameBtn.innerText = 'One more time';
		case 'notStarted':
		default:
			newGameElem.style.display = 'block';
			pickElem.style.display = 'none';
			resultsElem.style.display = 'none';
	}
}
setGameElements();

var playerPointsElem = document.getElementById('js-playerPoints'),
	playerNameElem = document.getElementById('js-playerName'),
	computerPointsElem = document.getElementById('js-computerPoints');
	
function newGame() {
	player.name = prompt('Type Your name');
	if (player.name) {
		player.score = computer.score = 0;
		gameState = 'started';
		setGameElements();

		playerNameElem.innerHTML = player.name;
		setGamePoints();
	}
}

function playerPick(playerPick) {
	console.log(playerPick);
}

function getComputerPick() {
	var possiblePicks = ['rock', 'paper', 'scissors'];
	return possiblePicks[Math.floor(Math.random()*3)];
}

var playerPickElem = document.getElementById('js-playerPick'),
	computerPickElem = document.getElementById('js-computerPick'),
	playerResultElem = document.getElementById('js-playerResult'),
	computerResultElem = document.getElementById('js-computerResult'),
	gameDrawElem = document.getElementById('js-gameDraw');

function playerPick(playerPick) {
	var computerPick = getComputerPick();

	playerPickElem.innerHTML = playerPick;
	computerPickElem.innerHTML = computerPick;

	checkRoundWinner(playerPick, computerPick);
}

function checkRoundWinner(playerPick, computerPick) {
	playerResultElem.innerHTML = computerResultElem.innerHTML = '';

	var winnerIs = 'player';

		if (playerPick == computerPick) {
			winnerIs = 'none';
			// gameDrawElem.innerHTML = "Draw!";
		}
		else if (
				(computerPick == 'rock' && playerPick == 'scissors') ||
				(computerPick == 'paper' && playerPick == 'rock') ||
				(computerPick == 'scissors' && playerPick == 'paper') ) {

			winnerIs = 'computer';
		}

		if (winnerIs == 'player') {
			playerResultElem.innerHTML = "Win!";
			player.score++;
			console.log(player.score);
		}
		else if (winnerIs == 'computer') {
			computerResultElem.innerHTML = "Win!";
			computer.score++;
			console.log(computer.score);
		}
	setGamePoints();
		
}
function setGamePoints() {
	playerPointsElem.innerHTML = player.score;
	computerPointsElem.innerHTML = computer.score;
	endGame();
}

function endGame() {
	if (player.score > 9 || computer.score > 9) {
			if (player.score > computer.score) {
				alert("Your score: " + player.score + " points!" + " You are like a Neo in Matrix! You really can defeat program");
			}
			else
				alert("You have failed! Your score: " + player.score + " points" + " Program will launch Skynet in 3 seconds...");
		gameState = 'ended';
		setGameElements();
	}
}

