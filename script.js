let computerchoice = document.getElementById("computerchoicedisplay");
let userchoice = document.getElementById("userchoicedisplay");

let rockbutton = document.getElementById("rockbutton");
let paperbutton = document.getElementById("paperbutton");
let scissorbutton = document.getElementById("Scissorbutton");
let result = document.getElementById("result");

let cc;
let uc;
let choices = ["rock","paper","scissor"];
function getrandom(){
    let i = Math.floor(Math.random()*choices.length);

    computerchoice.innerHTML = `${choices[i]}`;
    cc = choices[i];
}

rockbutton.addEventListener("click",()=>{
    userchoice.innerHTML = "rock";
    uc = "rock";
    getrandom();
    check();
})
paperbutton.addEventListener("click",()=>{
    userchoice.innerHTML = "paper";
    uc = "paper"
    getrandom();
    check();
})
scissorbutton.addEventListener("click",()=>{
    userchoice.innerHTML = "scissor";
    uc = "scissor";
    getrandom();
    check();
})
let res;
function check(){
    if(uc == cc){
        res = "draw";
    }
    else if(uc == "rock" && cc == "paper" || uc == "paper" && cc == "scissor" || uc == "scissor" && cc == "rock"){
        res = "lose";
    }
    else {
        res = "win";
    }
    
    result.innerHTML = res;

}