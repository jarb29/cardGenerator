let numero = document.getElementById('numero');
let figure = document.querySelector('.heart');
let figure2 = document.querySelector('.diamon');

let fig = ['\u25ca', '\u2660', '\u2663','\u2665','\u2666'];
let numm = [1,2,3,4,5,6,7,8,9,10,'J','Q','K'];

let a = Math.floor(Math.random()*4);
let b = Math.floor(Math.random()*13);

numero.innerHTML = numm[b];
figure.innerHTML = fig[a];
figure2.innerHTML = fig[a];
