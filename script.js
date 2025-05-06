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

function answer(selection) {
    let answer = questions[currentQuestion].right_answer;
    let selectedQuestionNumber = selection.slice(-1);

    if (selectedQuestionNumber == answer) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
    };
};