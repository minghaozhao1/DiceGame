document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var imgRoot1 = "images/dice" + randomNumber1 + ".png";
  document.querySelector(".img1").src =imgRoot1 ;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var imgRoot2 = "images/dice" + randomNumber2 + ".png";
  document.querySelector(".img2").src =imgRoot2 ;
  if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerText="⛳️Player1 Win!";

  }
  else if (randomNumber1 < randomNumber2){
    document.querySelector(".heading").innerText="Player2 Win!⛳️";
  }
  else {
    document.querySelector(".heading").innerText="Tie!";
  }
}
