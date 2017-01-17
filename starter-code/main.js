console.log("JS file is connected to HTML! Woo!")

// variables to name the playing cards
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*
//compares if 2 cards are equal
if  (cardTwo === cardFour){
	var match = true;
} else {
	var match = false;
}

//alerts whether cards are equal or not
switch (match) {
 case true:
    alert('Your cards match!');
    break;
 case false:
    alert('Better luck next time.');
    break;
 }
 */

//variable to find board div by id
var gameBoard = document.getElementById('game-board');

//create 4 x card divs with 'card' class name
var createCards = function() {
	for (var i = 0; i <= 3; i++) {
		var cards = document.createElement('div');
		cards.className = 'card';
		document.querySelector('div').appendChild(cards);
	}
}
createCards();


