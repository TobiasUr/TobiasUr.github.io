const galleryImages = document.querySelectorAll('.gallery img, .gallery-image, .blog-post-card img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

if (lightbox && lightboxImg) {
  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.classList.add('loading');
      const fullRes = img.dataset.full || img.src;

      lightboxImg.onload = () => {
        lightbox.classList.remove('loading');
      };

      lightboxImg.src = fullRes;
      lightbox.style.display = 'flex';
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
  });
}

