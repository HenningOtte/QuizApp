let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion()
};

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question').innerHTML = question.question
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`answer_${i}`).innerHTML = question[`answer_${i}`];
    };
};