function createPirateSnow() {
    const snowContainer = document.getElementById('pirate-snow');
    const emoji = document.createElement('div');
    emoji.classList.add('pirate-emoji');
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.animationDuration = (Math.random() * 3 + 3) + 's';
    emoji.innerText = '🏴‍☠️'; // Pirate emoji (pwede nimo ilisan ug ☠️ or mix both!)
  
    snowContainer.appendChild(emoji);
  
    setTimeout(() => {
      emoji.remove();
    }, 6000);
  }
  
  setInterval(createPirateSnow, 500); // Every 0.5s create one
  
  // Array of quotes
const quotes = [
  "If buying isn't owning then piracy isn't stealing.",
  "Piracy: because sometimes the price is just too high.",
  "In the age of information, piracy is just sharing.",
  "The internet is the modern pirate's ocean.",
  "Pirates don't steal, they share freely.",
  "To pirate or not to pirate? That's not a question.",
  "Piracy isn't about theft; it's about freedom of access.",
  "Not all pirates are criminals; some are just freedom fighters.",
  "Digital piracy is just the modern way of sharing knowledge.",
  "Information should be free. Piracy is just a way of making it so.",
  "In the age of streaming, piracy is just another method of access."
];

// Function to select and display a random quote
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteElement = document.getElementById('piracy-quote');
  quoteElement.textContent = `"${quotes[randomIndex]}"`;
}

// Call the function to display a quote when the page loads
window.onload = function() {
  displayRandomQuote(); // Show a quote immediately on page load
  setInterval(displayRandomQuote, 6000); // Change the quote every 5 seconds
};

function displayGreeting() {
  const hours = new Date().getHours();
  let greeting = "";
  let emoji = "";

  if (hours >= 5 && hours < 12) {
    greeting = "Good Morning!";
    emoji = "🌅☀️";  // Morning emojis
  } else if (hours >= 12 && hours < 18) {
    greeting = "Good Afternoon!";
    emoji = "🌞☕";  // Afternoon emojis
  } else if (hours >= 18 && hours < 21) {
    greeting = "Good Evening!";
    emoji = "🌇🌙";  // Evening emojis
  } else {
    greeting = "Good Night!";
    emoji = "🌙💤";  // Night emojis
  }

  const greetingElement = document.getElementById('greeting');
  greetingElement.textContent = `${greeting} ${emoji}`;
}

// Call the functions when the page loads
window.onload = function() {
  displayGreeting();
  displayRandomQuote();
  setInterval(displayRandomQuote, 6000); // Change quote every 5 seconds
};

function closeNotification() {
  const notif = document.getElementById('notification');
  notif.style.display = 'none';
}

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const container = document.querySelector('.container');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  
  // Toggle the 'show' class on the sidebar to show or hide it
  sidebar.classList.toggle('show');
  
  // Toggle the shift effect on the container
  container.classList.toggle('shift');
  
  // Toggle the 'active' class on the hamburger menu to show/hide the 'X' icon
  hamburgerMenu.classList.toggle('active');
}
