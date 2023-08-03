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
let endGameVictoryTimeOut;
let endGameDefeatTimeOut;

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
 * Opens the rules section by changing its display style to "flex".
 * @param {Event} event - The event that triggered the function, in this case a click event.
 */
function openRules(event) {
    rulesSection.style.display = "flex";
}

/**
 * Closes the rules section by changing its display style to "none".
 * @param {Event} event - The event that triggered the function, in this case a click event.
 */
function closeRules(event) {
    rulesSection.style.display = "none";
}

/**
 * Opens the guesser rules section by changing its display style to "flex".
 * @param {Event} event - The event that triggered the function, in this case a click event.
 */
function openGuesser(event) {
    roleGuesserSection.style.display = "flex";
}

/**
 * Closes the guesser rules section by changing its display style to "none".
 * @param {Event} event - The event that triggered the function, in this case a click event.
 */
function closeGuesser(event) {
    roleGuesserSection.style.display = "none";
}

/**
 * Opens the hider rules section by changing its display style to "flex".
 * @param {Event} event - The event that triggered the function, in this case a click event.
 */
function openHider(event) {
    roleHiderSection.style.display = "flex";
}

/**
 * Closes the hider rules section by changing its display style to "none".
 * @param {Event} event - The event that triggered the function, in this case a click event.
 */
function closeHider(event) {
    roleHiderSection.style.display = "none";
}

// The following functions are used to show and hide role buttons depending on the player's role during its turn

/**
 * Displays the guesser button by changing its display style to "flex".
 */
function showGuesserButton() {
    roleGuesserButton.style.display = "flex";
}

/**
 * Closes the guesser button by changing its display style to "none".
 */
function hideGuesserButton() {
    roleGuesserButton.style.display = "none";
}

/**
 * Displays the hider button by changing its display style to "flex".
 */
function showHiderButton() {
    roleHiderButton.style.display = "flex";
}

/**
 * Closes the hider button by changing its display style to "none".
 */
function hideHiderButton() {
    roleHiderButton.style.display = "none";
}

// The following functions decide wich image to display, when to display them and when to remove them

/**
 * Displays a bubble speech image based on the provided bubbleList array of objects.
 * Creates an <img> element with the specified source and alt attributes,
 * adds the "bubble" class and appends it as a child to the bubbleImageSection.
 * @param {Array} bubbleList - An array of objects containing several images of speech bubbles. Each object has a source (src) and alternative text (alt) property.
 */
function displayBubbleImage(bubbleList) {

    let bubbleDisplayed = document.createElement("img");
    bubbleDisplayed.src = bubbleList.source;
    bubbleDisplayed.alt = bubbleList.alt;
    bubbleDisplayed.classList.add("bubble");

    bubbleImageSection.appendChild(bubbleDisplayed);
}

/**
 * Displays a hand image based on the provided imageList array of objects.
 * Creates an <img> element with the specifies source, alt and class attributes and appens it as a child to the imageSection.
 * @param {Array} imageList - An array of objects containing several hand images. Each object has a source (src), alternative text (alt) and a class.
 */
function displayImage(imageList) {

    let imageDisplayed = document.createElement("img");
    imageDisplayed.src = imageList.source;
    imageDisplayed.alt = imageList.alt;
    imageDisplayed.classList.add(imageList.class);

    imageSection.appendChild(imageDisplayed);
}

/**
 * Displays a player's hand image based on the provided value, representing the number of marbles intended by the player to wager/hide.
 * @param {number} value - The value of the wager button pressed by the player ranging from 1 to 4.
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
 * Displays a computer's hand image based on the provided random number, representing the number of marbles intended by the computer to hide.
 * @param {number} randomNumber - The random number rolled by the computer in order to decide the amount of marbles hidden ranging from 1 to 4.
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
 * Displays a computer's hand image based on the provided computer wager value, representing the number of marbles intended by the computer to wager.
 * @param {number} computerWager - The computer's wager value in order to decide the amount of marbles wagered ranging from 1 to 4.
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

// The following functions are used for game stats and events

/**
 * Calculates the amount of marbles the computer has left with a maximum value of 4.
 * This function ensures that the computer will not use more marbles than it has left.
 * @returns {number} - The number of computer marbles left up to a maximum of 4.
 */
