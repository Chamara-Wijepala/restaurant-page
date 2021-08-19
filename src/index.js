import pageLoad from './initial-page-load';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

pageLoad();
loadHome();

const buttons = document.querySelectorAll('.nav-button');
buttons.forEach(button => button.addEventListener('click', clearMain));

function loadTab(buttonText) {
    switch(buttonText) {
        case 'Home':
            loadHome();
            break;
        case 'Menu':
            loadMenu();
            break;
        case 'Contact':
            loadContact();
            break;
    };
};

function clearMain(event) {
    const main = document.getElementById('main');
    main.textContent = '';

    const buttonText = event.target.innerText;

    loadTab(buttonText);
};