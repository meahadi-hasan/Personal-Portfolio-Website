// Scroll Button Logic
const scrollBtn = document.getElementById('scroll-btn');

// Show/Hide Button
window.onscroll = function() {
    if (document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = 'flex';
    } else {
        scrollBtn.style.display = 'none';
    }
};

// Scroll Up
document.getElementById('scroll-up').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Scroll Down
document.getElementById('scroll-down').addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});


 // hamburger menu toggle
const menuIcon = document.getElementById("menu-icon");
const menuIconBars = document.getElementById("menu-icon-bars");
const menuIconTimes = document.getElementById("menu-icon-times");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    if (navLinks.classList.contains("active")) {
        menuIconBars.style.display = "none";
        menuIconTimes.style.display = "block";
    } else {
        menuIconBars.style.display = "block";
        menuIconTimes.style.display = "none";
    }
});

// Close the menu when a link is clicked
navLinks.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuIconBars.style.display = "block";
    menuIconTimes.style.display = "none";
});



// Contact Form Validation and Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.'); // Show error if any field is empty
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.'); // Show error if email is invalid
        return;
    }

    // If validation passes, show success message
    alert('Thank you for your message! I will get back to you soon.');
    document.getElementById('contactForm').reset(); // Reset the form
});

// Function to validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

