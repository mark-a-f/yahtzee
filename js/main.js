// CONTENTS TABLE:
// 1. line 7 - Class Player
// 2. line 66 - Dynamic Creation of Score Table
// 3. line 242 - Page reset button (maybe move this to a seperate section with smaller page functions)
// 4. line 249 - Creation of Player Object
// 5.


// new class to hold player information
// This class holds the information for their unique id, player name and all their scores
class player {
    constructor(id, name, ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, chance, yahtzee, topScore, topTotalScore, bonus, bottomScore, grandTotal) {

        this.id = id;
        this.name = name;
        this.ones = ones;
        this.twos = twos;
        this.threes = threes;
        this.fours = fours;
        this.fives = fives;
        this.sixes = sixes;
        this.threeOfKind = threeOfKind;
        this.fourOfKind = fourOfKind;
        this.fullHouse = fullHouse;
        this.smallStraight = smallStraight;
        this.largeStraight = largeStraight;
        this.chance = chance;
        this.yahtzee = yahtzee;
        this.topScore = topScore;
        this.topTotalScore = topTotalScore;
        this.bonus = bonus;
        this.bottomScore = bottomScore;
        this.grandTotal = grandTotal;
    }

    // Setters
    set updateName(value) {
        this.name = value;
    }

    set updateOnes(value) {
        this.ones = value;
    }

    set updateTwos(value) {
        this.twos = value;
    }

    set updateThrees(value) {
        this.threes = value;
    }

    set updateFours(value) {
        this.fours = value;
    }

    set updateFives(value) {
        this.fives = value;
    }

    set updateSixes(value) {
        this.sixes = value;
    }

    set updateBonus(value) {
        this.bonus = value;
    }

    set updateTopScore(value) {
        this.topScore = value;
    }

    set updateTopTotalScore(value) {
        this.topTotalScore = value;
    }

    set updateThreeOfKind(value) {
        this.threeOfKind = value;
    }

    set updateFourOfKind(value) {
        this.fourOfKind = value;
    }

    set updateFullHouse(value) {
        this.fullHouse = value;
    }

    set updateSmallStraight(value) {
        this.smallStraight = value;
    }

    set updateLargeStraight(value) {
        this.largeStraight = value;
    }

    set updateChance(value) {
        this.chance = value;
    }

    set updateYahtzee(value) {
        this.yahtzee = value;
    }

    set updateBottomScore(value) {
        this.bottomScore = value;
    }

    set updateGrandTotal(value) {
        this.grandTotal = value;
    }
}

// ***************************************************************************/
// ***************************************************************************/
// DYNAMIC CREATION OF SCORE TABLE
// ***************************************************************************///***************************************************************************/

