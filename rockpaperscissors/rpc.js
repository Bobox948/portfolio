



// array for the computer possibilities in the game
let possibilities = ["Rock", "Paper", "Scissors"]
// variable declaration
let yourscore = 0;
let compscore = 0;

let getComputerChoice;
let playerChoice;

var computerSelection;

var rock = "rock"
var paper = "paper"
var scissors = "scissors"

// on button click, playround function is called with player's selection vs computer's
var button1 = document.getElementById('btn1');

button1.addEventListener('click', function () {playRound(rock, computerSelection)})

var button2 = document.getElementById('btn2');

button2.addEventListener('click', function () {playRound(paper, computerSelection)})

var button3 = document.getElementById('btn3');

button3.addEventListener('click', function () {playRound(scissors, computerSelection)})


var output = document.getElementById('output');

var score = document.getElementById('score');




// display scores
score.innerHTML="Your score : "+yourscore+" Computer's score : "+compscore;





function playRound(playerSelection, computerSelection) {

  

   
// random choice for computer, on each click the random is randomed again
    var random = Math.floor((Math.random() * possibilities.length));
    computerSelection = possibilities[random]
        // who wins the point
    if (playerSelection == "rock" && computerSelection == "Rock") {
        output.innerHTML="You tied this round, computer's choice: "+computerSelection;
        score.innerHTML="Your score : "+yourscore+" Computer's score : "+compscore;
    }
    else if (playerSelection == "rock" && computerSelection == "Paper") {
        output.innerHTML="You lost this round, computer's choice: "+computerSelection;
        compscore++;
        score.innerHTML="Your score : "+yourscore+" Computer's score : "+compscore;
        
    }
    else if (playerSelection == "rock" && computerSelection == "Scissors") {
        output.innerHTML="You <strong>won</strong> this round, computer's choice: "+computerSelection;
        yourscore++;
        score.innerHTML="Your score : "+yourscore+" Computer's score : "+compscore;


        
    }
    else if (playerSelection == "paper" && computerSelection == "Rock") {
        output.innerHTML="You <strong>won</strong> this round, computer's choice: "+computerSelection;
        yourscore++;
        score.innerHTML="Your score : "+yourscore+" Computer's score : "+compscore;


        
    }
    else if (playerSelection == "paper" && computerSelection == "Paper") {
        output.innerHTML="You tied this round, computer's choice: "+computerSelection;
        score.innerHTML="Your score : "+yourscore+" Computer's score : "+compscore;


        
    }
    else if (playerSelection == "paper" && computerSelection == "Scissors") {
        output.innerHTML="You lost this round, computer's choice: "+computerSelection;
        compscore++;
        score.innerHTML="Your score : "+yourscore+" Computer's score : "+compscore;


        
    }
    else if (playerSelection == "scissors" && computerSelection == "Rock") {
        output.innerHTML="You lost this round, computer's choice: "+computerSelection;
        compscore++;
        score.innerHTML="Your score : "+yourscore+" Computer's score : "+compscore;

        
    }
    else if (playerSelection == "scissors" && computerSelection == "Paper") {
        output.innerHTML="You <strong>won</strong> this round, computer's choice: "+computerSelection;
        yourscore++;
        score.innerHTML="Your score : "+yourscore+" Computer's score : "+compscore;

    }
    else if (playerSelection == "scissors" && computerSelection == "Scissors") {
        output.innerHTML="You tied this round, computer's choice: "+computerSelection;
        score.innerHTML="Your score : "+yourscore+" Computer's score : "+compscore;

        
    }

// game stops at 5 points
if (yourscore == 5) {
    score.innerHTML="Your score : "+yourscore+" Computer's score : "+compscore;


    alert("you won !")
}
else if (compscore == 5) {
    score.innerHTML="Your score : "+yourscore+" Computer's score : "+compscore;

    alert("you lost!")
}


}

// restart scores
var reset = document.getElementById('restart')
reset.addEventListener('click', restart)

function restart()
{

    yourscore = 0;
    compscore = 0;
    output.innerHTML=""
    score.innerHTML="Your score : "+yourscore+" Computer's score : "+compscore;


}