/**
 * TABLE OF CONTENTS
 * 
 * 1. 'Start Game' Functions
 *  1.1. startFunctions()
 *  1.2. createTable()
 *  1.3. createPlayers()
 *  1.4. hideInfoPanel()
 *  1.5. displayResetButtons()
 *  1.6. displayRollDiceButton()
 *  1.7. displayPlayAgainButton()
 *  1.8. displayTable()
 * 
 * 2. 'Reset Game' Functions
 *  2.1. resetSheet()
 *  2.2. showInfoPanel()
 * 
 * 3. 'Play Again' Functions
 *  3.1. playAgain()
 *  3.2. saveRunningTotal()
 *  3.3. resetPlayerScoreAttributes()
 *  3.4. resetPlayerScoreCardHTML()
 *  3.5. hideDice()
 * 
 * 4. Dice & Rolling Functions
 *  4.1. createDice()
 *  4.2. rollDice()
 *  4.3. getRandomDiceValue()
 *  4.4. changeFreezeState()
 *  4.5. changeBorder()
 *  4.6. removeBorder()
 *  4.7. setIMG()
 *  4.8. showDice()
 * 
 * 5. Score Update Functions
 *  5.1. fetchPlayerObject()
 *  5.2. updateName()
 *  5.3. runUpdates()
 *   5.3.1. updateScore()
 *   5.3.2. updateUpperScores()
 *   5.3.3. updateBottomScores()
 *   5.3.4. checkBonus()
 *   5.3.5. updateTopTotalScore()
 *   5.3.6. updateGrandTotalScore()
 * 
 * 6. Misc Page Functions
 * 
 * 
 * Created by Mark Fisher || github.com/mark-a-fisher
 * Design by Franziska Miller ||  
 * 
 *  */

/**************************************************/
/*                                                */
/*        1. 'START GAME' FUNCTIONS               */
/*                                                */
/**************************************************/

// 1.1 startFunctions()
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

