var game = {
    regions: { //all of the HTML elements we need to access
        rollBtn: null; //the button you push to roll
        firstDi: null, //the aside named di-1
        secondDi: null, //the aside named di-2
        noticeArea: null, //h1 that says to try again or that you won
        triesCount: null, //p that says how many tries it took to win
        gameStart: null, //the footer that displays start date/time
    }
    gameRounds: [], //hold each round object
    round: { //the round object to be stored in gameRounds[]
        roundStart: "start time of a round object",
        roundDiceRolls: 66
    },
    defineRegions: function() {
        this.regions.rollBtn = document.getElementById('roll');
        this.regions.firstDi = document.getElementById('di-1');
        this.regions.secondDi = document.getElementById('di-2');
        this.regions.noticeArea = document.getElementById('notice');
        this.regions.triesCount = document.getElementById('tries-message');
        this.regions.gameStart = document.getElementById('start-time');
    },
    rollResults: {
        first: this.firstDi,
        second: this.secondDi
    },

    rollDice: function() {
        console.log("Inside the rollDice function");
        /* this function should generate a random number
          for each di and display on the dice. It should
            also store the round by calling addRound */
    },
    testRollResults: function() {
        console.log("Inside the processRollResults function");
        /* this function should test the sum of firstDi and secondDi,
          then print either "Try Again" or "Winner" plus stats */
    },
    addRound: function() {
        /* add the rollResults object to gameRounds[] */

    },
    updateHTML: function(targetElement, newValue) {
        /* this function should replace the HTML in the
          targetElement with the newValue. */
    }
}
