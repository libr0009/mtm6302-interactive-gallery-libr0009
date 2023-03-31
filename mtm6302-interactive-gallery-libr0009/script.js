let galleryItems = document.querySelectorAll('.gallery-item');

let imageUrls = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg',
    'images/8.jpg',
    'images/9.jpg',
    'images/10.jpg',
    'images/11.jpg',
    'images/12.jpg'
];

for (let i = 0; i < galleryItems.length; i++) {
galleryItems[i].style.backgroundImage = `url(${imageUrls[i]})`;
}

let modal = document.querySelector('.modal');
let modalImage = document.querySelector('.modal-image');
let modalCaption = document.querySelector('.modal-caption');

for (let i = 0; i < galleryItems.length; i++) {
  galleryItems[i].addEventListener('click', function() {
    let imageUrl = this.getAttribute('data-image');
    let caption = this.getAttribute('data-caption');
    modalImage.setAttribute('src', imageUrl);
    modalCaption.innerHTML = caption;
    modal.style.display = 'flex';
  });
}

modal.addEventListener('click', function() {
  modal.style.display = 'none';
});

  