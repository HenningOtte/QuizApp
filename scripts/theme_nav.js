function open_theme(index) {
    const theme = document.querySelectorAll('.theme')[index];
    const theme_top = theme.getBoundingClientRect().top;
    const main_top = document.getElementById('main_container').getBoundingClientRect().top;   
    quiz_box.style.top = `${theme_top - main_top}px`;
    quiz_box.innerHTML = theme.innerHTML;
};