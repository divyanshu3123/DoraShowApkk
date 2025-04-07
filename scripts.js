document.addEventListener("DOMContentLoaded", function () {
    // Select the download button
    let downloadBtn = document.getElementById("download-btn");
    let userAgent = navigator.userAgent.toLowerCase();

    // Detect OS and change download link
    if (userAgent.includes("android")) {
        downloadBtn.href = "https://dorashow.tech/dorashow1_apk.apk"; // Android APK
    } else if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
        downloadBtn.href = "https://apps.apple.com/app"; // iOS App Store (Replace with your link)
    } else {
        downloadBtn.href =  href="https://dorashow.tech/dorashow1_apk.apk";
 // Default to Android
    }

    // Show confirmation before downloading
    downloadBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Stop automatic download
        let confirmDownload = confirm("Do you want to download DOraShow?");
        if (confirmDownload) {
            window.location.href = downloadBtn.href; // Start download
        }
    });

    // Smooth scrolling for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Dark Mode Toggle
    let darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});

document.addEventListener("DOMContentLoaded",function(){
    setTimeout(() => {
        document.querySelector(".loader-container").classList.add("hidden");
        document.body.classList.add("loaded");

    }, 1500);
})
