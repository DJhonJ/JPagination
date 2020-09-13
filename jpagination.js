const JPagination = (container, items, options) => {
    if(options === null || options === undefined) {
        options = {
            numberItems: 3
        };
    }

    items = document.querySelectorAll(items);

    let _container = document.querySelector(`${container}`);
    _container.insertAdjacentHTML('beforeend', createPagination(options));
};

const createPagination = ({ numberItems }) => {

    console.log(numberItems);

    return '<ul class="jpagination"><li class="page-item">uno</li></ul>';
};