window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var nama = urlParams.get('nama');
    if (nama) {
        var namaDepan = nama.split(' ')[0].toUpperCase();
        var greetingElement = document.getElementById('greeting');
        greetingElement.innerHTML = 'HELLO ' + namaDepan.split('').map(letter => `<span>${letter}</span>`).join('');
    }
};

function ubahTulisan() {
    var greetingElement = document.getElementById('greeting');
    var ucapanElement = document.getElementById('ucapan');
    var birthdayMusic = document.getElementById('birthdayMusic');

    greetingElement.innerHTML = '<span>Y</span><span>E</span><span>A</span><span>Y</span>, SELAMAT ULANG TAHUN YA!';
    ucapanElement.style.display = 'block';
    ucapanElement.innerHTML = '<span>Semoga hari ulang tahunmu yang <span id="highlight" onclick="showNextStep()">ke-26</span> ini penuh dengan kebahagiaan, tawa, dan cinta.</span>' + 
    '<span>Kamu adalah wanita yang luar biasa, cerdas, dan penuh semangat.</span>' + 
    '<span>Semoga semua impian dan harapanmu menjadi kenyataan, dan semoga tahun ini menjadi tahun terbaik dalam hidupmu.</span>' + 
    '<span>Selamat ulang tahun!</span>';

    var spans = greetingElement.getElementsByTagName('span');
    for (var i = 0; i < spans.length; i++) {
        spans[i].style.animation = 'color-change 3s infinite';
    }

    birthdayMusic.play();
    animateFireworks();

    // Menambahkan efek love
    function createLove() {
        var love = document.createElement('div');
        love.classList.add('love');
        document.querySelector('.love-container').appendChild(love);

        love.style.left = Math.random() * window.innerWidth + 'px';
        love.style.top = window.innerHeight + 'px';

        love.addEventListener('animationend', function() {
            love.remove();
        });
    }

    setInterval(createLove, 200); // Create loves every 200ms
}

document.getElementById('greeting').addEventListener('click', function() {
    var greetingElement = document.getElementById('greeting');
    if (greetingElement.textContent.includes('HELLO')) {
        greetingElement.innerHTML = 'KAMU LAGI ULANG TAHUN YA?';
    } else if (greetingElement.textContent.includes('KAMU LAGI ULANG TAHUN YA?')) {
        ubahTulisan();
    }
});

// Kode untuk fireworks
function animateFireworks() {
    const canvas = document.getElementById('fireworks');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.velocity = {
                x: (Math.random() - 0.5) * 8,
                y: (Math.random() - 0.5) * 8
            };
            this.alpha = 1;
            this.friction = 0.99;
        }

        draw() {
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, 2, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        update() {
            this.velocity.x *= this.friction;
            this.velocity.y *= this.friction;
            this.x += this.velocity.x;
            this.y += this.velocity.y;
            this.alpha -= 0.01;
        }
    }

    class Firework {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.velocity = {x: 0, y: Math.random() * -2.5 - 0.5};
            this.particles = [];
            this.lifespan = 180;
            this.hasExploded = false;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, 3, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        explode() {
            for (let i = 0; i < 50; i++) {
                this.particles.push(new Particle(this.x, this.y, this.color));
            }
        }

        update() {
            this.lifespan--;

            if (this.lifespan <= 0 && !this.hasExploded) {
                this.explode();
                this.velocity = {x: 0, y: 0};
                this.hasExploded = true;
            } else if (this.lifespan > 0) {
                this.y += this.velocity.y;
            }

            for (let i = 0; i < this.particles.length; i++) {
                this.particles[i].update();
                this.particles[i].draw();
            }
        }
    }

    let fireworks = [];

    function animate() {
        requestAnimationFrame(animate);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        fireworks.forEach((firework, index) => {
            firework.update();
            firework.draw();

            if (firework.lifespan <= 0 && firework.particles.every(p => p.alpha <= 0)) {
                fireworks.splice(index, 1);
            }
        });

        if (Math.random() < 0.015) {
            const x = Math.random() * canvas.width;
            const color = `hsl(${Math.random() * 360}, 50%, 50%)`;
            fireworks.push(new Firework(x, canvas.height, color));
        }
    }

    animate();
}

function showNextStep() {
    // Hide elements
    document.querySelector('.love-container').style.display = 'none';
    document.getElementById('fireworks').style.display = 'none';

    // Show scroll text and arrow
    document.getElementById('arrowContainer').style.display = 'flex';

    // Position the arrow near the bottom center
    var arrowContainer = document.getElementById('arrowContainer');
    arrowContainer.style.position = 'fixed';
    arrowContainer.style.bottom = '20px';
    arrowContainer.style.left = '50%';
    arrowContainer.style.transform = 'translateX(-50%)';
}

function scrollToSection() {
    var birthdayMusic = document.getElementById('birthdayMusic');
    birthdayMusic.pause();
    window.location.href = 'slideshow.html';
}
