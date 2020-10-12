const questions = [{
    question: "What is the baby of a Moth known as?",
    choices: ["baby", "infant", "kit", "larva"],
    correctAnswer: 3
}, {
    question: "What is the adult of a kid called",
    choices: ["calf", "doe", "goat", "chick"],
    correctAnswer: 2
}, {
    question: "What is the young of Bufallo called?",
    choices: ["calf", "baby", "pup", "cow"],
    correctAnswer: 0
}, {
    question: "What a baby Aligator called?",
    choices: ["baby", "gator", "hatchling", "calf"],
    correctAnswer: 2
}, {
    question: "What is a baby Goose called?",
    choices: ["gooser", "gosling", "gup", "pup"],
    correctAnswer: 1
}, {
    question: "What is a baby Hamster called?",
    choices: ["pup", "chick", "infant", "billy"],
    correctAnswer: 0

}, {
    question: "What is a baby Hawk called?",
    choices: ["hawklett", "pup", "larva", "eyas"],
    correctAnswer: 3
}, {
    question: "What is a baby grasshopper called?",
    choices: ["hopper", "nymph", "stick", "pup"],
    correctAnswer: 1
}, {
    question: "What is a baby Kangaroo called?",
    choices: ["kinga", "joey", "calf", "baby"],
    correctAnswer: 1

}, {
    question: "What is a baby Whale called?",
    choices: ["whala", "cub", "grub", "infant"],
    correctAnswer: 1

}, {
    question: "What is a baby Monkey called?",
    choices: ["infant", "baby", "calf", "pup"],
    correctAnswer: 0

}, {
    question: "What is a baby Bear Called?",
    choices: ["cub", "baby balu", "young bear", "bearlet"],
    correctAnswer: 0
    }];
var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

const next = document.querySelector('.nextButton');
const message = document.querySelector('.quizMessage');
const result = document.querySelector('.quizContainer > .result')
document.addEventListener("DOMContentLoaded", function (e) {
    displayCurrentQuestion();
    document.querySelector('.quizMessage').style.display = 'none';
        // On clicking next, display the next question
    next.addEventListener('click', () => {
        
        if (!quizOver) { 
            let checked = document.querySelector(`input[type='radio']:checked`);  
            if (!checked) {
                message.textContent="Please select an answer";
                message.style.display = '';
            } else {
                let value = checked.value;
                message.style.display = 'none';
                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }
                currentQuestion++; // Since we have already displayed the first question on DOM ready
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    next.textContent="Play Again?";
                    quizOver = true;
                }
            }
        } else {
            quizOver = false;
            next.textContent="Next Question";
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    })
    
});

const displayCurrentQuestion = () => {
    // console.log("In display current Question");
    let question = questions[currentQuestion].question;
    let questionClass = document.querySelector(".quizContainer > .question");
    let choiceList = document.querySelector(".quizContainer > .choiceList");
    let numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    questionClass.textContent = question;
    
    // Remove all current <li> elements (if any)
    // choiceList.removeChild(choiceList li);
    while (choiceList.firstChild) {
        choiceList.removeChild(choiceList.firstChild);
    }

    let choice;
    for (let i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        let li = document.createElement('li');
        let radioInput = document.createElement('input');
        radioInput.name = 'dynradio';
        radioInput.type = 'radio';
        radioInput.value = i.toString();
        li.appendChild(radioInput);
        let text = document.createTextNode(choice);
        li.appendChild(text);
        choiceList.appendChild(li);
        
    }
}

const displayScore = () => {
    result.textContent="You scored: " + correctAnswers + " out of: " + questions.length;
    result.style.display='';
}

const resetQuiz = () => {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

const hideScore = () => {
    result.style.display = 'none';
}