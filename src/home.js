function createHome() {
    const home = document.createElement('div');
    home.id = 'home';

    const greeting = document.createElement('h2');
    greeting.id = 'greeting';
    greeting.textContent = 'Welcome to';

    const cafeName = document.createElement('h1');
    cafeName.id = 'cafe-name';
    cafeName.textContent = 'Cafe Express';

    const paragraph = document.createElement('p');
    paragraph.id = 'paragraph';
    paragraph.textContent = 'The finest coffee in town';

    home.appendChild(greeting);
    home.appendChild(cafeName);
    home.appendChild(paragraph);

    main.appendChild(home);
};

export default function loadHome() {
    createHome();
};