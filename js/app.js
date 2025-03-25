const mobileMenu = document.querySelector(".mobile-menu")
const navMobile = document.querySelector(".nav-mobile")

let navOpen = false;
mobileMenu.addEventListener("click", function () {
    if (navOpen) {
        mobileMenu.classList.remove("nav__btn--open")
        navMobile.classList.remove("nav-menu--open")

        navOpen = false
    } else {
        mobileMenu.classList.add("nav__btn--open")
        navMobile.classList.add("nav-menu--open")
        navOpen = true
    }
})