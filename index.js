
const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.gallery img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const totalImages = images.length;
let currentIndex = 0;
let interval;


function updateGallery() {
    const angle = -360 / totalImages * currentIndex;
    gallery.style.transform = `rotateY(${angle}deg)`;
}


function setImageTransforms() {
    images.forEach((img, index) => {
        img.style.setProperty('--total-images', totalImages);
        img.style.setProperty('--index', index);
    });
}


function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateGallery();
}


function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateGallery();
}


function startRotation() {
    interval = setInterval(nextImage, 3000); 
}


function stopRotation() {
    clearInterval(interval);
}


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


setImageTransforms();
updateGallery();
startRotation();
