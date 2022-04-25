// DICE GAMEPLAY

// New button on index.html for 'Roll Dice'
// 5 img elements appear
// Each img is linked to a Dice object
// Each img is clickable - clicking changes state from 'frozen' to 'unfrozen' and vice versa
// When 'Roll' button clicked, randomize the number and have the dice display the correct DiceNumber.img based upon this value
// If a dice is 'frozen' - do not change the value of this dice, it is locked
// Allow only 3 rolls of the dice before the turn ends.

/**
 * @class
 * Main class to hold information for each dice object.
 */
class Dice {

    /** 
     * @param {string} id Unique ID for each dice object.
     * @param {number} value The numeric value of the dice (1-6).
     * @param {boolean} frozen If True, dice is frozen and will not re-roll it's value.
     */
    constructor(id, value = 1, frozen = false){
        this.id = id;
        this.value = value; // Default value is 1
        this.frozen = frozen; // Default value is false
    }

    // Methods
    changeFrozenState() {
        if (this.frozen == true) {
            this.frozen = false;
        } else {
            this.frozen = true;
        }
    }
}

// Create Dice Objects
let diceObjectArray = [];
function createDice() {     
    if (diceObjectArray.length == 0){
        let i = 1;
        let id;
        while (i <= 5) {
            id = `dice${i}`;        
            diceObjectArray[i] = new Dice(id);
            i++;           
        }    
    } else {
        return false;
    } 
}

document.getElementById('rollDice').addEventListener('click', createDice);
document.getElementById('rollDice').addEventListener('click', rollDice);

let diceRollCounter = 1;

function rollDice() {
    // First time it is clicked I do not want to care if a dice is frozen or not.
    // Keep a counter for current dice roll
    // If counter = 1, set dice.frozen to false for all
    // Once counter = 3, reset counter to 1

    if (diceRollCounter == 1) {
        // Loop through each dice object, set dice.frozen = false because it is the first roll of the turn
        // Then roll the dice
        let i = 1;
        while (i <= 5) {
            let currentDice = diceObjectArray[i];
            currentDice.frozen = false;
            currentDice.value = getRandomDiceValue();
            setIMG(currentDice);
            i++;
        }
        diceRollCounter++; // counter now 2
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

/**
 * 
 * @returns Random integer between 1-6 inclusive.
 */
function getRandomDiceValue() {
    return (Math.floor(Math.random() * 6) + 1);
}

// Freeze & Unfreeze Dice
document.getElementById('dice1').addEventListener('click', changeFreezeState);
document.getElementById('dice2').addEventListener('click', changeFreezeState);
document.getElementById('dice3').addEventListener('click', changeFreezeState);
document.getElementById('dice4').addEventListener('click', changeFreezeState);
document.getElementById('dice5').addEventListener('click', changeFreezeState);

// Retrieve id of the dice via the element that triggered the function
// Changes the dice's frozen state
function changeFreezeState(element){
    let diceElement = element.target;
    let diceNum = diceElement.id;
    diceNum = parseInt(diceNum.substring(4)); 
    let currentDice = diceObjectArray[diceNum]
    currentDice.changeFrozenState();
    changeOpacity(diceElement);  
}

// Change look of dice when frozen
function changeOpacity(diceIMG) {
    if (diceIMG.style.border == "0px solid rgb(255, 0, 0)"){
        diceIMG.style.border = "2px solid rgb(255, 0, 0)";
    } else {
        diceIMG.style.border = "0px solid rgb(255, 0, 0)";
    }
}

// Remove border from all dice img
function removeBorder() {
    document.getElementById('dice1').style.border = "0px solid rgb(255, 0, 0)"
    document.getElementById('dice2').style.border = "0px solid rgb(255, 0, 0)"
    document.getElementById('dice3').style.border = "0px solid rgb(255, 0, 0)"
    document.getElementById('dice4').style.border = "0px solid rgb(255, 0, 0)"
    document.getElementById('dice5').style.border = "0px solid rgb(255, 0, 0)"
}

// Change IMG based on the dice value
function setIMG(die) {
    let value = die.value;
    let id = die.id;
    document.getElementById(id).src = `/assets/img/dice/${value}.png`
}



// Show Dice
document.getElementById('rollDice').addEventListener('click', showDice);
function showDice() {
    document.querySelector('.dice-image-area').style.display = "flex";
    document.querySelector('.rolls-left').style.display = "flex";
}

// Hide Dice
document.getElementById('playAgainBtn').addEventListener('click', hideDice);
function hideDice() {
    document.querySelector('.dice-image-area').style.display = "none";
    document.querySelector('.rolls-left').style.display = "none";
}