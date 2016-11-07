# DiceGame
Week 3 Day 1 Homework  
[DiceGame on GitHub Pages](https://mbp469.github.io/DiceGame/)

 
###Learning Objectives

This assignment will give you some practice with creating objects and using the built in objects available to you in JavaScript. You should keep in mind all of the previous lessons you've learned, remember that we cannot sacrifice our other skills just to learn a new one!

###Your Mission

Create a dice game where the object is to "roll" a seven or eleven combined between two dice. You'll need to create an HTML file, and some basic Sass to create a page that looks like the mockup below.

###The JavaScript for the game must do the following:

Use an object to represent your game
Your object should store:
the start date/time of the game
an array of the game rounds
(Each round lasts until the user wins, so one round should have the start time of that round plus the number of rolls of the dice that have occurred for that round.)
The game object should have a function (method) for rolling the dice
(In other words, the function is not just in the page, but on the game object!)
When the page is loaded, display the start date and time at the bottom
When the "Roll Dice" button is clicked, generate a random dice number for each die (1 through 6) and display the numbers on the dice
When the random dice numbers total anything besides 7 and 11, print "Try Again" at the top and increment the current round roll counter in your game object.
When the random dice numbers total 7 or 11, print "Winner!" at the top along with how many rolls it took the player that round and how long in seconds that round took (see mockup image).
