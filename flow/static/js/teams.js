/* START CODE FOR NAVBAR */
// const hamburgerMenu = document.querySelector("#hamburger-menu");
// const overlay = document.querySelector("#overlay");
// const nav1 = document.querySelector("#nav-1");
// const nav2 = document.querySelector("#nav-2");
// const nav3 = document.querySelector("#nav-3");
// const nav4 = document.querySelector("#nav-4");
// const nav5 = document.querySelector("#nav-5");
// const navItems = [nav1, nav2, nav3, nav4, nav5];

// function navAnimation(val1, val2) {
//     navItems.forEach((nav, i) => {
//         nav.classList.replace(`slide-${val1}-${i + 1}`, `slide-${val2}-${i + 1}`);
//     });
// }

// function toggleNav() {
//     hamburgerMenu.classList.toggle("active");

//     overlay.classList.toggle("overlay-active");

//     if (overlay.classList.contains("overlay-active")) {
//         overlay.classList.replace("overlay-slide-left", "overlay-slide-right");

//         navAnimation("out", "in");
//     } else {
//         overlay.classList.replace("overlay-slide-right", "overlay-slide-left");

//         navAnimation("in", "out");
//     }
// }

// hamburgerMenu.addEventListener("click", toggleNav);
// navItems.forEach((nav) => {
//     nav.addEventListener("click", toggleNav);
// });
/* CODE FOR NAVBAR END  */

const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
});

/* START CODE FOR TEAM */

// window.addEventListener('scroll', function() {
//     var scrollPosition = window.scrollY;

//     document.querySelectorAll('.letter').forEach(function(letter) {
//         var letterTop = letter.getBoundingClientRect().top;
//         var letterHeight = letter.getBoundingClientRect().height;

//         var distance = Math.max(0, scrollPosition - letterTop);


//         var scaleFactor = 1 + (distance / letterHeight);

//         letter.style.transition = 'transform 0.1 ease';
//         letter.style.transform = 'scaleY(' + scaleFactor + ')';
//     });
// });

/* CODE FOR TEAM END */


/* CODE FOR CARD */
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function () {
            const hamburgerMenu = document.querySelector("#hamburger-menu");
            hamburgerMenu.classList.add('hide-transition');
            setTimeout(() => {
                hamburgerMenu.classList.add('hidden');
            }, 500);

            setTimeout(() => {
                const crossInput = document.querySelector('input#button');
                crossInput.checked = true;
                hamburgerMenu.classList.remove('hidden');
                hamburgerMenu.classList.remove('hide-transition');
            }, 1000);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseover', mouseOver);
        card.addEventListener('mouseleave', mouseLeave);
        card.addEventListener('mousemove', mouseMove);
    });
});

function mouseOver(event) {
    const cardContent = event.currentTarget.querySelector('.card-content');
    cardContent.classList.add('hover');
}

function mouseLeave(event) {
    const cardContent = event.currentTarget.querySelector('.card-content');
    cardContent.classList.remove('hover');
    cardContent.style.transform = "";
}

function mouseMove(event) {
    const cardContent = event.currentTarget.querySelector('.card-content');
    const cardWidth = event.currentTarget.offsetWidth;
    const cardHeight = event.currentTarget.offsetHeight;
    const offsetX = event.offsetX;
    const offsetY = event.offsetY;

    const rotationY = (offsetX - cardWidth / 2) / 30;
    const rotationX = (cardHeight / 2 - offsetY) / 35;

    if (offsetX > (cardWidth / 2)) {
        cardContent.style.transform = `translate3d(0px, 0px, 30px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    } else if (offsetX < (cardWidth / 2)) {
        cardContent.style.transform = `translate3d(0px, 0px, 30px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    }
}
/* CODE FOR CARD */