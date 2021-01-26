'use strict';

let i = 0;
let j = 0;

const textArray = ["DYNAMIC", "FANTASTIC", "INTERESTING"];
const h1 = document.querySelector('.typing');

function txtnum() {
  j == textArray.length - 1 
  ? j=0 
  : j++;
}

function typingWriter() {
  i < textArray[j].length 
  ? (h1.innerHTML += textArray[j].charAt(i), i++, setTimeout(typingWriter, 150))
  : typingRemove()
}

function typingRemove() {
  0 <= i
  ? (h1.innerHTML = h1.innerHTML.slice(0, i), i--, setTimeout(typingRemove, 100))
  : (typingWriter(), txtnum())
}

typingWriter();