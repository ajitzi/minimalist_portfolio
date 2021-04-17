const toggleMenu = document.querySelector('.toggle-menu');
const menu = document.querySelector('.main-nav');
const menuIcon = document.querySelector('.menu-icon');

toggleMenu.addEventListener('click', function() {
    const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
    toggleMenu.setAttribute('aria-expanded', !open);
    menu.hidden = !menu.hidden;
});

toggleMenu.addEventListener('click', function() {
    if (menuIcon.classList.contains("is-closed")) {
        menuIcon.classList.replace("is-closed", "is-opened")
    } else if (menuIcon.classList.contains("is-opened")) {
        menuIcon.classList.replace("is-opened", "is-closed")
    }
});