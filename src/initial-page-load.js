const content = document.getElementById('content');

function createHeader() {
    const header = document.createElement('header');
    header.id = 'header';

    const cafeName = document.createElement('h1');
    cafeName.id = 'cafe-name';
    cafeName.textContent = 'Cafe Express';
    
    content.appendChild(header);
    header.appendChild(cafeName);

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
    contactButton.classList.add('Contact');
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