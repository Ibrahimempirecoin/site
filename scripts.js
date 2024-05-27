document.addEventListener("DOMContentLoaded", function() {
    var tiktokLink = document.getElementById("tiktok-link");

    tiktokLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.open("https://www.tiktok.com/@empirecoin?_t=8mfv3gKGH0T&_r=1", "_blank");
    });
});
