const JPagination = (container, items, options) => {
    if(options === null || options === undefined) {
        options = {
            numberItems: 2
        };
    }

    const _items = document.querySelectorAll(items);

    //navigation
    const _container = document.querySelector(`${container}`);
    _container.insertAdjacentElement('beforeend', createPagination(Math.ceil(_items.length / options.numberItems)));

    orderContent(_items, options.numberItems);
};

const createPagination = (numberPage) => {
    let pagination = document.createElement('ul');
    pagination.classList.add('jpagination');

    for(let i = 1; i <= numberPage; i++) {
        let pageLink = document.createElement('li');
        pageLink.classList.add('page-item');
        pageLink.innerText = i;

        pagination.appendChild(pageLink);
    }

    return pagination;
};

const orderContent = (items, numberItems) => {
    for(let i = numberItems; i < items.length; i++) {
        items.item(i).style.display = 'none';
    }
};