// 1.2 createTable()
/**
 * Generates the table based on the value of 'Number of Players' input field.
 * 
 * @param {number} numOfPlayers The value of 'Number of Players' input field.
 */
 function createTable(numOfPlayers) {     
    let elementToAppend;
    let elementToCreate;
    let htmlToInsert;
    let i = 1;
    while (i <= numOfPlayers) {
        /**
         * For each player, select the table row.
         * Append the correct child to it with innerHTML unique to each player.
         */           

        // Top Row
        // Select the parent row by it's id
        elementToAppend = document.getElementById('row1');
        // Create 'th' element
        elementToCreate = document.createElement('th');
        // html that changes based on player number (i)
        htmlToInsert = `<th><input type="text" placeholder="Player ${i}" id="player${i}" class="player${i}" onblur="updateName(this)"></th>`;
        // set this html to the inner html of the element that is to be created
        elementToCreate.innerHTML = htmlToInsert;
        // add this element child to the parent
        elementToAppend.appendChild(elementToCreate);

        // Upper Section seperator
        elementToAppend = document.getElementById('table-seperator-top');
        elementToCreate = document.createElement('td');
        htmlToInsert = `<td></td>`;
        elementToCreate.innerHTML = htmlToInsert;
        elementToAppend.appendChild(elementToCreate);

        // Ones scores row
        elementToAppend = document.getElementById('row2');
        elementToCreate = document.createElement('td');
        htmlToInsert = `<td><input type="number" id="scoreOnesPlayer${i}" class="player${i}" oninput="runUpdates(this)"></td>`;
        elementToCreate.innerHTML = htmlToInsert;
        elementToAppend.appendChild(elementToCreate);

        // Twos scores row
        elementToAppend = document.getElementById('row3');
        elementToCreate = document.createElement('td');
        htmlToInsert = `<td><input type="number" id="scoreTwosPlayer${i}" class="player${i}" oninput="runUpdates(this)"></td>`;
        elementToCreate.innerHTML = htmlToInsert;
        elementToAppend.appendChild(elementToCreate);

        // Threes scores row
        elementToAppend = document.getElementById('row4');
        elementToCreate = document.createElement('td');
        htmlToInsert = `<td><input type="number" id="scoreThreesPlayer${i}" class="player${i}" oninput="runUpdates(this)"></td>`;
        elementToCreate.innerHTML = htmlToInsert;
        elementToAppend.appendChild(elementToCreate);

        // Fours scores row
        elementToAppend = document.getElementById('row5');
        elementToCreate = document.createElement('td');
        htmlToInsert = `<td><input type="number" id="scoreFoursPlayer${i}" class="player${i}" oninput="runUpdates(this)"></td>`;
        elementToCreate.innerHTML = htmlToInsert;
        elementToAppend.appendChild(elementToCreate);

        // Fives scores row
        elementToAppend = document.getElementById('row6');
        elementToCreate = document.createElement('td');
        htmlToInsert = `<td><input type="number" id="scoreFivesPlayer${i}" class="player${i}" oninput="runUpdates(this)"></td>`;
        elementToCreate.innerHTML = htmlToInsert;
        elementToAppend.appendChild(elementToCreate);

        // Sixes scores row
        elementToAppend = document.getElementById('row7');
        elementToCreate = document.createElement('td');
        htmlToInsert = `<td><input type="number" id="scoreSixesPlayer${i}" class="player${i}" oninput="runUpdates(this)"></td>`;
        elementToCreate.innerHTML = htmlToInsert;
        elementToAppend.appendChild(elementToCreate);

        // Top score row
        elementToAppend = document.getElementById('row8');
        elementToCreate = document.createElement('td');
        htmlToInsert = `<td><span id="topScorePlayer${i}" class="player${i}"></span></td>`;
        elementToCreate.innerHTML = htmlToInsert;
        elementToAppend.appendChild(elementToCreate);

        // Top Bonus score row
        elementToAppend = document.getElementById('row9');
        elementToCreate = document.createElement('td');
        htmlToInsert = `<td><span id="bonusScorePlayer${i}" class="player${i}">---</span></td>`;
        elementToCreate.innerHTML = htmlToInsert;
        elementToAppend.appendChild(elementToCreate);

        // Top total score row
        elementToAppend = document.getElementById('row10');
        elementToCreate = document.createElement('td');
        htmlToInsert = `<td><span id="totalTopScorePlayer${i}" class="player${i}"></span></td>`;
        elementToCreate.innerHTML = htmlToInsert;
        elementToAppend.appendChild(elementToCreate);

        // Upper Section seperator
        elementToAppend = document.getElementById('table-seperator-bot');
        elementToCreate = document.createElement('td');
        htmlToInsert = `<td></td>`;
        elementToCreate.innerHTML = htmlToInsert;
        elementToAppend.appendChild(elementToCreate);

        // 3 of a kind score row
        elementToAppend = document.getElementById('row11');
        elementToCreate = document.createElement('td');
        htmlToInsert = `<td><input type="number" id="scoreThreeOfKindPlayer${i}" class="player${i}" oninput="runUpdates(this)"></td>`;
        elementToCreate.innerHTML = htmlToInsert;
        elementToAppend.appendChild(elementToCreate);

        // 4 of a kind score row
        elementToAppend = document.getElementById('row12');
        elementToCreate = document.createElement('td');
        htmlToInsert = `<td><input type="number" id="scoreFourOfKindPlayer${i}" class="player${i}" oninput="runUpdates(this)"></td>`;
        elementToCreate.innerHTML = htmlToInsert;
        elementToAppend.appendChild(elementToCreate);

        // Full house score row
        elementToAppend = document.getElementById('row13');
        elementToCreate = document.createElement('td');
        htmlToInsert = `<td><input type="number" id="scoreFullHousePlayer${i}" class="player${i}" oninput="runUpdates(this)"></td>`;
        elementToCreate.innerHTML = htmlToInsert;
        elementToAppend.appendChild(elementToCreate);

        // Small straight score row
        elementToAppend = document.getElementById('row14');
        elementToCreate = document.createElement('td');
        htmlToInsert = `<td><input type="number" id="scoreSmallStraightPlayer${i}" class="player${i}" oninput="runUpdates(this)"></td>`;
        elementToCreate.innerHTML = htmlToInsert;
        elementToAppend.appendChild(elementToCreate);

        // Large straight score row
        elementToAppend = document.getElementById('row15');
        elementToCreate = document.createElement('td');
        htmlToInsert = `<td><input type="number" id="scoreLargeStraightPlayer${i}" class="player${i}" oninput="runUpdates(this)"></td>`;
        elementToCreate.innerHTML = htmlToInsert;
        elementToAppend.appendChild(elementToCreate);

        // Yahtzee score row
        elementToAppend = document.getElementById('row16');
        elementToCreate = document.createElement('td');
        htmlToInsert = `<td><input type="number" id="scoreYahtzeePlayer${i}" class="player${i}"  oninput="runUpdates(this)"></td>`;
        elementToCreate.innerHTML = htmlToInsert;
        elementToAppend.appendChild(elementToCreate);

        // Chance score row
        elementToAppend = document.getElementById('row17');
        elementToCreate = document.createElement('td');
        htmlToInsert = `<td><input type="number" id="scoreChancePlayer${i}" class="player${i}" oninput="runUpdates(this)"></td>`;
        elementToCreate.innerHTML = htmlToInsert;
        elementToAppend.appendChild(elementToCreate);

        // Total lower section scores
        elementToAppend = document.getElementById('row18');
        elementToCreate = document.createElement('td');
        htmlToInsert = `<td><span id="totalLowerPlayer${i}" class="player${i}"></span></td>`;
        elementToCreate.innerHTML = htmlToInsert;
        elementToAppend.appendChild(elementToCreate);

        // Total of upper section scores
        elementToAppend = document.getElementById('row19');
        elementToCreate = document.createElement('td');
        htmlToInsert = `<td><span id="bottomTopScorePlayer${i}" class="player${i}"></span></td>`;
        elementToCreate.innerHTML = htmlToInsert;
        elementToAppend.appendChild(elementToCreate);

        // Grand total score row
        elementToAppend = document.getElementById('row20');
        elementToCreate = document.createElement('td');
        htmlToInsert = `<td><span id="GrandTotalPlayer${i}" class="player${i}"></span></td>`;
        elementToCreate.innerHTML = htmlToInsert;
        elementToAppend.appendChild(elementToCreate);

        // Running total score row
        elementToAppend = document.getElementById('row-runningTotal');
        elementToCreate = document.createElement('td');
        htmlToInsert = `<td><span id="RunningTotalPlayer${i}" class="player${i}"></span></td>`;
        elementToCreate.innerHTML = htmlToInsert;
        elementToAppend.appendChild(elementToCreate);

        i++;
    }
}

