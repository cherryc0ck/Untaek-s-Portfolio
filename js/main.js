'use strict';

const navbar = document.querySelector('#navbar');
const navbarMenu = document.querySelector('.navbar__menu');
const navbarMenuItem = document.querySelector('.navbar__menu__item');
const home = document.querySelector('#home');
const homeTitle = document.querySelector('.home__title');
const homeDescription = document.querySelector('.home__description');
const homeContact = document.querySelector('.home__contact');
const arrowIcon = document.querySelector('.fa-long-arrow-alt-right');

let homeMode = 'normal';


navbarMenu.addEventListener('click', (e)=>{
    const link = e.target.dataset.link;
    if(link === '#reverse'){
        if(homeMode === 'normal'){
            console.log("리버스모드에 진입합니다.");
            reverseMode();
        }else{
            console.log("노멀모드에 진입합니다.")
            normalMode();
            
        }
    }
});


function reverseMode(){
    homeMode = 'reverse';
    home.style.background = 'url("img/home/background-white.png")center/contain no-repeat';
    homeTitle.style.color = 'var(--color-dark-navy)';
    homeDescription.style.color = 'var(--color-dark-navy)';
    navbar.style.background = 'var(--color-grey-navy)';
    arrowIcon.style.color = 'darkgreen';
    homeContact.classList.add('reverse');
    console.log(`현재 ${homeMode}입니다.`);
}

function normalMode(){
    homeMode = 'normal';
    home.style.background = 'url("img/home/background-dark.png")center/contain no-repeat';
    home.style.backgroundColor = 'var(--color-dark-black)';
    homeTitle.style.color = 'var(--color-white)';
    homeDescription.style.color = 'var(--color-white)';
    navbar.style.background = 'var(--color-dark-black)';
    arrowIcon.style.color = 'var(--color-white)';
    homeContact.classList.remove('reverse');
    console.log(`현재 ${homeMode}입니다.`);
}

