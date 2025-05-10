function open_theme(index) {
    const theme_top = document.querySelectorAll('.theme')[index].getBoundingClientRect().top;
    const main_top = document.getElementById('main_container').getBoundingClientRect().top;
    const quiz_box = document.getElementById('quiz_box');
    let newPos = theme_top - main_top;    
    quiz_box.style.top = `${newPos}px`;
};