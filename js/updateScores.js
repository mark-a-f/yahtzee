// /**
//  * Returns Player class object associated with a HTML element.
//  * 
//  * @param {object} element A HTML element.
//  * @returns {playerObject} A Player class object.
//  */
// function fetchPlayerObject(element) {    
//     let elementClassName = element.className; // Class name of the element is always 'playeri', i = a number    
//     let playerNumber = elementClassName.substr(6); // Isolate the number. This matches the player's position in playersArray    
//     let playerObject = playersArray[playerNumber];
//     return playerObject;
// }

// /**
//  * Sets Player.name property
//  * 
//  * @param {object} element A HTML element object.
//  */
// function updateName(element) {
//     let playerObject = fetchPlayerObject(element);
//     playerObject.name = element.value;    
// }

// /**
//  * Function triggered by 'oninput' attribute of all input fields on the table.
//  * Parses HTML element object and Player object to functions that update saved scores.
//  * 
//  * @param {object} element  A HTML element object.
//  */
// function runUpdates(element) {
//     let playerObject = fetchPlayerObject(element);
//     updateScore(element, playerObject);
//     updateUpperScores(playerObject);
//     updateBottomScores(playerObject);    
//     checkBonus(playerObject);
//     updateTopTotalScore(playerObject);    
//     updateGrandTotalScore(playerObject);
// }

// /**
//  * Updates Player class property related to the input field.
//  * @example Player 1 'ones' score input field has '2' input by user. Player.ones property associated with Player 1 is updated with the number '2'.
//  * 
//  * 
//  * @param {object} element Html Object.
//  * @param {object} playerObject Player object.
//  */
// function updateScore(element, playerObject) {    
//     let elementID = element.id;
//     /** 
//      * Isolate the part of the elemendID string that relates to the player object property
//      * Example: elementID = scoreOnesPlayer2
//      * Isolate: ones
//      * This matches playerObject.ones property name
//      */
//     elementID = elementID.replace("score", "");
//     elementID = elementID.replace("Player", "");
//     elementID = elementID.replace(/[0-9]/g, "");    
//     elementID = elementID.charAt(0).toLowerCase() + elementID.slice(1); // First letter needs to be lowercase to match the player object property    
//     playerObject[elementID] = parseInt(element.value); // Set playerObject property to the value of html input field     
// }

// /**
//  * Sets the Player.topScore property and innerHTML value of associated table cell.
//  * 
//  * @param {object} playerObject A Player class object.
//  */
// function updateUpperScores(playerObject) {     
//     let playerObjectArray = Object.values(playerObject);
//     let total = 0;    
//     let i = 2; // i starts at '2', this is the position in playerObjectArray of the first score

//     while (i <= 7) { // playerObjectArray[7] is last score to be added
//         if (typeof(playerObjectArray[i]) == "undefined" || isNaN(playerObjectArray[i])) {
//             total += 0;
//         } else {
//             total += playerObjectArray[i];
//         } i++;
//     }    
//     playerObject.topScore = total; // set TopScore attribute of the playerObject
//     document.getElementById(`topScore${
//         playerObject.id
//     }`).innerHTML = playerObject.topScore; // set value of topScore element innerHTML
// }

// /**
//  * Set Player.bonus property value.
//  * Set innerHTML of element to a value based on Player.bonus property value.
//  * 
//  * @param {object} playerObject A Player class object.
//  */
// function checkBonus(playerObject) { 
//     playerObject.updateBonus();

//     if (playerObject.bonus == 35) {        
//         document.getElementById(`bonusScore${
//             playerObject.id
//         }`).innerHTML = playerObject.bonus;        
//         document.getElementById(`bonusScore${
//             playerObject.id
//         }`).style.color = "#35B897";
//     } else {        
//         document.getElementById(`bonusScore${
//             playerObject.id
//         }`).innerHTML = '---';        
//         document.getElementById(`bonusScore${
//             playerObject.id
//         }`).style.color = "#FF7B7B";
//     }
// }

// /**
//  * Set Player.topTotalScore property value.
//  * Set innerHTML of element associated with this score.
//  * 
//  * @param {object} playerObject A Player class object.
//  */
// function updateTopTotalScore(playerObject) { 
//     playerObject.calcTopTotalScore();
//     document.getElementById(`totalTopScore${
//         playerObject.id
//     }`).innerHTML = playerObject.topTotalScore;
//     document.getElementById(`bottomTopScore${
//         playerObject.id
//     }`).innerHTML = playerObject.topTotalScore;
// }

// /**
//  * Sums scores of lower section of table.
//  * Sets Player.bottomScore.
//  * Set innerHTML of element associated with this score.
//  * 
//  * @param {object} playerObject  A Player class object.
//  */
// function updateBottomScores(playerObject) { 
//     let playerObjectArray = Object.values(playerObject);
//     let total = 0;    
//     let i = 8; // playerObjectArray[8] is the first score required

//     while (i <= 14) { // playerObjectArray[14] is last score required
//         if (typeof(playerObjectArray[i]) == "undefined" || isNaN(playerObjectArray[i])) {
//             total += 0;
//         } else {
//             total += playerObjectArray[i];
//         } i++;
//     }    
//     playerObject.bottomScore = total;
//     document.getElementById(`totalLower${
//         playerObject.id
//     }`).innerHTML = playerObject.bottomScore;  
// }

// /**
//  * Set Player.grandTotal property value.
//  * Set innerHTML of element associated with this score.
//  * 
//  * @param {oobject} playerObject  A Player class object.
//  */
// function updateGrandTotalScore(playerObject) {    
//     if (typeof(playerObject.topTotalScore) == "undefined") {
//         if (typeof(playerObject.bottomScore) == "undefined") {
//             playerObject.grandTotal = 0;
//         } else {
//             playerObject.grandTotal = playerObject.bottomScore;
//         }
//     } else if (typeof(playerObject.bottomScore) == "undefined") {
//         if (typeof(playerObject.topTotalScore) == "undefined") {
//             playerObject.grandTotal = 0;
//         } else {
//             playerObject.grandTotal = playerObject.topTotalScore;
//         }
//     } else {
//         playerObject.grandTotal = playerObject.topTotalScore + playerObject.bottomScore;
//     }    
//     document.getElementById(`GrandTotal${
//         playerObject.id
//     }`).innerHTML = playerObject.grandTotal;
// }

// /**
//  * Set Player.runningTotal for each player.
//  */
// function saveRunningTotal() {    
//     let i = 1; // playersArray[1] is first player
//     while (i < playersArray.length) {
//         let playerObject = playersArray[i];
//         let runningTotal = playerObject.runningTotal;
//         let currentTotal = playerObject.grandTotal;

//         if(typeof(runningTotal) == "undefined") {
//             runningTotal = 0;
//             playerObject.runningTotal = runningTotal + currentTotal;            
//             document.getElementById(`RunningTotal${playerObject.id}`).innerHTML = playerObject.runningTotal;
//         } else {
//             playerObject.runningTotal = runningTotal + currentTotal;
//             document.getElementById(`RunningTotal${playerObject.id}`).innerHTML = playerObject.runningTotal;
//         }
//         i++;
//     }
// }
