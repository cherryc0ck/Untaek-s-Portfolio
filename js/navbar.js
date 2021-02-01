'use strict';

//Navbar Element 
const navbar = document.querySelector('#navbar');
const navbarMenu = document.querySelector('.navbar__menu');
const navbarMenuItem = document.querySelector('.navbar__menu__item');
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
const navbarLogo = document.querySelector('.navbar__logo');

//Home Element 
const home = document.querySelector('#home');
const homeTitle = document.querySelector('.home__title');
const homeDescription = document.querySelector('.home__description');
const homeContactBtn = document.querySelector('.home__contact');
const sidebar = document.querySelector('.contact__sidebar');
const arrowIcon = document.querySelector('.fa-long-arrow-alt-right');
const scrolldown = document.querySelector('.scrolldown');

//Skills Element
const skills = document.querySelector('#skills');
const skillText = document.querySelectorAll('.skill p');
const skillbar = document.querySelectorAll('.skill__bar');
const skillDivision = document.querySelectorAll('.skill__division');

//Contact Element
const contact = document.querySelector('#contact');
const contactContainer = document.querySelector('.contact__container');
const contactTitle = document.querySelector('.contact__title');
const contactPhone = document.querySelector('.contact.phone');
const contactEmail = document.querySelector('.contact.email');
const contactInfo = document.querySelectorAll('.info');

let homeMode = 'normal';

navbarMenu.addEventListener('click', event => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null || link == '#reverse') {
    return;
  }
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});

homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
  });

scrolldown.addEventListener('click', ()=>{
    scrollIntoView('#about');
});

navbarLogo.addEventListener('click', ()=>{
    scrollIntoView('#home');
});


const sectionIds = [
    '#home',
    '#about',
    '#skills',
    '#work',
    '#contact',
  ];
  const sections = sectionIds.map(id => document.querySelector(id));
  const navItems = sectionIds.map(id =>
    document.querySelector(`[data-link="${id}"]`)
  );
  
  function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
  }
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  };
  
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting && entry.intersectionRatio > 0) {
        const index = sectionIds.indexOf(`#${entry.target.id}`);
      }
    });
  };
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  sections.forEach(section => observer.observe(section));
  


navbarMenu.addEventListener('click', (e)=>{
    const link = e.target.dataset.link;
    if(link === '#reverse'){
        if(homeMode === 'normal'){
            reverseMode();
        }else{
            normalMode();
            
        }
    }
});

navbarToggleBtn.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('open');
});

function reverseMode(){
    homeMode = 'reverse';
    changeNavbar();
    changeHome();
    changeSkills();
    changeContact();
}

function normalMode(){
    homeMode = 'normal';
    returnNavbar();
    returnHome();
    returnSkills();
    returnContact();
}

function changeNavbar(){
    navbar.style.background = 'var(--color-grey-navy)';
};

function changeHome(){
    home.style.background = 'url("img/home/background-white.png")center/contain no-repeat';
    homeTitle.style.color = 'var(--color-dark-navy)';
    homeDescription.style.color = 'var(--color-dark-navy)';
    homeContactBtn.style.background = 'var(--color-dark-navy)';
    arrowIcon.style.color = 'var(--color-blue-bottle)';
    scrolldown.style.color = 'var(--color-dark-navy)';
    sidebar.classList.add('reverse');
};

function changeSkills(){
    skills.style.background = 'var(--color-white)';
    skillText.forEach(text=>{
        text.style.color = 'var(--color-dark-black)';
    });
    skillbar.forEach(bar =>{
        bar.style.background = 'var(--color-light-grey)';
    });
    skillDivision.forEach(division =>{
        division.style.color = 'var(--color-blue-bottle)';
    });
};

function returnNavbar(){
    navbar.style.background = 'var(--color-dark-black)';
};

function returnHome(){
    home.style.background = 'url("img/home/background-dark.png")center/contain no-repeat';
    home.style.backgroundColor = 'var(--color-dark-black)';
    homeTitle.style.color = 'var(--color-white)';
    homeDescription.style.color = 'var(--color-white)';
    homeContactBtn.style.background = 'var(--color-dark-black)';
    arrowIcon.style.color = 'var(--color-white)';
    sidebar.classList.remove('reverse');
};

function returnSkills(){
    skills.style.background = 'var(--color-dark-black)';
    skillText.forEach(text=>{
        text.style.color = 'var(--color-white)';
    });
    skillbar.forEach(bar =>{
        bar.style.background = 'var(--color-grey-navy)';
    });
    skillDivision.forEach(division =>{
        division.style.color = 'var(--color-white)';
    });
};

function changeContact(){
    contact.style.background = 'var(--color-white)';
    contactContainer.style.border = '1px solid var(--color-dark-black)';
    contactTitle.style.color = 'var(--color-dark-black)';
    contactPhone.style.color = 'var(--color-dark-black)';
    contactEmail.style.color = 'var(--color-dark-black)';
    contactInfo.forEach(info =>{
        info.style.color = 'var(--color-dark-black)';
    });
}

function returnContact(){
    contact.style.background = 'var(--color-dark-black)';
    contactContainer.style.border = '1px solid var(--color-white)';
    contactTitle.style.color = 'var(--color-white)';
    contactPhone.style.color = 'var(--color-white)';
    contactEmail.style.color = 'var(--color-white)';
    contactInfo.forEach(info =>{
        info.style.color = 'var(--color-white)';
    });
};