// 1.3 createPlayers()
let playersArray = []; // Array to store the player objects
/**
 * Create and insert Player objects equal to number of players into playersArray.
 * 
 * @param {number} numOfPlayers The number of players.
 */
function createPlayers(numOfPlayers) {
    let name;
    let id;    
    let i = 1; // Starts at 1, do not want a Player0

    while (i <= numOfPlayers) {        
        id = `Player${i}`; // id will match the class name of each element associated with the player
        name = `Player ${i}`;        
        playersArray[i] = new Player(id, name);        
        i++;
    }
}

// 1.4 hideInfoPanel()
/**
 * Hide the information panel.
 */
function hideInfoPanel() {        
    document.getElementById('landing-info').style.display = "none";
}

// 1.5 displayResetButtons()
/**
 * Display the top and bottom reset buttons.
 */
function displayResetButtons() {
    document.querySelector('#resetBtn').style.display = "inline-block";
    document.querySelector('#resetBtnBottom').style.display = "inline-block";
}

// 1.6 displayRollDiceButton()
/**
 * Display the 'Roll Dice' button.
 */
function displayRollDiceButton() {
    document.querySelector('#rollDice').style.display = "inline-block";
}

// 1.7 displayPlayAgainButton()
/**
 * Display the 'Play Again' button.
 */
function displayPlayAgainButton() {
    document.querySelector('#playAgainBtn').style.display =  "inline-block";
}

// 1.8 displayTable()
/**
 * Display the score card table
 */
function displayTable() {
    document.querySelector('#table-container').style.display = "inline-block";
}

/**************************************************/
/*                                                */
/*        2. 'RESET BUTTON' FUNCTIONS             */
/*                                                */
/**************************************************/

// 2.1 resetSheet()
document.querySelector('#resetBtn').addEventListener('click', resetSheet);
document.querySelector('#resetBtnBottom').addEventListener('click', resetSheet);
/**
 * 'Number of players' value reset & page reload.
 */
function resetSheet() {
    document.getElementById('numOfPlayers').value = "";
    location.reload();
}

// 2.2 showInfoPanel()
/** 
 * Landing page information panel.
 * This element hides when 'Start Game' button is clicked.
 * This element unhides when either the top or bottom Reset button is clicked.
 */
 document.getElementById('resetBtn').addEventListener('click', showInfoPanel);
 document.getElementById('resetBtnBottom').addEventListener('click', showInfoPanel);
