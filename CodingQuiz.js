var timeEl = document.querySelector(".time");
var startBtn = document.getElementById("startBtn");
var questionContainerElement = document.getElementById("question-container")
var secondsLeft = 30;
var currentQuestion = 0;

var questionArray = [
    {
        questionTitle: "Commonly used data types DO NOT include:",
        answerChoices : ["A. Strings","B. Booleans","C. Alerts","D. Numbers"],
        correctAnswer : "C. Alerts"
    
    },
    {
        questionTitle: "The condition in an if/else statement is enclosed with a _____.",
        answerChoices : ["A. Quotes","B. Curly Brackets","C. Parentheses","D. Square Brackets"],
        correctAnswer : "C. Parentheses"
    },
    {
        questionTitle: "Arrays in Javascript can be used to store _____. ",
        answerChoices : ["A. Numbers and Strings","B. Other Arrays",
        "C. Booleans","D. All of the above"],
        correctAnswer : "D. All of the above"
    },
    {
        questionTitle: "String values must be enclosed within _____ when being assigned to variables.",
        answerChoices : ["A. Quotes","B. Curly Brackets","C. Parentheses","D. Commas"],
        correctAnswer : "A. Quotes"
    },
    {
        questionTitle: "A useful tool used during development and debugging for printing content to the debugger is:",
        answerChoices : ["A. Javascript","B. console.log","C. Terminal/Bash","D. For loop"],
        correctAnswer : "B. console.log"
    }
] 
console.log(questionArray[currentQuestion].questionTitle)


startBtn.onclick = function () {
    startBtn.classList.add('hide')
    questionContainerElement.classList.remove("hide")
  
    displayTime()
    displayQuestion()
};

function displayTime() {
    var timerInterval = setInterval(function() {
   secondsLeft--;
   timeEl.textContent = secondsLeft;
   console.log(secondsLeft)
   
    if (secondsLeft === 0) {
      clearInterval(timerInterval);

    }
  }, 1000);
}

function displayQuestion() {
    var questionList = document.getElementById("question")
    questionList.textContent = questionArray[currentQuestion].questionTitle

    for(var i = 0; i < questionArray[currentQuestion].answerChoices.length; i++) {
       
        console.log(questionArray[currentQuestion].answerChoices[i])
        var answerBtn = document.getElementById("answer" + i)
        answerBtn.textContent = questionArray[currentQuestion].answerChoices[i]
        answerBtn.onclick = function() {
         
            checkAnswer(this.textContent) 
            
        }
    }
    

}

function checkAnswer(userClick) {
    if (this,textContent !== questionArray[currentQuestion].answerChoices) {
        secondsLeft -= 10;

        if (secondsLeft < 0) {
            secondsLeft = 0;
        }
    }
    console.log(userClick)
}



