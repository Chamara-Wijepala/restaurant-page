function createMenu() {
    const menu = document.createElement('div');
    menu.id = 'menu';

    main.appendChild(menu);

    return menu;
};

function createItem(menu, name) {
    const item = document.createElement('div');
    item.classList.add('item');

    const itemImage = document.createElement('img');
    itemImage.classList.add('item-image');
    itemImage.src = `images/menu/${name}.jpg`;

    const itemName = document.createElement('h3');
    itemName.classList.add('item-name');
    itemName.textContent = name;

    item.appendChild(itemImage);
    item.appendChild(itemName);

    menu.appendChild(item);

    return item;
};

function addItems(menu) {
    menu.appendChild(createItem(menu, 'Espresso'));
    menu.appendChild(createItem(menu, 'Latte'));
    menu.appendChild(createItem(menu, 'Iced Coffee'));
    menu.appendChild(createItem(menu, 'Croissants'));
    menu.appendChild(createItem(menu, 'Breakfast Sandwich'));
    menu.appendChild(createItem(menu, 'Breakfast Pizza'));
    menu.appendChild(createItem(menu, 'Bagels'));
    menu.appendChild(createItem(menu, 'Donuts'));
    menu.appendChild(createItem(menu, 'Macarons'));
    menu.appendChild(createItem(menu, 'Cupcakes'));
};

export default function loadMenu() {
    createMenu();
    addItems(menu);
};