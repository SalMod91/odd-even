/* Event listeners */
let openRulesButton = document.getElementById("rules-open");
openRulesButton.addEventListener("click", openRules);

let closeRulesButton = document.getElementById("rules-close");
closeRulesButton.addEventListener("click", closeRules);

let startButton = document.getElementById("start-button");
startButton.addEventListener("click", startGame)

/* Open and close rules section */
function openRules(event) {
    let rulesSection = document.getElementById("rules-section");
    rulesSection.style.display = "flex";
}

function closeRules(event) {
    let rulesSection = document.getElementById("rules-section");
    rulesSection.style.display = "none";
}

/* clear screen */

function startGame(event) {

}