// Select the logo slider element
const logoSlider = document.querySelector('.logo-slider');

// Select all logos
const logos = document.querySelectorAll('.logo');

// Define a variable to store the current index
let currentIndex = 0;

// Define a function to move the logos
function moveLogos() {
    // Calculate the total width of the logos container
    const containerWidth = logoSlider.clientWidth;

    // Calculate the total width of all logos
    const logosWidth = Array.from(logos).reduce((total, logo) => {
        return total + 100;
    }, 0);

    // Calculate the distance to move
    const distance = currentIndex * -1 * (logosWidth / logos.length);

    // Move the logos container
    logoSlider.style.transform = `translateX(${distance}px)`;

    // Update the current index for the next cycle
    currentIndex++;

    if (currentIndex >= logos.length) {
        currentIndex = 0;
    }

    // Call the function recursively
    requestAnimationFrame(moveLogos);
}

// Call the moveLogos function to start the animation
moveLogos();