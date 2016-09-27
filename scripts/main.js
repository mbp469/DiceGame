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
        this.regions.rollBtn.addEventListener('click', this.rollDice.bind(this));
        this.reset();
    },
    reset: function() {
      this.regions.firstDi.innerHTML = this.values.round.firstRoll;
      this.regions.secondDi.innerHTML = this.values.round.secondRoll;
      this.regions.triesCount.style.visibility="hidden";
      this.values.round.roundStart = this.getTime();
      this.values.round.roundDiceRolls = 1; //sets dice rolls for this round to 0;
      this.regions.gameStart.innerHTML = this.values.dateMessage;
      this.values.round.firstRoll = "ROLL ME";
      this.values.round.secondRoll = "ROLL ME";
      this.regions.firstDi.innerHTML = "ROLL ME";
      this.regions.secondDi.innerHTML = "ROLL ME";
      this.values.gameRounds = [];
      this.regions.noticeArea = "Roll Dice to Play.";
      this.regions.rollBtn.innerHTML = "Roll Dice.";
    },
    getTime: function() {
        console.log("In function getStartTime()");
        var date = new Date();
        this.values.dateMessage = this.parseTimeString(date);
        return date;
    },
    parseTimeString: function(date) {
        var year = "" + date.getYear();
        year = "20" + year.slice(1);
        var day = "" + date.getDate();
        if (day.length === 1){
          day = "0" + day;
        };
        var month = "" + date.getMonth() + 1;
        if (month.length === 1) {
          month = "0" + day;
        }
        var hour = "" + date.getHours();
        if (hour.length === 1) {
          hour = "0" + hour;
        }
        var minutes = "" + date.getMinutes();
        if (minutes.length === 1) {
          minutes = "0" + minutes;
        }
        return ("Game Started " + year + '-' + month + '-' + day + ' at ' + hour + ':' + minutes);

    },
    /* holds the values that will be needed in the HTML */
    values: {
        gameRounds: [], //hold each round object
        round: { //the round object to be stored in gameRounds[]
            roundStart: 1,
            roundDiceRolls: 1,
            firstRoll: 'ROLL ME',
            secondRoll: 'ROLL ME',
            roundEnd: 25,
        },
        dateMessage: 'date message',
        won: false
    },
    getDiff: function() {
        console.log(this.values.round.roundEnd + ',' + this.values.round.roundStart);
        return (this.values.round.roundEnd - this.values.round.roundStart) / 1000;
        console.log(this.values.round.difference);
    },
    // transformDice: function() {
    //   console.log(this.regions.secondDi);
    //   document.getElementById('di-2').style.transform="rotate(360deg)";
    //   document.getElementById('di-1').style.transform="rotate(360deg)";
    //   document.getElementById('di-2').style.transform="rotate(-360deg)";
    //   document.getElementById('di-1').style.transform="rotate(-360deg)";
    //
    // },
    rollDice: function() {
      // this.transformDice();
      if(this.values.won === true) {
        console.log("Inside the rollDice function");
        this.reset();
        this.values.won = false;
            } else {
            this.values.round.firstRoll = Math.floor(Math.random() * 6) + 1; //generate first random number and assign to variable
            this.values.round.secondRoll = Math.floor(Math.random() * 6) + 1; //generate second random number and assign to variable
            this.updateHTML('firstDi', 'firstRoll');
            this.updateHTML('secondDi', 'secondRoll');
            this.testRollResults();
            this.addRound(); //stores the round in gameRounds array
            this.values.round.roundDiceRolls++;
          }
    },
    testRollResults: function() {
        console.log("Inside the processRollResults function");
        /* this function should test the sum of firstDi and secondDi,
          then print either "Try Again" or "Winner" plus stats */
        var sum = parseInt(this.values.round.firstRoll) + parseInt(this.values.round.secondRoll);
        console.log(sum);
        if (sum === 7 || sum === 11) {
          this.values.won = true;
          this.win(); //update everything based on being a winner
        } else {
            this.keepGoing(); //continue game
        }
    },
    win: function() {
        this.values.round.roundEnd = this.getTime();
        var winMessage = "(It took you " + this.values.round.roundDiceRolls + " rolls and " + this.getDiff() + " seconds.)";
        this.regions.noticeArea.innerHTML = "Winner!";
        this.regions.triesCount.innerHTML = winMessage;
        this.regions.triesCount.style.visibility = "visible";
        this.regions.rollBtn.innerHTML = "Click to Play Again.";
    },
    keepGoing: function() {
        this.regions.noticeArea.innerHTML = "Try Again";
    },
    addRound: function() {
        this.values.gameRounds.push(this.values.round); //add the values.round object to values.gameRounds[]
    },
    updateHTML: function(targetElement, newValue) {
        /* this function should replace the HTML in the
          targetElement with the newValue. it will pull
          items in the round object */
        this.regions[targetElement].innerHTML = this.values.round[newValue];
    },
}

game.init();
