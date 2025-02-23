const ads = [
    "https://example.com/pub1",
    "https://example.com/pub2",
    "https://example.com/pub3"
];

let currentAd = 0;

function changeAd() {
    document.getElementById("ad-frame").src = ads[currentAd];
    currentAd = (currentAd + 1) % ads.length;
}

// Changer de pub toutes les 10 secondes
setInterval(changeAd, 10000);
