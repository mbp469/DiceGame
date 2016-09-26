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
      this.regions.triesCount.style="visibility:hidden";
      //adds the rollBtn to a click event listener and binds it to the game object
      this.regions.rollBtn.addEventListener('click',this.rollDice.bind(this));
      this.values.round.roundStart = this.getTime();
      this.values.round.roundDiceRolls = 0;//sets dice rolls for this round to 0;
      this.regions.gameStart = this.values.dateMessage;
    },
    getTime: function() {
      console.log("In funtion getStartTime()");
      var date = new Date();
      var year = date.getYear();
      var day = date.getDate();
      var month = date.getMonth();
      var hour = date.getHours();
      var minutes = date.getMinutes();
      this.values.dateMessage = "Game Started " + year + '-' + month + '-' + day + ' at ' + hour + ':' + minutes;
      return date;
    },
    /* holds the values that will be needed in the HTML */
    values: {
      gameRounds: [], //hold each round object
      round: { //the round object to be stored in gameRounds[]
          roundStart: 1,
          roundDiceRolls: 1,
          firstRoll: 0,
          secondRoll: 0,
          roundEnd: 25,
      },
      dateMessage: 'date message',
    },
    getDiff: function() {
      console.log(this.values.round.roundEnd + ',' + this.values.round.roundStart);
      return this.values.round.roundEnd - this.values.round.roundStart;
      console.log(this.values.round.difference);
    },
    rollDice: function() {
        console.log("Inside the rollDice function");
        /* this function should generate a random number
          for each di and display on the dice. It should
            also store the round by calling addRound */
        this.values.round.firstRoll = Math.floor(Math.random() * 6) + 1;//generate first random number and assign to variable
        this.values.round.secondRoll = Math.floor(Math.random() * 6) + 1;//generate second random number and assign to variable
        this.updateHTML('firstDi', 'firstRoll' );
        this.updateHTML('secondDi', 'secondRoll');
        this.testRollResults();
        this.addRound();//stores the round in gameRounds array
        this.values.round.roundDiceRolls++;
    },
    testRollResults: function() {
        console.log("Inside the processRollResults function");
        /* this function should test the sum of firstDi and secondDi,
          then print either "Try Again" or "Winner" plus stats */
          var sum = parseInt(this.values.round.firstRoll) + parseInt(this.values.round.secondRoll);
          console.log(sum);
          if(sum === 7 || sum === 11) {
            this.win();//update everything based on being a winner
          } else {
            this.keepGoing();//continue game
          }
    },
    win: function() {
      console.log("in the win if-statement");
      this.values.round.roundEnd = this.getTime();
      var winMessage = "It took you " + this.values.round.roundDiceRolls + " rolls and " + this.getDiff() + " seconds.)";
      this.regions.noticeArea.innerHTML = "Winner!";
      this.regions.triesCount.innerHTML = winMessage;
      this.regions.triesCount.style.visibility="visible";

    },
    keepGoing: function() {
      this.regions.noticeArea.innerHTML = "Try Again";
    },
    addRound: function() {
      this.values.gameRounds.push(this.values.round);//add the values.round object to values.gameRounds[]
    },
    updateHTML: function(targetElement, newValue) {
        /* this function should replace the HTML in the
          targetElement with the newValue. it will pull
          items in the round object */
        this.regions[targetElement].innerHTML = this.values.round[newValue];
    },

}

game.init();
