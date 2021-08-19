import pageLoad from './initial-page-load';
import loadHome from './home';

pageLoad();
loadHome();

function clearMain() {
    const main = document.getElementById('main');
    main.textContent = '';
};

const buttons = document.querySelectorAll('.nav-button');
buttons.forEach(button => button.addEventListener('click', clearMain));