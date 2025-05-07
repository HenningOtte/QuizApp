let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
};

function showQuestion() {
    if (currentQuestion >= questions.length) {
        document.getElementById('end_screen').classList.toggle('d-none');
        document.getElementById('quetion_body').classList.toggle('d-none');
    } else {
        let question = questions[currentQuestion];

        document.getElementById('question_number').innerHTML = currentQuestion + 1;
        document.getElementById('question').innerHTML = question.question
        for (let i = 1; i <= 4; i++) {
            document.getElementById(`answer_${i}`).innerHTML = question[`answer_${i}`];
        };
    }
};

function answer(selection) {
    let right_Answer = questions[currentQuestion].right_answer;
    let selectedQuestionNumber = selection.slice(-1);

    if (selectedQuestionNumber == right_Answer) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(`answer_${right_Answer}`).parentNode.classList.add('bg-success');
    };
    document.getElementById('next-button').disabled = false;
};

function resetAnswerButtons() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`answer_${i}`).parentNode.classList.remove('bg-success');
        document.getElementById(`answer_${i}`).parentNode.classList.remove('bg-danger');
    };
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
};