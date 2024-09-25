// Toggle the navbar icon between the hamburger and X when clicked
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('#navbarNav');

navbarToggler.addEventListener('click', function () {
    navbarToggler.classList.toggle('open');
});
