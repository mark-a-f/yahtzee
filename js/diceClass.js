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

    /**
     * If dice.frozen is true, set to false.
     * Else set dice.frozen to true.
     */
    changeFrozenState() {
        if (this.frozen == true) {
            this.frozen = false;
        } else {
            this.frozen = true;
        }
    }
}

// // Create Dice Objects
// let diceObjectArray = [];
// /**
//  * Checks if any dice objects have been created yet.
//  * If they have not been created, create dice objects and place them into array. 
//  */
// function createDice() {     
//     if (diceObjectArray.length == 0){
//         let i = 1;
//         let id;
//         while (i <= 5) {
//             id = `dice${i}`; // Matches the id of HTML img element of dice.        
//             diceObjectArray[i] = new Dice(id);
//             i++;           
//         }    
//     } else {
//         return false;
//     } 
// }

// // document.getElementById('rollDice').addEventListener('click', createDice);
// document.getElementById('rollDice').addEventListener('click', rollDice);

// let diceRollCounter = 1;

// /**
//  * Performs rolling of the dice values.
//  * 
//  * If diceRollCounter == 1, it is the first roll of the current player. All dice.frozen properties are set to false and getRandomDiceValue() is performed on each die.
//  * 
//  * Else, for turns 2 and 3, every dice with 'dice.frozen == false' is allocated a new number via getRandomDiceValue().
//  * 
//  * Changes #roll-number.innerHTML based on current turn.
//  */
// function rollDice() {
//     if (diceRollCounter == 1) {        
//         let i = 1;
//         while (i <= 5) {
//             let currentDice = diceObjectArray[i];
//             currentDice.frozen = false;
//             currentDice.value = getRandomDiceValue();
//             setIMG(currentDice);
//             i++;
//         }
//         diceRollCounter++;
//         document.getElementById('roll-number').innerHTML = '2';        
//     } else {
//         let i = 1;
//         while (i <= 5) {
//             let currentDice = diceObjectArray[i];
//             if (currentDice.frozen == false){
//                 currentDice.value = getRandomDiceValue();
//                 setIMG(currentDice);
//                 i++;
//             }
//             i++;            
//         }
//         if (diceRollCounter == 2){
//             diceRollCounter++;
//             document.getElementById('roll-number').innerHTML = '1';
//         } else {
//             diceRollCounter = 1;
//             document.getElementById('roll-number').innerHTML = 'Next Player!';
//             removeBorder();
//         }                   
//     } 
// }

// /**
//  * 
//  * @returns Random integer between 1-6 inclusive.
//  */
// function getRandomDiceValue() {
//     return (Math.floor(Math.random() * 6) + 1);
// }

// // Freeze & Unfreeze Dice
// document.getElementById('dice1').addEventListener('click', changeFreezeState);
// document.getElementById('dice2').addEventListener('click', changeFreezeState);
// document.getElementById('dice3').addEventListener('click', changeFreezeState);
// document.getElementById('dice4').addEventListener('click', changeFreezeState);
// document.getElementById('dice5').addEventListener('click', changeFreezeState);


// /**
//  * Change dice object's frozen property that is associated with the img HTML element.
//  * 
//  * @param {object} element Img HTML element.
//  */
// function changeFreezeState(element){
//     let diceElement = element.target;
//     let diceNum = diceElement.id;
//     diceNum = parseInt(diceNum.substring(4)); 
//     let currentDice = diceObjectArray[diceNum]
//     currentDice.changeFrozenState();
//     changeBorder(diceElement);  
// }

// /**
//  * Change border style of Img HTML element.
//  * 
//  * @param {object} diceIMG Img HTML element.
//  */
// function changeBorder(diceIMG) {
//     if (diceIMG.style.border == "0px solid rgb(255, 0, 0)"){
//         diceIMG.style.border = "2px solid rgb(255, 0, 0)";
//     } else {
//         diceIMG.style.border = "0px solid rgb(255, 0, 0)";
//     }
// }

// /**
//  * Remove border style from HTML element.
//  */
// function removeBorder() {
//     document.getElementById('dice1').style.border = "0px solid rgb(255, 0, 0)"
//     document.getElementById('dice2').style.border = "0px solid rgb(255, 0, 0)"
//     document.getElementById('dice3').style.border = "0px solid rgb(255, 0, 0)"
//     document.getElementById('dice4').style.border = "0px solid rgb(255, 0, 0)"
//     document.getElementById('dice5').style.border = "0px solid rgb(255, 0, 0)"
// }

// // Change IMG based on the dice value
// /**
//  * Set src value of img element based on it's associated dice object value property.
//  * 
//  * @param {object} die Dice class object.
//  */
// function setIMG(die) {
//     let value = die.value;
//     let id = die.id;
//     document.getElementById(id).src = `/assets/img/dice/${value}.png`
// }



// // Show Dice
// document.getElementById('rollDice').addEventListener('click', showDice);
// /**
//  * Set dice & rolling HTML element display properties to 'flex'.
//  */
// function showDice() {
//     document.querySelector('.dice-image-area').style.display = "flex";
//     document.querySelector('.rolls-left').style.display = "flex";
// }

// // Hide Dice
// document.getElementById('playAgainBtn').addEventListener('click', hideDice);
// /**
//  * Set dice & rolling HTML element display properties to 'none'.
//  */
// function hideDice() {
//     document.querySelector('.dice-image-area').style.display = "none";
//     document.querySelector('.rolls-left').style.display = "none";
// }