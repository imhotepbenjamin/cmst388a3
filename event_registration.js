// JavaScript code outside of any functions

// Countdown timer
let timer = 600; // 10 minutes in seconds
const countdownElement = document.getElementById('timer');

function updateTimer() {
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  countdownElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  if (timer === 0) {
    clearInterval(timerInterval);
    alert('Time expired! Please start again.');
    location.href = location.href; // Redirect to the same page
  } else {
    timer--;
  }
}

const timerInterval = setInterval(updateTimer, 1000);

// JavaScript functions
function calculateTotal() {
  const ticketQuantity = document.getElementById('ticket-quantity').value;
  const totalElement = document.getElementById('total');
  const totalContainer = document.getElementById('total-container');
  const contactInfoSection = document.getElementById('contact-info');

  if (isNaN(ticketQuantity) || ticketQuantity < 1 || ticketQuantity > 3) {
    showError('ticket-quantity', 'Please enter a valid number between 1 and 3');
    contactInfoSection.classList.add('hidden');
  } else {
    hideError('ticket-quantity');
    contactInfoSection.classList.remove('hidden');
  }

  // Calculate total
  const total = ticketQuantity * 10; // Assuming each ticket costs $10
  totalElement.textContent = `Total: $${total.toFixed(2)}`;

  // Add animation class
  totalContainer.classList.add('jello-horizontal');

  // Listen for animation end event
  totalContainer.addEventListener('animationend', () => {
    totalContainer.classList.remove('jello-horizontal');
  });
}

function completePurchase() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Validate name
  if (!name.trim()) {
    showError('name', 'Please enter your name');
  } else {
    hideError('name');
  }

  // Validate email
  if (!email.trim()) {
    showError('email', 'Please enter your email');
  } else if (!isValidEmail(email)) {
    showError('email', 'Please enter a valid email address');
  } else {
    hideError('email');
  }

  // If no errors, proceed with purchase
  if (name.trim() && email.trim() && isValidEmail(email)) {
    clearInterval(timerInterval);
    const total = parseFloat(document.getElementById('total').textContent.split('$')[1]);
    alert(`Thank you for your purchase!\nTotal Amount: $${total.toFixed(2)}`);
  }
}

function isValidEmail(email) {
  // Add your email validation logic here
  // This is a simple example, you might want to use a regular expression or a library for more robust validation
  return /\S+@\S+\.\S+/.test(email);
}

function highlightField(elementId, isError) {
  const element = document.getElementById(elementId);
  element.style.backgroundColor = isError ? 'mistyrose' : '';
  // Add more styling or logic as needed
}

function showError(elementId, errorMessage) {
  highlightField(elementId, true);
  // Add logic to display error messages here
}

function hideError(elementId) {
  highlightField(elementId, false);
  // Add logic to hide error messages here
}
