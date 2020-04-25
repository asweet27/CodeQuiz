var timeEl = document.querySelector(".time");
var startBtn = document.getElementById("startBtn");
var secondsLeft = 30;
var currentQuestion = 0;
var questionArray = [
    {
        questionTitle: "What is first letter of alphabet?",
        answerChoices : ["a","c","x","z"],
        correctAnswer : "a"
    
    },
    {
        questionTitle: "What is last letter of alphabet?",
        answerChoices : ["a","c","x","z"],
        correctAnswer : "z"
    }
]
console.log(questionArray[currentQuestion].questionTitle)


startBtn.onclick = function () {
    currentQuestion++
    console.log(questionArray[currentQuestion].questionTitle)


    displayTime()
};

function displayTime() {
    var timerInterval = setInterval(function() {
   secondsLeft--;
   timeEl.textContent = secondsLeft;
   console.log(secondsLeft)
   
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}
