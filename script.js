let userS=document.querySelector(".userScore");
let userScore=Number(userS.innerText);
let compS=document.querySelector(".compScore");
let compScore=Number(compS.innerText);
let Output=document.querySelector(".msg");

const options=document.querySelectorAll(".btn");
options.forEach((choice)=>{
    choice.addEventListener("click",()=>{//comp choices
    let choices=["rock","paper","scissors"];
    let random=Math.floor(Math.random()*3);
    let compChoice=choices[random];
        if(choice.getAttribute("class")==="rock btn"){
            if(compChoice=="scissors"){
                userScore++;
                userS.innerText=userScore;
            }else if (compChoice=="paper") {
                compScore++;      
                compS.innerText=compScore          
            }else{
                // alert("You both chose rock , so it's a draw!")
                Output.innerText="You both chose rock , so it's a draw!";
            }
        } else if(choice.getAttribute("class")==="paper btn"){
            if(compChoice=="scissors"){
                compScore++;  
                compS.innerText=compScore 
            }else if (compChoice=="rock") {
                userScore++;
                userS.innerText=userScore;                
            }else{
                // alert("You both chose Paper , so it's a draw!")
                Output.innerText="You both chose paper , so it's a draw!";
            }
        }else if(choice.getAttribute("class")==="scissors btn"){
            if(compChoice=="rock"){
                compScore++;  
                compS.innerText=compScore 
            }else if (compChoice=="paper") {
                userScore++; 
                userS.innerText=userScore;               
            }else{
                // alert("You both chose Scissors , so it's a draw!")
                Output.innerText="You both chose Scissors , so it's a draw!  ";
            }
        }
    })
})
