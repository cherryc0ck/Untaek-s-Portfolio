'use strict';

const contactDate = document.querySelector('.contact__date');
const contactTime = document.querySelector('.contact__time');
let today = new Date();
let month = 0;

let calculationMonth = parseInt(today.getMonth()) + 1;
let date = `${today.getDate()}TH`; 

switch(calculationMonth){
    case 1 : month = 'JANUARY'; break;
    case 2 : month = 'FEBRUARY'; break;
    case 3 : month = 'MARCH'; break;
    case 4 : month = 'APRIL'; break;
    case 5 : month = 'MAY'; break;
    case 6 : month = 'JUNE'; break; 
    case 7 : month = 'JULY'; break;
    case 8 : month = 'AUGUST'; break;
    case 9 : month = 'SEPTEMBER'; break;
    case 10 : month = 'OCTOBER'; break;
    case 11 : month = 'NOVEMBER'; break;
    case 12 : month = 'DECEMBER'; break;
};
contactDate.innerHTML = `${month.concat(' ',date)}`;


setInterval(realTime, 1000);

function realTime(){
    let today = new Date();
    let time = today.getHours().toString();
    let minutes = today.getMinutes().toString();
    let seconds = today.getSeconds().toString();

    contactTime.innerHTML = `${time.concat(':', minutes, ':', seconds)}`;
};
