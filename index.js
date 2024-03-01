
//Generate a random number from 1 to 6:
const firstRandomNum = Math.floor(Math.random()*6) + 1;

//Generate a string of images from images/dice1.jpeg upto images/dice6.jpeg
const firstDiceImage = 'cards/dice' + firstRandomNum + '.jpeg';

document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);




//Generate a random number from 1 to 6:
const secondRandomNum = Math.floor(Math.random()*6) + 1;

//Generate a string of images from images/dice1.jpeg upto images/dice6.jpeg
const secondDiceImage = 'cards/dice' + secondRandomNum + '.jpeg';

document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);


//Logic for the winner.
if(firstRandomNum > secondRandomNum) {
    document.querySelector('h1').innerHTML = 'The winner is User 1';
}

else if(firstRandomNum < secondRandomNum){
    document.querySelector('h1').innerHTML = 'The winner is User 2';
}

else{
    document.querySelector('h1').innerHTML = "It's a Draw";
}