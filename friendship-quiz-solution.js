// questions to be randomly asked on page load
var questionsList = ["What are your/your friend's favorite foods?", "What are your/your friend's favorite animals?"];


//randomly chooses a question to display
function init() {
  var randomIndex = Math.floor(Math.random() * questionsList.length);
  document.getElementById("question").innerHTML = questionsList[randomIndex];
}

window.onload = init;

var answerList = []; //initialize answerList to be empty

/* ADD YOUR CODE BELOW */

//adds user-submitted answer to answerList
function submitAnswer() {
  var answer = document.getElementById("answerInput").value.toLowerCase();
  clear("answerInput");
  answerList.push(answer);
}

//checks if user-submitted guess is in answerList
function checkGuess() {
  var guess = document.getElementById("guessInput").value.toLowerCase();
  clear("guessInput");
  for (var i = 0; i < answerList.length; i++) {
    if (guess == answerList[i]) {
      isCorrect = true;
      break;
    } else {
      isCorrect = false;
    }
  }
  printResult(isCorrect);

}

function clear(id) {
  document.getElementById(id).value = "";
}

function printResult(isCorrect) {
  if (isCorrect) {
    document.getElementById("result").innerHTML = "Nice, you got one!"
  } else {
    document.getElementById("result").innerHTML = "Nope, not an answer."
  }
}
