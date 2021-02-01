'use strict';

const skill = document.querySelector('.skill__description h3');

const skillValue = document.querySelectorAll('.skill__value');
const skillScore = document.querySelectorAll('.skill__bar span');
const pinger = document.querySelector('.skill__tooltip');

skill.addEventListener('click', ()=>{
    showGraph();
    showScore();
});

pinger.addEventListener('click', ()=>{
    showGraph();
    showScore();
});


function showGraph(){
    skillValue.forEach(value=>{
        value.style.display = 'block';
        pinger.style.display = 'none';
        skill.classList.remove('click');
    });
};

function showScore(){
    skillScore.forEach(score=>{
        score.style.display = 'block';
    });
}

