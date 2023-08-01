// creating the sections that will be interchangable 
const menu = document.getElementById("menu");
const rulesSection = document.getElementById("rules-section");
const gameSection = document.getElementById("game-section");
const roleButtonSection = document.getElementById("role-button-container")
const roleGuesserSection = document.getElementById("role-guesser-section");
const roleHiderSection = document.getElementById("role-hider-section");
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
const roleGuesserButton = document.getElementById("role-guesser-button");
const roleHiderButton = document.getElementById("role-hider-button");
const closeGuesserButton = document.getElementById("role-guesser-close");
const closeHiderButton = document.getElementById("role-hider-close");

// Score
let playerMarblesCounter = document.getElementById("player-marble");
let computerMarblesCounter = document.getElementById("computer-marble");

// Status Message in order to inform the player what is happening
let playerStatus = document.getElementById("player-status");

// Game stats
let playerTurn;
let playerOE;
let computerOE;
let playerHideOE;
let playerWager;
let computerWager;
let playerMarbles;
let computerMarbles;
let endTurnTimeOut;

// Hand images depicting the player and computer status and showing the amount of marbles hidden/wagered
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

// Bubble speech images depicting the choice of odd or even of the player or computer
const bubbleList = [
    {
        source: "assets/images/bubble-player-odd.webp",
        alt: "A speech bubble declaring that the player chose odd"
    },
    {
        source: "assets/images/bubble-player-even.webp",
        alt: "A speech bubble declaring that the player chose even"
    },
    {
        source: "assets/images/bubble-computer-odd.webp",
        alt: "A speech bubble declaring that the computer chose odd"
    },
    {
        source: "assets/images/bubble-computer-even.webp",
        alt: "A speech bubble declaring that the computer chose even"
    }
];

// Event listeners
openRulesButton.addEventListener("click", openRules);

closeRulesButton.addEventListener("click", closeRules);

startButton.addEventListener("click", startGame);

quitButton.addEventListener("click", quitGame);

roleGuesserButton.addEventListener("click", openGuesser);

roleHiderButton.addEventListener("click", openHider);

closeGuesserButton.addEventListener("click", closeGuesser);

closeHiderButton.addEventListener("click", closeHider);

// Event listener for OE buttons to call the handleOE function
oddButton.addEventListener("click", function () {
    handleOE("odd");
});

evenButton.addEventListener("click", function () {
    handleOE("even");
});

// These functions are assigned to click event listeners of rules and roles buttons

/**
 * Changes the visibility of the rules section to "flex" rendering the rules visible and effectively opening the rules window 
 */
function openRules(event) {
    rulesSection.style.display = "flex";
}

/**
 * Changes the visibility of the rules section to "none" rendering the rules invisible and effectively closing the rules window 
 */
function closeRules(event) {
    rulesSection.style.display = "none";
}

/**
 * Changes the visibility of the guesser role section to "flex" rendering the rules visible and effectively opening the rules of the guesser window 
 */
function openGuesser(event) {
    roleGuesserSection.style.display = "flex";
}

/**
 * * Changes the visibility of the guesser role section to "none" rendering the rules invisible and effectively closing the rules of the guesser window 
 */
function closeGuesser(event) {
    roleGuesserSection.style.display = "none";
}

/**
 * Changes the visibility of the hider role section to "flex" rendering the rules visible and effectively opening the rules of the hider window 
 */
function openHider(event) {
    roleHiderSection.style.display = "flex";
}

/**
 * Changes the visibility of the hider role section to "none" rendering the rules invisible and effectively closing the rules of the hider window
 */
function closeHider(event) {
    roleHiderSection.style.display = "none";
}

// The following functions are used to show and hide role buttons depending on the player's role during its turn

/**
 * Makes the button for the guesser rules visible and interactable by switching its display to "block"
 */
function showGuesserButton() {
    roleGuesserButton.style.display = "block";
}

/**
 * Hides the button responsible for opening the guesser rules by switching its display to "none"
 */
function hideGuesserButton() {
    roleGuesserButton.style.display = "none";
}

/**
 * Makes the button for opening the hider rules visible and interactable by switching its display to "block"
 */
function showHiderButton() {
    roleHiderButton.style.display = "block";
}

/**
 * Hides the button responsible for opening the hider rules by switching its display to "none"
 */
function hideHiderButton() {
    roleHiderButton.style.display = "none";
}

