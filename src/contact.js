function createContact() {
    const contact = document.createElement('div');
    contact.id = 'contact';

    main.appendChild(contact);

    return contact;
};

function createInfo(contact) {
    const address = document.createElement('p');
    address.classList.add('info');
    address.textContent = 'Sample text';

    const hours = document.createElement('p');
    hours.classList.add('info');

    const phone = document.createElement('p');
    phone.classList.add('info');

    const email = document.createElement('p');
    email.classList.add('info');

    contact.appendChild(address);
    contact.appendChild(hours);
    contact.appendChild(phone);
    contact.appendChild(email);
};

export default function loadContact() {
    createContact();
    createInfo(contact);
};