function showInfoPanel () {    
    document.getElementById('landing-info').style.display = "block";
}

/**************************************************/
/*                                                */
/*        3. 'PLAY AGAIN' FUNCTIONS               */
/*                                                */
/**************************************************/

// 3.1 playAgain()
document.querySelector('#playAgainBtn').addEventListener('click', playAgain);
function playAgain() {
    saveRunningTotal()
    resetPlayerScoreAttributes();
    window.location.href = '#table-container';   
}

// 3.2 saveRunningTotal()
/**
 * Set Player.runningTotal for each player.
 */
 function saveRunningTotal() {    
    let i = 1; // playersArray[1] is first player
    while (i < playersArray.length) {
        let playerObject = playersArray[i];
        let runningTotal = playerObject.runningTotal;
        let currentTotal = playerObject.grandTotal;

        if(typeof(runningTotal) == "undefined") {
            runningTotal = 0;
            playerObject.runningTotal = runningTotal + currentTotal;            
            document.getElementById(`RunningTotal${playerObject.id}`).innerHTML = playerObject.runningTotal;
        } else {
            playerObject.runningTotal = runningTotal + currentTotal;
            document.getElementById(`RunningTotal${playerObject.id}`).innerHTML = playerObject.runningTotal;
        }
        i++;
    }
}

// 3.3 resetPlayerScoreAttributes()
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

// 3.4 resetPlayerScoreCardHTML()
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

// 3.5 hideDice()
document.getElementById('playAgainBtn').addEventListener('click', hideDice);
/**
 * Set dice & rolling HTML element display properties to 'none'.
 */
function hideDice() {
    document.querySelector('.dice-image-area').style.display = "none";
    document.querySelector('.rolls-left').style.display = "none";
}

/**************************************************/
/*                                                */
/*        4. DICE & ROLLING FUNCTIONS             */
/*                                                */
/**************************************************/

// 4.1 createDice()
document.getElementById('rollDice').addEventListener('click', createDice);
let diceObjectArray = [];
/**
 * Checks if any dice objects have been created yet.
 * If they have not been created, create dice objects and place them into array. 
 */
function createDice() {     
    if (diceObjectArray.length == 0){
        let i = 1;
        let id;
        while (i <= 5) {
            id = `dice${i}`; // Matches the id of HTML img element of dice.        
            diceObjectArray[i] = new Dice(id);
            i++;           
        }    
    } else {
        return false;
    } 
}

// 4.2 rollDice()
document.getElementById('rollDice').addEventListener('click', rollDice);
let diceRollCounter = 1;
/**
 * Performs rolling of the dice values.
 * 
 * If diceRollCounter == 1, it is the first roll of the current player. All dice.frozen properties are set to false and getRandomDiceValue() is performed on each die.
 * 
 * Else, for turns 2 and 3, every dice with 'dice.frozen == false' is allocated a new number via getRandomDiceValue().
 * 
 * Changes #roll-number.innerHTML based on current turn.
 */
function rollDice() {
    if (diceRollCounter == 1) {        
        let i = 1;
        while (i <= 5) {
            let currentDice = diceObjectArray[i];
            currentDice.frozen = false;
            currentDice.value = getRandomDiceValue();
            setIMG(currentDice);
            i++;
        }
        diceRollCounter++;
        document.getElementById('roll-number').innerHTML = '2';        
    } else {
        let i = 1;
        while (i <= 5) {
            let currentDice = diceObjectArray[i];
            if (currentDice.frozen == false){
                currentDice.value = getRandomDiceValue();
                setIMG(currentDice);
                i++;
            }
            i++;            
        }
        if (diceRollCounter == 2){
            diceRollCounter++;
            document.getElementById('roll-number').innerHTML = '1';
        } else {
            diceRollCounter = 1;
            document.getElementById('roll-number').innerHTML = 'Next Player!';
            removeBorder();
        }                   
    } 
}

// 4.3 getRandomDiceValue()
/**
 * 
 * @returns Random integer between 1-6 inclusive.
 */
 function getRandomDiceValue() {
    return (Math.floor(Math.random() * 6) + 1);
}

