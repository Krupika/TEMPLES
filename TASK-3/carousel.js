const carouselContainer = document.querySelector(".carousel-container");
const images = document.querySelectorAll(".carousel-container img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let index = 0;

function updateCarousel() {
    carouselContainer.style.transform = `translateX(${-index * 100}%)`;
}

nextButton.addEventListener("click", () => {
    if (index < images.length - 1) {
        index++;
    } else {
        index = 0; // Loop back to first image
    }
    updateCarousel();
});

prevButton.addEventListener("click", () => {
    if (index > 0) {
        index--;
    } else {
        index = images.length - 1; // Loop back to last image
    }
    updateCarousel();
});
