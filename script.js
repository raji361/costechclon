//alert('webpage under construction') 
function rapidCount(targetCount, duration, increment, displayElementId) {
    const counterElement = document.getElementById(displayElementId);
    let count = 0;

    // Simulate rapid counting using CSS transitions
    function simulateRapidCount() {
        const interval = 16.67; // Approximately 60 frames per second

        const countInterval = setInterval(() => {
            count += increment;
            if (count >= targetCount) {
                count = targetCount;
                clearInterval(countInterval);
            }
            counterElement.textContent = Math.min(Math.floor(count), targetCount) + "+";
        }, interval);
    }

    // Intersection Observer options
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0
    };

    // Create an Intersection Observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start the rapid count simulation when in the viewport
                simulateRapidCount();
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Observe the specified element
    observer.observe(counterElement);
}

// Call the rapidCount function with desired parameters
rapidCount(15, 1500, 0.5, '15');
rapidCount(100000, 1500, 1000, '100k');
rapidCount(50000, 1500, 500, '50k');
rapidCount(500000, 1500, 5000, '500k');
rapidCount(50, 1500, 0.5, '50');
rapidCount(30, 1500, 0.5, '30');

let slideIndex = 0;
const slideContainer = document.querySelector('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide() {
    slideContainer.style.transform = `translateX(-${slideIndex * 33.33}%)`;
    updateDots();
}

function nextSlide() {
    if (slideIndex < 3) {
        slideIndex++;
        showSlide();
    }
}

function prevSlide() {
    if (slideIndex > 0) {
        slideIndex--;
        showSlide();
    }
}

function updateDots() {
    dots.forEach((dot, index) => {
        if (index === slideIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function gotoSlide(index) {
    slideIndex = index;
    showSlide();
}


function autoSlide() {
    nextSlide();
}

setInterval(autoSlide, 5000); // Change the interval duration (in milliseconds) as desired

showSlide();