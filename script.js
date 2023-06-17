//function to make computer pick randomly out of three option
//will generate a random integer out of 0-2
//depending on which integer it generates it will pick
//rock paper or scissors

function getComputerChoice(){
    console.log(random);
    if(random === 0){
        return "Rock";
    }
    else if(random === 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}