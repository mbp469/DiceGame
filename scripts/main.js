var game = {
    regions: { //all of the HTML elements we need to access
        rollBtn: null, //the button you push to roll
        firstDi: 1, //the aside named di-1
        secondDi: 1, //the aside named di-2
        noticeArea: null, //h1 that says to try again or that you won
        triesCount: null, //p that says how many tries it took to win
        gameStart: null, //the footer that displays start date/time
    },
    defineRegions: function() { //pull in the regions from the HTML
        this.regions.rollBtn = document.getElementById('roll');
        this.regions.firstDi = document.getElementById('di-1');
        this.regions.secondDi = document.getElementById('di-2');
        this.regions.noticeArea = document.getElementById('notice');
        this.regions.triesCount = document.getElementById('tries-message');
        this.regions.gameStart = document.getElementById('start-time');
    },
    init: function() {
      this.defineRegions(); //gets the HTML ready to receive

      //adds the rollBtn to a click event listener and binds it to the game object
      this.regions.rollBtn.addEventListener('click',this.rollDice.bind(this));
      this.values.round.roundStart = this.getStartTime();
      this.values.round.roundDiceRolls = 0;//sets dice rolls for this round to 0;
    },
    getStartTime: function() {
      return "inside getStartTime";
      console.log("In funtion getStartTime()");
    },

    /* holds the values that will be needed in the HTML */
    values: {
      gameRounds: [], //hold each round object
      round: { //the round object to be stored in gameRounds[]
          roundStart: "start time of a round object",
          roundDiceRolls: 0
      }
    },
    rollDice: function() {
        console.log("Inside the rollDice function");
        /* this function should generate a random number
          for each di and display on the dice. It should
            also store the round by calling addRound */
        var newFirst = Math.floor(Math.random() * 6) + 1;//generate first random number and assign to variable
        var newSecond = Math.floor(Math.random() * 6) + 1;//generate second random number and assign to variable
        updateHTML('this.regions.firstDi', 'newFirst');
        updateHTML('this.regions.secondDi', 'newSecond');
        addRound();//stores the round in gameRounds array
        this.values.round.roundDiceRolls++;
    },
    testRollResults: function() {
        console.log("Inside the processRollResults function");
        /* this function should test the sum of firstDi and secondDi,
          then print either "Try Again" or "Winner" plus stats */
    },
    addRound: function() {
      gameRounds.push(this.round);//add the rollResults object to gameRounds[]
      console.log(gameRounds);
    },
    updateHTML: function(targetElement, newValue) {
        /* this function should replace the HTML in the
          targetElement with the newValue. */
        this.regions[targetElement].innerHTML = this.values.round[newValue];
    }
}

game.init();
