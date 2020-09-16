const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");

for(let i = 0; i < buttons.length; i++) {
  console.log(buttons);
  buttons[i].addEventListener("click", tossCoin);
}
function tossCoin(e) {
  console.log(e.target.innerText);
}

//const coinArray = ["Heads", "Tails"];
//let score = [0, 0];
