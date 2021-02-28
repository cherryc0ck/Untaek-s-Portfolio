'use strict';

const readBtn = document.querySelector('.read__more');

readBtn.addEventListener('click', (event)=> {
  console.log(event.currentTarget.dataset);
});

