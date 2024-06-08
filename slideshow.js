document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides();

    const slideshowMusic = document.getElementById('slideshowMusic');
    const musicIcon = document.getElementById('musicIcon');

    function showSlides() {
        let slides = document.getElementsByClassName('slide');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }

    window.showSlide = function(n) {
        let slides = document.getElementsByClassName('slide');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[n].style.display = 'block';
        slideIndex = n;
    }

    window.toggleMusic = function() {
        if (slideshowMusic.paused) {
            slideshowMusic.play();
            musicIcon.src = 'icons/icons8-speaker-50.png'; // Change to music on icon
            musicIcon.classList.add('playing');
        } else {
            slideshowMusic.pause();
            musicIcon.src = 'icons/icons8-mute-50.png'; // Change to music off icon
            musicIcon.classList.remove('playing');
        }
    }


    window.openIndexPage = function() {
        window.location.href = 'index.html';
    }

    window.openCakePage = function() {
        window.location.href = 'cake.html';
    }

    window.openGiftPage = function() {
        window.location.href = 'gift.html';
    }

    window.openFireworkPage = function() {
        window.location.href = 'firework.html';
    }
});
