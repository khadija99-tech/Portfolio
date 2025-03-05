// Theme Toggle Functionality - Redirect to mode

document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");
    const moonDiv = themeToggle.querySelector(".moon");
    const sunDiv = themeToggle.querySelector(".sun");
    const themeStylesheet = document.getElementById("themeStylesheet");
    const themeImages = document.querySelectorAll("[data-theme-dark]");

    // ✅ Check local storage and apply saved theme
    if (localStorage.getItem("theme") === "light") {
        setLightMode();
    } else {
        setDarkMode();
    }

    // ✅ Theme Toggle Button Click Event
    themeToggle.addEventListener("click", () => {
        if (document.body.classList.contains("light-mode")) {
            setDarkMode();
        } else {
            setLightMode();
        }
    });

    // ✅ Function to Switch to Light Mode
    function setLightMode() {
        document.body.classList.add("light-mode");
        localStorage.setItem("theme", "light");
        themeStylesheet.href = "style-light.css";
        moonDiv.classList.remove("active");
        sunDiv.classList.add("active");

        // Update all images to light mode
        updateImages("light");
    }

    // ✅ Function to Switch to Dark Mode
    function setDarkMode() {
        document.body.classList.remove("light-mode");
        localStorage.setItem("theme", "dark");
        themeStylesheet.href = "style-dark.css";
        moonDiv.classList.add("active");
        sunDiv.classList.remove("active");

        // Update all images to dark mode
        updateImages("dark");
    }

    // ✅ Function to Update Images
    function updateImages(theme) {
        themeImages.forEach(img => {
            img.src = theme === "light" ? img.dataset.themeLight : img.dataset.themeDark;
        });
    }
});



// Menu Links - Add Active Effect on Click
const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        menuLinks.forEach(l => l.classList.remove('active')); // Remove active from others
        e.target.classList.add('active'); // Add active to clicked link
    });
});

const phrases = ["Web Developer", "UI Designer"];
const typingEffect = document.querySelector(".typing-effect");
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;

function loop() {
    // When typing is done
    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            j++;
            typingEffect.textContent = currentPhrase.join("");
        }

        // When deleting
        if (isDeleting && j >= 0) {
            currentPhrase.pop();
            j--;
            typingEffect.textContent = currentPhrase.join("");
        }

        if (j === phrases[i].length) {
            isDeleting = true;
        }

        if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
            if (i === phrases.length) {
                i = 0; // Loop back to the start
            }
        }
    }

    setTimeout(loop, isDeleting ? 100 : 200);
}

loop();

const btnPersonal = document.getElementById("btn-personal");
const btnTech = document.getElementById("btn-tech");
const personalSkills = document.getElementById("personal-skills");
const techSkills = document.getElementById("tech-skills");

// Function to Show Personal Skills
btnPersonal.addEventListener("click", () => {
    btnPersonal.classList.add("active");
    btnTech.classList.remove("active");
    personalSkills.classList.add("active-content");
    techSkills.classList.remove("active-content");
});

// Function to Show Tech Skills
btnTech.addEventListener("click", () => {
    btnTech.classList.add("active");
    btnPersonal.classList.remove("active");
    techSkills.classList.add("active-content");
    personalSkills.classList.remove("active-content");
});

// go up btn
document.addEventListener("DOMContentLoaded", function () {
    const goUpBtn = document.querySelector(".go-up-btn");
    const aboutSection = document.querySelector("#about");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > aboutSection.offsetTop - 100) {
        goUpBtn.classList.add("show-go-up");
      } else {
        goUpBtn.classList.remove("show-go-up");
      }
    });
  });
  