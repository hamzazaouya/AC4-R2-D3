/*global*/

let calc = document.getElementById('calcualte');
let output = document.getElementById('output');

calc.onclick = function () {
  'use strict';

  let char = document.getElementById('char').value;
  let txt = document.getElementById('text').value;
  output.innerHTML = coutChar(txt, char);
  console.log("hello")
}

function coutChar(s, c) {
    'use strict';
    let text = s;
    let counter = 0;

    for(let i = 0; i < text.length; i++) {
      if(text[i] == c) {
        counter++;
      }
    }
    return counter;
}
