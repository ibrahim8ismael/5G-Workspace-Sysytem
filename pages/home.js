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



document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const darkModeIcon = document.getElementById("dark-mode-icon");
    const darkModeText = document.getElementById("dark-mode-text");
    const root = document.documentElement;

    // Check saved mode in localStorage
    const savedMode = localStorage.getItem("dark-mode");
    if (savedMode === "dark") {
        root.classList.add("dark");
        darkModeIcon.classList.replace("fa-moon", "fa-sun");
        darkModeText.textContent = "Light Mode";
    } else {
        root.classList.remove("dark");
        darkModeIcon.classList.replace("fa-sun", "fa-moon");
        darkModeText.textContent = "Dark Mode";
    }

    // Add click event to toggle button
    toggleButton.addEventListener("click", function () {
        if (root.classList.contains("dark")) {
            root.classList.remove("dark");
            darkModeIcon.classList.replace("fa-sun", "fa-moon");
            darkModeText.textContent = "Dark Mode";
            localStorage.setItem("dark-mode", "light");
        } else {
            root.classList.add("dark");
            darkModeIcon.classList.replace("fa-moon", "fa-sun");
            darkModeText.textContent = "Light Mode";
            localStorage.setItem("dark-mode", "dark");
        }
    });
});
