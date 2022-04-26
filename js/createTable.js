// /**
//  * Generates the table based on the value of 'Number of Players' input field.
//  * 
//  * @param {number} numOfPlayers The value of 'Number of Players' input field.
//  */
// function createTable(numOfPlayers) {     
//         let elementToAppend;
//         let elementToCreate;
//         let htmlToInsert;
//         let i = 1;
//         while (i <= numOfPlayers) {
//             /**
//              * For each player, select the table row.
//              * Append the correct child to it with innerHTML unique to each player.
//              */           

//             // Top Row
//             // Select the parent row by it's id
//             elementToAppend = document.getElementById('row1');
//             // Create 'th' element
//             elementToCreate = document.createElement('th');
//             // html that changes based on player number (i)
//             htmlToInsert = `<th><input type="text" placeholder="Player ${i}" id="player${i}" class="player${i}" onblur="updateName(this)"></th>`;
//             // set this html to the inner html of the element that is to be created
//             elementToCreate.innerHTML = htmlToInsert;
//             // add this element child to the parent
//             elementToAppend.appendChild(elementToCreate);

//             // Upper Section seperator
//             elementToAppend = document.getElementById('table-seperator-top');
//             elementToCreate = document.createElement('td');
//             htmlToInsert = `<td></td>`;
//             elementToCreate.innerHTML = htmlToInsert;
//             elementToAppend.appendChild(elementToCreate);

//             // Ones scores row
//             elementToAppend = document.getElementById('row2');
//             elementToCreate = document.createElement('td');
//             htmlToInsert = `<td><input type="number" id="scoreOnesPlayer${i}" class="player${i}" oninput="runUpdates(this)"></td>`;
//             elementToCreate.innerHTML = htmlToInsert;
//             elementToAppend.appendChild(elementToCreate);

//             // Twos scores row
//             elementToAppend = document.getElementById('row3');
//             elementToCreate = document.createElement('td');
//             htmlToInsert = `<td><input type="number" id="scoreTwosPlayer${i}" class="player${i}" oninput="runUpdates(this)"></td>`;
//             elementToCreate.innerHTML = htmlToInsert;
//             elementToAppend.appendChild(elementToCreate);

//             // Threes scores row
//             elementToAppend = document.getElementById('row4');
//             elementToCreate = document.createElement('td');
//             htmlToInsert = `<td><input type="number" id="scoreThreesPlayer${i}" class="player${i}" oninput="runUpdates(this)"></td>`;
//             elementToCreate.innerHTML = htmlToInsert;
//             elementToAppend.appendChild(elementToCreate);

//             // Fours scores row
//             elementToAppend = document.getElementById('row5');
//             elementToCreate = document.createElement('td');
//             htmlToInsert = `<td><input type="number" id="scoreFoursPlayer${i}" class="player${i}" oninput="runUpdates(this)"></td>`;
//             elementToCreate.innerHTML = htmlToInsert;
//             elementToAppend.appendChild(elementToCreate);

//             // Fives scores row
//             elementToAppend = document.getElementById('row6');
//             elementToCreate = document.createElement('td');
//             htmlToInsert = `<td><input type="number" id="scoreFivesPlayer${i}" class="player${i}" oninput="runUpdates(this)"></td>`;
//             elementToCreate.innerHTML = htmlToInsert;
//             elementToAppend.appendChild(elementToCreate);

//             // Sixes scores row
//             elementToAppend = document.getElementById('row7');
//             elementToCreate = document.createElement('td');
//             htmlToInsert = `<td><input type="number" id="scoreSixesPlayer${i}" class="player${i}" oninput="runUpdates(this)"></td>`;
//             elementToCreate.innerHTML = htmlToInsert;
//             elementToAppend.appendChild(elementToCreate);

//             // Top score row
//             elementToAppend = document.getElementById('row8');
//             elementToCreate = document.createElement('td');
//             htmlToInsert = `<td><span id="topScorePlayer${i}" class="player${i}"></span></td>`;
//             elementToCreate.innerHTML = htmlToInsert;
//             elementToAppend.appendChild(elementToCreate);

//             // Top Bonus score row
//             elementToAppend = document.getElementById('row9');
//             elementToCreate = document.createElement('td');
//             htmlToInsert = `<td><span id="bonusScorePlayer${i}" class="player${i}">---</span></td>`;
//             elementToCreate.innerHTML = htmlToInsert;
//             elementToAppend.appendChild(elementToCreate);

//             // Top total score row
//             elementToAppend = document.getElementById('row10');
//             elementToCreate = document.createElement('td');
//             htmlToInsert = `<td><span id="totalTopScorePlayer${i}" class="player${i}"></span></td>`;
//             elementToCreate.innerHTML = htmlToInsert;
//             elementToAppend.appendChild(elementToCreate);

