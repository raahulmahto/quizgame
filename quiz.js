const quizData = [
    {
        question: "Is Sun a Star?",
        a: "True",
        b: "Not True",
        c: "May be ",
        d: "Non Of these",
        correct: "a",
    },
    {
        question: "What does UV rays do when directly contacted to skin?",
        a: "Skin Irritation",
        b: "Hyperpigmentation",
        c: "Body tanning",
        d: "All Of these",
        correct: "d",
    },
    {
        question: "What is Sun's radius?",
        a: "114 times",
        b: "109 times",
        c: "104 times",
        d: "Infinity",
        correct: "b",
    },
    {
        question: "Sun is a chemical combination of?",
        a: "Nitrogen and Sodium",
        b: "Carbon and Hydrogen",
        c: "Hydrogen and helium",
        d: "Potassium and Chlorine",
        correct: "c",
    },
    {
        question: "Distance of Sun from Earth is?",
        a: "143cr miles",
        b: "137cr miles",
        c: "153cr miles",
        d: "150cr miles",
        correct: "d",
    },
    {
        question: "Which planet is closest to sun?",
        a: "Moon",
        b: "Mercury",
        c: "Pluto",
        d: "Venus",
        correct: "b",
    },
    {
        question: "Does sun rotate?",
        a: "Yes",
        b: "No",
        c: "May be",
        d: "Non Of these",
        correct: "b",
    },
    {
        question: "Sun is a hot ball and?",
        a: "Sauce",
        b: "Plasma",
        c: "Fire",
        d: "none of these",
        correct: "b",
    },
    {
        question: "Where do light come from?",
        a: "Sun",
        b: "Moon",
        c: "Star",
        d: "Planets",
        correct: "a",
    },
    {
        question: "Mass of sun compared to earth is ____ times ",
        a: "470,000",
        b: "860,000",
        c: "330,000",
        d: "174,000",
        correct: "c",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})