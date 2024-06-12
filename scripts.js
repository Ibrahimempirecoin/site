document.addEventListener("DOMContentLoaded", function() {
    var tiktokLink = document.getElementById("tiktok-link");
    var playButton = document.getElementById("play-button");

    if (tiktokLink) {
        tiktokLink.addEventListener("click", function(event) {
            event.preventDefault();
            window.open("https://www.tiktok.com/@empirecoin_crypto?_t=8n1O2ZJaeYK", "_blank");
        });
    }

    if (playButton) {
        playButton.addEventListener("click", function() {
            window.location.href = "https://t.me/Empirecoin";
        });
    }
});
