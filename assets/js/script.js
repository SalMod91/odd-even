// Creating the sections wich visibility will be interchangable 
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
roleGuesserButton.addEventListener("click", openGuesserRules);
roleHiderButton.addEventListener("click", openHiderRules);
closeGuesserButton.addEventListener("click", closeGuesserRules);
closeHiderButton.addEventListener("click", closeHiderRules);

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
function openGuesserRules(event) {
    roleGuesserSection.style.display = "flex";
}

/**
 * Closes the guesser rules section by changing its display style to "none".
 * @param {Event} event - The event that triggered the function, in this case a click event.
 */
function closeGuesserRules(event) {
    roleGuesserSection.style.display = "none";
}

/**
 * Opens the hider rules section by changing its display style to "flex".
 * @param {Event} event - The event that triggered the function, in this case a click event.
 */
function openHiderRules(event) {
    roleHiderSection.style.display = "flex";
}

/**
 * Closes the hider rules section by changing its display style to "none".
 * @param {Event} event - The event that triggered the function, in this case a click event.
 */
function closeHiderRules(event) {
    roleHiderSection.style.display = "none";
}

// The following functions are used to show and hide role buttons depending on the player's role during its turn

/**
 * Displays the guesser button by changing its display style to "flex".
 */
function showGuesserButton() {
    roleGuesserButton.style.display = "block";
}

/**
 * Hides the guesser button by changing its display style to "none".
 */
function hideGuesserButton() {
    roleGuesserButton.style.display = "none";
}

/**
 * Displays the hider button by changing its display style to "block".
 */
function showHiderButton() {
    roleHiderButton.style.display = "block";
}

/**
 * Hides the hider button by changing its display style to "none".
 */
function hideHiderButton() {
    roleHiderButton.style.display = "none";
}

// The following functions decide wich image to display, when to display them and when to remove them

/**
 * Displays a bubble speech image based on the provided bubbleList array of objects.
 * Creates an img element with the specified source and alt attributes,
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
 * Creates an img element with the specified source, alt and class attributes and appens it as a child to the imageSection.
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
 * Closes the rules in the menu if they are open.
 * Closes the menu by changing its display style to "none" and opens the game section by changing its display style to "flex".
 * Sets the score to 10 for both players.
 * Sets the player's turn to guesser (true);
 * Starts the playGame() function.
 * @param {Event} event - The event that triggered the function, in this case a click event. 
 */
function startGame(event) {

    // Closes the rules section
    closeRules();
    
    // Closes the menu and opens the game section
    menu.style.display = "none";
    gameSection.style.display = "flex";

    // Sets the player and computer score to 10
    playerMarbles = 10;
    computerMarbles = 10;

    // Displays the score as textContent for the counter
    playerMarblesCounter.textContent = playerMarbles;
    computerMarblesCounter.textContent = computerMarbles;

    // Rolls for player turn being true with a 50% chance
    playerTurn = Math.random() < 0.5;

    // Runs the game depending on the player's turn
    playGame();
}

/**
 * This function will start the flow of the game according to the player's turn
 */
