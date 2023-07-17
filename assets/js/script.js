/* creating the sections that will be interchangable */
const menu = document.getElementById("menu");
const rulesSection = document.getElementById("rules-section");
const gameSection = document.getElementById("game-section");
const oddEvenSection = document.getElementById("odd-even-container");
const wagerSection = document.getElementById("wager-container");
const hiderSection = document.getElementById("hider-container");
const wagerButtonContainer = document.getElementById("wager-button-container");
const hiderButtonContainer = document.getElementById("hider-button-container");

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
let playerHideOE;
let playerWager;
let computerWager;
let playerMarbles;
let computerMarbles;

/* Event listeners */
openRulesButton.addEventListener("click", openRules);

closeRulesButton.addEventListener("click", closeRules);

startButton.addEventListener("click", startGame);

quitButton.addEventListener("click", quitGame);

// Event listener to choose how many marbles to hide

    let hiderButtons = document.getElementsByClassName("hider-button");
    for (button of hiderButtons) {
        button.addEventListener("click", function() {
            hide = parseInt(this.value);
            handleHider(hide);
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

function handleWager (selectedWager) {
    playerWager = selectedWager;
    hideWager();
    compareOE();
}

function handleHider (hide) {
    playerHideOE = hide === 1 || hide === 3 ? "odd" : "even";
    hideHider();
    compareHider();
}

// Function to roll computer OE, compare with the player and repeat the game cycle

function compareOE() {

    let computerMarblesLeft = computerMarbles;

    // checking how many marbles the computer has left
    switch (computerMarblesLeft) {
        case 1:
            computerMarblesLeft = 1;
            break;

        case 2:
            computerMarblesLeft = 2;
            break;

        case 3: computerMarblesLeft = 3;
            break;

        default:
            computerMarblesLeft = 4;
            break;
    }

    // This ensures the computer won't hide more marbles than he has left
    let randomNumber = Math.floor(Math.random() * computerMarblesLeft) + 1;
    computerOE = randomNumber === 1 || randomNumber === 3 ? "odd" : "even";

    let playerWins = playerHideOE === computerOE;

    if (playerWins) {

        playerMarbles += playerWager;
        computerMarbles -= playerWager;
        playerStatus.innerHTML = `<p>Computer chose ${computerOE} and you guessed correctly.</p>
        <p>You <span class='hider'>Win!</span></p>`;

    } else {

        playerMarbles -= playerWager;
        computerMarbles += playerWager;
        playerStatus.innerHTML = `<p>Computer chose ${computerOE} and you guessed wrong.</p>
        <p>You <span class='guesser'>Lost!</span></p>`;

    }

    playerMarblesCounter.textContent = playerMarbles;
    computerMarblesCounter.textContent = computerMarbles;

    if (playerMarbles >= 20) {
        victory();
      } else if (playerMarbles <= 0) {
        defeat();
      } else {
        setTimeout(function() {

            switchTurn();
            if (playerTurn) {
            playerGuesser();
            showOE();
            } else {
            playerHider();
            showHider();
            }
        }, 3000);
    }
}

function compareHider() {

    let playerMarblesLeft = playerMarbles;

    // checking how many marbles the player has left in order to make a smarter decision for the next wager
    switch (playerMarblesLeft) {
        case 1:
            playerMarblesLeft = 1;
            break;

        case 2:
            playerMarblesLeft = 2;
            break;

        case 3: playerMarblesLeft = 3;
            break;

        default:
            playerMarblesLeft = 4;
            break;
    }

    // This prevents the computer from wagering more marbles than the player has left
    let randomWager = Math.floor(Math.random() * playerMarblesLeft) + 1;

    // If the player has only 1 marble left to hide the computer will always choose odd, resulting in a win
    let randomNumber = Math.floor(Math.random() * 4) + 1;

    if (playerMarblesLeft > 1) {
        computerOE = randomNumber === 1 || randomNumber === 3 ? "odd" : "even";
    } else computerOE = "odd";

    computerWager = randomWager;

    let playerWins = playerHideOE != computerOE;

    if (playerWins) {

        playerMarbles += computerWager;
        computerMarbles -= computerWager;
        playerStatus.innerHTML = `<p>Computer chose ${computerOE} and wagered ${computerWager}.</p>
        <p>You <span class='hider'>Win!</span></p>`;

    } else {

        playerMarbles -= computerWager;
        computerMarbles += computerWager;
        playerStatus.innerHTML = `<p>Computer chose ${computerOE} and wagered ${computerWager}.</p>
        <p>You <span class='guesser'>Lost!</span></p>`;

    }

    playerMarblesCounter.textContent = playerMarbles;
    computerMarblesCounter.textContent = computerMarbles;

    if (playerMarbles >= 20) {
        victory();
      } else if (playerMarbles <= 0) {
        defeat();
      } else {
        setTimeout(function() {

            switchTurn();
            if (playerTurn) {
            playerGuesser();
            showOE();
            } else {
            playerHider();
            showHider();
            }
        }, 3000);

    }
}

// Function when the player wins

function victory() {
    playerStatus.textContent = "You have won the game!"

    setTimeout(function() {
        quitGame();
    }, 2000);
}

// Function when the player loses

function defeat() {
    playerStatus.textContent = "You have been eliminated"

    setTimeout(function() {
        quitGame();
    }, 2000)
}

// Functions to either show or hide OE and wager buttons

function showOE() {
    oddEvenSection.style.display = "flex";
}

function hideOE() {
    oddEvenSection.style.display = "none";
}

function showWager() {
    wagerButtonContainer.innerHTML = ""; 

    let maxWager = Math.min(playerMarbles, 4)

    for (let wager = 1; wager <= maxWager; wager++) {
        let wagerButton = document.createElement("button");
        wagerButton.classList.add("wager-button");
        wagerButton.value = wager;
        wagerButton.textContent = wager;

        wagerButton.addEventListener("click", function() {
            let selectedWager = parseInt(this.value);
            handleWager(selectedWager);
        });

        wagerButtonContainer.appendChild(wagerButton);
}   

    wagerSection.style.display = "flex";
}

function hideWager() {
    wagerSection.style.display = "none";
}

function showHider() {
    hiderSection.style.display = "flex"
}

function hideHider() {
    hiderSection.style.display = "none"
}

// Function to tell the player what turn it is to guess or hide
function playerGuesser() {
    playerStatus.innerHTML = "<p>You are the <span class='guesser'>Guesser!</span></p>";
}

function playerHider() {
    playerStatus.innerHTML = "<p>You are the <span class='hider'>Hider!</span></p>";
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
    } else {
        playerHider();
        showHider();
    }
}
