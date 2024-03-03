
//Generate a random number from 1 to 6:
//const firstRandomNum = Math.floor(Math.random()*6) + 1;

//Generate a string of images from images/dice1.jpeg upto images/dice6.jpeg
//const firstDiceImage = 'cards/dice' + firstRandomNum + '.jpeg';

//document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);





//Generate a random number from 1 to 6:
//const secondRandomNum = Math.floor(Math.random()*6) + 1;

//Generate a string of images from images/dice1.jpeg upto images/dice6.jpeg




//function to roll the dice
function rollDice(scoreId){
    let dice = Math.floor(Math.random()*6) + 1;
    document.getElementById(scoreId).innerHTML = parseInt(document.getElementById(scoreId).innerHTML) + dice;
    document.getElementById("counter").innerHTML  =  parseInt(document.getElementById("counter").innerHTML) + 1;
    displayDice(dice);
    if(parseInt(document.getElementById("counter").innerHTML)==6){
        displayWinner();
    }
}


//Logic for the winner
function displayWinner(){
    if(parseInt(document.getElementById("score1").innerHTML) > parseInt(document.getElementById("score2").innerHTML)){
        document.querySelector('h1').innerHTML = 'The winner is User 1';
    }
    else if(parseInt(document.getElementById("score1").innerHTML) < parseInt(document.getElementById("score2").innerHTML)){
        document.querySelector('h1').innerHTML = 'The winner is User 2';
    }
    else{
        document.querySelector('h1').innerHTML = "It's a Draw";
    }
}

//displaying dice image 
function displayDice(num){
    let imageName = "cards/dice" + num + ".jpeg";
    
    document.getElementById("img").src = imageName;
}
//reset button
function newGame(){
    document.getElementById("counter").innerHTML = "0";
    document.getElementById("score1").innerHTML = "0";
    document.getElementById("score2").innerHTML = "0";
    document.querySelector('h1').innerHTML = "";
}