function playGame() {
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

/**
 * Informs the player that its role is the guesser
 */
function playerGuesser() {
    playerStatus.innerHTML = "<p>You are the <span class='odd'>Guesser!</span></p>";
}

/**
 * Informs the player that its role is the hider
 */
function playerHider() {
    playerStatus.innerHTML = "<p>You are the <span class='even'>Hider!</span></p>";
}

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
function guesserWinMessage() {

    // Handles the pluralization of the word marble
    let playerWagerAmount = playerWager === 1 ? "1 MARBLE" : `${playerWager} MARBLES`;

    // Updates the player's status message to indicate what the computer chose and that the player won
    playerStatus.innerHTML = `<p>Computer chose to hide an <span class="${computerOE}">${computerOE}</span> number of marbles</p> 
    <p>You guessed correctly and <span class="even">WON ${playerWagerAmount} </span>.</p>`;
}

/**
 * Indicates in the player status section an unsuccessful player guess and loss
 */
function guesserLossMessage() {

    // Handles the pluralization of the word marble
    let playerWagerAmount = playerWager === 1 ? "1 marble" : `${playerWager} marbles`;

    // Updates the player's status message to indicate what the computer chose and that the player lost
    playerStatus.innerHTML = `<p>Computer chose to hide an <span class="${computerOE}">${computerOE}</span> number of marbles</p>
    <p>You guessed wrong and <span class="odd">LOST ${playerWagerAmount}</span>.</p>`;
}

/**
 * Indicates in the player status section an unsuccessful guess by the computer resulting in the player's win
 */
function hiderWinMessage() {

    // This variable handles the pluralization of the word marble
    let computerWagerAmount = computerWager === 1 ? "1 marble" : `${computerWager} marbles`;

    // Updates the player status message informing the player of the computer's choice and that the player won
    playerStatus.innerHTML = `<p><p>Computer thinks you hide an <span class="${computerOE}">${computerOE}</span> number of marbles and guessed wrong.</p> 
    <p>Computer wagered and <span class="even">lost ${computerWagerAmount}</span>.</p>`;
}

/**
 * Indicates in the player status section a successful guess by the computer resulting in the player's loss
 */
function hiderLossMessage() {

    // This variable handles the pluralization of the word marble
    let computerWagerAmount = computerWager === 1 ? "1 marble" : `${computerWager} marbles`;

    // Updates the player status message informing the player of the computer's choice and that the player lost
     playerStatus.innerHTML = `<p>Computer thinks you hide an <span class="${computerOE}">${computerOE}</span> number of marbles and guessed correctly.</p> 
    <p>Computer wagered and <span class="odd">won ${computerWagerAmount}</span>.</p>`;
}

/**
 * Updates the displayed player and computer marbles score making sure the amount will not be over 20 or below 0
 */
function scoreUpdate() {

    // Limit playerMarbles and computerMarbles to a range of 0 to 20
    playerMarbles = Math.min(Math.max(playerMarbles, 0), 20);
    computerMarbles = Math.min(Math.max(computerMarbles, 0), 20);
    
    // Update the displayed player and computer marble score
    playerMarblesCounter.textContent = playerMarbles;
    computerMarblesCounter.textContent = computerMarbles;
}

/**
 * Switches the player's turn
 */
function switchTurn() {
    // Toggles the boolean value to true from false and viceversa
    playerTurn = !playerTurn;
}

/**
 * Function that runs at the end of a turn.
 * Calculates if the game is over. If the game is not over it handles the switch of the player's turn and progresses the game.
 */
function turnEnd() {

    // If the player's marble counter is 20 or higher the player wins
    if (playerMarbles >= 20) {
        // Set a timeout to call the victory() function after 3 seconds
        endGameVictoryTimeOut = setTimeout(victory, 3000);
    } 
    // If the player's marble counter 0 or lower the player loses
    else if (playerMarbles <= 0) {
        // Set a timeout to call the defeat() function after 3 seconds
        endGameDefeatTimeOut = setTimeout(defeat, 3000);
    } else {
        // Set a timeout for switch of the turn
        endTurnTimeOut = setTimeout(function () {
            // Switches the player's turn
            switchTurn();

            // Checks if it is the player's turn to be the guesser
            if (playerTurn) {
                // Clears the bubble speech image and displays the player status message indicating that the player is the guesser
                clearBubble();
                playerGuesser();

                // Displays the guesser rule section button and the OE buttons
                showGuesserButton();
                showOE();

            } else {
                // Clears the bubble speech image and displays the player status message indicating that the player is the hider
                clearBubble();
                playerHider();

                // Displays the hider rule section button and the hider buttons
                showHiderButton();
                showHider();
            }
        }, 3000);
    }
}

/**
 * Quits the game and returns to the menu, clears timeouts and images. 
 * Hides all buttons and opened rules.
 * @param {Event} event - The event that triggered the function, in this case a click event.
 */
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
    closeGuesserRules();
    closeHiderRules();
    hideHider();
    menu.style.display = "flex";

}

/**
 * Function that ends the game in case the player won
 */
function victory() {

    // Updates the status message to inform the player the he has won
    playerStatus.innerHTML = `<p>You <span class='even'>won</span>!</p>`;

    // After 2 seconds quits the game
    setTimeout(function () {
        quitGame();
    }, 2000);
}

/**
 * Function that ends the game in case the player lost
 */
function defeat() {

    // Updates the status message to inform the player the he has lost
    playerStatus.innerHTML = `<p>You <span class='odd'>lost</span>!</p>`;

    // After 2 seconds quits the game
    setTimeout(function () {
        quitGame();
    }, 2000);
}

// List of functions necessary for the game flow in order of appearance

// Guesser Player Turn

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
    // Assigns the value of the chosen wager and will be later used to determine how many marbles the player wins/loses
    playerWager = selectedWager;

    // Hides the wager buttons by changing the display style of the wager section to "none"
    hideWager();

    // Runs the comparison of the OE and progresses the game
    compareOE();
}

/**
 * Hides the wager buttons by changing the visibility of the wager section to "none"
 */
function hideWager() {
    wagerSection.style.display = "none";
}

/**
 * Rolls the computer OE choice and compares it with the player's guess, updates scores and ends/advances the game.
 */
function compareOE() {

    // Closes the role rules section and hides the role rules button
    hideGuesserButton();
    closeGuesserRules();

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

        // Subtracts the player wager from the computer marbles and adds it to the player marbles
        playerMarbles += playerWager;
        computerMarbles -= playerWager;

        // Updates the player status message informing the player of the computer's choice and that the player won
        guesserWinMessage();

    } else {

        // Subtracts the player wager from the player marbles and adds it to the computer marbles
        playerMarbles -= playerWager;
        computerMarbles += playerWager;

        // Updates the player status message informing the player of the computer's choice and that the player lost
        guesserLossMessage();
    }

    // Updates the displayed score
    scoreUpdate();

    // Ends the game if the player's marble score is 20/0 or switches turn and progresses the game
    turnEnd();
}

