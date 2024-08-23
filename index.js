// Select elements
const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.gallery img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const totalImages = images.length;
let currentIndex = 0;
let interval;

// Function to update the gallery rotation based on the current index
function updateGallery() {
    const angle = -360 / totalImages * currentIndex;
    gallery.style.transform = `rotateY(${angle}deg)`;
}

// Update CSS variables for each image for proper positioning
function setImageTransforms() {
    images.forEach((img, index) => {
        img.style.setProperty('--total-images', totalImages);
        img.style.setProperty('--index', index);
    });
}

// Function to move to the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateGallery();
}

// Function to move to the previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateGallery();
}

// Start automatic rotation of images
function startRotation() {
    interval = setInterval(nextImage, 4000); // Rotate every 4 seconds
}

// Stop automatic rotation of images
function stopRotation() {
    clearInterval(interval);
}

// Event listeners for buttons
prevButton.addEventListener('click', () => {
    stopRotation();
    prevImage();
    startRotation();
});

nextButton.addEventListener('click', () => {
    stopRotation();
    nextImage();
    startRotation();
});

// Initialize gallery and start rotation
setImageTransforms();
updateGallery();
startRotation();
