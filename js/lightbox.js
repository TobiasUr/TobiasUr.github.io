const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
  lightbox.classList.add('loading');
  const fullRes = img.dataset.full;

  lightboxImg.onload = () => {
    lightbox.classList.remove('loading');
  };

  lightboxImg.src = fullRes;
  lightbox.style.display = 'flex';
});
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
  lightboxImg.src = "";                 // clear image to avoid memory use
});

