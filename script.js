const ads = [
    "https://efooravirarsow.com/4/8994965",
    "https://efooravirarsow.com/4/8994962",
    "https://efooravirarsow.com/4/8994961",
    "https://efooravirarsow.com/4/8994960"
];

let currentAd = 0;

function changeAd() {
    document.getElementById("ad-frame").src = ads[currentAd];
    currentAd = (currentAd + 1) % ads.length;
}

// Changer de pub toutes les 10 secondes
setInterval(changeAd, 10000);
