document.addEventListener("DOMContentLoaded", function() {
    var tiktokLink = document.getElementById("tiktok-link");
    var playButton = document.getElementById("play-button");

    if (tiktokLink) {
        tiktokLink.addEventListener("click", function(event) {
            event.preventDefault();
            window.open("https://www.tiktok.com/@empirecoin?_t=8mfv3gKGH0T&_r=1", "_blank");
        });
    }

    if (playButton) {
        playButton.addEventListener("click", function() {
            window.location.href = "https://t.me/Empirecoin_bot";
        });
    }
});
