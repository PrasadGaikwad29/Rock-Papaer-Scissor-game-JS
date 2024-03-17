
let userScore = 0;
let compScore = 0;
let Reset=0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const reset=document.querySelector("#button")

const UserScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

}; 

const drawGame=()=>{
    msg.innerText="The Game was Draw!! Play Again!"
    msg.style.backgroundColor="Darkblue";
};
reset.addEventListener("click", (userChoice,compScore) => {
    UserScorePara.innerText=0;
    compScorePara.innerText=0;
    msg.innerText="Play Your Move";

});

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        UserScorePara.innerText=userScore;
        msg.innerText=`You Win!! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    } else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lose.. ${compChoice} beats Your choice ${userChoice}`;
        msg.style.backgroundColor="red"; 
        }
    
    };

const playGame=(userChoice)=>{
    // Generate Your choice
    const compChoice=genCompChoice();

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //paper, scissors
            userWin=compChoice==="paper"?false:true;
        } else if(userChoice==="paper"){
            // rock , scissors
            userWin=compChoice==="scissors"?false:true;
        } else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);

    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
