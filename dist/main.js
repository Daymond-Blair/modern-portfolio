// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
/*ROADBLOCK - get funcionality of toggleMenu (button click) to Work - 7/27/18
  FIX - instead of addEventListener("click", toggleMenu()); use addEventListener("click", toggleMenu); - 8/10/18 */

// TODO reverse list item slide in order
function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        //navItems.slice().reverse().forEach(item => item.classList.add('show'));

        //Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        //navItems.slice().reverse().forEach(item => item.classList.remove('show'));

        //Set Menu State
        showMenu = false;
    }
    /*ROADBLOCK - GET http://127.0.0.1:3000/dist/js/main.js/ 404 (Not Found)
    (index):1 Refused to execute script from 'http://127.0.0.1:3000/dist/js/main.js/' because its MIME type ('text/html') is not executable, and strict MIME type checking is enabled. - 8/8/2018
      FIX - move main.js out of js folder into dist with index.html 8/10/2018*/
}