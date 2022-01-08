const hamburger = document.querySelector('.menu-btn');
const mobile_nav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    mobile_nav.classList.toggle('is-active');
})
