let playerSelection;
let computerSelection;

let buttons = document.querySelectorAll("button");

let wins = document.querySelector(".wins");
wins.textContent = 0;

let losses = document.querySelector(".losses");
losses.textContent = 0;

let result = document.createElement("p");
let div = document.querySelector("div");
let whoBeatWho = document.querySelector(".whoBeatWho");

let winCounter = 0;
let lossCounter = 0;

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
      return "rock";
    } else if (random === 1) {
      return "paper";
    } else {
      return "scissors";
    }
  }

function game(){ 
    computerSelection = getComputerChoice();
    console.log(playerSelection + " " + computerSelection)
    if(playerSelection === computerSelection){
         whoBeatWho.textContent = "It's a tie";
    }
    else if(playerSelection === "rock"){
        switch(computerSelection){
            case "paper":
                whoBeatWho.textContent = "You lose, paper beats rock!";
                lossCounter++;
                losses.textContent++;
                break;
            case "scissors":
                whoBeatWho.textContent = "You win, rock beats scissors!";
                winCounter++;
                wins.textContent++;
                break;
        }
    }
    else if(playerSelection === "paper"){
        switch(computerSelection){
            case "rock":
                whoBeatWho.textContent = "You win, paper beats rock!";
                winCounter++;
                wins.textContent++;
                break;
            case "scissors":
                whoBeatWho.textContent = "You lose, scissors beat paper!";
                lossCounter++;
                losses.textContent++;
                break;
        }
    }
    else{
        switch(computerSelection){
            case "rock":
                whoBeatWho.textContent = "You lose, rock beats scissors!";
                lossCounter++;
                losses.textContent++;
                break;
            case "paper":
                whoBeatWho.textContent = "You win, scissors beat paper!";
                winCounter++;
                wins.textContent++;
                break;
        }
    }
    if(winCounter === 5 || lossCounter === 5){
        if(winCounter > lossCounter)
        {
            result.textContent = "You win the game!";
        }
        else{
            result.textContent = "You lost the game!";
        }
        div.appendChild(result);
        buttons.forEach(button => {
            button.disabled = true;
        });
    }
}


buttons.forEach(button => {
    button.addEventListener("click", () => {
        playerSelection = button.textContent;
        game();
    });
});