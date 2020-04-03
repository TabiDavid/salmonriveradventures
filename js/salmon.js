//google fonts code//

WebFont.load({ google: { families: ['Trade Winds', 'Roboto'] } });


// Menu nav bar//
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);