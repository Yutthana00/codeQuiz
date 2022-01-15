const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull= document.querySelector('#progessBarFull');

let currentQuestion ={}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'What does HTML stand for?',
        choice1: 'Hyper Text Markup Language',
        choice2: 'Hot Top Mail Loop',
        choice3: 'How to Make Lasagna',
        answer: 1,
    },
    {
        question: 'What is the difference between an opening tag and a closing tag?',
        choice1: 'Opening tag has a / in front',
        choice2: 'Closing tag has a / in front',
        choice3: 'There is no difference',
        answer: 2,
    },
    {
        question: 'Which of the following is an example of an empty element',
        choice1: '< img / >',
        choice2: '< img > < / img >',
        choice3: '< / img>',
        answer: 2,
    },
    {
        question: '< body > What is this tag for?',
        choice1: 'Opening',
        choice2: 'Closing',
        choice3: 'Does nothing',
        answer: 1,
    },
  
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    

    const questionIndex = Math.floor(Math.random()* availableQuestions.length)
    currentQuestion = availableQuestions [questionIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionIndex, 1)
    acceptingAnswers = true
}


choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        
        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        } 

        selectedChoice.parentEl.classList.add(classToApply)

        setTimeout(() =>{
            selectedChoice.parentEl.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame ()