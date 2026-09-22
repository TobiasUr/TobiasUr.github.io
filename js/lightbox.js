const galleryImages = Array.from(document.querySelectorAll('.gallery img, .gallery-image, .blog-post-card img'));
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const previousButton = document.getElementById('lightbox-previous');
const nextButton = document.getElementById('lightbox-next');
const closeButton = document.getElementById('lightbox-close');
let currentImageIndex = 0;

const visibleImages = () => galleryImages.filter(image => image.style.display !== 'none');

const showImage = image => {
  currentImageIndex = visibleImages().indexOf(image);
  lightbox.classList.add('loading');
  lightboxImg.onload = () => lightbox.classList.remove('loading');
  lightboxImg.src = image.dataset.full || image.src;
  lightboxImg.alt = image.alt || 'Expanded image';
};

const showRelativeImage = offset => {
  const images = visibleImages();
  if (!images.length) return;
  currentImageIndex = (currentImageIndex + offset + images.length) % images.length;
  showImage(images[currentImageIndex]);
};

if (lightbox && lightboxImg) {
  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      showImage(img);
      lightbox.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
    document.body.style.overflow = '';
  };

  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) closeLightbox();
  });
  closeButton?.addEventListener('click', closeLightbox);
  previousButton?.addEventListener('click', () => showRelativeImage(-1));
  nextButton?.addEventListener('click', () => showRelativeImage(1));

  document.addEventListener('keydown', event => {
    if (lightbox.style.display !== 'flex') return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') showRelativeImage(-1);
    if (event.key === 'ArrowRight') showRelativeImage(1);
    if (event.key === 'Tab') {
      event.preventDefault();
      nextButton?.focus();
    }
  });
}

const filterButtons = document.querySelectorAll('.gallery-filter');
if (filterButtons.length) {
  const filterKeywords = {
    travel: ['morocco', 'gibraltar', 'london', 'paris', 'seattle', 'cyprus', 'miami', 'hong kong', 'monaco', 'train', 'road', 'street', 'village', 'coastline', 'docklands', 'rabat', 'tangier'],
    aviation: ['plane', 'rocket', 'launch', 'blue angels', 'artemis'],
    architecture: ['building', 'cathedral', 'tower', 'statue', 'machinery', 'cables', 'wall', 'graveyard', 'cemetery', 'cave'],
    nature: ['beach', 'bird', 'seagull', 'dog', 'kitesurfer', 'landscape', 'desert', 'palm', 'starfish', 'canyon', 'sun eclipse', 'balloon']
  };

  filterButtons.forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle('is-active', item === button));
    galleryImages.forEach(image => {
      const alt = image.alt.toLowerCase();
      const matches = filter === 'all' || filterKeywords[filter].some(keyword => alt.includes(keyword));
      image.style.display = matches ? '' : 'none';
    });
  }));
}

