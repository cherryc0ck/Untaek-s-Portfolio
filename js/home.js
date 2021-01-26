'use strict';

const semo1 = document.querySelector('.semo1');
const semo2 = document.querySelector('.semo2');
const stick1 = document.querySelector('.stick1');
const stick2 = document.querySelector('.stick2');
const stick3 = document.querySelector('.stick3');
const semicircle1 = document.querySelector('.semicircle1');
const semicircle2 = document.querySelector('.semicircle2');
const semicircle3 = document.querySelector('.semicircle3');
const wave1 = document.querySelector('.wave1');
const wave2 = document.querySelector('.wave2');

document.addEventListener('mousemove', (event)=>{
    mouseLeftAndRight(event);    
    mouseUpAndDown(event);

});

function mouseLeftAndRight(event){
    //마우스가 왼쪽으로 move할 때
    if(event.clientX <= 739){
        semo1.style.left = '350px';
        semo2.style.right = '450px';
        stick1.style.left = '280px';
        semicircle1.style.left = '1300px';
        semicircle2.style.right = '200px';
        semicircle3.style.left = '100px';
        
        //역방향
        stick2.style.right = '130px';
        stick3.style.left = '150px';
        wave1.style.left = '100px';
        wave2.style.left = '730px';

    //마우스가 오른쪽으로 move할 때    
    }else if(event.clientX > 739){
        semo1.style.left = '450px';
        semo2.style.right = '350px';
        stick1.style.left = '380px';
        semicircle1.style.left = '1400px';
        semicircle2.style.right = '100px';
        semicircle3.style.left = '200px';

        //역방향
        stick2.style.right = '230px';
        stick3.style.left = '50px';
        wave1.style.left = '0px';
        wave2.style.left = '630px';
    }
};

function mouseUpAndDown(event){
        //마우스가 아래로 move할 때
        if(event.clientY > 350){
            //역방향 
            semo1.style.top = '100px';
            semo2.style.top = '100px';
            stick1.style.top = '-70px';
            semicircle1.style.top = '-60px';
            semicircle2.style.bottom = '250px';
            semicircle3.style.bottom = '200px';
            
            //정방향
            stick2.style.bottom = '-50px';
            stick3.style.bottom = '-50px';
            wave1.style.top = '280px';
            wave2.style.bottom = '-45px';
            
        }
        //마우스가 위로 move할 때
        else if(event.clientY < 350){
            //역방향
            semo1.style.top = '200px';
            semo2.style.top = '200px';
            stick1.style.top = '30px';
            semicircle1.style.top = '40px';
            semicircle2.style.bottom = '150px';
            semicircle3.style.bottom = '100px';

            //정방향
            stick2.style.bottom = '50px';
            stick3.style.bottom = '50px';
            wave1.style.top = '180px';
            wave2.style.bottom = '55px';
        }
};