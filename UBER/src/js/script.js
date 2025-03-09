window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('nav'),
    menuItem = document.querySelectorAll('.header_menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('active');
        })
    })
})