console.log("JS file is connected to HTML! Woo!")

//array containing card names
var cards = ['queen', 'queen', 'king', 'king'];
//empty array for cards in play
var cardsInPlay = [];

function createBoard(number) {
    console.log(cards);
    for (var i = 0; i < number; i++) {
        //create a new div for each card
        var newCard = document.createElement('div');
        //assign each new div a class of 'card'
        newCard.setAttribute('class', 'card');
        //set each card to be an element of the cards array
        newCard.setAttribute('data-card', cards[i]);
        //add each new card div as a child of the game board div
        document.getElementById('game-board').appendChild(newCard);
        // when a card is clicked the function isTwoCards will be executed
        newCard.addEventListener('click', isTwoCards);
} 
}   
//run createboard function for no. of cards in array (4)
createBoard(cards.length);


//alert function to see if cards match or not
function isMatch(cards) {
	if (cards[0] === cards[1]){
		alert('You got a match!');
	} else {
		alert('Better luck next time.');
	}
}


//check to see if there are 2 cards in play
function isTwoCards() {
  // add card to array of cards in play
  cardsInPlay.push(this.getAttribute('data-card'));
  //put image on cards
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='king.jpg'>";
	} else {
		this.innerHTML = "<img src='queen.jpg'>";
	}
   // if you have two cards in play, check for a match
  if (cardsInPlay.length === 2) {
    // pass the cardsInPlay as an argument to the isMatch function
    isMatch(cardsInPlay);
    // clear cards in play array for your next try
    cardsInPlay = [];
    
    //was trying to clear card images here but couldn't get it working properly
    //console.log(this.getAttribute('data-card'));
    //this.innerHTML = "<img />";
  }
}
