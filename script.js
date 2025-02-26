document.addEventListener("DOMContentLoaded", function() {
    // Create stars dynamically
    createStars();
    
    // Add audio element
    const audioElement = document.createElement('audio');
    audioElement.id = 'bgMusic';
    audioElement.src = 'music and sound effect/musik1.mp3';
    audioElement.loop = true;
    document.body.appendChild(audioElement);
    
    // Play music on first interaction (to comply with autoplay policies)
    document.body.addEventListener('click', function() {
        if (audioElement.paused) {
            audioElement.play().catch(e => console.log("Audio play prevented:", e));
        }
    });
});

function createStars() {
    const starsContainer = document.querySelector('.stars');
    const numStars = 100;
    
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = `${Math.random() * 3 + 1}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 10}s`;
        starsContainer.appendChild(star);
    }
}

function bukaPopUp() {
    document.getElementById('popup').style.display = 'block';
    
    // Add animation class to popup content
    const popupContent = document.querySelector('.popup-content');
    popupContent.classList.add('popup-animation');
    
    // Focus on input field
    setTimeout(() => {
        document.getElementById('namaInput').focus();
    }, 300);
}

function tutupPopUp() {
    document.getElementById('popup').style.display = 'none';
}

function masuk() {
    var nama = document.getElementById('namaInput').value;
    if (nama) {
        // Add transition effect before navigating
        document.querySelector('.container').style.opacity = '0';
        
        setTimeout(() => {
            window.location.href = 'greetings.html?nama=' + encodeURIComponent(nama);
        }, 500);
    } else {
        // Shake the input to indicate it's required
        const inputField = document.getElementById('namaInput');
        inputField.classList.add('shake');
        
        setTimeout(() => {
            inputField.classList.remove('shake');
        }, 500);
    }
}

// Close popup when clicking outside the popup content
window.onclick = function(event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        tutupPopUp();
    }
};

// Handle enter key press in input field
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && document.getElementById('popup').style.display === 'block') {
        masuk();
    }
});