//             // Upper Section seperator
//             elementToAppend = document.getElementById('table-seperator-bot');
//             elementToCreate = document.createElement('td');
//             htmlToInsert = `<td></td>`;
//             elementToCreate.innerHTML = htmlToInsert;
//             elementToAppend.appendChild(elementToCreate);

//             // 3 of a kind score row
//             elementToAppend = document.getElementById('row11');
//             elementToCreate = document.createElement('td');
//             htmlToInsert = `<td><input type="number" id="scoreThreeOfKindPlayer${i}" class="player${i}" oninput="runUpdates(this)"></td>`;
//             elementToCreate.innerHTML = htmlToInsert;
//             elementToAppend.appendChild(elementToCreate);

//             // 4 of a kind score row
//             elementToAppend = document.getElementById('row12');
//             elementToCreate = document.createElement('td');
//             htmlToInsert = `<td><input type="number" id="scoreFourOfKindPlayer${i}" class="player${i}" oninput="runUpdates(this)"></td>`;
//             elementToCreate.innerHTML = htmlToInsert;
//             elementToAppend.appendChild(elementToCreate);

//             // Full house score row
//             elementToAppend = document.getElementById('row13');
//             elementToCreate = document.createElement('td');
//             htmlToInsert = `<td><input type="number" id="scoreFullHousePlayer${i}" class="player${i}" oninput="runUpdates(this)"></td>`;
//             elementToCreate.innerHTML = htmlToInsert;
//             elementToAppend.appendChild(elementToCreate);

//             // Small straight score row
//             elementToAppend = document.getElementById('row14');
//             elementToCreate = document.createElement('td');
//             htmlToInsert = `<td><input type="number" id="scoreSmallStraightPlayer${i}" class="player${i}" oninput="runUpdates(this)"></td>`;
//             elementToCreate.innerHTML = htmlToInsert;
//             elementToAppend.appendChild(elementToCreate);

//             // Large straight score row
//             elementToAppend = document.getElementById('row15');
//             elementToCreate = document.createElement('td');
//             htmlToInsert = `<td><input type="number" id="scoreLargeStraightPlayer${i}" class="player${i}" oninput="runUpdates(this)"></td>`;
//             elementToCreate.innerHTML = htmlToInsert;
//             elementToAppend.appendChild(elementToCreate);

//             // Yahtzee score row
//             elementToAppend = document.getElementById('row16');
//             elementToCreate = document.createElement('td');
//             htmlToInsert = `<td><input type="number" id="scoreYahtzeePlayer${i}" class="player${i}"  oninput="runUpdates(this)"></td>`;
//             elementToCreate.innerHTML = htmlToInsert;
//             elementToAppend.appendChild(elementToCreate);

//             // Chance score row
//             elementToAppend = document.getElementById('row17');
//             elementToCreate = document.createElement('td');
//             htmlToInsert = `<td><input type="number" id="scoreChancePlayer${i}" class="player${i}" oninput="runUpdates(this)"></td>`;
//             elementToCreate.innerHTML = htmlToInsert;
//             elementToAppend.appendChild(elementToCreate);

//             // Total lower section scores
//             elementToAppend = document.getElementById('row18');
//             elementToCreate = document.createElement('td');
//             htmlToInsert = `<td><span id="totalLowerPlayer${i}" class="player${i}"></span></td>`;
//             elementToCreate.innerHTML = htmlToInsert;
//             elementToAppend.appendChild(elementToCreate);

//             // Total of upper section scores
//             elementToAppend = document.getElementById('row19');
//             elementToCreate = document.createElement('td');
//             htmlToInsert = `<td><span id="bottomTopScorePlayer${i}" class="player${i}"></span></td>`;
//             elementToCreate.innerHTML = htmlToInsert;
//             elementToAppend.appendChild(elementToCreate);

//             // Grand total score row
//             elementToAppend = document.getElementById('row20');
//             elementToCreate = document.createElement('td');
//             htmlToInsert = `<td><span id="GrandTotalPlayer${i}" class="player${i}"></span></td>`;
//             elementToCreate.innerHTML = htmlToInsert;
//             elementToAppend.appendChild(elementToCreate);

//             // Running total score row
//             elementToAppend = document.getElementById('row-runningTotal');
//             elementToCreate = document.createElement('td');
//             htmlToInsert = `<td><span id="RunningTotalPlayer${i}" class="player${i}"></span></td>`;
//             elementToCreate.innerHTML = htmlToInsert;
//             elementToAppend.appendChild(elementToCreate);

//             i++;
//         }
// }

// // FUNCTIONS TO DISPLAY TABLE AND BUTTON ELEMENTS

// function displayResetButtons() {
//     document.querySelector('#resetBtn').style.display = "inline-block";
//     document.querySelector('#resetBtnBottom').style.display = "inline-block";
// }

// function displayTable() {
//     document.querySelector('#table-container').style.display = "inline-block";
// }

// function displayPlayAgainButton() {
//     document.querySelector('#playAgainBtn').style.display =  "inline-block";
// }