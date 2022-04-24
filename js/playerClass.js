/**
 * @class
 * The main class that holds information for each player.
*/
class Player {
    /**
     * @param {string} id The unique ID of the player.
     * @param {string} name The name of the player.
     * @param {number} ones The score of 'ones' field.
     * @param {number} twos The score of 'twos' field.
     * @param {number} threes The score of 'threes' field.
     * @param {number} fours The score of 'fours' field.
     * @param {number} fives The score of 'fives' field.
     * @param {number} sixes The score of 'sixes' field.
     * @param {number} threeOfKind The score of 'three of a kind' field.
     * @param {number} fourOfKind The score of 'four of a kind' field.
     * @param {number} fullHouse The score of 'full house' field.
     * @param {number} smallStraight The score of 'small straight' field.
     * @param {number} largeStraight The score of 'large straight' field.
     * @param {number} chance The score of 'chance' field.
     * @param {number} yahtzee The score of 'yahtzee' field.
     * @param {number} topScore The total score of top section of table.
     * @param {number} topTotalScore The total score of top section of table plus bonus score.
     * @param {number} bonus The score of 'bonus' field.
     * @param {number} bottomScore The total score of bottom section of table.
     * @param {number} grandTotal The sum of topTotalScore and bottomScore.
     * @param {number} runningTotal Accumulated score when 'Play Again' button is used.
     */
    constructor(id, name, ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, chance, yahtzee, topScore, topTotalScore, bonus, bottomScore, grandTotal, runningTotal) {
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
        this.runningTotal = runningTotal;
    }     

    // Methods

    /**
     * Set bonus property of player class depending on value of topScore property.
     * If topScore is greater than 62, bonus property is set to 35. Zero otherwise.
     */
    updateBonus() {        
        if (this.topScore > 62) {             
            this.bonus = 35;        
        } else {             
            this.bonus = 0;        
        }
    }

    /**
     * Set topTotalScore to the sum of topScore and bonus.
     */
    calcTopTotalScore() {             
        this.topTotalScore = this.topScore + this.bonus;
    }
}