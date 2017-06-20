var cards = [
{
rank: "Queen",
suit: "Hearts",
cardImage: "images/queen-of-hearts.png"	
},
{
rank: "Queen",
suit: "Diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "King",
	suit: "Hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "King",
	suit: "Diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [],
cardsInPlay.push(cards[cardId]).rank;
var checkForMatch = function(); {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
};
var flipCard = function[cardId].rank {
console.log("user flipped " + cards[cardId]);
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else if (cardsInPlay[0] !== cardsInPlay[1]) {
		alert("Sorry, try again");
	}
}
checkForMatch();
};
flipCard(0);
flipCard(1);
