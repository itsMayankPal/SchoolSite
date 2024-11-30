const sliderItems = document.querySelectorAll(".slider-item");
const sliderContainer = document.querySelector(".slider-container");
let currentIndex = 0;

function changeSlide() {
  // Hide all slides (by changing the translateX of slider container)
  sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Update the current index
  currentIndex = (currentIndex + 1) % sliderItems.length;
}

// Set interval for automatic slide change
setInterval(changeSlide, 3000); // Change slide every 3 seconds

// Initialize the first slide
changeSlide();