document.querySelector('#startBtn').addEventListener('click', addPlayers);
function addPlayers() { // variable to store input value of number of players
    let numOfPlayers = document.querySelector('#numOfPlayers').value

    // Data validation to prevent empty string or a non-number being used
    if (numOfPlayers == '' || isNaN(numOfPlayers) || numOfPlayers > 8) {
        alert('Please enter a number. Maximum 8 players.')
        return null;
    } else {
        let elementToAppend;
        let elementToCreate;
        let htmlToInsert;
        let i = 1;
        while (i <= numOfPlayers) {
            // For each player
            // Select the table row, append the correct child to it

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
            htmlToInsert = `<td><input type="number" id="scoreOnesPlayer${i}" class="player${i}" oninput="updateOnesScore(this)"></td>`;
            elementToCreate.innerHTML = htmlToInsert;
            elementToAppend.appendChild(elementToCreate);

            // Twos scores row
            elementToAppend = document.getElementById('row3');
            elementToCreate = document.createElement('td');
            htmlToInsert = `<td><input type="number" id="scoreTwosPlayer${i}" class="player${i}" oninput="updateTwosScore(this)"></td>`;
            elementToCreate.innerHTML = htmlToInsert;
            elementToAppend.appendChild(elementToCreate);

            // Threes scores row
            elementToAppend = document.getElementById('row4');
            elementToCreate = document.createElement('td');
            htmlToInsert = `<td><input type="number" id="scoreThreesPlayer${i}" class="player${i}" oninput="updateThreesScore(this)"></td>`;
            elementToCreate.innerHTML = htmlToInsert;
            elementToAppend.appendChild(elementToCreate);

            // Fours scores row
            elementToAppend = document.getElementById('row5');
            elementToCreate = document.createElement('td');
            htmlToInsert = `<td><input type="number" id="scoreFoursPlayer${i}" class="player${i}" oninput="updateFoursScore(this)"></td>`;
            elementToCreate.innerHTML = htmlToInsert;
            elementToAppend.appendChild(elementToCreate);

            // Fives scores row
            elementToAppend = document.getElementById('row6');
            elementToCreate = document.createElement('td');
            htmlToInsert = `<td><input type="number" id="scoreFivesPlayer${i}" class="player${i}" oninput="updateFivesScore(this)"></td>`;
            elementToCreate.innerHTML = htmlToInsert;
            elementToAppend.appendChild(elementToCreate);

            // Sixes scores row
            elementToAppend = document.getElementById('row7');
            elementToCreate = document.createElement('td');
            htmlToInsert = `<td><input type="number" id="scoreSixesPlayer${i}" class="player${i}" oninput="updateSixesScore(this)"></td>`;
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
            htmlToInsert = `<td><input type="number" id="scoreThreeOfAKindPlayer${i}" class="player${i}" oninput="updateThreeOfKindScore(this)"></td>`;
            elementToCreate.innerHTML = htmlToInsert;
            elementToAppend.appendChild(elementToCreate);

            // 4 of a kind score row
            elementToAppend = document.getElementById('row12');
            elementToCreate = document.createElement('td');
            htmlToInsert = `<td><input type="number" id="scoreFourOfAKindPlayer${i}" class="player${i}" oninput="updateFourOfKindScore(this)"></td>`;
            elementToCreate.innerHTML = htmlToInsert;
            elementToAppend.appendChild(elementToCreate);

            // Full house score row
            elementToAppend = document.getElementById('row13');
            elementToCreate = document.createElement('td');
            htmlToInsert = `<td><input type="number" id="scoreFullHousePlayer${i}" class="player${i}" oninput="updateFullHouseScore(this)"></td>`;
            elementToCreate.innerHTML = htmlToInsert;
            elementToAppend.appendChild(elementToCreate);

            // Small straight score row
            elementToAppend = document.getElementById('row14');
            elementToCreate = document.createElement('td');
            htmlToInsert = `<td><input type="number" id="scoreSmallStraightPlayer${i}" class="player${i}" oninput="updateSmallStraightScore(this)"></td>`;
            elementToCreate.innerHTML = htmlToInsert;
            elementToAppend.appendChild(elementToCreate);

            // Large straight score row
            elementToAppend = document.getElementById('row15');
            elementToCreate = document.createElement('td');
            htmlToInsert = `<td><input type="number" id="scoreLargeStraightPlayer${i}" class="player${i}" oninput="updateLargeStraightScore(this)"></td>`;
            elementToCreate.innerHTML = htmlToInsert;
            elementToAppend.appendChild(elementToCreate);

            // Yahtzee score row
            elementToAppend = document.getElementById('row16');
            elementToCreate = document.createElement('td');
            htmlToInsert = `<td><input type="number" id="scoreYahtzeePlayer${i}" class="player${i}"  oninput="updateYahtzeeScore(this)"></td>`;
            elementToCreate.innerHTML = htmlToInsert;
            elementToAppend.appendChild(elementToCreate);

            // Chance score row
            elementToAppend = document.getElementById('row17');
            elementToCreate = document.createElement('td');
            htmlToInsert = `<td><input type="number" id="scoreChancePlayer${i}" class="player${i}" oninput="updateChanceScore(this)"></td>`;
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

            i++;
        }
        // Create the player objects
        createPlayers(numOfPlayers);
    }
}

