'use strict';

const fuck = document.querySelector('#skills');
const f90 = document.querySelectorAll('.skill__value.graph-90');
const f70 = document.querySelectorAll('.skill__value.graph-70');
const f60 = document.querySelectorAll('.skill__value.graph-60');
const f50 = document.querySelectorAll('.skill__value.graph-50');


document.addEventListener('scroll', (e)=>{
    if(window.scrollY > 1100){
        f90.forEach(ff90=>{
            ff90.style.animation = 'graph-90 2s';
        });
        f70.forEach(ff70=>{
            ff70.style.animation = 'graph-70 2s';
        });
        f60.forEach(ff60=>{
            ff60.style.animation = 'graph-60 2s';
        });
        f50.forEach(ff50=>{
            ff50.style.animation = 'graph-50 2s';
        });
    }
});




// const projects = document.querySelectorAll('.project');
// const project = [];

// projects.forEach((el,idx) =>{
//     project[idx] = el;
//     project[idx].addEventListener('mouseenter', ()=>{
//        doAnimate(idx);
//     });
// });

// function doAnimate(idx){
//     idx++;
//     console.log(idx);
//     document.createElement()
// };

