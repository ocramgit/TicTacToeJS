const button = document.getElementsByClassName("button");
const buttons = document.getElementsByClassName("buttonValue");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => {
      if (buttons[i].textContent === "") {
        buttons[i].textContent = "X";
        checkWin();
  
        let random;
        let isEmpty = false;
        let isBoardFull = true;
        for (let j = 0; j < buttons.length; j++) {
          if (buttons[j].textContent === "") {
            isBoardFull = false;
            break;
          }
        }
  
        if (!isBoardFull) {
          while (!isEmpty) {
            random = getInt();
  
            if (buttons[random].textContent === "") {
              isEmpty = true;
            }
          }
  
          buttons[random].textContent = "O";
          checkWin();
        }
      }
    });
  }
  

function checkWin() {
  if (
    (buttons[0].textContent == "X" &&
      buttons[1].textContent == "X" &&
      buttons[2].textContent == "X") ||
    (buttons[3].textContent == "X" &&
      buttons[4].textContent == "X" &&
      buttons[5].textContent == "X") ||
    (buttons[6].textContent == "X" &&
      buttons[7].textContent == "X" &&
      buttons[8].textContent == "X") ||
    (buttons[0].textContent == "X" &&
      buttons[3].textContent == "X" &&
      buttons[6].textContent == "X") ||
    (buttons[1].textContent == "X" &&
      buttons[4].textContent == "X" &&
      buttons[7].textContent == "X") ||
    (buttons[2].textContent == "X" &&
      buttons[5].textContent == "X" &&
      buttons[8].textContent == "X") ||
    (buttons[0].textContent == "X" &&
      buttons[4].textContent == "X" &&
      buttons[8].textContent == "X") ||
    (buttons[2].textContent == "X" &&
      buttons[4].textContent == "X" &&
      buttons[6].textContent == "X")
  ) {
    document.getElementById("win").textContent = "You won!";
  } else if (
    (buttons[0].textContent == "O" &&
      buttons[1].textContent == "O" &&
      buttons[2].textContent == "O") ||
    (buttons[3].textContent == "O" &&
      buttons[4].textContent == "0" &&
      buttons[5].textContent == "O") ||
    (buttons[6].textContent == "O" &&
      buttons[7].textContent == "O" &&
      buttons[8].textContent == "O") ||
    (buttons[0].textContent == "O" &&
      buttons[3].textContent == "O" &&
      buttons[6].textContent == "O") ||
    (buttons[1].textContent == "O" &&
      buttons[4].textContent == "O" &&
      buttons[7].textContent == "O") ||
    (buttons[2].textContent == "O" &&
      buttons[5].textContent == "O" &&
      buttons[8].textContent == "O") ||
    (buttons[0].textContent == "O" &&
      buttons[4].textContent == "O" &&
      buttons[8].textContent == "O") ||
    (buttons[2].textContent == "O" &&
      buttons[4].textContent == "O" &&
      buttons[6].textContent == "O")
  ) {
    document.getElementById("win").textContent = "Computer won!";
  } else if (
    buttons[0].textContent &&
    buttons[1].textContent &&
    buttons[2].textContent &&
    buttons[3].textContent &&
    buttons[4].textContent &&
    buttons[5].textContent &&
    buttons[6].textContent &&
    buttons[7].textContent &&
    buttons[8].textContent
  ) {
    document.getElementById("win").textContent = "DRAW!";
  }
}

function getInt() {
  return Math.floor(Math.random() * (9 - 1) + 1);
}
