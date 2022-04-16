// VARIABLES
var startEl = document.querySelector("#start");
var checkScoresEl = document.querySelector("#check-scores");
var quizContainer = document.querySelector("#quiz");
var timerEl = document.getElementById("timer");
var quizHeading = document.querySelector(".quiz-heading");
var quizDes = document.querySelector(".quiz-description");
var answerResultEl = document.querySelector("#answer-result");

var timeLeft = 180;
var questions = {

    // get question and answer ex: questions.questionOneAnswers.a
    
    questionOne: "1. Which of these is the correct way to return an element?",
    questionOneAnswers : {
        a: "query.Selector = ('element')",
        b: "var = querySelector.document('element')",
        c: "querySelector = 'element'",
        d: "var = document.querySelector('element')"
    },
    questionTwo: "2. How do you declare an object?",
    questionTwoAnswers: {
        a: "var object = {}",
        b: "var obj = {}",
        c: "var obj = []",
        d: "var object = []"
    },
    questionThree: "3. Which of these makes a new function?",
    questionThreeAnswers: {
        a: "function myFunction()",
        b: "function = myFunciton()",
        c: "var function() = myFunction",
        d: "var function = myFunction()"
    },
    questionFour: "4. How many times does the for loop, for(i=0; i < var; i++), iterate if var = 5?",
    questionFourAnswers: {
        a: "4",
        b: "0",
        c: "5",
        d: "returns null"
    },
    questionFive: "5. How do you comment in Javascript?",
    questionFiveAnswers: {
        a: "/*Comment*/",
        b: "//Comment",
        c: "<!--Comment-->",
        d: "\\Comment"
    },
    questionSix: "6. Which of these is not a logical operator?",
    questionSixAnswers: {
        a: "!",
        b: "&&",
        c: "===",
        d: "||"
    },
    questionSeven: "7. Which is the correct way to add an event listener",
    questionSevenAnswers: {
        a: "var.addEventListener('click', function())",
        b: "var = addEventListener('click', function())",
        c: "on.click = addEventListner(function())",
        d: "addEventListener.onClick(function())"
    },
    questionEight: "8. How do you append an element?",
    questionEightAnswers: {
        a: "appendChild(childEl).parent",
        b: "append(childEl).parent",
        c: "parentEl.childAppend(childEl)",
        d: "parentEl.appendChild(childEl)"
    },
    questionNine: "9. Which is the correct way to use 'textContent'?",
    questionNineAnswers: {
        a: "element.textContent('text')",
        b: "element.textContent = 'text'",
        c: "textContent.element('text')",
        d: "element.textContent = ('text')"
    },
    questionTen: "10. Which of these sets the attribute of, 'name', with the variable, ID?",
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
    qOne();
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

// DISPLAY ANSWER RESULT
function displayCorrect() {
    answerResultEl.textContent = "CORRECT"
    setTimeout (function() {
        answerResultEl.textContent = "";
    }, 1200)
}
function displayWrong() {
    answerResultEl.textContent = "WRONG";
    setTimeout (function() {
        answerResultEl.textContent = "";
    }, 1200)
}

// QUIZ
function qOne() {
    // REMOVES THE START PAGE ELEMENTS
    quizHeading.parentNode.removeChild(quizHeading);
    quizDes.parentNode.removeChild(quizDes);
    startEl.parentNode.removeChild(startEl);

    // QUESTION
    var questionOne = document.createElement("ul");
    questionOne.textContent = questions.questionOne;
    questionOne.className = "question";
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

    var answers = document.querySelectorAll(".answers");
    answers.forEach(element => {
        element.addEventListener("click", function(event) {
            var option = this.getAttribute("option");
            if (option === "d") {
                displayCorrect();
                qTwo();
            }
            else {
                displayWrong();
                timeLeft = timeLeft - 15;
                qTwo();
            }
        })
    });

    
}
function qTwo() {
    quizContainer.textContent = "";

    // QUESTION
    var questionTwo = document.createElement("ul");
    questionTwo.textContent = questions.questionTwo;
    questionTwo.className = "question";
    quizContainer.appendChild(questionTwo);

    var q2a1 = document.createElement("li");
    q2a1.textContent = questions.questionTwoAnswers.a;
    q2a1.className = "answers";
    q2a1.setAttribute("option", "a");
    questionTwo.appendChild(q2a1);
    var q2a2 = document.createElement("li");
    q2a2.textContent = questions.questionTwoAnswers.b;
    q2a2.className = "answers";
    q2a2.setAttribute("option", "b");
    questionTwo.appendChild(q2a2);
    var q2a3 = document.createElement("li");
    q2a3.textContent = questions.questionTwoAnswers.c;
    q2a3.className = "answers";
    q2a3.setAttribute("option", "c");
    questionTwo.appendChild(q2a3);
    var q2a4 = document.createElement("li");
    q2a4.textContent = questions.questionTwoAnswers.d;
    q2a4.className = "answers";
    q2a4.setAttribute("option", "d");
    questionTwo.appendChild(q2a4);

    var answers = document.querySelectorAll(".answers");
    answers.forEach(element => {
        element.addEventListener("click", function(event) {
            var option = this.getAttribute("option");
            if (option === "b") {
                displayCorrect();
                qThree();
            }
            else {
                displayWrong();
                timeLeft = timeLeft - 15;
                qThree();
            }
        })
    });
}
function qThree() {
    quizContainer.textContent = "";

    // QUESTION
    var questionThree = document.createElement("ul");
    questionThree.textContent = questions.questionThree;
    questionThree.className = "question";
    quizContainer.appendChild(questionThree);

    var a3a1 = document.createElement("li");
    a3a1.textContent = questions.questionThreeAnswers.a;
    a3a1.className = "answers";
    a3a1.setAttribute("option", "a");
    questionThree.appendChild(a3a1);
    var a3a2 = document.createElement("li");
    a3a2.textContent = questions.questionThreeAnswers.b;
    a3a2.className = "answers";
    a3a2.setAttribute("option", "b");
    questionThree.appendChild(a3a2);
    var a3a3 = document.createElement("li");
    a3a3.textContent = questions.questionThreeAnswers.c;
    a3a3.className = "answers";
    a3a3.setAttribute("option", "c");
    questionThree.appendChild(a3a3);
    var a3a4 = document.createElement("li");
    a3a4.textContent = questions.questionThreeAnswers.d;
    a3a4.className = "answers";
    a3a4.setAttribute("option", "d");
    questionThree.appendChild(a3a4);

    var answers = document.querySelectorAll(".answers");
    answers.forEach(element => {
        element.addEventListener("click", function(event) {
            var option = this.getAttribute("option");
            if (option === "a") {
                displayCorrect();
                qFour();
            }
            else {
                displayWrong();
                timeLeft = timeLeft - 15;
                qFour();
            }
        })
    });
}
function qFour() {
    quizContainer.textContent = "";

    // QUESTION
    var questionFour = document.createElement("ul");
    questionFour.textContent = questions.questionFour;
    questionFour.className = "question";
    quizContainer.appendChild(questionFour);

    var a4a1 = document.createElement("li");
    a4a1.textContent = questions.questionFourAnswers.a;
    a4a1.className = "answers";
    a4a1.setAttribute("option", "a");
    questionFour.appendChild(a4a1);
    var a4a2 = document.createElement("li");
    a4a2.textContent = questions.questionFourAnswers.b;
    a4a2.className = "answers";
    a4a2.setAttribute("option", "b");
    questionFour.appendChild(a4a2);
    var a4a3 = document.createElement("li");
    a4a3.textContent = questions.questionFourAnswers.c;
    a4a3.className = "answers";
    a4a3.setAttribute("option", "c");
    questionFour.appendChild(a4a3);
    var a4a4 = document.createElement("li");
    a4a4.textContent = questions.questionFourAnswers.d;
    a4a4.className = "answers";
    a4a4.setAttribute("option", "d");
    questionFour.appendChild(a4a4);

    var answers = document.querySelectorAll(".answers");
    answers.forEach(element => {
        element.addEventListener("click", function(event) {
            var option = this.getAttribute("option");
            if (option === "c") {
                displayCorrect();
                qFive();
            }
            else {
                displayWrong();
                timeLeft = timeLeft - 15;
                qFive();
            }
        })
    });
}
function qFive() {
    quizContainer.textContent = "";

    // QUESTION
    var questionFive = document.createElement("ul");
    questionFive.textContent = questions.questionFive;
    questionFive.className = "question";
    quizContainer.appendChild(questionFive);

    var a5a1 = document.createElement("li");
    a5a1.textContent = questions.questionFiveAnswers.a;
    a5a1.className = "answers";
    a5a1.setAttribute("option", "a");
    questionFive.appendChild(a5a1);
    var a5a2 = document.createElement("li");
    a5a2.textContent = questions.questionFiveAnswers.b;
    a5a2.className = "answers";
    a5a2.setAttribute("option", "b");
    questionFive.appendChild(a5a2);
    var a5a3 = document.createElement("li");
    a5a3.textContent = questions.questionFiveAnswers.c;
    a5a3.className = "answers";
    a5a3.setAttribute("option", "c");
    questionFive.appendChild(a5a3);
    var a5a4 = document.createElement("li");
    a5a4.textContent = questions.questionFiveAnswers.d;
    a5a4.className = "answers";
    a5a4.setAttribute("option", "d");
    questionFive.appendChild(a5a4);

    var answers = document.querySelectorAll(".answers");
    answers.forEach(element => {
        element.addEventListener("click", function(event) {
            var option = this.getAttribute("option");
            if (option === "b") {
                displayCorrect();
                qSix();
            }
            else {
                displayWrong();
                timeLeft = timeLeft - 15;
                qSix();
            }
        })
    });
}
function qSix() {
    quizContainer.textContent = "";

    // QUESTION
    var questionSix = document.createElement("ul");
    questionSix.textContent = questions.questionSix;
    questionSix.className = "question";
    quizContainer.appendChild(questionSix);

    var a6a1 = document.createElement("li");
    a6a1.textContent = questions.questionSixAnswers.a;
    a6a1.className = "answers";
    a6a1.setAttribute("option", "a");
    questionSix.appendChild(a6a1);
    var a6a2 = document.createElement("li");
    a6a2.textContent = questions.questionSixAnswers.b;
    a6a2.className = "answers";
    a6a2.setAttribute("option", "b");
    questionSix.appendChild(a6a2);
    var a6a6 = document.createElement("li");
    a6a6.textContent = questions.questionSixAnswers.c;
    a6a6.className = "answers";
    a6a6.setAttribute("option", "c");
    questionSix.appendChild(a6a6);
    var a6a4 = document.createElement("li");
    a6a4.textContent = questions.questionSixAnswers.d;
    a6a4.className = "answers";
    a6a4.setAttribute("option", "d");
    questionSix.appendChild(a6a4);

    var answers = document.querySelectorAll(".answers");
    answers.forEach(element => {
        element.addEventListener("click", function(event) {
            var option = this.getAttribute("option");
            if (option === "c") {
                displayCorrect();
                qSeven();
            }
            else {
                displayWrong();
                timeLeft = timeLeft - 15;
                qSeven();
            }
        })
    });
}
function qSeven() {
    quizContainer.textContent = "";

    // QUESTION
    var questionSeven = document.createElement("ul");
    questionSeven.textContent = questions.questionSeven;
    questionSeven.className = "question";
    quizContainer.appendChild(questionSeven);

    var a7a1 = document.createElement("li");
    a7a1.textContent = questions.questionSevenAnswers.a;
    a7a1.className = "answers";
    a7a1.setAttribute("option", "a");
    questionSeven.appendChild(a7a1);
    var a7a2 = document.createElement("li");
    a7a2.textContent = questions.questionSevenAnswers.b;
    a7a2.className = "answers";
    a7a2.setAttribute("option", "b");
    questionSeven.appendChild(a7a2);
    var a7a7 = document.createElement("li");
    a7a7.textContent = questions.questionSevenAnswers.c;
    a7a7.className = "answers";
    a7a7.setAttribute("option", "c");
    questionSeven.appendChild(a7a7);
    var a7a4 = document.createElement("li");
    a7a4.textContent = questions.questionSevenAnswers.d;
    a7a4.className = "answers";
    a7a4.setAttribute("option", "d");
    questionSeven.appendChild(a7a4);

    var answers = document.querySelectorAll(".answers");
    answers.forEach(element => {
        element.addEventListener("click", function(event) {
            var option = this.getAttribute("option");
            if (option === "a") {
                displayCorrect();
                qEight();
            }
            else {
                displayWrong();
                timeLeft = timeLeft - 15;
                qEight();
            }
        })
    });
}
function qEight() {
    quizContainer.textContent = "";

    // QUESTION
    var questionEight = document.createElement("ul");
    questionEight.textContent = questions.questionEight;
    questionEight.className = "question";
    quizContainer.appendChild(questionEight);

    var a8a1 = document.createElement("li");
    a8a1.textContent = questions.questionEightAnswers.a;
    a8a1.className = "answers";
    a8a1.setAttribute("option", "a");
    questionEight.appendChild(a8a1);
    var a8a2 = document.createElement("li");
    a8a2.textContent = questions.questionEightAnswers.b;
    a8a2.className = "answers";
    a8a2.setAttribute("option", "b");
    questionEight.appendChild(a8a2);
    var a8a8 = document.createElement("li");
    a8a8.textContent = questions.questionEightAnswers.c;
    a8a8.className = "answers";
    a8a8.setAttribute("option", "c");
    questionEight.appendChild(a8a8);
    var a8a4 = document.createElement("li");
    a8a4.textContent = questions.questionEightAnswers.d;
    a8a4.className = "answers";
    a8a4.setAttribute("option", "d");
    questionEight.appendChild(a8a4);

    var answers = document.querySelectorAll(".answers");
    answers.forEach(element => {
        element.addEventListener("click", function(event) {
            var option = this.getAttribute("option");
            if (option === "d") {
                displayCorrect();
                qNine();
            }
            else {
                displayWrong();
                timeLeft = timeLeft - 15;
                qNine();
            }
        })
    });
}
function qNine() {
    quizContainer.textContent = "";

    // QUESTION
    var questionNine = document.createElement("ul");
    questionNine.textContent = questions.questionNine;
    questionNine.className = "question";
    quizContainer.appendChild(questionNine);

    var a9a1 = document.createElement("li");
    a9a1.textContent = questions.questionNineAnswers.a;
    a9a1.className = "answers";
    a9a1.setAttribute("option", "a");
    questionNine.appendChild(a9a1);
    var a9a2 = document.createElement("li");
    a9a2.textContent = questions.questionNineAnswers.b;
    a9a2.className = "answers";
    a9a2.setAttribute("option", "b");
    questionNine.appendChild(a9a2);
    var a9a9 = document.createElement("li");
    a9a9.textContent = questions.questionNineAnswers.c;
    a9a9.className = "answers";
    a9a9.setAttribute("option", "c");
    questionNine.appendChild(a9a9);
    var a9a4 = document.createElement("li");
    a9a4.textContent = questions.questionNineAnswers.d;
    a9a4.className = "answers";
    a9a4.setAttribute("option", "d");
    questionNine.appendChild(a9a4);

    var answers = document.querySelectorAll(".answers");
    answers.forEach(element => {
        element.addEventListener("click", function(event) {
            var option = this.getAttribute("option");
            if (option === "b") {
                displayCorrect();
                qTen();
            }
            else {
                displayWrong();
                timeLeft = timeLeft - 15;
                qTen();
            }
        })
    });
}
function qTen() {
    quizContainer.textContent = "";

    // QUESTION
    var questionTen = document.createElement("ul");
    questionTen.textContent = questions.questionTen;
    questionTen.className = "question";
    quizContainer.appendChild(questionTen);

    var a10a1 = document.createElement("li");
    a10a1.textContent = questions.questionTenAnswers.a;
    a10a1.className = "answers";
    a10a1.setAttribute("option", "a");
    questionTen.appendChild(a10a1);
    var a10a2 = document.createElement("li");
    a10a2.textContent = questions.questionTenAnswers.b;
    a10a2.className = "answers";
    a10a2.setAttribute("option", "b");
    questionTen.appendChild(a10a2);
    var a10a10 = document.createElement("li");
    a10a10.textContent = questions.questionTenAnswers.c;
    a10a10.className = "answers";
    a10a10.setAttribute("option", "c");
    questionTen.appendChild(a10a10);
    var a10a4 = document.createElement("li");
    a10a4.textContent = questions.questionTenAnswers.d;
    a10a4.className = "answers";
    a10a4.setAttribute("option", "d");
    questionTen.appendChild(a10a4);

    var answers = document.querySelectorAll(".answers");
    answers.forEach(element => {
        element.addEventListener("click", function(event) {
            var option = this.getAttribute("option");
            if (option === "b") {
                displayCorrect();
                //score page
            }
            else {
                displayWrong();
                timeLeft = timeLeft - 15;
                //score page
            }
        })
    });
}


