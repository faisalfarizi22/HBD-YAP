function bukaPopUp() {
    document.getElementById('popup').style.display = 'block';
}

function tutupPopUp() {
    document.getElementById('popup').style.display = 'none';
}

function masuk() {
    var nama = document.getElementById('namaInput').value;
    if (nama) {
        window.location.href = 'greetings.html?nama=' + nama;
    } else {
        alert('Silakan masukkan nama Anda.');
    }
}

window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var nama = urlParams.get('nama');
    if (nama) {
        document.getElementById('nama').textContent = nama;
    }
};

