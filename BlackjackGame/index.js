let player = {
    name: "Per",
    chips: 200
}

player.sayHello();

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let startBtn = document.getElementById('startBtn-el');
let messageEl = document.getElementById('message-el');
let summEl = document.getElementById('summ-el');
let cardsEl = document.getElementById('cards-el');
let newCardEl = document.getElementById('newCard-el');
let playerEl = document.getElementById('player-el');

playerEl.textContent = player.name + ": $" + player.chips;

// random int function
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13 + 1);
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    hasBlackJack = false;
   
          // get random cards
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}


function renderGame() {
        //cards visible
    cardsEl.textContent = `Cards are: `;

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
        
    //render out the cards
    summEl.textContent = "Sum: " + sum;

    // wining logic
    if (sum < 21) {
        message = "Do you whant to draw enother card?";
    } else if (sum === 21) {
        hasBlackJack = true;
        message = "You win!";
    } else {
        message = "You lose!";
        isAlive = false;
    };
    messageEl.textContent = message;
}


function newCard() {

    if (isAlive === true && hasBlackJack === false) {
        summEl.textContent = "Sum: " + sum;
        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
        renderGame();
    }

}





