document.addEventListener("DOMContentLoaded", function() {
    const giftMusic = document.getElementById('giftMusic');
    const cheerSound = document.getElementById('cheerSound');
    const applauseSound = document.getElementById('applauseSound');
    const giftContainer = document.querySelector('.gift-container');
    const prizeContainer = document.getElementById('prizeContainer');
    const prizeText = document.getElementById('prizeText');
    const prizeImage = document.getElementById('prizeImage');

    
    // Array of prizes
    const prizes = [
        {text: "1 set Make Up SOMETHINC", image: "icons/somethinc.jpg"},
        {text: "1 set Skincare SKINTIFIC", image: "icons/skintific.jpg"},
        {text: "Liburan Ke Yogyakarta", image: "icons/yogya.jpg"},
        {text: "Grabfood Unlimited", image: "icons/gabfood.jpg"},
        {text: "Cincin Tunangan", image: "icons/cincin.jpg"},
        {text: "Gofood Unlimited", image: "icons/gofood.jpg"},
        {text: "Sepatu Kerja dan Running", image: "icons/sepatu.jpg"},
        {text: "Tiket Kereta GMR - CN PP", image: "icons/kereta.jpg"},
        {text: "Voucher Belanja 200k", image: "icons/voucher.jpg"},
        {text: "Makan di RM Asep Strobery", image: "icons/asep stoberi.jpg"}
    ];

    // Function to select a gift
    window.selectGift = function(giftNumber) {
        // Hide gift boxes
        giftContainer.style.display = 'none';
        // Show prize
        prizeContainer.style.display = 'flex';
        // Randomly select a prize
        const prize = prizes[Math.floor(Math.random() * prizes.length)];
        prizeText.textContent = prize.text;
        prizeImage.src = prize.image;
        
        // Trigger confetti
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });

        // Play music when user interacts with the page
        document.body.addEventListener('click', function() {
            document.getElementById('giftMusic').play();
    });
        
        // Play sound effects
        cheerSound.play();
        applauseSound.play();
    }

    // Function to navigate to the cake page
    window.goToCakePage = function() {
        window.location.href = 'cake.html';
    }

    window.openFireworkPage = function() {
        window.location.href = 'firework.html';
    }
});
