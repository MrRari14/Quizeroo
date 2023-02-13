const questions = [
  {
    question:
      "With what name did Anne Frank refer to her diary when writing in it?",
    answers: [
      { text: "Kitty", correct: true },
      { text: "Lapoo", correct: false },
      { text: "Missy", correct: false },
      { text: "Raúl", correct: false },
    ],
    fact: "She learnt Dutch and worked to improve it to fit in. Her family moved from Germany to the Netherlands. The Anne Frank house in Amsterdam is not actually where she lived, but where her family hid. The house they first moved to is now a writer's house and museum.",
  },

  {
    question: "In what year did River beat Boca in the Libertadores Cup final?",
    answers: [
      { text: "1996", correct: false },
      { text: "1997", correct: false },
      { text: "2018", correct: true },
      { text: "2014", correct: false },
    ],
    fact: "On the 12/12/2018 River Plate won 3 to 1. Boca started winning with a goal from forward Benedetto. River tied with a goal from Lucas Pratto, took the lead by 1, courtesy of Juanfer Quintero, and killed the match with an iconic goal from el 'Pity' Martinez!",
  },

  {
    question: "How old was Jim Carrey when he starred in 'The Truman Show?'",
    answers: [
      { text: "36", correct: true },
      { text: "24", correct: false },
      { text: "45", correct: false },
      { text: "60", correct: false },
    ],
    fact: "'The Truman Show' is the first movie where Jim Carrey surprised us all with his talent for dramatic roles, although he didn't receive much recognition by the critics until 2004 with 'Eternal Sunshine of a Spotless Mind'.",
  },

  {
    question: "How did George Hotz become relevant in the technology scene?",
    answers: [
      { text: "He founded Apple", correct: false },
      { text: "He founded eBay", correct: false },
      { text: "He came up with the Jailbrake", correct: true },
      { text: "He's a Kardashian", correct: false },
    ],
    fact: "He was declared the first person to be able to hack IOS from Apple. He also hacked Sony's PS3 network and kept users all around the world from being able to access the online platform. No one could play online :(",
  },

  {
    question: "For what MLS team did Thierry Henry play?",
    answers: [
      { text: "Chicago Fire", correct: false },
      { text: "Al Jazeera", correct: false },
      { text: "NY Red Bulls", correct: true },
      { text: "Seattle Sounders", correct: false },
    ],
    fact: "He played for the New Yorkers from 2010 to 2014, having been part of 135 matches and having scored 52 goals during that period.",
  },

  {
    question: "What does the word 'pivot' refer to?",
    answers: [
      { text: "To turn or twist", correct: true },
      { text: "To jump", correct: false },
      { text: "To fart", correct: false },
      { text: "To buy a sofa", correct: false },
    ],
    fact: "According to the Cambridge dictionary it means 'to turn or twist': She pivots on her left foot. ",
  },

  {
    question: "How many episodes does the series F.R.I.E.N.D.S have?",
    answers: [
      { text: "2004", correct: false },
      { text: "1994", correct: false },
      { text: "195", correct: false },
      { text: "235", correct: true },
    ],
    fact: "Yes! That was Friendstastic! Despite the massive amount of episodes and having lasted for a decade, it is not the longest running sitcom.",
  },

  {
    question: "How is the phobia of snakes refered to as?",
    answers: [
      { text: "Ornitophobia", correct: false },
      { text: "Ophidiophobia", correct: true },
      { text: "Reptiliusphobia", correct: false },
      { text: "Snakeophobia", correct: false },
    ],
    fact: "The person who developed this quiz app suffers from the extreme fear of snakes...He currently does not develop with Python :)",
  },
]

// Step 2 --
const cardContainer = document.getElementById("card")
const questionContainer = document.getElementById("question")
const answerContainer = document.getElementById("answer")
const headerTitle = document.getElementById("header")
const subtitle = document.getElementById("subtitle")
const btnStart = document.getElementById("start")
const btnNext = document.getElementById("next")
const btnRetry = document.getElementById("try-again")
const correctBlockerModal = document.getElementById("modal")
const incorrectBlockerModal = document.getElementById("inc-modal")
const winnerModal = document.getElementById("winner")
const fact = document.getElementById("fact")
let currentQuestion
let currentQuestionIndex

