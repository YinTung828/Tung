let slideIndex = 1;
showSlides(slideIndex);

// Auto play slideshow
let slideTimer = setInterval(() => {
  plusSlides(1);
}, 3000); // Adjust the time interval (in milliseconds) as desired

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1; }    
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";
}

// Pause the auto-play when hovering over the slideshow container
let slideshowContainer = document.getElementsByClassName("slideshow-container")[0];
slideshowContainer.addEventListener("mouseenter", () => {
  clearInterval(slideTimer);
});

//Resume the auto-play when leaving the slideshow container
slideshowContainer.addEventListener("mouseleave", () => {
slideTimer = setInterval(() => {
plusSlides(1);
}, 3000); // Adjust the time interval (in milliseconds) as desired
});
