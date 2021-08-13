const content = document.getElementById('content');

function createHeader() {
    const header = document.createElement('header');
    header.id = 'header';

    const cafeName = document.createElement('h1');
    cafeName.id = 'cafe-name';
    cafeName.textContent = 'Cafe Express';
    
    content.appendChild(header);
    header.appendChild(cafeName);
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
    createMain();
    createFooter();
};