function calculateComputerMarblesLeft() {

    // Returns the smallest number between the computer marbles left and 4
    return Math.min(computerMarbles, 4);
}

/**
 * Calculates the amount of marbles the player has left with a maximum value of 4.
 * This function ensures that the player cannot use more marbles than it has left.
 * @returns {number} - The number of player marbles left up to a maximum of 4.
 */
function calculatePlayerMarblesLeft() {

    // Returns the smallest number between the player marbles left and 4
    return Math.min(playerMarbles, 4);
}

/**
 * Indicates in the player status section a successful player guess and victory
 */
function guesserWin () {

    // Updates the player's status message to indicate what the computer chose and that the player won
    playerStatus.innerHTML = `<p>Computer chose an <span class="${computerOE}">${computerOE}</span> number of marbles and you guessed correctly.</p>
<p>You <span class='hider'>Win</span> this round.</p>`;
}

/**
 * Indicates in the player status section an unsuccessful player guess and loss
 */
function guesserLose() {
    // Updates the player's status message to indicate what the computer chose and that the player lost
    playerStatus.innerHTML = `<p>Computer chose an <span class="${computerOE}">${computerOE}</span> number of marbles and you guessed wrong.</p>
        <p>You <span class='guesser'>Lost</span> this round.</p>`;
}

/**
 * Updates the displayed player and computer marbles score
 */
function scoreUpdate() {

    // Limit playerMarbles and computerMarbles to a range of 0 to 20
    playerMarbles = Math.min(Math.max(playerMarbles, 0), 20);
    computerMarbles = Math.min(Math.max(computerMarbles, 0), 20);
    
    // Update the displayed player and computer marble score
    playerMarblesCounter.textContent = playerMarbles;
    computerMarblesCounter.textContent = computerMarbles;
}

