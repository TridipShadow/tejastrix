let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

// Function for sliding to the next item
next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});

// Function for sliding to the previous item
prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]); // Adjusting for 6 items
});

// Auto-slider function that simulates the 'next' button click at intervals
let autoSlider = setInterval(function() {
    next.click();
}, 20000); // Adjust the interval as needed (3000ms = 3 seconds)

// Optional: Pause auto-slider on hover
document.querySelector('.slide').addEventListener('mouseenter', function() {
    clearInterval(autoSlider);
});

// Optional: Resume auto-slider when not hovering
document.querySelector('.slide').addEventListener('mouseleave', function() {
    autoSlider = setInterval(function() {
        next.click();
    }, 20000);
});
