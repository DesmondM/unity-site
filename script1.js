// JavaScript (script.js)

const logoContainer = document.querySelector('.logo-container');
const logoWrapper = document.querySelector('.logo-wrapper');
const logos = document.querySelectorAll('.logo-wrapper img');
const scrollSpeed = 1; // You can adjust this value to control the scroll speed

let scrollPosition = 0;

function scrollLogos() {
    scrollPosition += scrollSpeed;

    if (scrollPosition >= logoWrapper.offsetWidth) {
        scrollPosition = 0;
        logoWrapper.style.transition = 'none';
        logoWrapper.style.transform = `translateX(0)`;
        setTimeout(() => {
            logoWrapper.style.transition = '';
        }, 0);
    } else {
        logoWrapper.style.transform = `translateX(-${scrollPosition}px)`;
    }
}

let scrollInterval = setInterval(scrollLogos, 20); // Start scrolling automatically

// Add event listeners for pausing and resuming the animation when the user interacts with the gallery
logoContainer.addEventListener('mouseenter', () => {
    clearInterval(scrollInterval);
});

logoContainer.addEventListener('mouseleave', () => {
    scrollInterval = setInterval(scrollLogos, 20); // Adjust the interval for smoother or faster scrolling
});
