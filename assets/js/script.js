/* creating the sections that will be interchangable */

const menu = document.getElementById("menu");
const rulesSection = document.getElementById("rules-section");
const gameSection = document.getElementById("game-section");

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
}

/* Quit button returns to the Menu */

function quitGame(event) {

    gameSection.style.display = "none";

    menu.style.display = "flex"
}

function chooseEven () {

}

function chooseOdd () {

}

function chooseWager () {
    
}