let currentQuestion = 0;
let rightQuestions = 0;
let progress = 0;
let AUDIO_SUCESS = new Audio('./assets/audio/success.mp3');
let AUDIO_WRONG = new Audio('./assets/audio/wrong.mp3');

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
};

function showQuestion() {
    if (gameIsOver()) {
        show_end_screen();
    } else {
        updateToNexQuestion();
    }
};

function gameIsOver() {
    return currentQuestion >= questions.length;
};

function updateToNexQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question_number').innerHTML = currentQuestion + 1;
    document.getElementById('question').innerHTML = question.question
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`answer_${i}`).innerHTML = question[`answer_${i}`];
    };    
};

function answer(selection) {
    let selectedQuestionNumber = selection.slice(-1);

    if (rightAnswerSelected(selectedQuestionNumber)) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCESS.play();
        rightQuestions++;
    } else {
        AUDIO_WRONG.play();
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(`answer_${questions[currentQuestion].right_answer}`).parentNode.classList.add('bg-success');
    };
    document.getElementById('next-button').disabled = false;
};

function rightAnswerSelected(selectedQuestionNumber) {
    return selectedQuestionNumber == questions[currentQuestion].right_answer;
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
    resetAudio();
    resetAnswerButtons();
    updateProgress();
    showQuestion();
};

function resetAudio() {
    AUDIO_SUCESS.pause();
    AUDIO_SUCESS.currentTime = 0;
    AUDIO_WRONG.pause();
    AUDIO_WRONG.currentTime = 0;
};

function replay() {
    currentQuestion = 0;
    rightQuestions = 0;    
    document.getElementById('next-button').disabled = true;
    progress = 0;
    document.getElementById('progress_bar').style.width = `${progress}%`;
    resetAnswerButtons();
    show_end_screen();
    init();
};

function show_end_screen() {
    document.getElementById('amount_of_questions').innerHTML = `${rightQuestions}/${questions.length}`;
    document.getElementById('end_screen').classList.toggle('d-none');
    document.getElementById('quetion_body').classList.toggle('d-none');
};

function updateProgress() {
    progress = (currentQuestion / questions.length) * 100;
    document.getElementById('progress_bar').style.width = `${progress}%`;
};