// The following functions decide wich image to display, when to display them and when to remove them

/**
 * This function will display the image chosen from the array of objects bubbleList using the index as an argument
 * @param {Array} bubbleList 
 */
function displayBubbleImage(bubbleList) {

    let bubbleDisplayed = document.createElement("img");
    bubbleDisplayed.src = bubbleList.source;
    bubbleDisplayed.alt = bubbleList.alt;
    bubbleDisplayed.classList.add("bubble");

    bubbleImageSection.appendChild(bubbleDisplayed);
}

/**
 * This function will display the image chosen from the array of objects imageList using the index as an argument
 * @param {Array} imageList 
 */
function displayImage(imageList) {

    let imageDisplayed = document.createElement("img");
    imageDisplayed.src = imageList.source;
    imageDisplayed.alt = imageList.alt;
    imageDisplayed.classList.add(imageList.class);

    imageSection.appendChild(imageDisplayed);
}

/**
 * This function will display a specific image depending on the value of the wager button pressed
 * @param {number} value the value of a wager chosen by the player ranging from 1 to 4
 */
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

/**
 * This function will display a specific image depending on the numbers of marbles the computer decides to hide
 * @param {number} randomNumber a randomNumber ranging from 1 to 4 used to determine the computer's choice of odd or even
 */
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

/**
 * This function will display a specific image depending on the numbers of marbles the computer decides to wager
 * @param {number} computerWager a random number ranging from 1 to 4
 */
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

/**
 * Clears the screen from the displayed hand images
 */
function clearImage () {
    imageSection.innerHTML = "";
}

/**
 * Clears the screen from the displayed bubble speech
 */
function clearBubble() {
    bubbleImageSection.innerHTML = "";
}

// List of functions necessary for the game flow in order of appearance

/**
 * Function to render the OE buttons visible,
 * clears the screen of the displayed hand images,
 * displays images according to the player being the guesser and the computer being the hider
 */
function showOE() {
    clearImage();

    displayImage(imageList[2]);
    displayImage(imageList[1]);

    oddEvenSection.style.display = "flex";
}

/**
 * Gives a value to playerOE of either "odd" or "even",
 * hides the OE buttons,
 * renders the wager buttons visible
 * @param {string} oe passed through the string "odd" or "even" 
 */
function handleOE(oe) {
    playerOE = oe;
    hideOE();
    showWager();
}

/**
 * Hides the OE buttons by changing the display of the odd or even section to "none"
 */
function hideOE() {
    oddEvenSection.style.display = "none";
}

/**
 * Removes all buttons of the wager container,
 * creates new wager buttons by choosing between the minimum number of the marbles available to the player or 4,
 * gives an event listener to the wager buttons with "click" and handleWager() as an argument,
 * appends the buttons as children of the div with an id="wager-button-container",
 * renders the buttons visible by changing the display of the wager section to "flex"
 */
function showWager() {

    wagerButtonContainer.innerHTML = "";

    let maxWager = Math.min(playerMarbles, 4);

    for (let wager = 1; wager <= maxWager; wager++) {
        let wagerButton = document.createElement("button");
        wagerButton.classList.add("wager-button");
        wagerButton.value = wager;
        wagerButton.textContent = wager;

        wagerButton.addEventListener("click", function () {
            let selectedWager = parseInt(this.value);
            handleWager(selectedWager);
        });

        wagerButtonContainer.appendChild(wagerButton);
    }

    wagerSection.style.display = "flex";
}

/**
 * Assigns the value of selectedWager to the playerWager variable,
 * hides the wager section by changing its display to "none",
 * runs the compareOE() function.
 * @param {number} selectedWager value of the wager button chosen by the player
 */
