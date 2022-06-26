let moon = document.querySelector('#moon');
let mountains = document.querySelector('#mountains');
let stars = document.querySelector('#stars');
let landscape = document.querySelector('#landscape');
let text = document.querySelector('#text');
let button = document.querySelector('.button');
let nav = document.querySelector('#nav');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains.style.top = value * 1.05 + 'px';
    landscape.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4.0 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    button.style.marginTop = value * 1.5 + 'px';
    nav.style.marginTop = value * 0.6 + 'px';
});