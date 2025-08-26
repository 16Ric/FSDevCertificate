/* ========================
   Navigation Toggle
======================== */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('header nav ul');

function toggleMenu() {
    navMenu.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMenu);

/* ========================
   Smooth Scrolling
======================== */
const navLinks = document.querySelectorAll('header nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });

        // Close menu after clicking (for mobile)
        navMenu.classList.remove('active');
    });
});

/* ========================
   Project Filtering
======================== */
function filterProjects(category) {
    const projects = document.querySelectorAll('#projects article');
    projects.forEach(project => {
        if (category === 'all' || project.dataset.category === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

/* ========================
   Lightbox for Project Images
======================== */
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const projectImages = document.querySelectorAll('#projects img');

projectImages.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
        // Clear previous image
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    });
});

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

/* ========================
   Contact Form Validation
======================== */
const contactForm = document.querySelector('#contact form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = contactForm.querySelector('input[name="name"]');
    const email = contactForm.querySelector('input[name="email"]');
    const message = contactForm.querySelector('textarea[name="message"]');
    let valid = true;

    // Reset previous feedback
    [name, email, message].forEach(field => {
        field.style.borderColor = '#ccc';
    });

    // Validate name
    if (name.value.trim() === '') {
        name.style.borderColor = 'red';
        valid = false;
    }

    // Validate email
    if (email.value.trim() === '' || !/^\S+@\S+\.\S+$/.test(email.value)) {
        email.style.borderColor = 'red';
        valid = false;
    }

    // Validate message
    if (message.value.trim() === '') {
        message.style.borderColor = 'red';
        valid = false;
    }

    if (valid) {
        alert('Thank you! Your message has been sent.');
        contactForm.reset();
    } else {
        alert('Please fill in all required fields correctly.');
    }
});
