/* creating the sections that will be interchangable */
const menu = document.getElementById("menu");
const rulesSection = document.getElementById("rules-section");
const gameSection = document.getElementById("game-section");
const oddEvenSection = document.getElementById("odd-even-container");
const wagerSection = document.getElementById("wager-container");

// Set variables to various buttons

const evenButton = document.getElementById("even-button");
const oddButton = document.getElementById("odd-button");
const quitButton = document.getElementById("quit-button");
const startButton = document.getElementById("start-button");
const closeRulesButton = document.getElementById("rules-close");
const openRulesButton = document.getElementById("rules-open");

// Score
let playerMarblesCounter = document.getElementById("player-marble");
let computerMarblesCounter = document.getElementById("computer-marble");

// Status Message
let playerStatus = document.getElementById("player-status");

// Game stats
let playerTurn = true;
let playerOE;
let playerWager;
let playerMarbles;
let computerMarbles;

/* Event listeners */
openRulesButton.addEventListener("click", openRules);

closeRulesButton.addEventListener("click", closeRules);

startButton.addEventListener("click", startGame);

quitButton.addEventListener("click", quitGame);

// Event listener to give value of wager to a variable and call a function 
let wagerButtons = document.getElementsByClassName("wager-button");
    for (button of wagerButtons) {
        button.addEventListener("click", function() {
            wager = parseInt(this.value);
            handleWager(wager);
        });
    }

// Event listener for OE buttons to call a function
oddButton.addEventListener("click", function() {
        handleOE("odd");
    });

evenButton.addEventListener("click", function() {
        handleOE("even");
    });

/* Open and close rules section by toggling display:none to display:flex */
function openRules(event) {
    rulesSection.style.display = "flex";
}

function closeRules(event) {
    rulesSection.style.display = "none";
}

/* Quit button returns to the Menu */

function quitGame(event) {

    gameSection.style.display = "none";
    menu.style.display = "flex";

}

// Switch turn between true and false
function switchTurn () {
    playerTurn = !playerTurn;
}

// Function to handle the player's choice on it's turn
function handleOE(oe) {
    playerOE = oe;
    hideOE();
    showWager();
}

function handleWager (wager) {
    playerWager = wager;
    hideWager();
    compareOE();
}

// Function to roll computer OE, compare with the player and repeat the game cycle

function compareOE() {

    let randomNumber = Math.floor(Math.random*4) + 1;
    computerOE = randomNumber === 1 || randomNumber === 3 ? "odd" : "even";

    let playerWins = playerOE === computerOE;

    if (playerWins) {

        playerMarbles += playerWager;
        computerMarbles -= playerWager;
        playerStatus.innerHTML = "<p>You <span class='hider'>Win!</span></p>";

    } else {

        playerMarbles -= playerWager;
        computerMarbles += playerWager;
        playerStatus.innerHTML = "<p>You <span class='guesser'>Lost!</span></p>";

    }

    playerMarblesCounter.textContent = playerMarbles;
    computerMarblesCounter.textContent = computerMarbles;

    setTimeout(function() {
        
        switchTurn();
        if (playerTurn) {
          showOE();
        } else {
          showOE();
        }
      }, 3000);
    }

// Functions to either show or hide OE and wager buttons

function showOE() {
    oddEvenSection.style.display = "flex";
}

function hideOE() {
    oddEvenSection.style.display = "none";
}

function showWager() {
    wagerSection.style.display = "flex";
}

function hideWager() {
    wagerSection.style.display = "none";
}

// Function to tell the player what turn it is to guess or hide
function playerGuesser() {
    playerStatus.innerHTML = "<p>You are the <span class='guesser'>Guesser!</span></p>";
}

/* Start Button removes Menu and toggles Game screen */

function startGame(event) {

    menu.style.display = "none";
    gameSection.style.display = "flex";

    playerMarbles = 10;
    computerMarbles = 10;
    
    playerMarblesCounter.textContent = playerMarbles;
    computerMarblesCounter.textContent = computerMarbles;
    
    playgame();
}

function playgame() {
    if (playerTurn) {
        playerGuesser();
        showOE();
    }
}
