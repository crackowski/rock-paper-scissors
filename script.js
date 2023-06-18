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

//declared two variables that will hold players input and computer input
//the user will input the choice via prompt

let computerSelection;
let playerSelection;


//created function play round that accepts two parameters, user input
//and random computer input. Uses combination of if and switch statements
//to figure out who wins

function playRound(playerSelection, computerSelection){
    
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

//Added game() function which repeats the playRound func. 5 times
//it keeps score of who wins or loses and tells you at the end
//who won/lost, if it's a tie no one gets a point and the game
//will continue for an extra round until there are 5 rounds
//of wins and losses

function game(){
    let win = 0;
    let loss = 0;
    let n = 5;

    for(let i = 1; i <= n; i++)
    {
        playerSelection = prompt("Rock, paper, scissors?");
        playerSelection = playerSelection.toLowerCase();
        computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if(result.includes("win")){
            console.log(result);
            win++;
        }
        else if(result.includes("lose")){
            console.log(result)
            loss++;
        }
        else{
            console.log(result)
            n++;
        }
    }
    console.log("The score is: " + win + "-" + loss)

    if(win > loss){
        console.log("You win!");
    }
    else{
        console.log("You lose!");
    }
}

game();