import "./lib/slider"

const { body } = document;
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



const contactForm = document.querySelector("#contact-form");
const name = contactForm.querySelector("#name");
const email = contactForm.querySelector("#email");
const message = contactForm.querySelector("#message");
const btn = contactForm.querySelector("#submit");

const contactFormFields = contactForm.querySelectorAll('.js-form-field');

function validateForm() {
    
    const field = this;
    const fieldId = field.id;
    const fieldValue = field.value;

    contactFormFields.forEach(elem => elem.closest('.form__item').classList.remove('is-active'));

    if (fieldValue) {
        field.closest('.form__item').classList.add('is-active')
    } else {
        field.closest('.form__item').classList.remove('is-active')
    };

    switch (fieldId) {
        case 'name':
            
            break;

        case 'email':
            
            break;

        case 'message':

            break;

        default:
            break;
    }
}

contactFormFields.forEach(field => {
    field.addEventListener('input', validateForm)
})

const scheduleTabs = body.querySelectorAll('.schedule__tab');
const scheduleBodies = body.querySelectorAll('.schedule__body');

function setActiveTab() {
    const currentTab = this;
    const currentBody = scheduleBodies[[...scheduleTabs].indexOf(currentTab)];
    scheduleTabs.forEach((tab, index) => {
        tab.classList.remove('is-active');
        scheduleBodies[index].classList.remove('is-active');
    })
    currentTab.classList.add('is-active');
    currentBody.classList.add('is-active');
}

scheduleTabs.forEach(tab => {
    tab.addEventListener('click', setActiveTab)
})

const mobileLinks = headerMobile.querySelectorAll('a');

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        headerMobile.classList.remove('is-active');
        body.classList.remove('is-no-scroled');
        hamburgerMenu.classList.remove('is-active');
    })
})