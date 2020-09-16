const coinArray = ["Heads", "Tails"];
let score = [0, 0];
const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");

for(let i = 0; i < buttons.length; i++) {
  console.log(buttons);
  buttons[i].addEventListener("click", tossCoin);
}
function tossCoin(e) {
  //console.log("player:" + e.target.innerText);

  let playerGuess = e.target.innerText
  let computerToss = Math.floor(Math.random()*2);

  //console.log("computer:" + coinArray[computerToss])

  let computerGuess = coinArray[computerToss]
  let output;
  if(playerGuess === computerGuess){
    output = "Player Wins"
    score[0]++;
  }else{
    output = "Computer Wins"
    score[1]++;
  }
  message.innerHTML = output + "<br>Player " + score[0] + "Computer " + score[1];
}


