function createMenu() {
    const menu = document.createElement('div');
    menu.id = 'menu';

    main.appendChild(menu);

    return menu;
};

function createItem(menu) {
    const item = document.createElement('div');
    item.classList.add('item');

    const itemImage = document.createElement('img');
    itemImage.classList.add('item-image');

    const itemName = document.createElement('h3');
    itemName.classList.add('item-name');

    item.appendChild(itemImage);
    item.appendChild(itemName);

    menu.appendChild(item);
};

export default function loadMenu() {
    createMenu();
    createItem(menu);
};