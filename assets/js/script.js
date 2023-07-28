/* creating the sections that will be interchangable */
const menu = document.getElementById("menu");
const rulesSection = document.getElementById("rules-section");
const gameSection = document.getElementById("game-section");
const imageSection = document.getElementById("image-section");
const bubbleImageSection = document.getElementById("bubble-image-section");
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

// Status Message in order to inform the player what is happening
let playerStatus = document.getElementById("player-status");

// Game stats
let playerTurn;
let playerOE;
let playerHideOE;
let playerWager;
let computerWager;
let playerMarbles;
let computerMarbles;
let endTurnTimeOut;

// Images in an array of objects
const imageList = [
    {
        source: "assets/images/fist.png",
        alt: "Image depicting a closed fist",
        class: "left"
    },
    {
        source: "assets/images/fist.png",
        alt: "Image depicting a closed fist",
        class: "right"
    },
    {
        source: "assets/images/pointing.png",
        alt: "Image depicting a hand pointing to the right",
        class: "left"
    },
    {
        source: "assets/images/pointing.png",
        alt: "Image depicting a hand pointing to the left",
        class: "right"
    },
    {
        source: "assets/images/show-1.png",
        alt: "Image depicting an open hand with one marble",
        class: "left"
    },
    {
        source: "assets/images/show-1.png",
        alt: "Image depicting an open hand with one marble",
        class: "right"
    },
    {
        source: "assets/images/show-2.png",
        alt: "Image depicting an open hand with two marbles",
        class: "left"
    },
    {
        source: "assets/images/show-2.png",
        alt: "Image depicting an open hand with two marbles",
        class: "right"
    },
    {
        source: "assets/images/show-3.png",
        alt: "Image depicting an open hand with three marbles",
        class: "left"
    },
    {
        source: "assets/images/show-3.png",
        alt: "Image depicting an open hand with three marbles",
        class: "right"
    },
    {
        source: "assets/images/show-4.png",
        alt: "Image depicting an open hand with four marbles",
        class: "left"
    },
    {
        source: "assets/images/show-4.png",
        alt: "Image depicting an open hand with four marbles",
        class: "right"
    }
];

const bubbleList = [
    {
        source: "assets/images/bubble-player-odd.png",
        alt: "A speech bubble declaring that the player chose odd"
    },
    {
        source: "assets/images/bubble-player-even.png",
        alt: "A speech bubble declaring that the player chose even"
    },
    {
        source: "assets/images/bubble-computer-odd.png",
        alt: "A speech bubble declaring that the computer chose odd"
    },
    {
        source: "assets/images/bubble-computer-even.png",
        alt: "A speech bubble declaring that the computer chose even"
    }
];

// Event listeners
openRulesButton.addEventListener("click", openRules);

closeRulesButton.addEventListener("click", closeRules);

startButton.addEventListener("click", startGame);

quitButton.addEventListener("click", quitGame);

// Event listener for OE buttons to call a function
oddButton.addEventListener("click", function () {
    handleOE("odd");
});

evenButton.addEventListener("click", function () {
    handleOE("even");
});

// List of functions necessary for the game flow

// Open and close rules section by toggling display:none to display:flex 
function openRules(event) {
    rulesSection.style.display = "flex";
}

function closeRules(event) {
    rulesSection.style.display = "none";
}

// This function will display the image
function displayBubbleImage(bubbleList) {

    let bubbleDisplayed = document.createElement("img");
    bubbleDisplayed.src = bubbleList.source;
    bubbleDisplayed.alt = bubbleList.alt;
    bubbleDisplayed.classList.add("bubble");

    bubbleImageSection.appendChild(bubbleDisplayed);
}

// This function will display the image given as an argument
function displayImage(imageList) {

    let imageDisplayed = document.createElement("img");
    imageDisplayed.src = imageList.source;
    imageDisplayed.alt = imageList.alt;
    imageDisplayed.classList.add(imageList.class);

    imageSection.appendChild(imageDisplayed);
}

// This function will display a specific image depending on the value of the wager button pressed
function displayPlayerImage(value) {
    let index;

    switch (value) {
        case 1:
            index = 4;
            break;

        case 2:
            index = 6;
            break;
        
        case 3:
            index = 8;
            break;
        
        case 4:
            index = 10;
            break;

        default:
            index = 2;
            break;
    }

    displayImage(imageList[index]);
}

