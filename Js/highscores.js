const highScresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScresList.innerText = 
highScores.map(score => {
    return`<li class="high-score">${score.name} - ${score.score}</li>`
}).join('')