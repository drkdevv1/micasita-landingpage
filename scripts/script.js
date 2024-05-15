function toggleMenu() {
    var menu = document.getElementById('menu');
    var button = document.querySelector('.hamburger');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        button.classList.remove('is-active');
    } else {
        menu.classList.add('show');
        button.classList.add('is-active');
    }
}