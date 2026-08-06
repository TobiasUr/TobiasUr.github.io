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
      lightboxImg.alt = img.alt || 'Expanded image';
      lightbox.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
    document.body.style.overflow = '';
  };

  lightbox.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && lightbox.style.display === 'flex') {
      closeLightbox();
    }
  });
}

