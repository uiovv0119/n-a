const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible'));
}, { threshold: 0.16 });
document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));

const lightbox = document.querySelector('#lightbox');
const largePhoto = document.querySelector('.lightbox-photo');
const caption = document.querySelector('.lightbox p');
document.querySelectorAll('.photo').forEach((photo) => {
  photo.addEventListener('click', () => {
    largePhoto.style.backgroundImage = getComputedStyle(photo).backgroundImage;
    caption.textContent = photo.dataset.caption;
    lightbox.showModal();
  });
});
document.querySelector('.close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) lightbox.close(); });
