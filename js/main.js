// CONTENTS TABLE:
// 1. line 7 - Class Player
// 2. line 66 - Dynamic Creation of Score Table
// 3. line 242 - Page reset button (maybe move this to a seperate section with smaller page functions)
// 4. line 249 - Creation of Player Object
// 5. 

// new class to hold player information
// This class holds the information for their unique id, player name and all their scores
class player {
    constructor(id, name, ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, chance, topScore, topTotalScore, bonus) {

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
        this.topScore = topScore;
        this.topTotalScore = topTotalScore;
        this.bonus = bonus;               
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
}

//***************************************************************************/
//***************************************************************************/
// DYNAMIC CREATION OF SCORE TABLE
//***************************************************************************///***************************************************************************/

document.querySelector('#startBtn').addEventListener('click', addPlayers);
function addPlayers() {   
       
    // variable to store input value of number of players
    let numOfPlayers = document.querySelector('#numOfPlayers').value
    
    // Data validation to prevent empty string or a non-number being used
    if (numOfPlayers == '' || isNaN(numOfPlayers) || numOfPlayers > 8){
        alert('Please enter a number. Maximum 8 players.')        
        return null;
    } else {
        let elementToAppend;
        let elementToCreate;
        let htmlToInsert;
        let i = 1;
        while (i <= numOfPlayers){            
            // For each player
            // Select the table row, append the correct child to it            

            // Top Row
            // Select the parent row by it's id
            elementToAppend = document.getElementById('row1');
            // Create 'th' element
            elementToCreate = document.createElement('th');
            // html that changes based on player number (i)
            htmlToInsert = `<th><input type="text" placeholder="Player ${i}" id="player${i}" class="player${i}" onblur="updateScores(this)"></th>`;
            // set this html to the inner html of the element that is to be created
            elementToCreate.innerHTML = htmlToInsert;
            // add this element child to the parent
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
            htmlToInsert = `<td><span id="bonusScorePlayer${i}" class="player${i}"></span></td>`;
            elementToCreate.innerHTML = htmlToInsert;
            elementToAppend.appendChild(elementToCreate);

            // Top total score row
            elementToAppend = document.getElementById('row10');
            elementToCreate = document.createElement('td');
            htmlToInsert = `<td><span id="totalTopScorePlayer${i}" class="player${i}"></span></td>`;
            elementToCreate.innerHTML = htmlToInsert;
            elementToAppend.appendChild(elementToCreate);

            // 3 of a kind score row
            elementToAppend = document.getElementById('row11');
            elementToCreate = document.createElement('td');
            htmlToInsert = `<td><input type="number" id="scoreThreeOfAKindPlayer${i}" class="player${i}"></td>`;
            elementToCreate.innerHTML = htmlToInsert;
            elementToAppend.appendChild(elementToCreate);

            // 4 of a kind score row
            elementToAppend = document.getElementById('row12');
            elementToCreate = document.createElement('td');
            htmlToInsert = `<td><input type="number" id="scoreFourOfAKindPlayer${i}" class="player${i}"></td>`;
            elementToCreate.innerHTML = htmlToInsert;
            elementToAppend.appendChild(elementToCreate);

            // Full house score row
            elementToAppend = document.getElementById('row13');
            elementToCreate = document.createElement('td');
            htmlToInsert = `<td><input type="checkbox" id="scoreFullHousePlayer${i}" class="player${i}"></td>`;
            elementToCreate.innerHTML = htmlToInsert;
            elementToAppend.appendChild(elementToCreate);

            // Small straight score row
            elementToAppend = document.getElementById('row14');
            elementToCreate = document.createElement('td');
            htmlToInsert = `<td><input type="checkbox" id="scoreSmallStraightPlayer${i}" class="player${i}"></td>`;
            elementToCreate.innerHTML = htmlToInsert;
            elementToAppend.appendChild(elementToCreate);

            // Large straight score row
            elementToAppend = document.getElementById('row15');
            elementToCreate = document.createElement('td');
            htmlToInsert = `<td><input type="checkbox" id="scoreLargeStraightPlayer${i}" class="player${i}"></td>`;
            elementToCreate.innerHTML = htmlToInsert;
            elementToAppend.appendChild(elementToCreate);

            // Yahtzee score row
            elementToAppend = document.getElementById('row16');
            elementToCreate = document.createElement('td');
            htmlToInsert = `<td><input type="checkbox" id="scoreYahtzeePlayer${i}" class="player${i}"></td>`;
            elementToCreate.innerHTML = htmlToInsert;
            elementToAppend.appendChild(elementToCreate);

            // Chance score row
            elementToAppend = document.getElementById('row17');
            elementToCreate = document.createElement('td');
            htmlToInsert = `<td><input type="number" id="scoreChancePlayer${i}" class="player${i}"></td>`;
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
            htmlToInsert = `<td.<span id="totalTopScorePlayer${i}" class="player${i}"></span></td>`;
            elementToCreate.innerHTML = htmlToInsert;
            elementToAppend.appendChild(elementToCreate);

            // Grand total score row
            elementToAppend = document.getElementById('row20');
            elementToCreate = document.createElement('td');
            htmlToInsert = `<td><span id="GrandTotalPlayer${i}" class="player${i}"></span></td>`;
            elementToCreate.innerHTML = htmlToInsert;
            elementToAppend.appendChild(elementToCreate);

            // increase iterator
            i++;
        }
        // Create the player objects
        createPlayers(numOfPlayers);

    }

}

//***************************************************************************/
//***************************************************************************/
// CREATION OF PLAYER OBJECTS
//***************************************************************************/
//***************************************************************************/

// Array to store the player objects
let playersArray = [];

function createPlayers(numOfPlayers) {
    // Function accepts a number, creates a playerObject for each player using default values for scores
    // Places this playerObject into playersArray        
    
    // Default values to pass into player object
    // Prevents NaN errors   
     let name;
    // let onesScore = 0;
    // let twosScore = 0;
    // let threesScore = 0;
    // let foursScore = 0;
    // let fivesScore = 0;
    // let sixesScore = 0;
    // let threeOfKind = 0;
    // let fourOfKind = 0;
    // let fullHouse = 0;
    // let smallStraight = 0;
    // let largeStraight = 0;
    // let chance = 0;
    // let bonus = 0;    

    // set iteration variable
    let i = 1;

    while (i <= numOfPlayers) {
        // This ID will match with the element class of every element associated with this player
        id = `Player${i}`;
        name = `Player ${i}`;        

        // Create new player object
        playersArray[i] = new player(id, name);        

        // increase iterator
        i++;
    }
}


// When a score is entered, that score needs to go into the correct part of the Player object
// Event listener on the element
// Use the element's class name to link to the correct player (element class name + player ID will match)
//

// NOT USING THIS RIGHT NOW - POTENTIAL FOR REMOVAL
function updateScores(item) {
    
    // item is the element where the score was entered

    // Find which player the entered score belongs to
    // Go through all other score elements associated with this player
    // Update their scores

    // Store the class name and ID of the element that caused the function to trigger
    // This can be used to associate the score to the correct player    

    let elementClassName = item.className;
    let elementID = item.id;

    console.log('ELEMENT CLASS NAME = ' + elementClassName);
    console.log('ELEMENT ID = ' + elementID);

    // elementClassName = player1
    // elementID = scoreOnesPlayer1
    
    // playerNumber holds the player's number, this matches it's position in playersArray
    let playerNumber = elementClassName.substr(6);
    console.log('PlayerNumber = ' + playerNumber);

    let playerOjbect = playersArray[playerNumber];
    console.log(playerOjbect);  
}

// Function accepts a HTML element, returns the playerObject associated with this element
function fetchPlayerObject(item) {

    let elementClassName = item.className;
    // playerNumber holds the player's number, this matches it's position in playersArray
    let playerNumber = elementClassName.substr(6);
    // Choose correct player in player array
    let playerObject = playersArray[playerNumber];

    return playerObject;
}

//**************************************************************
//**************************************************************
// FUNCTIONS TO UPDATE SCORES
// These are triggered by onblur attribute on the element where the score is entered

function updateOnesScore(item) {   

    // Pass item (HTML element) to fetchPlayerObject, recieve playerObject in return
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

    console.log(playerObject);    
}

//********************************************************************/
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
        if (typeof(playerObjectArray[i]) == "undefined" || isNaN(playerObjectArray[i]) ) {
            total += 0;
        } else {
            total += playerObjectArray[i];
        }
        
