const images = document.querySelectorAll('.gallery img');

const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');

const closeBtn = document.querySelector('.close');

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;

// OPEN LIGHTBOX

images.forEach((img, index) => {

  img.addEventListener('click', () => {

    currentIndex = index;

    showImage();

    lightbox.style.display = 'flex';

  });

});

// SHOW IMAGE

function showImage() {

  lightboxImg.src = images[currentIndex].src;

}

// CLOSE LIGHTBOX

closeBtn.addEventListener('click', () => {

  lightbox.style.display = 'none';

});

// NEXT IMAGE

nextBtn.addEventListener('click', () => {

  currentIndex = (currentIndex + 1) % images.length;

  showImage();

});

// PREVIOUS IMAGE

prevBtn.addEventListener('click', () => {

  currentIndex =
    (currentIndex - 1 + images.length) % images.length;

  showImage();

});

// FILTER IMAGES

function filterImages(category) {

  const allImages = document.querySelectorAll('.image');

  allImages.forEach((image) => {

    if (category === 'all') {

      image.style.display = 'block';

    }

    else if (image.classList.contains(category)) {

      image.style.display = 'block';

    }

    else {

      image.styledisplay = 'none';

    }

  });

}