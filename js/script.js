"use strict";

window.addEventListener('DOMContentLoaded', () => {

    const menuCat = document.querySelectorAll('.header-wrapper__main-menu li'),
        addMenu = document.querySelectorAll('.menu-container');

    menuCat.forEach((item, n) => {
        item.addEventListener('mouseenter', () => {
            for (let i = 0; i < 5; i++) {
                addMenu[i].setAttribute('id', 'none');
            }
            addMenu[n].setAttribute('id', 'active');
        });
        addMenu[n].addEventListener('mouseleave', () => {
            addMenu[n].setAttribute('id', 'none');
        });
        item.addEventListener('mouseleave', (e) => {
            addMenu[n].addEventListener('mouseenter', () => {
                addMenu[n].setAttribute('id', 'active');
            });
            addMenu[n].setAttribute('id', 'none');
        });

    });


    const root = document.documentElement;


    const marqueeContent = document.querySelector('.wellcome-container__up-partners');


    root.style.setProperty('--marquee-elements', marqueeContent.children.length);


    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue('--marquee-elements-displayed')

    for (let index = 0; index < marqueeElementsDisplayed; index++) {

        marqueeContent.appendChild(marqueeContent.children[index].cloneNode(true));

    }

});