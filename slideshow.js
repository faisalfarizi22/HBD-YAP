document.addEventListener("DOMContentLoaded", function() {
  let slideIndex = 0;
  const slides = document.getElementsByClassName('slide');
  const musicIcon = document.getElementById('musicIcon');
  const slideshowMusic = document.getElementById('slideshowMusic');

  // Fungsi untuk menampilkan slide secara otomatis
  function showSlides() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active');
    }
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
    setTimeout(showSlides, 3000); // Ganti gambar setiap 3 detik
  }
  showSlides();

  // Fungsi untuk menampilkan slide berdasarkan klik thumbnail
  window.showSlide = function(n) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active');
    }
    slideIndex = n % slides.length;
    slides[slideIndex].classList.add('active');
  };

  // Toggle musik
  window.toggleMusic = function() {
    if (slideshowMusic.paused) {
      slideshowMusic.play();
      musicIcon.src = 'icons/icons8-speaker-50.png';
      musicIcon.classList.add('playing');
    } else {
      slideshowMusic.pause();
      musicIcon.src = 'icons/icons8-mute-50.png';
      musicIcon.classList.remove('playing');
    }
  };

  // Fungsi navigasi halaman
  window.openIndexPage = function() {
    window.location.href = 'index.html';
  };

  window.openCakePage = function() {
    window.location.href = 'cake.html';
  };

  window.openGiftPage = function() {
    window.location.href = 'gift.html';
  };

  window.openFireworkPage = function() {
    window.location.href = 'firework.html';
  };
});
