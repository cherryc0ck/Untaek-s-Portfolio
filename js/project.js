'use strict';

const skill = document.querySelector('#skills');
const graph_90 = document.querySelectorAll('.skill__value.graph-90');
const graph_70 = document.querySelectorAll('.skill__value.graph-70');
const graph_60 = document.querySelectorAll('.skill__value.graph-60');
const graph_50 = document.querySelectorAll('.skill__value.graph-50');


document.addEventListener('scroll', (e)=>{
    if(window.scrollY > 1100){
        graph_90.forEach(graph__90=>{
            graph__90.style.animation = 'graph-90 2s';
        });
        graph_70.forEach(graph__70=>{
            graph__70.style.animation = 'graph-70 2s';
        });
        graph_60.forEach(graph__60=>{
            graph__60.style.animation = 'graph-60 2s';
        });
        graph_50.forEach(graph__50=>{
            graph__50.style.animation = 'graph-50 2s';
        });
    }
});

