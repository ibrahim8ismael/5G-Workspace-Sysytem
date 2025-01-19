document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("navbar-toggle");
    const main = document.getElementById("main");
    toggleButton.addEventListener("click", function () {
        main.classList.toggle("is-open");
        main.classList.toggle("backdrop");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleSidebarmobile");
    const main = document.getElementById("main");
    toggleButton.addEventListener("click", function () {
        main.classList.toggle("is-open");
        main.classList.toggle("backdrop");
    });
});
