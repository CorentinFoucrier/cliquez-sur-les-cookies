var score = 0;
var multiplicateur = 1;
var coutMultiplier = 50;
var timer = 30;
var bonusActif = false;
var autoclickActif = false;
var bonus;
var intervalID;
var intervalID2;

function afficherScore() {
	document.getElementById('score').innerHTML = score;
}

function ajouterCookies() {
	if (bonusActif == true) {
		bonus = (multiplicateur*200)/100;
		score += multiplicateur + bonus;
	} else {
		score += multiplicateur;
	}
	afficherScore();
	activationBoutons();
}

function augmenterMultiplicateur() {
	if (score >= coutMultiplier) {
		multiplicateur++;
		score -= coutMultiplier;
		coutMultiplier *= 2;
		document.getElementById('multiplicateur').innerHTML = 'Multiplier x'+multiplicateur+ '<br />Coût: '+coutMultiplier;
		afficherScore();
		activationBoutons();
	}
}

function activationBoutons() {
	if (score >= coutMultiplier) {
		document.getElementById('multiplicateur').disabled = false;
	} else {
		document.getElementById('multiplicateur').disabled = true;
	}
	if ((score >= 500) && (autoclickActif === false)) {
		document.getElementById('autoclick').disabled = false;
	} else {
		document.getElementById('autoclick').disabled = true;
	}
	if ((score >= 5000) && (bonusActif === false)) {
		document.getElementById('bonus').disabled = false;
	} else {
		document.getElementById('bonus').disabled = true;
	}
}
//autoclick
function achatAutoClick() {
	score -= 500;
	autoclickActif = true;
	afficherScore();
	activationBoutons();
	document.getElementById('autoclick').disabled = true;
	intervalID = setInterval(autoCookies, 1000);
}

function autoCookies() {
	score += 1;
	afficherScore();
	activationBoutons();
}
//bonus
function achatBonus() {
	score -= 5000;
	bonusActif = true;
	afficherScore();
	activationBoutons();
	document.getElementById('bonus').disabled = true;
	intervalID2 = setInterval(bonusTimer, 1000);
}

function bonusTimer() {
	timer -= 1;
	document.getElementById('timer').innerHTML = "("+timer+"sec)";
	if (timer == 0) {
		clearInterval(intervalID2);
		bonusActif = false;
		timer = 30;
		document.getElementById('timer').innerHTML = "("+timer+"sec)";
	}
}