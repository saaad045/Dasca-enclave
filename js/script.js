
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
      // If the element is in view, add the 'visible' class to start the animation
      entry.target.classList.add('visible');
    } else {
      // If the element is out of view, remove the 'visible' class to reset the animation
      entry.target.classList.remove('visible');
    }
  });
};

// Create a new IntersectionObserver instance
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Start observing the overlay-content element
observer.observe(overlayContent);

// Trigger the animation immediately when the page loads (in case it's already in view)
window.addEventListener('load', () => {
  overlayContent.classList.add('visible');
});

// Also trigger the animation on page resize to ensure it works even on dynamic changes
window.addEventListener('resize', () => {
  overlayContent.classList.remove('visible');  // Remove the class
  overlayContent.offsetWidth;  // Trigger a reflow to restart the animation
  overlayContent.classList.add('visible');  // Reapply the class to start the animation
});




// Toggle mobile menu visibility (hamburger menu)
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}

// If you have a hamburger icon, you can call toggleMenu() on click, like so:
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', toggleMenu);


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
  }
];

//-----------------testimonialssss------------------------//
let current = 0;

function updateTestimonial() {
  const testimonialEl = document.getElementById("testimonial");
  testimonialEl.innerHTML = `
    <img src="${testimonials[current].img}" alt="Client Photo" />
    <p>"${testimonials[current].text}"</p>
    <h4>${testimonials[current].name}</h4>
  `;
}

function nextTestimonial() {
  current = (current + 1) % testimonials.length;
  updateTestimonial();
}

function prevTestimonial() {
  current = (current - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
}

//-------------------testimonialss--------------------------//