// ***************************************************************************/
// ***************************************************************************/
// CREATION OF PLAYER OBJECTS
// ***************************************************************************/
// ***************************************************************************/

// Array to store the player objects
let playersArray = [];

function createPlayers(numOfPlayers) {
    // Function accepts a number, creates a playerObject for each player
    // Places this playerObject into playersArray

    let name;

    // set iteration variable
    let i = 1;

    while (i <= numOfPlayers) { // This ID will match with the element class of every element associated with this player
        id = `Player${i}`;
        name = `Player ${i}`;

        // Create new player object
        playersArray[i] = new player(id, name);

        // increase iterator
        i++;
    }
}


// **************************************************************
// **************************************************************
// FUNCTIONS TO UPDATE SCORES & PLAYER OBJECT ATTRIBUTES
// These are triggered by oninput/onblur attribute on the element where the score is entered

// Function accepts a HTML element, returns the playerObject associated with this element
function fetchPlayerObject(item) {
    let elementClassName = item.className;
    // playerNumber holds the player's number, this matches it's position in playersArray
    let playerNumber = elementClassName.substr(6);
    // Choose correct player in player array
    let playerObject = playersArray[playerNumber];
    return playerObject;
}

// Update Player Name
function updateName(item) {
    let playerObject = fetchPlayerObject(item);
    playerObject.updateName = item.value;    
}


function updateOnesScore(item) { // Pass item (HTML element) to fetchPlayerObject, recieve playerObject in return
    let playerObject = fetchPlayerObject(item);
    // Set ones score attribute in playerObject to the value of html element
    playerObject.updateOnes = parseInt(item.value);
    // Run function to update the upperScore element
    updateUpperScores(playerObject);
}

function updateTwosScore(item) {
    let playerObject = fetchPlayerObject(item);
    playerObject.updateTwos = parseInt(item.value);
    updateUpperScores(playerObject);
}

function updateThreesScore(item) {
    let playerObject = fetchPlayerObject(item);
    playerObject.updateThrees = parseInt(item.value);
    updateUpperScores(playerObject);
}

function updateFoursScore(item) {
    let playerObject = fetchPlayerObject(item);
    playerObject.updateFours = parseInt(item.value);
    updateUpperScores(playerObject);
}

function updateFivesScore(item) {
    let playerObject = fetchPlayerObject(item);
    playerObject.updateFives = parseInt(item.value);
    updateUpperScores(playerObject);
}

function updateSixesScore(item) {
    let playerObject = fetchPlayerObject(item);
    playerObject.updateSixes = parseInt(item.value);
    updateUpperScores(playerObject);
}

function updateThreeOfKindScore(item) {
    let playerObject = fetchPlayerObject(item);
    playerObject.updateThreeOfKind = parseInt(item.value);
    updateBottomScores(playerObject);
}

function updateFourOfKindScore(item) {
    let playerObject = fetchPlayerObject(item);
    playerObject.updateFourOfKind = parseInt(item.value);
    updateBottomScores(playerObject);
}

function updateFullHouseScore(item) {
    let playerObject = fetchPlayerObject(item);
    playerObject.updateFullHouse = parseInt(item.value);
    updateBottomScores(playerObject);
}

function updateSmallStraightScore(item) {
    let playerObject = fetchPlayerObject(item);
    playerObject.updateSmallStraight = parseInt(item.value);
    updateBottomScores(playerObject);
}

function updateLargeStraightScore(item) {
    let playerObject = fetchPlayerObject(item);
    playerObject.updateLargeStraight = parseInt(item.value);
    updateBottomScores(playerObject);
}

function updateChanceScore(item) {
    let playerObject = fetchPlayerObject(item);
    playerObject.updateChance = parseInt(item.value);
    updateBottomScores(playerObject);
}

