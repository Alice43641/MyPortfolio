// Get the menu elements
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Open and close the mobile menu
menuBtn.addEventListener("click", function () {
    const menuOpen = navLinks.classList.toggle("active");

    // Change the menu icon
    menuBtn.innerHTML = menuOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

    // Update accessibility attributes
    menuBtn.setAttribute("aria-expanded", menuOpen);
    menuBtn.setAttribute(
        "aria-label",
        menuOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

// Close the menu when a navigation link is clicked
const navItems = navLinks.querySelectorAll("a");

navItems.forEach(function (link) {
    link.addEventListener("click", function () {
        closeMenu();
    });
});

// Close the menu when the user scrolls
window.addEventListener("scroll", function () {
    closeMenu();
});

// Close the mobile menu
function closeMenu() {
    navLinks.classList.remove("active");

    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open navigation menu");
}


// Titles displayed in the typing animation
const titles = [
    "Software Developer!",
];

const typingText = document.getElementById("typing-text");

let titleIndex = 0;
let text = "";
let isDeleting = false;

function typeEffect() {
    const current = titles[titleIndex];
    const speed = isDeleting ? 60 : 120;

    if (!isDeleting) {
        // Add one character
        text = current.substring(0, text.length + 1);
        typingText.textContent = text;

        // Pause when the full title is displayed
        if (text === current) {
            isDeleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        // Remove one character
        text = current.substring(0, text.length - 1);
        typingText.textContent = text;

        // Move to the next title when deletion is complete
        if (text === "") {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
        }
    }

    setTimeout(typeEffect, speed);
}

// Start the animation
if (typingText) {
    typeEffect();
}



// Contact Form
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        formStatus.textContent =
            "Your form is ready, but a backend or email service must be connected to send your message.";

        formStatus.style.color = "#b45309";
    });
}
