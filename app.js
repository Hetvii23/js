let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const  msg = document.querySelector("#msg");

const genComoChoice = () =>{
    //rock,paper ,scissors
    const options = ["rock" , "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log("game was draw");
    
}
const showWinner = (userWin) =>{
    if(userWin){
        console.log("you win");
        
    }
    else{
        console.log("you loose");
        
    }
}

const playgame = (userChoice) =>{
    console.log("user choice =",userChoice);
    //generate coumputerchoice => moduler way of programming one work onw function
    const compChoice = genComoChoice();
    console.log("comp chice",compChoice);

    if(userChoice == compChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors,paper
           userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){ 
            userWin = compChoice === "scissors" ? false : true;
        }
        else(userChoice === "scissors")
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner();
    }



choices.forEach((choice) =>{
      
        choice.addEventListener("click",() => {
            const userChoice = choice.getAttribute("id")
            //console.log("choice was clicked",userChoice);
            playgame(userChoice);
        });
});