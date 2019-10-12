//Declarig my variables
var score, roundScore, activePlayer, gamePlaying;

//Initializing function

init();

lastDice;
document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying){
        //Get random numbers
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random()* 6) + 2;

        //Displayin the results
        document.getElementById("dice-1").style.display = "block"; 
        document.getElementById("dice-2").style.display = "block";    
    
        document.getElementById("dice-1").src="dice-" + dice1+ '.png'; 
        document.getElementById("dice-2").src="dice-" + dice2+ '.png';  
        

        //
        if (dice1 !== 1 && dice2 !== 2 ){
            //Add scores
            roundScore += dice1 + dice2;

            document.querySelector('#current-'+ activePlayer).textContext = roundScore;
        }
    }
})

