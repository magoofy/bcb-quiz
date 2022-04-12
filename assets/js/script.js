var startEl = document.querySelector("#start");
var checkScoresEl = document.querySelector("#check-scores");
var quizContainer = document.getElementById("quiz");
var timerEl = document.getElementById("timer");

var questions = {

    // get question and answer ex: questions.questionOneAnswers.a
    
    questionOne: "Which of these is the correct way to return an element?",
    questionOneAnswers : {
        a: "query.Selector = ('element')",
        b: "var = querySelector.document('element')",
        c: "querySelector = 'element'",
        d: "var = document.querySelector('element')"
    },
    questionTwo: "How do you declare an object?",
    questionTwoAnswers: {
        a: "var obj = {}",
        b: "var object = {}",
        c: "var obj = []",
        d: "var object = []"
    },
    questionThree: "Which of these makes a new function?",
    questionThreeAnswers: {
        a: "function myFunction()",
        b: "function = myFunciton()",
        c: "var function() = myFunction",
        d: "var function = myFunction()"
    },
    questionFour: "How many times does the for loop, for(i=0; i < var; i++), iterate if var = 5?",
    questionFourAnswers: {
        a: "4",
        b: "0",
        c: "5",
        d: "returns null"
    },
    questionFive: "How do you comment in Javascript?",
    questionFourAnswers: {
        a: "/*Comment*/",
        b: "//Comment",
        c: "<!--Comment-->",
        d: "\\Comment"
    },
    questionSix: "Which of these is not a logical operator?",
    questionSixAnswers: {
        a: "!",
        b: "&&",
        c: "===",
        d: "||"
    },
    quesitonSeven: "Which is the correct way to add an event listener",
    questionSevenAnswers: {
        a: "event.addEventListener('click', function())",
        b: "event = addEventListener('click', function())",
        c: "on.click = addEventListner(function())",
        d: "addEventListener.onClick(function())"
    },
    questionEight: "How do you append a child?",
    questionEightAnswers: {
        a: "appenChild(child).parent",
        b: "append(child).parent",
        c: "parent.childAppend(child)",
        d: "parent.appendChild(child)"
    },
    questionNine: "How do you add html onto an element?",
    questionNineAnswers: {
        a: "element.textContent('text')",
        b: "element.content = 'text'",
        c: "addContent.element('text')",
        d: "element.textContent = ('text')"
    },
    questionTen: "Which of these sets the attribute of, 'name', with the variable, ID?",
    questionTenAnswers: {
        a: "element.setAttribute('name', ID)",
        b: "element.setAttribute = ('name', ID)",
        c: "element.setAttribute = (name, 'ID')",
        d: "element.setAttribute(ID, name)"
    }
}

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

function buildQuiz() {
    //var questionContainer = document.createElement("div");
    //actionContainerEl.className = "task-actions";

    var questionOne = document.createElement("div");
    editButtonEl.textContent = questionOneAnswers.a, question;
    editButtonEl.className = "";
    editButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(editButtonEl);
}