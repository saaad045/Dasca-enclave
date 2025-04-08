// Get the overlay content element
const overlayContent = document.querySelector('.overlay-content');

// Create an Intersection Observer to trigger the animation when it comes into view
const observerOptions = {
  root: null, // Use the viewport as the root
  threshold: 0.5 // Trigger when 50% of the element is in view
};

// Define the observer callback
const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
};

// Create a new IntersectionObserver instance
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Start observing the overlay-content element (if it exists)
if (overlayContent) {
  observer.observe(overlayContent);

  // Trigger animation on page load
  window.addEventListener('load', () => {
    overlayContent.classList.add('visible');
  });

  // Re-trigger animation on window resize
  window.addEventListener('resize', () => {
    overlayContent.classList.remove('visible');
    overlayContent.offsetWidth; // Reflow
    overlayContent.classList.add('visible');
  });
}

// Toggle mobile menu visibility (hamburger menu)
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const exitButton = document.querySelector('.exit-button');

  if (navLinks) navLinks.classList.toggle('active');
  if (exitButton) exitButton.classList.toggle('active');
}

// Testimonials data
const testimonials = [
  {
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "FTN helped me find the perfect plot. Professional team!",
    name: "- Ayesha Malik"
  },
  {
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    text: "Their team provided excellent service from start to finish!",
    name: "- Ahmed Raza"
  },
  {
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Highly recommend FTN for real estate advice. Trustworthy!",
    name: "- Sana Khan"
  },
  {
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Highly recommend FTN for real estate advice. Trustworthy!",
    name: "- Ali Khan"
  }
];

let current = 0;

function updateTestimonial() {
  const testimonialEl = document.getElementById("testimonial");
  if (testimonialEl) {
    testimonialEl.innerHTML = `
      <img src="${testimonials[current].img}" alt="Client Photo" />
      <p>"${testimonials[current].text}"</p>
      <h4>${testimonials[current].name}</h4>
    `;
  }
}

function nextTestimonial() {
  current = (current + 1) % testimonials.length;
  updateTestimonial();
}

function prevTestimonial() {
  current = (current - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
}

// WhatsApp floating button toggle
function toggleChatOptions() {
  const options = document.getElementById('chatOptions');
  if (options) {
    options.style.display = options.style.display === 'flex' ? 'none' : 'flex';
  }
}
