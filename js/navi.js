let menu = document.querySelector('button');
let navi = document.querySelector('nav');
menu.addEventListener('click', function () {
    this.classList.toggle('active');
    if (this.getAttribute('aria-expanded') === 'false') {
        this.setAttribute('aria-expanded', 'true');
    } else {
        this.setAttribute('aria-expanded', 'false');
    };
    if (this.getAttribute('aria-haspopup') === 'false') {
        this.setAttribute('aria-haspopup', 'true');
    } else {
        this.setAttribute('aria-haspopup', 'false');
    };
    if (navi.getAttribute('aria-hidden') === 'false') {
        navi.setAttribute('aria-hidden', 'true');
    } else {
        navi.setAttribute('aria-hidden', 'false');
    }
});