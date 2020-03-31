var i = 0;
var score = 0;
var secondsLeft = 60;
var timer = document.querySelector("#time");
var messageDiv = document.querySelector("#message");
var storedScores;
var scoreList = [];
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var answeFour = document.getElementById("answerFour");



//timer function

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Timer " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Out of Time");
            questionEnder();
        }

        else if (i === questions.length) {
            clearInterval(timerInterval);
        }
    }, 1000)
    return(score)
   
}
function questionEnder() {

    var scoreTag = document.createElement("h1");
    var inputTag = document.createElement("input");
    var submitButton = document.createElement("button");
    score += secondsLeft * .1;
    score = score.toFixed(2);
    document.getElementById("question").textContent = "Quiz Completed!";
    answerOne.remove();
    answerTwo.remove();
    answerThree.remove();
    answerFour.remove();
    document.body.children[1].appendChild(scoreTag);
    document.getElementsByTagName("h1")[0].setAttribute("id", "score");
    document.getElementById("score").textContent = "Your Score: " + score;
    document.body.children[1].appendChild(inputTag);
    document.getElementsByTagName("input")[0].setAttribute("id", "input-field");
    submitButton.textContent = "Submit";
    document.body.children[1].appendChild(submitButton);
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        var highScoreText = new Object();
        highScoreText.name = inputTag.value.trim();
        highScoreText.newScore = score;
        storeScores(highScoreText);
        window.location.href = "highScores.html";
    });

}
function questionSetter() {

    answerOne.hidden = false;
    answerTwo.hidden = false;
    answerThree.hidden = false;
    answerFour.hidden = false;

    document.getElementById("startButton").hidden = true;
    if (i === questions.length) {
        questionEnder();
    }
    else {
        document.getElementById("question").textContent = questions[i]["title"];
        document.getElementById("answerOne").textContent = questions[i]["choices"][0];
        document.getElementById("answerTwo").textContent = questions[i]["choices"][1];
        document.getElementById("answerThree").textContent = questions[i]["choices"][2];
        document.getElementById("answerFour").textContent = questions[i]["choices"][3];
    }
console.log(questionSetter)

  }

//Stores the scores to local storage
function storeScores(highScoreText) {
    tempArray = JSON.parse(localStorage.getItem("scores"));
    if (tempArray === null) {
        scoreList.push(highScoreText);
        localStorage.setItem("scores", JSON.stringify(scoreList));
    }
    else {
        tempArray.push(highScoreText);
        localStorage.setItem("scores", JSON.stringify(tempArray));
    }
}

document.getElementById("startButton").addEventListener("click", questionSetter);
document.getElementById("startButton").addEventListener("click", setTime);
document.getElementById("startButton").addEventListener("click", function () {
    messageDiv.textContent = "";
});

answerOne.hidden = true;
answerTwo.hidden = true;
answerThree.hidden = true;
answerFour.hidden = true;

document.getElementById("answerOne").addEventListener("click", function () {
    if (questions[i]["choices"][0] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        score++;
       
    }
    else {
        messageDiv.textContent = "Incorrect!";
        secondsLeft -= 5;
       
    }
    i++;
    questionSetter();
})

document.getElementById("answerTwo").addEventListener("click", function () {
    if (questions[i]["choices"][1] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        score++;
        
    }
    else {
        messageDiv.textContent = "Incorrect!";
        secondsLeft -= 5;
       
    }
    i++;
    questionSetter();
})

document.getElementById("answerThree").addEventListener("click", function () {
    if (questions[i]["choices"][2] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        score++;
      
    }
    else {
        messageDiv.textContent = "Incorrect!";
        secondsLeft -= 5;
        
    }
    i++;
    questionSetter();
})

document.getElementById("answerFour").addEventListener("click", function () {
    if (questions[i]["choices"][3] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        score++;
       
    }
    else {
        messageDiv.textContent = "Incorrect!";
        secondsLeft -= 5;
       
    }
    i++;
    questionSetter();
})

//Add Questions
var questions = [
  {
    title: "How do you write an IF statement in JavaScript?",
    choices: ["if i == 5 then", "if (i == 5)  ", "if i = 5", "if i = 5 then"],
    answer: "if (i == 5)"
  },
  {
    title: "Inside which HTML element do we put the JavaScript?",
    choices: ["<javascript>", "<scriptor>", "<script>", "<js>"],
    answer: "<script>"
  },
  {
    title: "Where should you insert JavaScript?",
    choices: ["the <head>", "the bottom of the <body>", "anywhere in the HTML", "anywhere in the stylesheet"],
    answer: "the bottom of the <body>"
  },
  {
    title: "How does a FOR loop start??",
    choices: ["for (i <= 5; i++)", "for i = 1 to 5('Hello World')", "for (i = 0; i <= 5; i++)", "for (i = 0; i <= 5)"],
    answer: "for (i = 0; i <= 5; i++)"
  }

]









