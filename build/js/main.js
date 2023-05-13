const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')
    const navbar = document.getElementById('navbar')
    const year = document.getElementById('year')

    const currentYear = new Date().getFullYear()

    year.innerHTML = currentYear

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        navbar.classList.toggle('flex')
        navbar.classList.toggle('hidden')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)