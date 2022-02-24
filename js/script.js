"use strict"
const isMobile = {
    Android: function (){
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function (){
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function (){
        return navigator.userAgent.match(/iPhone|iPas|iPod/i);
    },
    Opera: function (){
        return navigator.userAgent.match(/Opera mini/i);
    },
    Windows: function (){
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function (){
        return(
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};
//Проверка на устройство с тачпадом, если это оно, то добавляется класс _touch к body
// и класс _actice для .menu_arrow для выпадающего меню в шапке
if (isMobile.any()){
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu_arrow');
    if(menuArrows.length > 0){
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function(e){
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    } 
}
else{
    document.body.classList.add('_pc');
}

//Прокрутка при клике
// const menuLinks = document.querySelectorAll('.menu_link[data-goto]'); 
// if (menuLinks.length > 0) {
//     menuLinks.forEach(menuLink => {
//         menuLink.addEventListener("click", onMenuLinkClick);
//     });
//     function onMenuLinkClick (e){
//         const menuLink = e.target;
//         if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {  //Проверка на наличие сслыки на объекта для прокрутки
//             const gotoBlock =  document.querySelector(menuLink.dataset.goto);
//             const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offSetHeight;

//             if (iconMenu.classList.contains('_active')) {
//                 document.body.classList.remove('_lock');
//                 iconMenu.classList.remove('_active');
//                 menuBody.classList.remove('_active');
//             }

//             window.scrollTo({
//                 top: gotoBlockValue,
//                 behavior: "smooth"
//             });
//             e.preventDefault();
//         }
//     }
// }

//Прокрутка при клике
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1);

    if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
    }
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start' 
    })
  })
}

//Бургер меню
const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.menu_body');
if (iconMenu) {
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}