// Step 3 --
btnStart.addEventListener("click", () => {
  // Hidding start button and adding check button
  btnStart.classList.add("hide")
  // Getting the question displayed on screen
  startQuiz()
})

btnNext.addEventListener("click", () => {
  nextQuestion()
})

btnRetry.addEventListener("click", () => {
  location.reload()
})

function startQuiz() {
  headerTitle.classList.add("hide")
  subtitle.classList.add("hide")
  currentQuestion = questions.sort(() => Math.random() - 0.5)
  currentQuestionIndex = 0
  questionContainer.classList.remove("hide")
  questionContainer.innerHTML = currentQuestion[currentQuestionIndex].question
  cardContainer.style.border = "4px solid #70f01f"
  cardContainer.style.backgroundColor = "purple"
  // Adding the buttons for the answers
  currentQuestion[currentQuestionIndex].answers.forEach(answer => {
    const btnAnswer = document.createElement("button")
    btnAnswer.classList.add("btn-answer")
    // Shuffling the facts to display later

    // Adding value to the btn to validate
    btnAnswer.value = answer.correct
    btnAnswer.innerHTML = answer.text
    answerContainer.appendChild(btnAnswer)
    answerContainer.classList.remove("hide")

    btnAnswer.addEventListener("click", e => {
      answerContainer.classList.add("disabled")
      const isCorrect = btnAnswer.value
      // Checking the value of the button
      if (isCorrect === "true") {
        btnAnswer.classList.remove("incorrect")
        btnAnswer.classList.add("correct")
        setTimeout(() => {
          correctBlockerModal.classList.remove("hide")
          fact.innerHTML = currentQuestion[currentQuestionIndex].fact
        }, 1000)
      } else {
        btnAnswer.classList.add("incorrect")
        setTimeout(() => {
          incorrectBlockerModal.classList.remove("hide")
          btnTryAgain.classList.remove("hide")
        }, 1000)
      }
    })
  })
}

function nextQuestion() {
  headerTitle.classList.add("hide")
  subtitle.classList.add("hide")
  currentQuestionIndex++
  cleanBoard()
  answerContainer.classList.remove("disabled")
  if (currentQuestion.length > currentQuestionIndex + 1) {
    console.log("Never mind")
  } else {
    btnNext.classList.add("hide")
    cardContainer.classList.add("hide")
    winnerModal.classList.remove("hide")
    setTimeout(() => {
      window.close()
    }, 2000)
  }
  correctBlockerModal.classList.add("hide")
  // I need to repeat the code but always going forward one question
  questionContainer.classList.remove("hide")
  questionContainer.innerHTML = currentQuestion[currentQuestionIndex].question
  cardContainer.style.border = "4px solid #70f01f"
  cardContainer.style.backgroundColor = "purple"
  // Adding the buttons for the answers
  currentQuestion[currentQuestionIndex].answers.forEach(answer => {
    const btnAnswer = document.createElement("button")
    btnAnswer.classList.add("btn-answer")
    // Shuffling the facts to display later

    // Adding value to the btn to validate
    btnAnswer.value = answer.correct
    btnAnswer.innerHTML = answer.text
    answerContainer.appendChild(btnAnswer)
    answerContainer.classList.remove("hide")

    btnAnswer.addEventListener("click", e => {
      answerContainer.classList.add("disabled")
      const isCorrect = btnAnswer.value
      // Checking the value of the button
      if (isCorrect === "true") {
        btnAnswer.classList.remove("incorrect")
        btnAnswer.classList.add("correct")
        setTimeout(() => {
          correctBlockerModal.classList.remove("hide")
          fact.innerHTML = currentQuestion[currentQuestionIndex].fact
        }, 1000)
      } else {
        btnAnswer.classList.add("incorrect")
        setTimeout(() => {
          incorrectBlockerModal.classList.remove("hide")
          btnTryAgain.classList.remove("hide")
        }, 1000)
      }
    })
  })
}

function cleanBoard() {
  while (answerContainer.firstChild) {
    answerContainer.removeChild(answerContainer.firstChild)
  }
}