// Hider Player turn

/**
 * Displays the hider buttons by changing the display style of the hider section to "flex".
 * Clears the existing hider buttons and dynamically recreates the buttons based on the available player marbles.
 * Each hider button is created with an event listener for game progression.
 * Clears the exisiting hand images and displays new hand images depicting the player hiding and the computer guessing.
 */
function showHider() {
    // Clears the displayed hand images
    clearImage();

    // Displays the images depicting the player as the hider using a closed fist and depicting the computer as the guesser using a pointing finger
    displayImage(imageList[0]);
    displayImage(imageList[3]);

    // Renders the hider section visible by changing its display style to "flex"
    hiderSection.style.display = "flex";

    // Clears the existing hider buttons
    hiderButtonContainer.innerHTML = "";

    // Calculates the maximum hide amount possible based on the available player marbles
    let maxHide = Math.min(playerMarbles, 4);

    // Creates hider buttons based on the maxHide value in order to never create more buttons than the available player marbles
    for (let hide = 1; hide <= maxHide; hide++) {
        let hideButton = document.createElement("button");
        hideButton.classList.add("hider-button");
        hideButton.textContent = hide;
        hideButton.value = hide;

        // Adds a click event listener to each button for game progression
        hideButton.addEventListener("click", function () {
            let selectedHide = parseInt(this.value);
            handleHider(selectedHide);
        });

        // Appends the hider buttons as a child to the container
        hiderButtonContainer.appendChild(hideButton);
    }
}

/**
 * Hides the hider buttons by changing the display style of the hider section to "none".
 */
function hideHider() {
    hiderSection.style.display = "none";
}

/**
 * Assigns to playerHideOE a string value of either "odd" or "even" depending on the player's choice.
 * Hides the hider buttons.
 * Clears the hand images.
 * Displays a hand image depending the player's hide choice.
 * Calls the compareHider() function in order to compare the OE and progress the game.
 * @param {number} selectedHide -  The selected hide amount made by the player through the hider buttons.
 */
function handleHider(selectedHide) {
    // Assigns the value of the strings "odd" or "even" to and will be later used to compare it with the computer's OE choice
    playerHideOE = selectedHide === 1 || selectedHide === 3 ? "odd" : "even";

    // Hides the hider buttons by changing the display style of the hider section to "none"
    hideHider();

    // Clears the hand images
    clearImage();

    // Displays a hand image holding an amount of marbles in their hand based on the hider value selected
    displayPlayerImage(selectedHide);

    // Compares the OE and progresses the game
    compareHider();
}

/**
 * Rolls the computer OE choice and compares it with the player's hidden marbles, updates scores and ends/advances the game.
 */
function compareHider() {

    // Closes the role rules section and hides the role rules button
    hideHiderButton();
    closeHiderRules();

    // Prevents the computer from wagering more marbles than the player has left
    let playerMarblesLeft = calculatePlayerMarblesLeft();
    let randomWager = Math.floor(Math.random() * playerMarblesLeft) + 1;

    // This prevents the computer from wagering more marbles than the computer has left
    let maxWager = Math.min(playerMarblesLeft, calculateComputerMarblesLeft());

    // Decides the wager amount to be used, this way the computer won't wager more than the player has left or more than the computer itself has left
    computerWager = Math.min(randomWager, maxWager);

    // This part of the code rolls a random number btw 1 and 4 to decide the computer OE outcome
    let randomNumber = Math.floor(Math.random() * 4) + 1;

    // If the player has only 1 marble left to hide the computer will always choose odd, resulting in a win
    if (playerMarblesLeft > 1) {
        computerOE = randomNumber === 1 || randomNumber === 3 ? "odd" : "even";
    } else computerOE = "odd";

    // Displays a speech bubble image depicting the choise of the computer and positioning it to the computer's side
    let bubbleComputer = computerOE === "odd" ? 2 : 3;
    displayBubbleImage(bubbleList[bubbleComputer]);
    bubbleImageSection.style.justifyContent = "flex-end";

    displayComputerWagerImage(computerWager);

    // Compares the OE choices and sets the playerWins to true if the OE values are not equal
    let playerWins = playerHideOE != computerOE;

    if (playerWins) {

        // Subtracts the computer wager from the computer marbles and adds it to the player marbles
        playerMarbles += computerWager;
        computerMarbles -= computerWager;

        // Updates the player status message informing the player of the computer's choice and that the player won
        hiderWinMessage();

    } else {

        // Subtracts the computer wager from the player marbles and adds it to the computer marbles
        playerMarbles -= computerWager;
        computerMarbles += computerWager;

        // Updates the player status message informing the player of the computer's choice and that the player lost
        hiderLossMessage();
    }

    // Updates the displayed score
    scoreUpdate();

    // Ends the game if the player's marble score is 20/0 or switches turn and progresses the game
    turnEnd();
}