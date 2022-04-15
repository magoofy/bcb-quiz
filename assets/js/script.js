var startEl = document.querySelector("#start");
var checkScoresEl = document.querySelector("#check-scores");
var quizContainer = document.querySelector("#quiz");
var timerEl = document.getElementById("timer");
var quizHeading = document.querySelector(".quiz-heading");
var quizDes = document.querySelector(".quiz-description");

var timeLeft = 180;
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
        a: "var object = {}",
        b: "var obj = {}",
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
        a: "element.setAttribute = ('name', ID)",
        b: "element.setAttribute('name', ID)",
        c: "element.setAttribute = (name, 'ID')",
        d: "element.setAttribute(ID, name)"
    }
}

// START BUTTON
startEl.addEventListener("click", function(){
    countdown();
    buildQuiz();
})

// TIMER FUNCTION
function countdown() {
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

// QUIZ
function buildQuiz() {

    // REMOVES THE START PAGE ELEMENTS
    quizHeading.parentNode.removeChild(quizHeading);
    quizDes.parentNode.removeChild(quizDes);
    startEl.parentNode.removeChild(startEl);

    // QUESTIONS
    var questionOne = document.createElement("ul");
    questionOne.textContent = questions.questionOne;
    questionOne.className = "";
    quizContainer.appendChild(questionOne);

    var q1a1 = document.createElement("li");
    q1a1.textContent = questions.questionOneAnswers.a;
    q1a1.className = "answers";
    q1a1.setAttribute("option", "a");
    questionOne.appendChild(q1a1);
    var q1a2 = document.createElement("li");
    q1a2.textContent = questions.questionOneAnswers.b;
    q1a2.className = "answers";
    q1a2.setAttribute("option", "b");
    questionOne.appendChild(q1a2);
    var q1a3 = document.createElement("li");
    q1a3.textContent = questions.questionOneAnswers.c;
    q1a3.className = "answers";
    q1a3.setAttribute("option", "c");
    questionOne.appendChild(q1a3);
    var q1a4 = document.createElement("li");
    q1a4.textContent = questions.questionOneAnswers.d;
    q1a4.className = "answers";
    q1a4.setAttribute("option", "d");
    questionOne.appendChild(q1a4);
    //var q1a = Object.keys(questions.questionOneAnswers);
    //q1a.forEach((key,index) => {console.log(`${key}: ${questions.questionOneAnswers[key]}`)})

    var answers = document.querySelectorAll(".answers");
    answers.forEach(element => {
        element.addEventListener("click", function(event) {
            var option = this.getAttribute("option");
            if (option === "d") {
                console.log("correct");
            }
            else {
                console.log("wrong");
            }
        })
    });

}