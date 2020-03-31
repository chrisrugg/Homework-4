var highScoreList = document.querySelector("#highScores");
var backButton = document.querySelector("#go-back");
var clearScores = document.querySelector("#clear-highscores");

//get the stored scores 
initScores();

function initScores() {
    storedScores = JSON.parse(localStorage.getItem("scores"));
    if (storedScores !== null) {
        scoreList = storedScores;
    }
    renderScores();
}
//clear the local storge 
function clearAll() {
    window.localStorage.clear();
}

//display the score
function renderScores() {
    if (storedScores !== null) {
        scoreList.sort(function (a, b) {
            return a.newScore - b.newScore;
        });
        scoreList.reverse(function (a, b) {
            return a.newScore - b.newScore
        })

        for (i = 0; i < scoreList.length; i++) {
            var scoreListItem = scoreList[i];
            var tr = document.createElement("tr");
            var nameCell = document.createElement("td");
            var nameCellText = document.createTextNode(scoreListItem.name);
            var scoreCell = document.createElement("td");
            var scoreCellNum = document.createTextNode(scoreListItem.newScore);

            tr.setAttribute("tr-index", i);
            document.getElementById("highScores").appendChild(tr);
            tr.appendChild(nameCell);
            nameCell.appendChild(nameCellText);
            tr.appendChild(scoreCell);
            scoreCell.appendChild(scoreCellNum);

        }
    }
}
//clear the scores, links to high score and back button links back to the index page
clearScores.addEventListener("click", function () {
    clearAll();
    window.location.href = "highScores.html";
})
backButton.addEventListener("click", function () {
    window.location.href = "index.html";
})