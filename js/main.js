// new class to hold player information
class player {
    constructor(id, name, ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, chance, topScore) {

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

    set updateTopScore(value) {
        this.topScore = value;
    }
}

// Dynamically create table columns based on number of players
document.querySelector('#createSheet').addEventListener('click', addPlayers);
function addPlayers() {   
       
    // variable to store input value of number of players
    let numOfPlayers = document.querySelector('#numOfPlayers').value
    
    // Data validation to prevent empty string or a non-number being used
    if (numOfPlayers == '' || isNaN(numOfPlayers)){
        alert('Please enter a number.')        
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
            elementToAppend = document.getElementById('row1');
            elementToCreate = document.createElement('th');
            htmlToInsert = `<th><input type="text" placeholder="Player ${i}" id="player${i}" class="player${i}" onblur="updateScores(this)"></th>`;
            elementToCreate.innerHTML = htmlToInsert;
            elementToAppend.appendChild(elementToCreate);

            // Ones scores row
            elementToAppend = document.getElementById('row2');
            elementToCreate = document.createElement('td');
            htmlToInsert = `<td><input type="number" id="scoreOnesPlayer${i}" class="player${i}" onblur="updateOnesScore(this)"></td>`;
            elementToCreate.innerHTML = htmlToInsert;
            elementToAppend.appendChild(elementToCreate);

            // Twos scores row
            elementToAppend = document.getElementById('row3');
            elementToCreate = document.createElement('td');
            htmlToInsert = `<td><input type="number" id="scoreTwosPlayer${i}" class="player${i}" onblur="updateTwosScore(this)"></td>`;
            elementToCreate.innerHTML = htmlToInsert;
            elementToAppend.appendChild(elementToCreate);

            // Threes scores row
            elementToAppend = document.getElementById('row4');
            elementToCreate = document.createElement('td');
            htmlToInsert = `<td><input type="number" id="scoreThreesPlayer${i}" class="player${i}" onblur="updateThreesScore(this)"></td>`;
            elementToCreate.innerHTML = htmlToInsert;
            elementToAppend.appendChild(elementToCreate);

            // Fours scores row
            elementToAppend = document.getElementById('row5');
            elementToCreate = document.createElement('td');
            htmlToInsert = `<td><input type="number" id="scoreFoursPlayer${i}" class="player${i}" onblur="updateFoursScore(this)"></td>`;
            elementToCreate.innerHTML = htmlToInsert;
            elementToAppend.appendChild(elementToCreate);

            // Fives scores row
            elementToAppend = document.getElementById('row6');
            elementToCreate = document.createElement('td');
            htmlToInsert = `<td><input type="number" id="scoreFivesPlayer${i}" class="player${i}" onblur="updateFivesScore(this)"></td>`;
            elementToCreate.innerHTML = htmlToInsert;
            elementToAppend.appendChild(elementToCreate);

            // Sixes scores row
            elementToAppend = document.getElementById('row7');
            elementToCreate = document.createElement('td');
            htmlToInsert = `<td><input type="number" id="scoreSixesPlayer${i}" class="player${i}" onblur="updateSixesScore(this)"></td>`;
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


            i++;
        }
        // Run function to create player objects
        createPlayers(numOfPlayers);

    }

}


// Page refresh when Rest button pressed
document.querySelector('#resetSheet').addEventListener('click', resetSheet);
function resetSheet() {
    location.reload();
}



// Create player objects

// Array to store each object of player
let playersArray = [];

function createPlayers(numOfPlayers) {        
    
    // Default values to pass into player object    
    // DO I NEED TO DO THIS??????
    // I DIDN'T SET ANYTHING FOR TOPSCORE YET IT STILL WORKS
    // CHECK THIS 
    let name;
    let onesScore = 0;
    let twosScore = 0;
    let threesScore = 0;
    let foursScore = 0;
    let fivesScore = 0;
    let sixesScore = 0;
    let threeOfKind = 0;
    let fourOfKind = 0;
    let fullHouse = 0;
    let smallStraight = 0;
    let largeStraight = 0;
    let chance = 0;
    let topScore = 0;

    let i = 1;

    while (i <= numOfPlayers) {
        // This ID will match with the element class of every element associated with this player
        id = `Player${i}`;
        name = `Player ${i}`;        

        playersArray[i] = new player(id, name, onesScore, twosScore, threesScore, foursScore, fivesScore, sixesScore, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, chance);

        //console.log(playersArray[i]);

        i++;
    }
}


// When a score is entered, that score needs to go into the correct part of the Player object
// Event listener on the element
// Use the element's class name to link to the correct player (element class name + player ID will match)
//

function updateScores(item) {
    
    // item is the element

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
    
    // 

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

    // Pass item (HTML element) to fetchPlayerObject, recieve playerObject in return
    let playerObject = fetchPlayerObject(item);

    // Set ones score attribute in playerObject to the value of html element
    playerObject.updateTwos = parseInt(item.value);  

    // Run function to update the upperScore element
    updateUpperScores(playerObject);
}

function updateThreesScore(item) {   

    // Pass item (HTML element) to fetchPlayerObject, recieve playerObject in return
    let playerObject = fetchPlayerObject(item);

    // Set ones score attribute in playerObject to the value of html element
    playerObject.updateThrees = parseInt(item.value); 
    
    // Run function to update the upperScore element
    updateUpperScores(playerObject);
}

function updateFoursScore(item) {   

    // Pass item (HTML element) to fetchPlayerObject, recieve playerObject in return
    let playerObject = fetchPlayerObject(item);

    // Set ones score attribute in playerObject to the value of html element
    playerObject.updateFours = parseInt(item.value);  

    // Run function to update the upperScore element
    updateUpperScores(playerObject);
}

function updateFivesScore(item) {   

    // Pass item (HTML element) to fetchPlayerObject, recieve playerObject in return
    let playerObject = fetchPlayerObject(item);

    // Set ones score attribute in playerObject to the value of html element
    playerObject.updateFives = parseInt(item.value); 

    // Run function to update the upperScore element
    updateUpperScores(playerObject);
}

function updateSixesScore(item) {   

    // Pass item (HTML element) to fetchPlayerObject, recieve playerObject in return
    let playerObject = fetchPlayerObject(item);

    // Set ones score attribute in playerObject to the value of html element
    playerObject.updateSixes = parseInt(item.value);
    
    // Run function to update the upperScore element
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
    // i needs to start at '2' as this is the position in playerObjectArray of the first score
    let i = 2;

    // loop through up to and including the final score (score for sixes = position 7) in playerObject
    while (i <= 7) {
        total += playerObjectArray[i];
        i++;
    }

    // set TopScore attribute of the playerObject
    playerObject.updateTopScore = total;   

    // set value of topScore
    document.getElementById(`topScore${playerObject.id}`).innerHTML = total;
}