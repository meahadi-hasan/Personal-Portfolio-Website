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



// EmailJS ইনিশিয়ালাইজ
emailjs.init({
    publicKey: "bCYVtcD3NxeH_f7wm", // আপনার Public Key দিন
});

// ফর্ম সাবমিট হ্যান্ডলার
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;

    // ফর্ম ভ্যালিডেশন
    const requiredFields = ['name', 'email', 'phone', 'subject', 'message'];
    let isFormValid = true;

    requiredFields.forEach(field => {
        if (!form.elements[field].value.trim()) {
            isFormValid = false;
        }
    });

    if (!isFormValid) {
        Swal.fire({
            title: 'Warning!',
            text: 'Please fill all required fields!',
            icon: 'warning',
        });
        return;
    }

    // লোডিং স্টেট
    Swal.fire({
        title: 'Sending...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
    });

    // ইমেইল পাঠান
    emailjs.sendForm('service_hyh728e', 'template_xl4ib4s', form)
        .then((response) => {
            Swal.close();
            if (response.status === 200) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Message sent successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
                form.reset(); // ফর্ম রিসেট
            }
        })
        .catch((error) => {
            Swal.fire({
                title: 'Error!',
                text: `Failed to send: ${error.text}`,
                icon: 'error',
            });
        });
});