function updateYahtzeeScore(item) {
    let playerObject = fetchPlayerObject(item);
    playerObject.updateYahtzee = parseInt(item.value);
    updateBottomScores(playerObject);
}

// ********************************************************************/
// AUTOMATIC SCORE UPDATE FUNCTIONS
// These are for Upper Score, Bonus Score, Total of upper section


function updateUpperScores(playerObject) {
    // Accepts playerObject, totals the values of the top scores, inserts this value into the Total Score field in the top section of the score sheet

    // Generate array of each attribute in playerObject to then iterate over
    let playerObjectArray = Object.values(playerObject);

    let total = 0;
    // i starts at '2' as this is the position in playerObjectArray of the first score
    let i = 2;

    // loop through up to and including the final score (score for sixes = position 7) in playerObject
    while (i <= 7) {
        if (typeof(playerObjectArray[i]) == "undefined" || isNaN(playerObjectArray[i])) {
            total += 0;
        } else {
            total += playerObjectArray[i];
        } i++;
    }

    // set TopScore attribute of the playerObject
    playerObject.updateTopScore = total;

    // set value of topScore element
    document.getElementById(`topScore${
        playerObject.id
    }`).innerHTML = total;

    // Score check & update functions to run
    checkBonus(playerObject, total);
    updateTopTotalScore(playerObject, total, playerObject.bonus);
    // Update Grand Total
    updateGrandTotalScore(playerObject)

}

// CHECK FOR BONUS AND UPDATE FIELD
function checkBonus(playerObject, total) {
    // Accepts playerObject and total score
    // If total score is greater than 62, set Bonus attribute of player object to 35 and update HTML with the score
    // If total score is 62 or less, set Bonus attribute to zero and update HTML with score

    // if total greater than 62, the Bonus is active (extra 35 points for the top section)
    if (total > 62) { // set bonus attribute to 35 points
        playerObject.updateBonus = 35;
        // set value of Bonus box on sheet
        document.getElementById(`bonusScore${
            playerObject.id
        }`).innerHTML = 35;
        // change element text colour
        document.getElementById(`bonusScore${
            playerObject.id
        }`).style.color = "#35B897";
    } else { // set bonus attribute to 0
        playerObject.updateBonus = 0;
        // set value of Bonus box on sheet
        document.getElementById(`bonusScore${
            playerObject.id
        }`).innerHTML = '---';
        // change element text colour
        document.getElementById(`bonusScore${
            playerObject.id
        }`).style.color = "#FF7B7B";
    }
}

// CALCULATE AND UPDATE TOTAL OF UPPER SECTION
function updateTopTotalScore(playerObject, total, bonus) {
    // Adds total and bonus together
    // Sets TopTotalScore attribute of player object
    // Sets HTML of table element to display TopTotalScore

    playerObject.updateTopTotalScore = total + bonus;
    document.getElementById(`totalTopScore${
        playerObject.id
    }`).innerHTML = playerObject.topTotalScore;
    document.getElementById(`bottomTopScore${
        playerObject.id
    }`).innerHTML = playerObject.topTotalScore;
}

// CALCULATE AND UPDATE BOTTOM TOTAL SCORE
function updateBottomScores(playerObject) {
    // Accepts playerObject, totals the values of the bottom scores, inserts this value into the Total of lower section field in the bottom section of the score sheet

    // Generate array of each attribute in playerObject to then iterate over
    let playerObjectArray = Object.values(playerObject);

    let total = 0;
    // i starts at '8' as this is the position in playerObjectArray of the first score of the lower section
    let i = 8;

    // loop through up to and including the final score (score for sixes = position 14) in playerObject
    while (i <= 14) {
        if (typeof(playerObjectArray[i]) == "undefined" || isNaN(playerObjectArray[i])) {
            total += 0;
        } else {
            total += playerObjectArray[i];
        } i++;
    }

    // set BottomScore attribute of the playerObject
    playerObject.updateBottomScore = total;

    // set value of totalLower element
    document.getElementById(`totalLower${
        playerObject.id
    }`).innerHTML = playerObject.bottomScore;

    // Update Grand Total
    updateGrandTotalScore(playerObject)

}

