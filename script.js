'use strict';
const number = document.querySelector(".number");
const btnAgain = document.querySelector(".again");
const btnCheck = document.querySelector(".check");
const message = document.querySelector(".message");

let score = 20;
let secretNum = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
console.log(secretNum);

//display message function
const displayMess = (m) => message.textContent = m;

//Check button event
btnCheck.addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess").value);
        //When player not input
        if(!guess){
            // message.textContent ="You need input Number between 1 and 20!β";
            displayMess("You need input Number between 1 and 20!β");

            //When player win !
        }else if(guess === secretNum){
            // message.textContent = "congratulations!πππ";
            displayMess("congratulations!πππ");
            number.textContent = secretNum;

            number.style.width = "30rem";
            document.querySelector("body").style.backgroundColor = "#60b347";
            
            //set high score
            if(score > highScore){
                highScore = score;
                document.querySelector(".highscore").textContent = highScore;
            }

            //When player guess wrong
        }else if(guess !== secretNum){
            if(score > 1){
                // message.textContent = guess > secretNum ? "πToo high!" : "πToo low!";
                displayMess(guess > secretNum ? "πToo high!" : "πToo low!");
                score--;
                document.querySelector(".score").textContent = score;
            }else {
                // message.textContent = "βββyou lost the game!";
                displayMess("βββyou lost the game!");
                document.querySelector(".score").textContent = 0;
            }
        }
            
        //When player guess too high
        // }else if(guess > secretNum){
        //     if(score > 1){
        //         message.textContent = "πToo high!"
        //         score--;
        //         document.querySelector(".score").textContent = score;
        //     }else {
        //         message.textContent = "βββyou lost the game!"
        //         document.querySelector(".score").textContent = 0;
        //     }

        //When player get too low
        // }else if(guess < secretNum){
        //     if(score > 1){
        //         message.textContent = "πToo low!"
        //         score--;
        //         document.querySelector(".score").textContent = score;
        //     }else {
        //         message.textContent = "βββyou lost the game!"
        //         document.querySelector(".score").textContent = 0;
        //     }
        // }
});


//Again button event
btnAgain.addEventListener("click", function(){
    document.querySelector(".guess").value = "";

    score = 20;
    document.querySelector(".score").textContent = 20;

    number.textContent = "?";
    secretNum = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNum);

    // message.textContent = "Start guessing...";
    displayMess("Start guessing...");
    number.style.width = "15rem";
    document.querySelector("body").style.backgroundColor = "#222";
})

