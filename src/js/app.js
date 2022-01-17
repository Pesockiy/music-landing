import "./lib/slider"

const {body} = document;
const header = body.querySelector('.header');
const headerOffsetY = header.offsetTop;

const setHeaderSticky = () => (window.pageYOffset > headerOffsetY) ? header.classList.add('is-scrolled') : header.classList.remove('is-scrolled');

window.onscroll = function () { setHeaderSticky() }


const imageShadow = body.querySelectorAll('.js-image img');

const imgBluredCopy = (img, imgClassName = 'grid-gallery__blured-img', parentNodeClassName = 'grid-gallery__item') => {
    const copiedImg = img.cloneNode(true);
    const copiedImgParent = img.closest(`.${parentNodeClassName}`);
    copiedImg.setAttribute('class', imgClassName);
    copiedImg.src = copiedImgParent.querySelector('img').currentSrc;
    img.closest(`.${parentNodeClassName}`).appendChild(copiedImg);
}
imageShadow.forEach(img => imgBluredCopy(img))

const headerMobile = body.querySelector('.header__mobile');

const hamburgerMenu = body.querySelector('.hamburger-menu');
hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('is-active');
    body.classList.toggle('is-no-scroled');
    headerMobile.classList.toggle('is-active')
});

const subMenu = body.querySelectorAll('.sub-menu');

subMenu.forEach(item => item.addEventListener('click', () => {
    subMenu.forEach(elem => elem.classList.remove('is-active'))
    item.classList.toggle('is-active')
}));