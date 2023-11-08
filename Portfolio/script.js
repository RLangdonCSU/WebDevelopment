// script.js

// Function to toggle the navigation menu
function toggleMenu() {
    const menu = document.querySelector('nav ul'); 
    menu.classList.toggle('show-menu');
}

// Event listener for the hamburger menu button
document.getElementById('hamburger-menu-button').addEventListener('click', toggleMenu);
