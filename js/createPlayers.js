// // CREATION OF PLAYER OBJECTS

// let playersArray = []; // Array to store the player objects

// /**
//  * Creates an array of Player objects equal to number of players.
//  * 
//  * @param {number} numOfPlayers The number of players.
//  */
// function createPlayers(numOfPlayers) {
//     let name;
//     let id;    
//     let i = 1; // Starts at 1, because do not want a Player0

//     while (i <= numOfPlayers) {        
//         id = `Player${i}`; // id will match the class name of each element associated with the player
//         name = `Player ${i}`;        
//         playersArray[i] = new Player(id, name);        
//         i++;
//     }
// }