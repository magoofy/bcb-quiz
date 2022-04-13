var startEl = document.querySelector("#start");
var checkScoresEl = document.querySelector("#check-scores");
var quizContainer = document.getElementById("quiz");
var timerEl = document.getElementById("timer");

var questions = [
    {
    question: "Which of these is the correct way to return an element?",
    answers: {
        a: "query.Selector = ('element')",
        b: "var = querySelector.document('element')",
        c: "querySelector = 'element'",
        d: "var = document.querySelector('element')"
        },
    correctAnswer: "d"
    },
    {
    question: "How do you declare an object?",
    answers: {
        a: "var obj = {}",
        b: "var object = {}",
        c: "var obj = []",
        d: "var object = []"
        },
    correctAnswer: "a"
    },
    {
    question: "Which of these makes a new function?",
    answers: {
        a: "function myFunction()",
        b: "function = myFunciton()",
        c: "var function() = myFunction",
        d: "var function = myFunction()"
        },
    correctAnswer: "a"
    },
    {
    question: "How many times does the for loop, for(i=0; i < var; i++), iterate if var = 5?",
    answers: {
        a: "4",
        b: "0",
        c: "5",
        d: "returns null"
        },
    correctAnswer: "c"
    },
    {
    question: "How do you comment in Javascript?",
    answers: {
        a: "/*Comment*/",
        b: "//Comment",
        c: "<!--Comment-->",
        d: "**Comment"
        },
    correctAnswer: "b"
    },
    {
    question: "Which of these is not a logical operator?",
    answers: {
        a: "!",
        b: "&&",
        c: "===",
        d: "||"
        },
    correctAnswer: "c"
    },
    {
    quesiton: "Which is the correct way to add an event listener",
    answers: {
        a: "event.addEventListener('click', function())",
        b: "event = addEventListener('click', function())",
        c: "on.click = addEventListner(function())",
        d: "addEventListener.onClick(function())"
        },
    correctAnswer: "a"
    },
    {
    question: "How do you append a child?",
    answers: {
        a: "appenChild(child).parent",
        b: "append(child).parent",
        c: "parent.childAppend(child)",
        d: "parent.appendChild(child)"
        },
    correctAnswer: "d"
    },
    {
    question: "How do you add html onto an element?",
    answers: {
        a: "element.textContent('text')",
        b: "element.content = 'text'",
        c: "addContent.element('text')",
        d: "element.textContent = ('text')"
        },
    correctAnswer: "a"
    },
    {
    question: "Which of these sets the attribute of, 'name', with the variable, ID?",
    answers: {
        a: "element.setAttribute('name', ID)",
        b: "element.setAttribute = ('name', ID)",
        c: "element.setAttribute = (name, 'ID')",
        d: "element.setAttribute(ID, name)"
        },
    correctAnswer: "a"
    }
]

// START BUTTON
startEl.addEventListener("click", function(){
    countdown();
    buildQuiz();
})

// TIMER FUNCTION
function countdown() {
    var timeLeft = 180;
  
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + 's';
        timeLeft--;
        } 
    else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        // DISPLAY SCORE PAGE
        }
    }, 1000);
}

// QUIZ BUILDER
function buildQuiz() {
    //var questionContainer = document.createElement("div");
    //actionContainerEl.className = "task-actions";

    var questionOne = document.createElement("div");
    editButtonEl.textContent = questionOneAnswers.a, question;
    editButtonEl.className = "";
    editButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(editButtonEl);
}