let prsiGame = {
    you: {
        scoreSpan: "your-prsi-result",
        div: "#your-box",
        boxSize: "flex-prsi-row-2 div",
        score: 0,
    },
    computer: {
        scoreSpan: "computer-prsi-result",
        div: "#computer-box",
        boxSize: "flex-prsi-row-2 div",
        score: 0,
    },
    cardSuit: ["žaludy", "listy", "kule", "srdce"],
    cardValue: ["eso", "7", "8", "9", "10", "spodek", "svršek", "král"],
    cardsMap: {
        eso: [5, 16, 20, 31],
        7: [4, 14, 18, 26],
        8: [3, 15, 19, 32],
        9: [2, 17, 21, 33],
        10: [8, 10, 23, 30],
        spodek: [6, 12, 24, 28],
        svršek: [7, 13, 25, 27],
        král: [9, 11, 22, 29],
    },


    wins: 0,
    losses: 0,
    isDeal: false, //has person pressed Deal
    isOver: false, //has pc finished dealing cards
    gameInAction: false, //prevents person from pressing deal while game is on
};
//CONSTRUCTOR/////////////////////////////////////////////////////////////
class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards;
    }
    get numberOfCards() {
        return this.cards.length;
    }
    shuffle() {
        for (let i = this.numberOfCards - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1));
            const oldValue = this.cards[newIndex];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldValue;
        }
    }
}
class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

const SUIT = prsiGame.cardSuit;
const VALUE = prsiGame.cardValue;
const deck = new Deck();
console.log(deck);
let singleRandom = new Deck(deck.cards[Math.floor(Math.random() * 32)])
let playerDeck = new Deck(deck.cards.slice(0, 4));
console.log(playerDeck)
let computerDeck = new Deck(deck.cards.slice(5, 9));
const YOU = prsiGame["you"];
const COMPUTER = prsiGame["computer"];
let winner; //store the winner of the game
const dots = document.querySelectorAll(".dot");

const drawTwo = document.getElementById('prsi-draw-2-btn').addEventListener('click', drawCard)
document.querySelector("#prsi-play-btn").addEventListener("click", dealCards);

function freshDeck() {
    return SUIT.flatMap((suit) => {
        return VALUE.map((value) => {
            return new Card(suit, value);
        });
    });
}

deck.shuffle();


//console.log(deck)
//CONSTRUCTOR FINISHED//////////////////////////////////////////////



function dealCards() {
    if (prsiGame["isOver"] === false) {
        let player = playerDeck;
        let comp = computerDeck;
        //console.log(playerDeck, computerDeck)
        let card = randomCard();
        //let card = randomCard(); //we need to give each player 4 cards
        showCard(card, YOU);
    }
}



function randomCard() {
    deck.shuffle();
    //return prsiGame["cards"]
}
function showCard(card, activePlayer) {
    //console.log(playerDeck.cards, "hello world");
    let card1 = document.querySelector("#img0");
    let card2 = document.querySelector("#img1");
    let card3 = document.querySelector("#img2");
    let card4 = document.querySelector("#img3");
    let backCard = document.querySelector('#backImg');
    let starterCard = document.querySelector('#startingCard')



    if (activePlayer["score"] === 0) {

        card1.src = `photo/${playerDeck.cards[0].suit}/${playerDeck.cards[0].value}.png`;
        card2.src = `photo/${playerDeck.cards[1].suit}/${playerDeck.cards[1].value}.png`;
        card3.src = `photo/${playerDeck.cards[2].suit}/${playerDeck.cards[2].value}.png`;
        card4.src = `photo/${playerDeck.cards[3].suit}/${playerDeck.cards[3].value}.png`;

        backCard.style.visibility = 'hidden';
        starterCard.src = `photo/${singleRandom.cards.suit}/${singleRandom.cards.value}.png`;
        //console.log(random)
        updateScore(card, YOU)
    }
}

//how to click on each card to add/select card to play

for (let i = 0; i < dots.length; i++) {
    let starterCard = document.querySelector('#startingCard')

    // const appended = document.querySelector('.appending-card')
    dots[i].addEventListener("click", function () {
        let index = i ;

        dots[i].style.visibility = 'hidden';

        starterCard.src = dots[i].src

        //document.getElementById('startingCard').src = `photo/${playerDeck.cards[dots[i]].suit}/${playerDeck.cards[dots[i]].value}.png`;
        //appendChild(dots[i]) HOW TO MOVE CARD TO START AREA (IN THE MIDDLE)

    })
}




function drawCard() {
    let card1 = [];
    if (deck.cards.length > 0) {
        card1 = deck.cards.splice(singleRandom, 2)[0], [1];
    }
    //console.log(card1, "hellow");
}


function drawTwoCards() {
    if (activePlayer['7']) { //if activePlayer gets 7 
        console.log("draw 2 cards"); //game should add 2 cards to that player.
    }
}

function isEso() {
    if (cardValue[eso]) {
        console.log("skip turn"); //this player skips a turn
    }
}

function changeSymbol() {
    if (cardValue[svršek]) {
        console.log("click button to change suit/symbol for the game"); //player clicks a button suit of their choice and starter card now changes to the new suit and next player starts with that suit unless they also have a chnageSymbol card
    }
}

function win() {
    if (activePlayer['score'] === 0) {
        console.log('YOU WIN')
    } else {
        console.log('YOU LOSE')
    }
}

function matchingConditions() {
    if (
        cardSuit[žaludy] === "žaludy" || //if zaludy == zaludy playerUp plays again
        cardSuit[listy] || //if listy == listy playerUp plays again
        cardSuit[kule] ||
        cardSuit[srdce]
    ) {
        console.log("you matched suits or values");
    }
    //SAME FOR VALUES
    //SAME FOR VALUES
    //SAME FOR VALUES
    //SAME FOR VALUES
    //SAME FOR VALUES
    //SAME FOR VALUES
}

function updateScore(card, activePlayer) {
    let yourCards = document.querySelector("#your-prsi-result")
    if (activePlayer['score'] === 0) {
        yourCards.textContent = playerDeck.cards.length
    }
}