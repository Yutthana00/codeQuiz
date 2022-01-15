var question = document.querySelector("#question");
var choices = Array.form(querySelector("#chioce-text"));
var progressText = document.querySelector("#progressText");
var scoreText = document.querySelector("#score");
var progressBarFull= document.querySelector("#progessBarFull");

let currentQuestion ={}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestion = []

let question = [
    {
        question: "What does HTML stand for?",
        choice1: "Hyper Text Markup Language",
        choice2: "Hot Top Mail Loop",
        choice3: "How to Make Lasagna",
        answer: "Hyper Text Markup Language",
    },
    {
        question: "What is the difference between an opening tag and a closing tag?",
        choice1: "Opening tag has a / in front",
        choice2: "Closing tag has a / in front",
        choice3: "There is no difference",
        answer: "Closing tag has a / in front",
    },
    {
        question: " ",
        choice1: " ",
        choice2: " ",
        choice3: " ",
        answer: " ",
    },
    {
        question: "< body > What is this tag for?",
        choice1: "Opening",
        choice2: "Closing",
        choice3: "Does nothing",
        answer: "Opening",
    },
  
]