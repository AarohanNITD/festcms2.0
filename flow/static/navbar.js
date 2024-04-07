const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
const shadows = document.querySelectorAll(".shadow");
const navHeader = document.getElementById('navHeader');
const links = document.querySelector(".links");

function toggleClasses() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 675 && container.classList.contains("active")) {
        links.classList.remove('links');
        links.classList.add('mobileLinks');
        for (let i of shadows) {
            i.classList.add('mobileDisplay');
        }
        navHeader.classList.add('mobileHeader');
    } else {
        links.classList.remove('mobileLinks');
        links.classList.add('links');
        for (let i of shadows) {
            i.classList.remove('mobileDisplay');
        }
        navHeader.classList.remove('mobileHeader');
    }
}

hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
    document.body.classList.toggle('no-scroll');
    toggleClasses();
});

window.addEventListener('resize', toggleClasses);

