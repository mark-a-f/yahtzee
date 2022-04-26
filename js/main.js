// EVENT LISTENERS

// Start Game Button
document.querySelector('#startBtn').addEventListener('click', startFunctions);

/**
 * Checks number of players input is valid.
 * If true, run functions to start the game.
 * If false, prompt user for correct input, do not run functions.
 *  
 */
function startFunctions() {    
    let numOfPlayers = document.querySelector('#numOfPlayers').value
    // Data validation to prevent empty string or a non-number being used
    if (numOfPlayers == '' || isNaN(numOfPlayers) || numOfPlayers > 8) {
        alert('Please enter a number. Maximum 8 players.')
        return null;
    } else {
        createTable(numOfPlayers);
        createPlayers(numOfPlayers);        
        hideInfoPanel();        
        displayResetButtons();
        displayRollDiceButton();
        displayPlayAgainButton();
        displayTable();
    }   
}

// Create Score Table
document.querySelector('#startBtn').addEventListener('click', createTable);

// Create Player Objects
document.querySelector('#startBtn').addEventListener('click', createPlayers);

// Save the running total score
document.getElementById('playAgainBtn').addEventListener('click', saveRunningTotal);

function displayResetButtons() {
    document.querySelector('#resetBtn').style.display = "inline-block";
    document.querySelector('#resetBtnBottom').style.display = "inline-block";
}

function displayRollDiceButton() {
    document.querySelector('#rollDice').style.display = "inline-block";
}

function displayTable() {
    document.querySelector('#table-container').style.display = "inline-block";
}

function displayPlayAgainButton() {
    document.querySelector('#playAgainBtn').style.display =  "inline-block";
}


// ***************************************************** */
// PAGE FUNCTIONS
// ****************************************************** */

// Page refresh when reset buttons are pressed
document.querySelector('#resetBtn').addEventListener('click', resetSheet);
document.querySelector('#resetBtnBottom').addEventListener('click', resetSheet);
function resetSheet() {
    document.getElementById('numOfPlayers').value = "";
    location.reload();
}

// Reset score sheet but keep names when Play Again button pressed
document.querySelector('#playAgainBtn').addEventListener('click', playAgain);
function playAgain() {
    resetPlayerScoreAttributes();
    window.location.href = '#table-container';   
}

/**
 * Reset score properties of all Player objects to zero.
 * Player.name is not changed.
 */
function resetPlayerScoreAttributes() {   
    let i = 1;
    while (i < playersArray.length) {        
        let currentPlayer = playersArray[i]        
        currentPlayer.ones = 0;
        currentPlayer.twos = 0;
        currentPlayer.threes = 0;
        currentPlayer.fours = 0;
        currentPlayer.fives = 0;
        currentPlayer.sixes = 0;
        currentPlayer.bonus = 0;
        currentPlayer.topScore = 0;
        currentPlayer.topTotalScore = 0;
        currentPlayer.threeOfKind = 0;
        currentPlayer.fourOfKind = 0;
        currentPlayer.fullHouse = 0;
        currentPlayer.smallStraight = 0;
        currentPlayer.largeStraight = 0;
        currentPlayer.chance = 0;
        currentPlayer.yahtzee = 0;
        currentPlayer.bottomScore = 0;
        currentPlayer.grandTotal = 0;       
        
        resetPlayerScoreCardHTML(currentPlayer); // Set innerHTML values associated with currentPlayer object to blank.

        i ++;
    }
}

/**
 * Sets all innerHTML properties associated with playerObject to blank.
 * 
 * @param {object} playerObject A Player class object.
 */
function resetPlayerScoreCardHTML(playerObject) {    
    document.getElementById(`scoreOnes${
        playerObject.id
    }`).value = '';
    document.getElementById(`scoreTwos${
        playerObject.id
    }`).value = '';
    document.getElementById(`scoreThrees${
        playerObject.id
    }`).value = '';
    document.getElementById(`scoreFours${
        playerObject.id
    }`).value = '';
    document.getElementById(`scoreFives${
        playerObject.id
    }`).value = '';
    document.getElementById(`scoreSixes${
        playerObject.id
    }`).value = '';
    document.getElementById(`topScore${
        playerObject.id
    }`).innerHTML = '';
    document.getElementById(`bonusScore${
        playerObject.id
    }`).innerHTML = '---';
    document.getElementById(`bonusScore${
        playerObject.id
    }`).style.color = "#FF7B7B"; // change element text colour - unique to bonusScore element
    document.getElementById(`totalTopScore${
        playerObject.id
    }`).innerHTML = '';
    document.getElementById(`scoreThreeOfKind${
        playerObject.id
    }`).value = '';
    document.getElementById(`scoreFourOfKind${
        playerObject.id
    }`).value = '';
    document.getElementById(`scoreFullHouse${
        playerObject.id
    }`).value = '';
    document.getElementById(`scoreSmallStraight${
        playerObject.id
    }`).value = '';
    document.getElementById(`scoreLargeStraight${
        playerObject.id
    }`).value = '';
    document.getElementById(`scoreYahtzee${
        playerObject.id
    }`).value = '';
    document.getElementById(`scoreChance${
        playerObject.id
    }`).value = '';
    document.getElementById(`totalLower${
        playerObject.id
    }`).innerHTML = '';
    document.getElementById(`bottomTopScore${
        playerObject.id
    }`).innerHTML = '';
    document.getElementById(`GrandTotal${
        playerObject.id
    }`).innerHTML = '';
}

// Stops mousescroll from increasing number in input field. Scrolls table instead.
document.addEventListener("wheel", function (event) {
    if (document.activeElement.type === "number") {
        document.activeElement.blur();
    }
});

/** 
 * Landing page information panel.
 * This element hides when 'Start Game' button is clicked.
 * This element unhides when either the top or bottom Reset button is clicked.
 */
document.getElementById('resetBtn').addEventListener('click', showInfoPanel);
document.getElementById('resetBtnBottom').addEventListener('click', showInfoPanel);

// Display info panel
function showInfoPanel () {    
    document.getElementById('landing-info').style.display = "block";
}

// Hide landing information panel
function hideInfoPanel() {        
    document.getElementById('landing-info').style.display = "none";
}