// This function will display a specific image depending on the numbers of marbles the computer decides to hide
function displayComputerHiderImage(randomNumber) {
    let index;

    switch (randomNumber) {
        case 1:
            index = 5;
            break;

        case 2:
            index = 7;
            break;
        
        case 3:
            index = 9;
            break;
        
        case 4:
            index = 11;
            break;

        default:
            index = 3;
            break;
    }

    displayImage(imageList[index]);
}

// This function will display a specific image depending on the numbers of marbles the computer decides to wager
function displayComputerWagerImage(computerWager) {
    let index;

    switch (computerWager) {
        case 1:
            index = 5;
            break;

        case 2:
            index = 7;
            break;
        
        case 3:
            index = 9;
            break;
        
        case 4:
            index = 11;
            break;

        default:
            index = 3;
            break;
    }

    displayImage(imageList[index]);

}

// removes the images displayed
function clearImage () {
    imageSection.innerHTML = "";
}

function clearBubble() {
    bubbleImageSection.innerHTML = "";
}

// Functions to either show or hide OE and wager buttons
function showOE() {
    clearImage();

    displayImage(imageList[2]);
    displayImage(imageList[1]);

    oddEvenSection.style.display = "flex";
}

function hideOE() {
    oddEvenSection.style.display = "none";
}

// Creates buttons in order to choose how many marbles to wager based on how many marbles are left for a maximum of 4
function showWager() {

    wagerButtonContainer.innerHTML = "";

    let maxWager = Math.min(playerMarbles, 4)

    for (let wager = 1; wager <= maxWager; wager++) {
        let wagerButton = document.createElement("button");
        wagerButton.classList.add("wager-button");
        wagerButton.value = wager;
        wagerButton.textContent = wager;

        wagerButton.addEventListener("click", function () {
            let selectedWager = parseInt(this.value);
            handleWager(selectedWager);
            clearImage();
            displayPlayerImage(playerWager);
        });

        wagerButtonContainer.appendChild(wagerButton);
    }

    wagerSection.style.display = "flex";
}

// Hides the created wager buttons
function hideWager() {
    wagerSection.style.display = "none";
}

// Creates buttons in order to choose how many marbles to hide based on how many marbles are left for a maximum of 4
function showHider() {
    clearImage();

    displayImage(imageList[0]);
    displayImage(imageList[3]);

    hiderSection.style.display = "flex";

    hiderButtonContainer.innerHTML = "";

    let maxHide = Math.min(playerMarbles, 4)

    for (let hide = 1; hide <= maxHide; hide++) {
        let hideButton = document.createElement("button");
        hideButton.classList.add("hider-button");
        hideButton.textContent = hide;
        hideButton.value = hide;

        hideButton.addEventListener("click", function () {
            let selectedHide = parseInt(this.value);
            handleHider(selectedHide);
            displayPlayerImage(selectedHide);
        });

        hiderButtonContainer.appendChild(hideButton);
    }
}

function hideHider() {
    hiderSection.style.display = "none";
}

// Switch turn between true and false
function switchTurn() {
    playerTurn = !playerTurn;
}

// Function to handle the player's OE when guessing
function handleOE(oe) {
    playerOE = oe;
    hideOE();
    showWager();
}

// function to handle the player's wager when guessing
function handleWager(selectedWager) {
    playerWager = selectedWager;
    hideWager();
    compareOE();
}

// Function to handle the player's choice when hiding
function handleHider(selectedHide) {
    playerHideOE = selectedHide === 1 || selectedHide === 3 ? "odd" : "even";
    hideHider();
    compareHider();
}

// Checking how many marbles the computer has left in order to make a smarter decision for the next computer wager
function calculateComputerMarblesLeft() {
    return Math.min(computerMarbles, 4)
}

// Checking how many marbles the player has left in order to make a smarter decision for the next computer wager
function calculatePlayerMarblesLeft() {
    return Math.min(playerMarbles, 4)
}

