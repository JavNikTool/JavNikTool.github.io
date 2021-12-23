window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.main-section__header__list'),
    menuItem = document.querySelectorAll('.main-section__header__list_item'),
    hamburger = document.querySelector('.main-section__header__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('main-section__header__hamburger_active');
        menu.classList.toggle('main-section__header__list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('main-section__header__hamburger_active');
            menu.classList.toggle('main-section__header__list_active');
        })
    })
})