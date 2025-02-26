document.addEventListener("DOMContentLoaded", function() {
    // Get name from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const nama = urlParams.get('nama') || 'Yeni Anggriani Putri';
    
    // Set greeting text
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = `Selamat Ulang Tahun, ${nama}!`;
    
    // Set personalized message
    const messageElement = document.getElementById('ucapan');
    const message = `Pada hari yang istimewa ini, saya ingin mengucapkan selamat ulang tahun. Di usia yang semakin matang (prime), semoga kebijaksanaan dan kebahagiaan terus menyertai setiap langkahmu. Seperti purnama yang bersinar di langit malam, semoga hidupmu selalu dipenuhi dengan cahaya kebahagiaan dan cinta. Semoga tahun ini membawa lebih banyak keberhasilan, kebahagiaan, dan pengalaman berharga dalam perjalanan hidupmu.`;
    
    // Type message with animation
    typeMessage(messageElement, message, 0, 30);
    
    // Create shooting stars
    createShootingStars();
    
    // Create hearts
    setInterval(createHeart, 1000);
    
    // Initialize fireworks
    initFireworks();
    
    // Play music
    const music = document.getElementById('birthdayMusic');
    
    // Play music on first interaction (to comply with autoplay policies)
    document.body.addEventListener('click', function() {
        if (music.paused) {
            music.play().catch(e => console.log("Audio play prevented:", e));
        }
    });
});

// Function to simulate typing effect
function typeMessage(element, text, index, speed) {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(function() { 
            typeMessage(element, text, index, speed); 
        }, speed);
    } else {
        // Show navigation buttons after message is complete
        document.getElementById('navigation').style.opacity = '1';
    }
}

// Function to create shooting stars
function createShootingStars() {
    const container = document.querySelector('.shooting-stars');
    
    setInterval(() => {
        const star = document.createElement('div');
        star.classList.add('shooting-star');
        
        // Random position and angle
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight / 3;
        const angle = Math.random() * 45 + 25; // 25-70 degrees
        
        star.style.left = `${startX}px`;
        star.style.top = `${startY}px`;
        star.style.width = `${Math.random() * 80 + 50}px`;
        star.style.transform = `rotate(${angle}deg)`;
        star.style.animationDuration = `${Math.random() * 2 + 1}s`;
        
        container.appendChild(star);
        
        // Remove after animation completes
        setTimeout(() => {
            star.remove();
        }, 3000);
    }, 2000);
}

// Function to create hearts
function createHeart() {
    const container = document.querySelector('.heart-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    
    // Random position and size
    const leftPos = Math.random() * 100;
    const size = Math.random() * 1 + 0.5;
    const duration = Math.random() * 15 + 10;
    
    heart.style.left = `${leftPos}%`;
    heart.style.fontSize = `${size}rem`;
    heart.style.animationDuration = `${duration}s`;
    
    container.appendChild(heart);
    
    // Remove after animation completes
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Fireworks animation
function initFireworks() {
    const canvas = document.getElementById('fireworks');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Handle window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    


class Particle {
    constructor(x, y, color, angle, speed) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.angle = angle; // Sudut dalam radian
        this.speed = speed;
        this.friction = 0.98; // Reduksi kecepatan tiap frame
        this.gravity = 0.05; // Efek gravitasi
        this.opacity = 1;
        this.decay = Math.random() * 0.015 + 0.015; // Nilai penurunan opacity secara acak
    }
    
    update() {
        this.speed *= this.friction;
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed + this.gravity;
        this.opacity -= this.decay;
    }
    
    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

// Array untuk menyimpan partikel kembang api
let particles = [];

// Fungsi untuk membuat letusan kembang api
function createFirework() {
    // Tentukan posisi acak (di bagian atas layar)
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2;
    // Pilihan warna acak
    const colors = ['#ff0057', '#fffd82', '#05ffa1', '#00d2ff', '#b980f0'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    // Jumlah partikel tiap letusan
    const particleCount = 30 + Math.floor(Math.random() * 20);
    for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2; // Sudut acak 0 - 360 derajat
        const speed = Math.random() * 5 + 2; // Kecepatan acak
        particles.push(new Particle(x, y, color, angle, speed));
    }
}

// Fungsi untuk meng-animate kembang api
function animateFireworks() {
    // Buat efek trail dengan mengisi canvas dengan latar semi-transparan
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Update dan gambar setiap partikel
    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw(ctx);
        // Hapus partikel jika opacity sudah habis
        if (p.opacity <= 0) {
            particles.splice(i, 1);
        }
    }
    requestAnimationFrame(animateFireworks);
}

// Mulai animasi kembang api
animateFireworks();
// Buat letusan kembang api secara periodik (setiap 800ms)
setInterval(createFirework, 800);

function navigateToSlideshow() {
    window.location.href = 'slideshow.html';
}

function navigateToCake() {
    window.location.href = 'cake.html';
}

function navigateToGift() {
    window.location.href = 'gift.html';
}

function navigateToFirework() {
    window.location.href = 'firework.html';
}