// Function to roll computer OE when the player is guessing, compare with the player, switch turn and repeat/end the game cycle
function compareOE() {

    // This ensures the computer won't hide more marbles than he has left
    let computerMarblesLeft = calculateComputerMarblesLeft();

    let randomNumber = Math.floor(Math.random() * computerMarblesLeft) + 1;
    computerOE = randomNumber === 1 || randomNumber === 3 ? "odd" : "even";

    let bubblePlayer = playerOE === "odd" ? 0 : 1;
    displayBubbleImage(bubbleList[bubblePlayer]);
    bubbleImageSection.style.justifyContent = "flex-start";

    displayComputerHiderImage(randomNumber);

    // Compare odd or even
    let playerWins = playerOE === computerOE;

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

    // Updates the displayed score
    playerMarblesCounter.textContent = playerMarbles;
    computerMarblesCounter.textContent = computerMarbles;

    // Conditional statement in order to end the game when a certain criteria has been met
    if (playerMarbles >= 20) {
        setTimeout(victory, 3000);
    } else if (playerMarbles <= 0) {
        setTimeout(defeat, 3000);
    } else {
        endTurnTimeOut = setTimeout(function () {

            switchTurn();
            if (playerTurn) {
                clearBubble();
                playerGuesser();
                showOE();
            } else {
                clearBubble();
                playerHider();
                showHider();
            }
        }, 3000);
    }
}


/**
 * compares the computer's OE value with the player's hidden OE, updates the game state and switches turn
 */
function compareHider() {

    // This prevents the computer from wagering more marbles than the player has left
    let playerMarblesLeft = calculatePlayerMarblesLeft();

    let randomWager = Math.floor(Math.random() * playerMarblesLeft) + 1;

    // This prevents the computer from wagering more marbles than he has left
    let maxWager = Math.min(playerMarblesLeft, calculateComputerMarblesLeft())

    // Decides the wager amount to be used, this way the computer won't wager more than the player has left or more than the computer itself has left
    computerWager = Math.min(randomWager, maxWager);

    // This part of the code rolls a random number btw 1 and 4 to decide the computer OE outcome
    let randomNumber = Math.floor(Math.random() * 4) + 1;

    // If the player has only 1 marble left to hide the computer will always choose odd, resulting in a win
    if (playerMarblesLeft > 1) {
        computerOE = randomNumber === 1 || randomNumber === 3 ? "odd" : "even";
    } else computerOE = "odd";

    let bubbleComputer = computerOE === "odd" ? 2 : 3;
    displayBubbleImage(bubbleList[bubbleComputer]);
    bubbleImageSection.style.justifyContent = "flex-end";

    displayComputerWagerImage(computerWager);

    // Compare odd or even
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

    // Updates the displayed score
    playerMarblesCounter.textContent = playerMarbles;
    computerMarblesCounter.textContent = computerMarbles;

    // Conditional statement in order to end the game when a certain criteria has been met
    if (playerMarbles >= 20) {
        setTimeout(victory, 3000);
    } else if (playerMarbles <= 0) {
        setTimeout(defeat, 3000);
    } else {
        endTurnTimeOut = setTimeout(function () {

            switchTurn();
            if (playerTurn) {
                clearBubble();
                playerGuesser();
                showOE();
            } else {
                clearBubble();
                playerHider();
                showHider();
            }
        }, 3000);

    }
}

// Function in order to end the game if the player wins
function victory() {
    playerStatus.textContent = "You have won the game!"

    setTimeout(function () {
        quitGame();
    }, 2000);
}

// Function in order to end the game if the player loses
function defeat() {
    playerStatus.textContent = "You have been eliminated"

    setTimeout(function () {
        quitGame();
    }, 2000)
}

// Functions to inform the player about its role
function playerGuesser() {
    playerStatus.innerHTML = "<p>You are the <span class='guesser'>Guesser!</span></p>";
}

function playerHider() {
    playerStatus.innerHTML = "<p>You are the <span class='hider'>Hider!</span></p>";
}

/* Start Button removes Menu, toggles the Game screen and starts the playgame() function */
function startGame(event) {

    menu.style.display = "none";
    gameSection.style.display = "flex";

    playerMarbles = 10;
    computerMarbles = 10;

    playerMarblesCounter.textContent = playerMarbles;
    computerMarblesCounter.textContent = computerMarbles;

    playerTurn = true;

    playgame();
}

// depending on the player's turn it renders the buttons visible necessary to progress the game
function playgame() {
    if (playerTurn) {
        playerGuesser();
        showOE();
    } else {
        playerHider();
        showHider();
    }
}

// Quit button returns to the Menu and resets the game screen
function quitGame(event) {

    clearTimeout(endTurnTimeOut)

    gameSection.style.display = "none";
    clearImage();
    clearBubble();
    hideOE();
    hideWager();
    hideHider();
    menu.style.display = "flex";

}