function handleWager(selectedWager) {
    playerWager = selectedWager;
    hideWager();
    compareOE();
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

    let maxHide = Math.min(playerMarbles, 4);

    for (let hide = 1; hide <= maxHide; hide++) {
        let hideButton = document.createElement("button");
        hideButton.classList.add("hider-button");
        hideButton.textContent = hide;
        hideButton.value = hide;

        hideButton.addEventListener("click", function () {
            let selectedHide = parseInt(this.value);
            handleHider(selectedHide);
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

// Function to handle the player's choice when hiding
function handleHider(selectedHide) {
    playerHideOE = selectedHide === 1 || selectedHide === 3 ? "odd" : "even";
    hideHider();
    clearImage();
    displayPlayerImage(selectedHide);
    compareHider();
}

// Checking how many marbles the computer has left in order to make a smarter decision for the next computer wager
function calculateComputerMarblesLeft() {
    return Math.min(computerMarbles, 4);
}

// Checking how many marbles the player has left in order to make a smarter decision for the next computer wager
function calculatePlayerMarblesLeft() {
    return Math.min(playerMarbles, 4);
}

// Function to roll computer OE when the player is guessing, compare with the player, switch turn and repeat/end the game cycle
function compareOE() {

    hideGuesserButton();
    closeGuesser();

    // This ensures the computer won't hide more marbles than he has left
    let computerMarblesLeft = calculateComputerMarblesLeft();

    let randomNumber = Math.floor(Math.random() * computerMarblesLeft) + 1;
    computerOE = randomNumber === 1 || randomNumber === 3 ? "odd" : "even";

    let bubblePlayer = playerOE === "odd" ? 0 : 1;
    displayBubbleImage(bubbleList[bubblePlayer]);
    bubbleImageSection.style.justifyContent = "flex-start";

    clearImage();
    displayPlayerImage(playerWager);
    displayComputerHiderImage(randomNumber);

    // Compare odd or even
    let playerWins = playerOE === computerOE;

    if (playerWins) {

        playerMarbles += playerWager;
        computerMarbles -= playerWager;
        playerStatus.innerHTML = `<p>Computer chose <span class="${computerOE}">${computerOE}</span> and you guessed correctly.</p>
        <p>You <span class='hider'>Win</span> this round.</p>`;

    } else {

        playerMarbles -= playerWager;
        computerMarbles += playerWager;
        playerStatus.innerHTML = `<p>Computer chose <span class="${computerOE}">${computerOE}</span> and you guessed wrong.</p>
        <p>You <span class='guesser'>Lost</span> this round.</p>`;

    }

    // Updates the displayed score
    playerMarblesCounter.textContent = playerMarbles;
    computerMarblesCounter.textContent = computerMarbles;

    turnEnd();
}


/**
 * compares the computer's OE value with the player's hidden OE, updates the game state and switches turn
 */
function compareHider() {

    hideHiderButton();
    closeHider();

    // This prevents the computer from wagering more marbles than the player has left
    let playerMarblesLeft = calculatePlayerMarblesLeft();

    let randomWager = Math.floor(Math.random() * playerMarblesLeft) + 1;

    // This prevents the computer from wagering more marbles than he has left
    let maxWager = Math.min(playerMarblesLeft, calculateComputerMarblesLeft());

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
        playerStatus.innerHTML = `<p>Computer chose <span class="${computerOE}">${computerOE}</span> and wagered ${computerWager}.</p>
        <p>You <span class='hider'>Win</span> this round.</p>`;

    } else {

        playerMarbles -= computerWager;
        computerMarbles += computerWager;
        playerStatus.innerHTML = `<p>Computer chose <span class="${computerOE}">${computerOE}</span> and wagered ${computerWager}.</p>
        <p>You <span class='guesser'>Lost</span> this round.</p>`;

    }

    // Updates the displayed score
    playerMarblesCounter.textContent = playerMarbles;
    computerMarblesCounter.textContent = computerMarbles;

    turnEnd();
}

// Conditional statement in order to end the game when a certain criteria has been met, if the game didn't end it switches the player turn
function turnEnd() {
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
                showGuesserButton();
                showOE();
            } else {
                clearBubble();
                playerHider();
                showHiderButton();
                showHider();
            }
        }, 3000);
    }
}

// Function in order to end the game if the player wins
function victory() {
    playerStatus.textContent = "You have won the game!";

    setTimeout(function () {
        quitGame();
    }, 2000);
}

// Function in order to end the game if the player loses
function defeat() {
    playerStatus.textContent = "You have been eliminated";

    setTimeout(function () {
        quitGame();
    }, 2000);
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

    closeRules();
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
        showGuesserButton();
        showOE();
    } else {
        playerHider();
        showHiderButton();
        showHider();
    }
}

// Quit button returns to the Menu and resets the game screen
function quitGame(event) {

    clearTimeout(endTurnTimeOut);

    gameSection.style.display = "none";
    clearImage();
    clearBubble();
    hideOE();
    hideWager();
    hideGuesserButton();
    hideHiderButton();
    closeGuesser();
    closeHider();
    hideHider();
    menu.style.display = "flex";

}