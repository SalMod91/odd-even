/* creating the sections that will be interchangable */

const menu = document.getElementById("menu");
const rulesSection = document.getElementById("rules-section");
const gameSection = document.getElementById("game-section");
const oddEvenSection = document.getElementById("odd-even-container");
const wagerSection = document.getElementById("wager-container");
const playerMarbles = document.getElementById("player-marble");
const computerMarbles = document.getElementById("computer-marble");
const playerStatus = document.getElementById("player-status");

let playerTurn = true;

/* Event listeners */

let openRulesButton = document.getElementById("rules-open");
openRulesButton.addEventListener("click", openRules);

let closeRulesButton = document.getElementById("rules-close");
closeRulesButton.addEventListener("click", closeRules);

let startButton = document.getElementById("start-button");
startButton.addEventListener("click", startGame);

let quitButton = document.getElementById("quit-button");
quitButton.addEventListener("click", quitGame);

let oddButton = document.getElementById("odd-button");
oddButton.addEventListener("click", chooseOdd);

let evenButton = document.getElementById("even-button");
evenButton.addEventListener("click", chooseEven);

let wagerButtons = document.getElementsByClassName("wager-button");
    for (button of wagerButtons) {
        button.addEventListener("click", chooseWager);
    }

/* Open and close rules section by toggling display:none to display:flex */

function openRules(event) {

    rulesSection.style.display = "flex";
}

function closeRules(event) {

    rulesSection.style.display = "none";
}

/* Start Button removes Menu and toggles Game screen */

function startGame(event) {

    menu.style.display = "none";
    gameSection.style.display = "flex";

    playerMarbles.textContent = 10;
    computerMarbles.textContent = 10;

    while (playerMarbles > 0 && playerMarbles <20) {
        if (playerTurn) {

            switchTurn();
        } else {
            switchTurn();
        }
    }
}

/* Quit button returns to the Menu */

function quitGame(event) {

    gameSection.style.display = "none";
    menu.style.display = "flex";

}

function chooseWager (event) {
    let selectedWager = parseInt(this.getAttribute("data-value"));
}

// Switch turn between true and false
function switchTurn () {
    playerTurn = !playerTurn;
}

// Updates marbles counter
function updateMarblesDisplay() {
    playerMarbles.textContent = playerMarbles;
    computerMarbles.textContent = computerMarbles;
}

function OEButtons () {
    oddEvenSection.style.display = "flex";
}

function wagerButtons () {
    wagerSection.style.display = "flex";
}