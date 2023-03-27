//Slider Coding for the home page

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const slideshow = document.querySelector('.slideshow-container');

let slideIndex = 0;

// Show the first slide and activate the first dot
slides[slideIndex].classList.add('active');
dots[slideIndex].classList.add('active');

// Set a timer to automatically change the slide every 5 seconds
setInterval(() => {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  changeSlide(slideIndex);
}, 5000);

// Add click event listener to each dot
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    changeSlide(index);
  });
});

// Function to change the active slide and dot
function changeSlide(index) {
  // Remove the active class from all slides and dots
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  dots.forEach(dot => {
    dot.classList.remove('active');
  });

  // Add the active class to the current slide and dot
  slides[index].classList.add('active');
  dots[index].classList.add('active');
}


// menu slider below


const menuButton = document.querySelector('.menu-button button');
const slider = document.querySelector('.slider');
const closeButton = document.querySelector('.close-button');

menuButton.addEventListener('click', () => {
  slider.classList.add('show');
});

closeButton.addEventListener('click', () => {
  slider.classList.remove('show');
});




