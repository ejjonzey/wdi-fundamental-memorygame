var cards = ["King", "King", "Queen", "Queen"];
var cardsInPlay = [];
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
};
var flipCard = function(cardId) {
console.log("user flipped " + cards[cardId]);
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else if (cardsInPlay[0] !== cardsInPlay[1]) {
		alert("Sorry, try again");
	}
}
};
flipCard(0);
flipCard(1);
checkForMatch();
