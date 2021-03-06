var timeEl = document.querySelector(".time");


var questions = [
    {
      question: 'Inside which HTML element do we put the Javascript?',
      answers: [
        { text: '<Javascript>', correct: false },
        { text: '<js>', correct: false },
        { text: '<scripting>', correct: false },
        { text: '<script>', correct: true }
      ]
    },
    {
      question: 'Commonly used data types DO NOT include:',
      answers: [
        { text: 'Strings', correct: false },
        { text: 'Booleans', correct: false },
        { text: 'Alerts', correct: true },
        { text: 'Numbers', correct: false }
      ]
    },
    {
      question: 'How do you declare a Javascript variable?',
      answers: [
        { text: 'v bookName', correct: false },
        { text: 'variable bookName', correct: false },
        { text: 'var bookName', correct: true },
        { text: 'None of the above', correct: false }
      ]
    },
    {
      question: 'A useful tool used during development and debugging for printing content to the debugger is:',
      answers: [
        { text: 'console.log', correct: true },
        { text: 'terminal/bash', correct: false },
        { text: 'FOR loop', correct: false },
        { text: 'Javascript', correct: false }
      ]
    },
    {
      question: 'What is the correct syntax for referring to an external script called “quizTime.js',
      answers: [
        { text: '<script href=”quizTime.js”>', correct: false },
        { text: '<script src=”quizTime.js”>', correct: true },
        { text: '<script ref=”quizTime.js”>', correct: false },
        { text: '<script name=”quizTime.js”>', correct: false }
      ]
    }
  ]
var secondsLeft = questions.length * 15;
var timerInterval;

var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn');
var questionContainerElement = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');
var scorePage = document.getElementById('quizComplete');
var codeQuiz = document.getElementById('codeQuiz');
var quizRules = document.getElementById('quizRules');
var submitButton = document.getElementById('submit-btn');

scorePage.classList.add('hide')



let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  codeQuiz.classList.add('hide')
  quizRules.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')

  displayTime()  
  setNextQuestion()
}

function displayTime() {
    var timerInterval = setInterval(function() {
   secondsLeft--;
   timeEl.textContent = secondsLeft;
   console.log(secondsLeft)
   
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);

    }
  }, 1000);
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    if (!correct) {
        secondsLeft = secondsLeft - 10
    }
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)

  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    
    questionContainerElement.classList.add('hide')
  
    quizOver()
    
  }
}

function quizOver() {
    clearInterval(timerInterval);
    scorePage.classList.remove('hide')

    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = secondsLeft;
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
        debugger
        
        element.classList.add('wrong')
    }
      
    }
    
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }

  var initialsEl = document.getElementById("initials");

  function saveHighscore() {
    
    var initials = initialsEl.value.trim();
  
    
    if (initials !== "") {
      
      var highscores =
        JSON.parse(window.localStorage.getItem("scores")) || [];
  
      var newScore = {
        score: secondsLeft,
        initials: initials
      };
  
      
      highscores.push(newScore);
      window.localStorage.setItem("scores", JSON.stringify(highscores));
  
     
      window.location.href = "Scoresheet.html";
    }


  submitButton.addEventListener('click', saveHighscore)
 
  }

  function checkForEnter(event) {
    if (event.key === "Enter") {
        saveHighscore();
    }
};

document.getElementById('sbmtBtn').onclick = saveHighscore;

document.getElementById('initials').onkeyup = checkForEnter;


  
  
 