function updateGrandTotalScore(playerObject) {
    // Calculate & update Grand Total for Player

    // If the top and bottom total scores are currently undefined, set GrandTotal to zero.
    // If either the top or bottom total score have a value, and the other is undefined, set GrandTotal to the valid value
    // Else add top & bottom total score and set this as Grand Total value
    if (typeof(playerObject.topTotalScore) == "undefined") {
        if (typeof(playerObject.bottomScore) == "undefined") {
            playerObject.updateGrandTotal = 0;
        } else {
            playerObject.updateGrandTotal = playerObject.bottomScore;
        }
    } else if (typeof(playerObject.bottomScore) == "undefined") {
        if (typeof(playerObject.topTotalScore) == "undefined") {
            playerObject.updateGrandTotal = 0;
        } else {
            playerObject.updateGrandTotal = playerObject.topTotalScore;
        }
    } else {
        playerObject.updateGrandTotal = playerObject.topTotalScore + playerObject.bottomScore;
    }

    // Set html of Grand Total element
    document.getElementById(`GrandTotal${
        playerObject.id
    }`).innerHTML = playerObject.grandTotal;
}


// ***************************************************** */
// PAGE FUNCTIONS
// ****************************************************** */
// Page refresh when Rest button pressed
document.querySelector('#resetBtn').addEventListener('click', resetSheet);
function resetSheet() {
    location.reload();
}

// Reset score sheet but keep names when Play Again button pressed
document.querySelector('#playAgainBtn').addEventListener('click', playAgain);
function playAgain() {
    resetPlayerScoreAttributes();    
}

function resetPlayerScoreAttributes() {
    // Reset all scores to zero, but keep the playerObject.name attribute the same
    // Cycle through playersArray
    // Cycle through each attribute of object, set to zero
    let i = 1;
    while (i < playersArray.length) {
        // Select playerObject
        let currentPlayer = playersArray[i]
        // Reset score attributes to 0
        currentPlayer.updateOnes = 0;
        currentPlayer.updateTwos = 0;
        currentPlayer.updateThrees = 0;
        currentPlayer.updateFours = 0;
        currentPlayer.updateFives = 0;
        currentPlayer.updateSixes = 0;
        currentPlayer.updateBonus = 0;
        currentPlayer.updateTopScore = 0;
        currentPlayer.updateTopTotalScore = 0;
        currentPlayer.updateThreeOfKind = 0;
        currentPlayer.updateFourOfKind = 0;
        currentPlayer.updateFullHouse = 0;
        currentPlayer.updateSmallStraight = 0;
        currentPlayer.updateLargeStraight = 0;
        currentPlayer.updateChance = 0;
        currentPlayer.updateYahtzee = 0;
        currentPlayer.updateBottomScore = 0;
        currentPlayer.updateGrandTotal = 0;      
        
        resetPlayerScoreCardHTML(currentPlayer);

        i ++;
    }
}

function resetPlayerScoreCardHTML(playerObject) {
    // Accepts playerObject object
    // Sets all HTML element scores associated with this player to blank

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
    // change element text colour - unique to bonusScore element
    document.getElementById(`bonusScore${
        playerObject.id
    }`).style.color = "#FF7B7B";
    document.getElementById(`totalTopScore${
        playerObject.id
    }`).innerHTML = '';
    document.getElementById(`scoreThreeOfAKind${
        playerObject.id
    }`).value = '';
    document.getElementById(`scoreFourOfAKind${
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

// Disable mouse-scroll on number input fields
document.addEventListener("wheel", function (event) {
    if (document.activeElement.type === "number") {
        document.activeElement.blur();
    }
});
