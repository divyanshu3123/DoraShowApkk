console.log("scripts.js loaded");

const downloadBtn = document.querySelector(".download-btn");
if (downloadBtn) {
    downloadBtn.addEventListener("click", function(){
        alert("Your download will start shortly. Thank you for choosing DORASHOW!");
    });
}

window.addEventListener('scroll', () => {
    const contactContainer = document.querySelector('.contact-container');
    if (!contactContainer) return;

    const triggerBottom = window.innerHeight / 1.2;
    const boxTop = contactContainer.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
        contactContainer.classList.add('show');
    }
});
// Typewriter effect
const words = [
    "Movies, Web Series & Shows",
    "Kids Entertainment",
    "Exclusive 18+ Hindi Content",
    "Watch Anytime, Anywhere"
];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const typeWriterElement = document.getElementById("typewriter-text");

function typeWriter() {
    if (!typeWriterElement) return;

    if (i < words.length) {
        if (!isDeleting && j <= words[i].length) {
            currentWord = words[i].substring(0, j++);
            typeWriterElement.textContent = currentWord;
            setTimeout(typeWriter, 100);
        } else if (isDeleting && j >= 0) {
            currentWord = words[i].substring(0, j--);
            typeWriterElement.textContent = currentWord;
            setTimeout(typeWriter, 50);
        } else if (!isDeleting) {
            isDeleting = true;
            setTimeout(typeWriter, 1000);
        } else {
            isDeleting = false;
            i = (i + 1) % words.length;
            setTimeout(typeWriter, 200);
        }
    }
}
typeWriter();
