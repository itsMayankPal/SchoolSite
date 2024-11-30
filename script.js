// JavaScript for Image Slider
let slideIndex = 0;
const slides = document.querySelectorAll(".slider-item");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

function showSlide(index) {
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;

  document.querySelector(".slider-container").style.transform = `translateX(-${
    slideIndex * 100
  }%)`;
}

nextButton.addEventListener("click", () => {
  slideIndex++;
  showSlide(slideIndex);
});

prevButton.addEventListener("click", () => {
  slideIndex--;
  showSlide(slideIndex);
});

// Auto-slide every 5 seconds
setInterval(() => {
  slideIndex++;
  showSlide(slideIndex);
}, 5000);

// JavaScript to toggle mobile menu
document.querySelector(".hamburger").addEventListener("click", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
});

// K-12 Accordion Section

document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion-header");

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
      // Toggle the active class on the clicked accordion header
      this.classList.toggle("active");

      // Toggle the display of the corresponding content
      const content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
});


// Testimonial Section JS 
<script type="text/javascript">
  $(document).ready(function(){
    // Initialize the Slick Slider for the Testimonials Section
    $('.testimonials-slider').slick({
      slidesToShow: 1,       // Show 1 testimonial at a time
      slidesToScroll: 1,     // Scroll 1 testimonial at a time
      autoplay: true,        // Enable auto sliding
      autoplaySpeed: 3000,   // Speed of auto sliding (3 seconds)
      arrows: true,          // Show previous and next arrows
      prevArrow: '<button class="slick-prev">←</button>',
      nextArrow: '<button class="slick-next">→</button>',
      fade: true,            // Enable smooth fade transitions
      dots: true,            // Show navigation dots (optional)
      infinite: true         // Infinite loop
    });
  });
</script>
