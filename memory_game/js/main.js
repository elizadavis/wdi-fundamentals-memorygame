var cards = ['queen', 'queen', 'king', 'king'];

cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again");
    }
}

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);


