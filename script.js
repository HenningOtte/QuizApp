let currentQuestion = 0;
let rightQuestions = 0;
let progress = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
};

function showQuestion() {
    if (currentQuestion >= questions.length) {
        toggleQuizScreen();
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
        rightQuestions++;
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
};

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    updateProgress();
    showQuestion();
};

function replay() {
    currentQuestion = 0;
    rightQuestions = 0;    
    document.getElementById('next-button').disabled = true;
    progress = 0;
    document.getElementById('progress_bar').style.width = `${progress}%`;
    resetAnswerButtons();
    toggleQuizScreen();
    init();
};

function toggleQuizScreen() {
    document.getElementById('amount_of_questions').innerHTML = `${rightQuestions}/${questions.length}`;
    document.getElementById('end_screen').classList.toggle('d-none');
    document.getElementById('quetion_body').classList.toggle('d-none');
};

function updateProgress() {
    progress = (currentQuestion / questions.length) * 100;
    document.getElementById('progress_bar').style.width = `${progress}%`;
};