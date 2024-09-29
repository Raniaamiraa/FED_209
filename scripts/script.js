// JavaScript Document
console.log("hi");

// https://chatgpt.com/share/66f8ed2b-e7fc-800e-8b7c-e6361c6285cd
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('button[aria-label="menu"]');
    const navMenu = document.getElementById('nav-menu');

    if (menuButton) {
        menuButton.addEventListener('click', function () {
            const expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
            menuButton.setAttribute('aria-expanded', !expanded);
            navMenu.classList.toggle('active');
        });
    }

    const burgermenuButton = document.querySelector('button[aria-label="burgermenu"]');
    const navMenu2 = document.getElementById('nav-menu2');

    if (burgermenuButton) {
        burgermenuButton.addEventListener('click', function () {
            const expanded = burgermenuButton.getAttribute('aria-expanded') === 'true' || false;
            burgermenuButton.setAttribute('aria-expanded', !expanded);
            navMenu2.classList.toggle('active');
        });
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'spacebar') {
        // Check if menu is open and close it
        if (menuButton.getAttribute('aria-expanded') === 'true') {
            menuButton.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
        }
        if (burgermenuButton.getAttribute('aria-expanded') === 'true') {
            burgermenuButton.setAttribute('aria-expanded', 'false');
            navMenu2.classList.remove('active');
        }
    }
});

console.log("hij doet het nog steeds omg");


// https://chatgpt.com/share/66f8ee9c-41e8-800e-b780-d7b770249b69
// JavaScript voor het togglen van de dark mode
const darkModeToggle = document.querySelector('#darkModeToggle input');
const body = document.body;
// Check de opgeslagen modus (indien aanwezig) bij het laden van de pagina
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('darkMode');
    darkModeToggle.checked = true;
} else {
    body.classList.remove('darkMode');
}
// Luisteren naar veranderingen in de schakelaar
darkModeToggle.addEventListener('change', function () {
    if (darkModeToggle.checked) {
        body.classList.add('darkMode');
        localStorage.setItem('darkMode', 'enabled'); // Sla de voorkeur op
    } else {
        body.classList.remove('darkMode');
        localStorage.setItem('darkMode', 'disabled'); // Sla de voorkeur op
    }
});

console.log("hij doet het nog steeds omg");

// https://chatgpt.com/share/66f8ec5f-86f4-800e-b0af-6616c40f24ab 
// https://tympanus.net/codrops/2024/01/17/a-practical-introduction-to-scroll-driven-animations-with-css-scroll-and-view/
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    console.log("Reduced motion is ingeschakeld.");
}



console.log("kiekeboe");

// https://chatgpt.com/share/66f8ef07-2630-800e-9831-f43752f7dc28
var menuNaKlik = document.querySelector('button[aria-label="menu"]');
menuNaKlik.onclick = menuOpen;
function menuOpen() {
    menuNaKlik.classList.toggle("menu");
}


console.log("wow");

// https://chatgpt.com/share/66f8eb97-6f90-800e-85c4-8a712f6c7051
document.getElementById("myLink").addEventListener("click", function (event) {
    // Voorkom standaard actie van de link
    event.preventDefault();

    // Maak het laadscherm zichtbaar
    document.getElementById("loader").style.display = "block";

    // Navigeer naar de andere pagina na een korte vertraging
    setTimeout(() => {
        window.location.href = this.href; // Ga naar de link
    }, 1000); // Vertraging van 1 seconde
});

// https://chatgpt.com/share/66f8ef1d-8538-800e-9d03-fbbb29487e00
document.getElementById('geluidKnop').addEventListener('click', function () {
    var sound = document.getElementById('geluid');
    sound.play();
});

// https://chatgpt.com/share/66f8ee9c-41e8-800e-b780-d7b770249b69
const halloweenModeToggle = document.querySelector('#halloweenModeToggle input');
if (localStorage.getItem('halloweenMode') === 'enabled') {
    body.classList.add('halloweenMode');
    halloweenModeToggle.checked = true;
} else {
    body.classList.remove('halloweenMode');
}
halloweenModeToggle.addEventListener('change', function () {
    if (halloweenModeToggle.checked) {
        body.classList.add('halloweenMode');
        localStorage.setItem('halloweenMode', 'enabled');
    } else {
        body.classList.remove('halloweenMode')
        localStorage.setItem('halloweenMode', 'disabled');
    }
});