function createContact() {
    const contact = document.createElement('div');
    contact.id = 'contact';

    main.appendChild(contact);

    return contact;
};

function createInfo(contact) {
    const address = document.createElement('p');
    address.classList.add('info');
    address.textContent = 'Address: 4771 Coffman Alley, Paducah, Kentucky';

    const hours = document.createElement('p');
    hours.classList.add('info');
    hours.textContent = 'Working Hours: 5:00 - 16:00';

    const phone = document.createElement('p');
    phone.classList.add('info');
    phone.textContent = 'Telephone: 270-743-7835';

    const email = document.createElement('p');
    email.classList.add('info');
    email.textContent = 'Email: cafeexpress@email.net';

    contact.appendChild(address);
    contact.appendChild(hours);
    contact.appendChild(phone);
    contact.appendChild(email);
};

export default function loadContact() {
    createContact();
    createInfo(contact);
};