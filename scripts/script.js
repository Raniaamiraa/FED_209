// JavaScript Document
console.log("hi");

const menuButton = document.querySelector('button[aria-label="menu"]');
const navMenu = document.getElementById('nav-menu');

menuButton.addEventListener('click', function() {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
    menuButton.setAttribute('aria-expanded', !expanded); // Toggle aria-expanded attribute
    navMenu.classList.toggle('active'); // Toggle de 'active' class op de <ul>
});


