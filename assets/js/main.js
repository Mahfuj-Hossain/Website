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
}, 6000);

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

//--------------------------------------------------------------------------------------

// const sliderTitle = document.querySelector('.slider-title-text');
//   const words = sliderTitle.innerText.split(' ');
//   sliderTitle.innerText = '';

//   words.forEach((word) => {
//     const wordSpan = document.createElement('span');
//     wordSpan.innerText = word;
//     wordSpan.classList.add('word');
//     sliderTitle.appendChild(wordSpan);
//   });

//   let charIndex = 0;
//   let wordIndex = 0;
//   const wordSpans = document.querySelectorAll('.word');
//   const fadeInDuration = 1500;
//   const fadeOutDuration = 1000;

//   const fadeIn = () => {
//     if (charIndex < wordSpans[wordIndex].innerText.length) {
//       wordSpans[wordIndex].children[charIndex].style.opacity = 1;
//       charIndex++;
//       setTimeout(fadeIn, fadeInDuration / wordSpans[wordIndex].innerText.length);
//     } else {
//       charIndex = 0;
//       wordIndex++;
//       if (wordIndex < wordSpans.length) {
//         setTimeout(fadeIn, fadeInDuration);
//       }
//     }
//   };

//   const fadeOut = () => {
//     if (charIndex < wordSpans[wordIndex].innerText.length) {
//       wordSpans[wordIndex].children[charIndex].style.opacity = 0;
//       charIndex++;
//       setTimeout(fadeOut, fadeOutDuration / wordSpans[wordIndex].innerText.length);
//     } else {
//       charIndex = 0;
//       wordIndex++;
//       if (wordIndex < wordSpans.length) {
//         setTimeout(fadeOut, fadeOutDuration);
//       }
//     }
//   };

//   const startFade = () => {
//     fadeIn();
//     setTimeout(fadeOut, fadeInDuration + 2000);
//   };

//   sliderTitle.style.opacity = 1;
//   startFade();



