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
     * @param {number} value The numeric value of the dice (1-6).
     * @param {boolean} frozen If True, dice is frozen and will not re-roll it's value.
     */
    constructor(value = 1, frozen = false){
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
    let i = 1;
    while (i <= 5) {        
        diceObjectArray[i] = new Dice();
        i++;
    }
    console.log(diceObjectArray);
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
            i++;
        }
        diceRollCounter++; // counter now 2        
    } else {
        let i = 0;
        while (i < diceObjectArray.length) {
            let currentDice = diceObjectArray[i];
            if (currentDice.frozen == false){
                currentDice.value = getRandomDiceValue();
                i++
            }            
        }
        if (diceRollCounter == 2){
            diceRollCounter++;
        } else {
            diceRollCounter = 1;
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
    let dice = element.target;
    let diceNum = dice.id;
    diceNum = parseInt(diceNum.substring(4)); 
    let currentDice = diceObjectArray[diceNum]
    currentDice.changeFrozenState();
    console.log(currentDice);
    
}


// 