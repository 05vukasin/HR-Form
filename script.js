// JavaScript for navigation
const cards = document.querySelectorAll('.card');
let currentCardIndex = 0;

function showCard(index) {
    cards.forEach((card, i) => {
        card.style.display = i === index ? 'flex' : 'none';
    });
}

function nextCard() {
    if (currentCardIndex < cards.length - 1) {
        currentCardIndex++;
        showCard(currentCardIndex);
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        showCard(currentCardIndex);
    }
}

// Initial card setup
showCard(currentCardIndex);

// Event Listeners
document.getElementById('start-button').addEventListener('click', nextCard);
document.getElementById('proceed-to-questions').addEventListener('click', nextCard);

document.querySelectorAll('.prev-button').forEach(button => {
    button.addEventListener('click', prevCard);
});

document.querySelectorAll('.next-button').forEach(button => {
    button.addEventListener('click', nextCard);
});

// Submission handling
document.getElementById('submit-button').addEventListener('click', () => {
    alert('Your application has been submitted!');
});
