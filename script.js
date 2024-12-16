function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}
function toggleMenu() {
    const navLinks = document.querySelector('nav ul');
    navLinks.classList.toggle('active');
}

function changeLanguage(language) {
    alert(`Language switched to: ${language}`); // Placeholder function for demonstration
}

function reserveSeat() {
    const name = document.getElementById('name').value;
    const guests = document.getElementById('guests').value;
    const time = document.getElementById('time').value;

    if (name && guests && time) {
        document.getElementById('real-time-update').innerText = `Reservation confirmed for ${name} (${guests} guests) at ${time}.`;
    } else {
        document.getElementById('real-time-update').innerText = 'Please fill out all fields.';
        document.getElementById('real-time-update').style.color = 'red';
    }
}

async function changeLanguage(language) {
    const response = await fetch('translations.json');
    const translations = await response.json();
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerHTML = translations[language][key];
    });
}

// Default language
document.addEventListener('DOMContentLoaded', () => changeLanguage('en'));
