const content = document.getElementById('content');

function createHeader() {
    const header = document.createElement('header');
    header.id = 'header';
    
    content.appendChild(header);

    return header;
};

function createNav(header) {
    const nav = document.createElement('nav');
    nav.id = 'nav';

    const homeButton = document.createElement('button');
    homeButton.classList.add('nav-button');
    homeButton.textContent = 'Home';

    const menuButton = document.createElement('button');
    menuButton.classList.add('nav-button');
    menuButton.textContent = 'Menu';

    const contactButton = document.createElement('button');
    contactButton.classList.add('nav-button');
    contactButton.textContent = 'Contact';

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    header.appendChild(nav);
};

function createMain() {
    const main = document.createElement('main');
    main.id = 'main';
    
    content.appendChild(main);

    return main;
};

function createFooter() {
    const footer = document.createElement('footer');
    footer.id = 'footer';
    
    content.appendChild(footer);
};

export default function pageLoad() {
    createHeader();
    createNav(header);
    createMain();
    createFooter();
};