        i++;
    }

    // set TopScore attribute of the playerObject
    playerObject.updateTopScore = total;      

    // set value of topScore element
    document.getElementById(`topScore${playerObject.id}`).innerHTML = total;

    // Score check & update functions to run
    checkBonus(playerObject, total);
    updateTopTotalScore(playerObject, total, playerObject.bonus); 

}

// CHECK FOR BONUS AND UPDATE FIELD
function checkBonus(playerObject, total) {
    // Accepts playerObject and total score
    // If total score is greater than 62, set Bonus attribute of player object to 35 and update HTML with the score
    // If total score is 62 or less, set Bonus attribute to zero and update HTML with score

    // if total greater than 62, the Bonus is active (extra 35 points for the top section)
    if (total > 62) {
        // set bonus attribute to 35 points
        playerObject.updateBonus = 35;
        // set value of Bonus box on sheet
        document.getElementById(`bonusScore${playerObject.id}`).innerHTML = 35;
    } else {
        // set bonus attribute to 0
        playerObject.updateBonus = 0;
        // set value of Bonus box on sheet
        document.getElementById(`bonusScore${playerObject.id}`).innerHTML = 0;
    }
}

// CALCULATE AND UPDATE TOTAL OF UPPER SECTION
function updateTopTotalScore(playerObject, total, bonus) {
    // Adds total and bonus together
    // Sets TopTotalScore attribute of player object
    // Sets HTML of table element to display TopTotalScore
    
    playerObject.updateTopTotalScore = total + bonus;
    document.getElementById(`totalTopScore${playerObject.id}`).innerHTML = playerObject.topTotalScore;
}











//***************************************************** */
// PAGE FUNCTIONS
//****************************************************** */
// Page refresh when Rest button pressed
document.querySelector('#resetBtn').addEventListener('click', resetSheet);
function resetSheet() {
    location.reload();
}

