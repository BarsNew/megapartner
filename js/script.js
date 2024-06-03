const body = document.body;
const burger = document.querySelector('.burger-icon');
const menu = document.querySelector('.navigation-burger');
const barTop = document.querySelector('.bar-top');
const barCentr = document.querySelector('.bar-centr');
const barBottom = document.querySelector('.bar-bottom');

const btnsHeaderLang = document.querySelector('.btns-header-lang');
const spanLanguage = document.querySelector('.span-language');
const viewLangMob = document.querySelector('.view-lang-mob');

const btnsHeaderLogin = document.querySelector('.btns-header-login');
const btnsHeaderSign = document.querySelector('.btns-header-sign');

const blogItem = document.querySelector('[data-atribute="post1"]');

burger.addEventListener('click', () => {
    if (menu.classList.contains('flex')) {
        menu.classList.remove('flex');
        barTop.classList.remove('rotate-r');
        barBottom.classList.remove('rotate-l');
        barCentr.style.display = 'block';
        body.classList.remove('no-scroll');
    } else {
        menu.classList.add('flex');
        barTop.classList.add('rotate-r');
        barBottom.classList.add('rotate-l');
        barCentr.style.display = 'none';
        body.classList.add('no-scroll');
    }
});

btnsHeaderLang.addEventListener('click', () => {
    if (spanLanguage.textContent === 'RU') spanLanguage.innerText = 'EN';
    else if (spanLanguage.textContent === 'EN') spanLanguage.innerText  = 'RU';
    if (window.innerWidth < 1401) {
        viewLangMob.innerText = spanLanguage.textContent;
        viewLangMob.style.display = 'block';
        btnsHeaderLang.disabled = true;
        setTimeout(()=> {
            viewLangMob.style.display = 'none';
            btnsHeaderLang.disabled = false;ы
        }, 3000);
    } else {
        viewLangMob.style.display = 'none';
    }
});

window.addEventListener('resize', () => {
    viewLangMob.style.display = 'none';
});

btnsHeaderLogin.addEventListener('click', (event) => {
    event.preventDefault();
    const answer = confirm('Подтвердите переход')
    if (answer)  window.location.href = "#";
});

btnsHeaderSign.addEventListener('click', (event) => {
    event.preventDefault();
    const answer = confirm('Подтвердите переход')
    if (answer)  window.location.href = "#";
});

blogItem.addEventListener('click', () => {
    window.location.href = "#";
});