// 4.4 changeFreezeState()
document.getElementById('dice1').addEventListener('click', changeFreezeState);
document.getElementById('dice2').addEventListener('click', changeFreezeState);
document.getElementById('dice3').addEventListener('click', changeFreezeState);
document.getElementById('dice4').addEventListener('click', changeFreezeState);
document.getElementById('dice5').addEventListener('click', changeFreezeState);
/**
 * Change dice object's frozen property that is associated with the img HTML element.
 * 
 * @param {object} element Img HTML element.
 */
 function changeFreezeState(element){
    let diceElement = element.target;
    let diceNum = diceElement.id;
    diceNum = parseInt(diceNum.substring(4)); 
    let currentDice = diceObjectArray[diceNum]
    currentDice.changeFrozenState();
    changeBorder(diceElement);  
}

// 4.5 changeBorder()
/**
 * Change border style of Img HTML element.
 * 
 * @param {object} diceIMG Img HTML element.
 */
 function changeBorder(diceIMG) {
    if (diceIMG.style.border == "0px solid rgb(255, 0, 0)"){
        diceIMG.style.border = "2px solid rgb(255, 0, 0)";
    } else {
        diceIMG.style.border = "0px solid rgb(255, 0, 0)";
    }
}

// 4.6 removeBorder()
/**
 * Remove border style from HTML element.
 */
 function removeBorder() {
    document.getElementById('dice1').style.border = "0px solid rgb(255, 0, 0)"
    document.getElementById('dice2').style.border = "0px solid rgb(255, 0, 0)"
    document.getElementById('dice3').style.border = "0px solid rgb(255, 0, 0)"
    document.getElementById('dice4').style.border = "0px solid rgb(255, 0, 0)"
    document.getElementById('dice5').style.border = "0px solid rgb(255, 0, 0)"
}

// 4.7 setIMG()
/**
 * Set src value of img element based on it's associated dice object value property.
 * 
 * @param {object} die Dice class object.
 */
 function setIMG(die) {
    let value = die.value;
    let id = die.id;
    document.getElementById(id).src = `/assets/img/dice/${value}.png`
}

// 4.8 showDice()
document.getElementById('rollDice').addEventListener('click', showDice);
/**
 * Set dice & rolling HTML element display properties to 'flex'.
 */
function showDice() {
    document.querySelector('.dice-image-area').style.display = "flex";
    document.querySelector('.rolls-left').style.display = "flex";
}

/**************************************************/
/*                                                */
/*        5. SCORE UPDATE FUNCTIONS               */
/*                                                */
/**************************************************/

// 5.1 fetchPlayerObject()
/**
 * Returns Player class object associated with a HTML element.
 * 
 * @param {object} element A HTML element.
 * @returns {playerObject} A Player class object.
 */
 function fetchPlayerObject(element) {    
    let elementClassName = element.className; // Class name of the element is always 'playeri', i = a number    
    let playerNumber = elementClassName.substr(6); // Isolate the number. This matches the player's position in playersArray    
    let playerObject = playersArray[playerNumber];
    return playerObject;
}

// 5.2 updateName()
/**
 * Sets Player.name property
 * 
 * @param {object} element A HTML element object.
 */
 function updateName(element) {
    let playerObject = fetchPlayerObject(element);
    playerObject.name = element.value;    
}

// 5.3 runUpdates()
/**
 * Function triggered by 'oninput' attribute of all input fields on the table.
 * Parses HTML element object and Player object to functions that update saved scores.
 * 
 * @param {object} element  A HTML element object.
 */
 function runUpdates(element) {
    let playerObject = fetchPlayerObject(element);
    updateScore(element, playerObject);
    updateUpperScores(playerObject);
    updateBottomScores(playerObject);    
    checkBonus(playerObject);
    updateTopTotalScore(playerObject);    
    updateGrandTotalScore(playerObject);
}

// 5.3.1 updateScore()
/**
 * Updates Player class property related to the input field.
 * @example Player 1 'ones' score input field has '2' input by user. Player.ones property associated with Player 1 is updated with the number '2'.
 * 
 * 
 * @param {object} element Html Object.
 * @param {object} playerObject Player object.
 */
 function updateScore(element, playerObject) {    
    let elementID = element.id;
    /** 
     * Isolate the part of the elemendID string that relates to the player object property
     * Example: elementID = scoreOnesPlayer2
     * Isolate: ones
     * This matches playerObject.ones property name
     */
    elementID = elementID.replace("score", "");
    elementID = elementID.replace("Player", "");
    elementID = elementID.replace(/[0-9]/g, "");    
    elementID = elementID.charAt(0).toLowerCase() + elementID.slice(1); // First letter needs to be lowercase to match the player object property    
    playerObject[elementID] = parseInt(element.value); // Set playerObject property to the value of html input field     
}