// Conditional statement in order to end the game when a certain criteria has been met, if the game didn't end it switches the player turn
function turnEnd() {
    if (playerMarbles >= 20) {
        endGameVictoryTimeOut = setTimeout(victory, 3000);
    } else if (playerMarbles <= 0) {
        endGameDefeatTimeOut = setTimeout(defeat, 3000);
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

// List of functions necessary for the game flow in order of appearance

/**
 * Displays the OE buttons by changing the display style of the OE section to "flex".
 * Clears the exisiting hand images and displays new hand images depicting the player guessing and the computer hiding.
 */
function showOE() {
    // Clears the displayed hand images
    clearImage();

    // Displays the images depicting the player as the guesser using a pointing finger and depicting the computer as the hider using a closed fist
    displayImage(imageList[2]);
    displayImage(imageList[1]);

    // Renders the OE section visible by changing its display style to "flex"
    oddEvenSection.style.display = "flex";
}

/**
 * Gives a value to playerOE of either "odd" or "even" chosen by the player.
 * Hides the OE buttons and renders the wager buttons visible.
 * @param {string} oe - The player's OE choice through the OE buttons.
 */
function handleOE(oe) {
    // This variable will be used to compare the player's choice with the computer's OE choice
    playerOE = oe;

    // Hides the OE section by changing its display style to "none"
    hideOE();

    // Creates wager buttons and displays them by changing the wagerSection display style to "flex"
    showWager();
}

/**
 * Hides the OE buttons by changing the display style of the OE section to "none".
 */
function hideOE() {
    oddEvenSection.style.display = "none";
}

/**
 * Displays the wager buttons by changing the display style of the wager section to "flex".
 * Clears the existing wager buttons and dynamically recreates the buttons based on the available player marbles.
 * Each wager button is created with an event listener for game progression.
 */
function showWager() {

    // Clears the existing wager buttons
    wagerButtonContainer.innerHTML = "";

    // Calculates the maximum wager based on the available player marbles
    let maxWager = Math.min(playerMarbles, 4);

    // Creates wager buttons based on the maxWager value in order to never create more buttons than the available player marbles
    for (let wager = 1; wager <= maxWager; wager++) {
        let wagerButton = document.createElement("button");
        wagerButton.classList.add("wager-button");
        wagerButton.value = wager;
        wagerButton.textContent = wager;

        // Adds a click event listener to each button for game progression
        wagerButton.addEventListener("click", function () {
            let selectedWager = parseInt(this.value);
            handleWager(selectedWager);
        });

        // Appends the wager buttons as a child to the container
        wagerButtonContainer.appendChild(wagerButton);
    }

    // Displays the wager buttons by changing the display style of the wager section to "flex"
    wagerSection.style.display = "flex";
}

/**
 * Gives a value to playerWager depending on the player's choice.
 * Hides the wager buttons and initiates the comparison of OE choice in order to progress the game.
 * @param {number} selectedWager - The selected wager amount made by the player through the wager buttons.
 */
function handleWager(selectedWager) {
    playerWager = selectedWager;
    hideWager();
    compareOE();
}

/**
 * Hides the wager buttons by changing the visibility of the wager section to "none"
 */
function hideWager() {
    wagerSection.style.display = "none";
}

/**
 * Rolls the computer OE choise and compares it with the player's guess, updates scores and ends/advances the game.
 */
function compareOE() {

    // This closes the role rules section and hides the role rules button
    hideGuesserButton();
    closeGuesser();

    // Ensures the computer won't hide more marbles than he has left
    let computerMarblesLeft = calculateComputerMarblesLeft();

    // Rolls the computer OE choice depending on its marbles left and assigns the OE value to computerOE
    let randomNumber = Math.floor(Math.random() * computerMarblesLeft) + 1;
    computerOE = randomNumber === 1 || randomNumber === 3 ? "odd" : "even";

    // Displays the speech bubble depending on the player's choice and positions it to the player's side
    let bubblePlayer = playerOE === "odd" ? 0 : 1;
    displayBubbleImage(bubbleList[bubblePlayer]);
    bubbleImageSection.style.justifyContent = "flex-start";

    // Clears the hand images and displays the amount of marbles the player has wagered and the amount of marbles the computer has hidden through hand images
    clearImage();
    displayPlayerImage(playerWager);
    displayComputerHiderImage(randomNumber);

    // Compares the OE choices and sets the playerWins to true if the OE values are strictly equal
    let playerWins = playerOE === computerOE;

    if (playerWins) {

        // Subtracts the wager from the computer marbles and adds to the player marbles, displays a winning message
        playerMarbles += playerWager;
        computerMarbles -= playerWager;
        guesserWin();

    } else {

        // Subtracts the wager from the player marbles and adds to the computer marbles, displays a losing message
        playerMarbles -= playerWager;
        computerMarbles += playerWager;
        guesserLose();

    }

    // Updates the displayed score
    scoreUpdate();

    turnEnd();
}

/**
 * Clears hand images and displays images based on the player being the hider,
 * renders the hider section visible by changing its display from "none" to "flex",
 * removes old buttons and recreates buttons in order to choose how many marbles to hide based on how many marbles the player has left for a maximum of 4,
 * adds Event Listeners to the buttons that call handleHider() on click,
 * appends the buttons as children of the div with an id="hider-button-container" 
 * and renders them visible by changing the display of the hider section to "flex" from "none"
 */
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

/**
 * Hides the hider buttons by changing the hider section display from "flex" to "none"
 */
function hideHider() {
    hiderSection.style.display = "none";
}

/**
 * Toggles the boolean value of the variable playerTurn from true and false and viceversa
 */
function switchTurn() {
    playerTurn = !playerTurn;
}

/**
 * Assigns to playerHideOE a string value of either "odd" or "even" depending on the player's choice,
 * turns the hider section invisible by changing its display property from "flex" to "none",
 * removes the hand images displayed and displays a new image on the player side depending on how many marbles the player decided to hide
 * and runs the compareHider() function
 * @param {number} selectedHide this value is returned from the buttons created for choosing how many marbles to hide
 */
function handleHider(selectedHide) {
    playerHideOE = selectedHide === 1 || selectedHide === 3 ? "odd" : "even";
    hideHider();
    clearImage();
    displayPlayerImage(selectedHide);
    compareHider();
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
    scoreUpdate();

    turnEnd();
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
    clearTimeout(endGameVictoryTimeOut);
    clearTimeout(endGameDefeatTimeOut);

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