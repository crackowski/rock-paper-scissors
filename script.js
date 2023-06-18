//function to make computer pick randomly out of three option
//will generate a random integer out of 0-2
//depending on which integer it generates it will pick
//rock paper or scissors

function getComputerChoice(){
    let random = Math.floor(Math.random()*3);
    if(random === 0){
        return "rock";
    }
    else if(random === 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

//i put the computers choice inside a variable instead
//of calling the function.
//the user will input the choice via prompt, and
//to make the choice case-insensitive i used toLowerCase()

let computerSelection = getComputerChoice();
let playerSelection = prompt("Rock, paper, scissors?");
playerSelection = playerSelection.toLowerCase();

//created function play round that accepts two parameters, user input
//and random computer input. Uses combination of if and switch statements
//to figure out who wins

function playRound(playerSelection, computerSelection){
    console.log(playerSelection + " " + computerSelection);
    if(playerSelection === computerSelection)
    {
        return "It's a tie!";
    }
    else if(playerSelection === "rock"){
        switch(computerSelection){
            case "scissors":
                return "You win, rock beats scissors";
            case "paper":
                return "You lose, paper beats rock";
        }

    }
    else if(playerSelection === "paper"){
        switch(computerSelection){
            case "scissors":
                return "You lose, scissors beat paper";
            case "rock":
                return "You win, paper beats rock";
        }

    }
    else {
        switch(computerSelection){
            case "paper":
                return "You win, scissors beat paper";
            case "rock":
                return "You lose, rock beats scissor";
        }

    }
}
console.log(playRound(playerSelection, computerSelection));


function game(){
    let win = 0, loss = 0;
    for(let i = 1; i <= 5; i++)
    {
        
    }
}

game();