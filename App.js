var rows = [[], [], [], [], [], []];
var rowNums = 1;
var boxNums = 1;

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var targetWordChoice = targetWords[Math.floor(Math.random() * targetWords.length)];

console.log(targetWordChoice);

document.addEventListener('keydown', function(event) {
  letterEntered(event.key);
});

function keyPress(clicked){
  letterEntered(clicked);
}

function letterEntered(letter){
  if (letter == "Backspace" && boxNums>1) {
    rows[rowNums-1][boxNums-1] == '';
    console.log("r" + rowNums + "b" + boxNums)
    boxNums--;
    document.getElementById("r" + rowNums + "b" + boxNums).innerHTML = '';
  }
  else if (letter == "Enter"){
    if (boxNums==6){
      if (check()){
        rowNums++;
        boxNums=1;
      }
    }
    else if (rowNums==6){
      endGame();
    }
  }
  else if (alphabet.includes(letter) && boxNums<6){
    rows[rowNums-1][boxNums-1] = letter;
    document.getElementById("r" + rowNums + "b" + boxNums).innerHTML = letter.toUpperCase();
    boxNums++;
  }
  console.log(rows)
}


function check(){
  var tempWord = "";
  rows[rowNums-1].forEach(r => {
    tempWord+= r;
  });
  console.log(tempWord);
  if (!dictionary.includes(tempWord)) return false;
  for (var i=1; i<6; i++){
    if (targetWordChoice.charAt(i-1) == rows[rowNums-1][i-1]){
      console.log("correct");
      document.getElementById("r" + rowNums + "b" + i).className = "box correct";
      document.getElementById(rows[rowNums-1][i-1].toUpperCase()).className="key correct";
    }
    else if (targetWordChoice.includes(rows[rowNums-1][i-1])){
      console.log("almost");
      document.getElementById("r" + rowNums + "b" + i).className = "box almost";
      document.getElementById(rows[rowNums-1][i-1].toUpperCase()).className="key almost";
    }
    else {
      console.log("wrong")
      document.getElementById("r" + rowNums + "b" + i).className = "box wrong";
      console.log(rows[rowNums-1][i-1].toUpperCase());
      document.getElementById(rows[rowNums-1][i-1].toUpperCase()).className="key wrong";
    }
  }
  return true;
}

function endGame(){

}