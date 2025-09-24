// Select elements
const menuToggle = document.querySelector('.menu-toggle'); // hamburger button
const navbar = document.querySelector('nav ul');           // the <ul> inside nav

// Toggle menu open/close
menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
});

// Close menu when a link is clicked (optional for better UX on mobile)
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('show');
    });
});

const roleSpan = document.querySelector(".role");
const roles = ["Software Engineering", "Web Development", "Mobile Development", "UI/UX Designing"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeRole() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        // Typing forward
        roleSpan.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeRole, 1500); // pause at full text
            return;
        }
    } else {
        // Deleting
        roleSpan.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length; // next role
        }
    }

    setTimeout(typeRole, isDeleting ? 50 : typingSpeed);
}

typeRole();




const seeMoreBtn = document.querySelector('.see-more');
  const hiddenCards = document.querySelectorAll('.card.hidden');

  seeMoreBtn.addEventListener('click', () => {
    const isHidden = hiddenCards[0].style.display === "none" || hiddenCards[0].style.display === "";
    if (isHidden) {
      // Show hidden projects
      hiddenCards.forEach(card => card.style.display = "block");
      seeMoreBtn.textContent = "See Less Projects";
    } else {
      // Hide extra projects
      hiddenCards.forEach(card => card.style.display = "none");
      seeMoreBtn.textContent = "See More Projects";
      window.scrollTo({ top: document.getElementById('portfolio').offsetTop, behavior: 'smooth' });
    }
  });