// 5.3.2 updateUpperScores()
/**
 * Sets the Player.topScore property and innerHTML value of associated table cell.
 * 
 * @param {object} playerObject A Player class object.
 */
 function updateUpperScores(playerObject) {     
    let playerObjectArray = Object.values(playerObject);
    let total = 0;    
    let i = 2; // i starts at '2', this is the position in playerObjectArray of the first score

    while (i <= 7) { // playerObjectArray[7] is last score to be added
        if (typeof(playerObjectArray[i]) == "undefined" || isNaN(playerObjectArray[i])) {
            total += 0;
        } else {
            total += playerObjectArray[i];
        } i++;
    }    
    playerObject.topScore = total; // set TopScore attribute of the playerObject
    document.getElementById(`topScore${
        playerObject.id
    }`).innerHTML = playerObject.topScore; // set value of topScore element innerHTML
}

// 5.3.3 updateBottomScores()
/**
 * Sums scores of lower section of table.
 * Sets Player.bottomScore.
 * Set innerHTML of element associated with this score.
 * 
 * @param {object} playerObject  A Player class object.
 */
 function updateBottomScores(playerObject) { 
    let playerObjectArray = Object.values(playerObject);
    let total = 0;    
    let i = 8; // playerObjectArray[8] is the first score required

    while (i <= 14) { // playerObjectArray[14] is last score required
        if (typeof(playerObjectArray[i]) == "undefined" || isNaN(playerObjectArray[i])) {
            total += 0;
        } else {
            total += playerObjectArray[i];
        } i++;
    }    
    playerObject.bottomScore = total;
    document.getElementById(`totalLower${
        playerObject.id
    }`).innerHTML = playerObject.bottomScore;  
}

// 5.3.4 checkBonus()
/**
 * Set Player.bonus property value.
 * Set innerHTML of element to a value based on Player.bonus property value.
 * 
 * @param {object} playerObject A Player class object.
 */
 function checkBonus(playerObject) { 
    playerObject.updateBonus();

    if (playerObject.bonus == 35) {        
        document.getElementById(`bonusScore${
            playerObject.id
        }`).innerHTML = playerObject.bonus;        
        document.getElementById(`bonusScore${
            playerObject.id
        }`).style.color = "#35B897";
    } else {        
        document.getElementById(`bonusScore${
            playerObject.id
        }`).innerHTML = '---';        
        document.getElementById(`bonusScore${
            playerObject.id
        }`).style.color = "#FF7B7B";
    }
}

// 5.3.5 updateTopTotalScore()
/**
 * Set Player.topTotalScore property value.
 * Set innerHTML of element associated with this score.
 * 
 * @param {object} playerObject A Player class object.
 */
 function updateTopTotalScore(playerObject) { 
    playerObject.calcTopTotalScore();
    document.getElementById(`totalTopScore${
        playerObject.id
    }`).innerHTML = playerObject.topTotalScore;
    document.getElementById(`bottomTopScore${
        playerObject.id
    }`).innerHTML = playerObject.topTotalScore;
}

// 5.3.6 updateGrandTotalScore()
/**
 * Set Player.grandTotal property value.
 * Set innerHTML of element associated with this score.
 * 
 * @param {oobject} playerObject  A Player class object.
 */
 function updateGrandTotalScore(playerObject) {    
    if (typeof(playerObject.topTotalScore) == "undefined") {
        if (typeof(playerObject.bottomScore) == "undefined") {
            playerObject.grandTotal = 0;
        } else {
            playerObject.grandTotal = playerObject.bottomScore;
        }
    } else if (typeof(playerObject.bottomScore) == "undefined") {
        if (typeof(playerObject.topTotalScore) == "undefined") {
            playerObject.grandTotal = 0;
        } else {
            playerObject.grandTotal = playerObject.topTotalScore;
        }
    } else {
        playerObject.grandTotal = playerObject.topTotalScore + playerObject.bottomScore;
    }    
    document.getElementById(`GrandTotal${
        playerObject.id
    }`).innerHTML = playerObject.grandTotal;
}

/**************************************************/
/*                                                */
/*        MISC PAGE FUNCTIONS                     */
/*                                                */
/**************************************************/

// Stops mousescroll from increasing number in input field. Scrolls table instead.
document.addEventListener("wheel", function (event) {
    if (document.activeElement.type === "number") {
        document.activeElement.blur();
    }
});