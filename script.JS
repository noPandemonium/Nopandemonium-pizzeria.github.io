// Initialize an empty cart object
const cart = {};

// Function to toggle dropdown menu
function toggleMenu() {
    var dropdownMenu = document.querySelector(".dropdown-menu");
    dropdownMenu.classList.toggle("show-dropdown-menu");
}

// Function to add items to the cart
function addToCart(item, price) {
    if (cart[item]) {
        cart[item].quantity += 1;
    } else {
        cart[item] = {
            price: price,
            quantity: 1,
        };
    }
    updateCartDisplay();
}

// Function to update the cart display on the page
function updateCartDisplay() {
    const cartDisplay = document.querySelector("#cart-display");
    let cartContent = "";

    for (const item in cart) {
        cartContent += `<p>${item}: ${cart[item].quantity} x $${cart[item].price.toFixed(2)}</p>`;
    }

    cartDisplay.innerHTML = cartContent;
}

// Variables to control the carousel slider
let slideIndex = 0;
let slideTimer;
const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator");

// Function to change the slide
function changeSlide(newIndex) {
    slides[slideIndex].classList.remove('active');
    indicators[slideIndex].classList.remove('active');
    slideIndex = newIndex;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    slides[slideIndex].classList.add('active');
    indicators[slideIndex].classList.add('active');
}
// Function to automatically move to the next slide
function nextSlide() {
    changeSlide(slideIndex + 1);
}

// Function to move to the previous slide
function prevSlide() {
    changeSlide(slideIndex - 1);
}

// Event listeners for the next and previous buttons
document.getElementById('next-btn').addEventListener('click', nextSlide);
document.getElementById('prev-btn').addEventListener('click', prevSlide);

// Function to start the slide timer
function startSlideTimer() {
    slideTimer = setInterval(nextSlide, 6000);
}

// Event listener to restart the slide timer whenever a user interacts with the carousel controls
document.querySelector('.controls').addEventListener('click', function() {
    clearInterval(slideTimer);
    startSlideTimer();
});

// Event listeners for the carousel indicators
indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        changeSlide(i);
        clearInterval(slideTimer);
        startSlideTimer();
    });
});

// Start the slide timer when the page loads
startSlideTimer();