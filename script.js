const signo1 = document.getElementById('signo1');
const signo2 = document.getElementById('signo2');
const signo3 = document.getElementById('signo3');

const ele1 = document.getElementById('ele1');
const ele2 = document.getElementById('ele2');
const ele3 = document.getElementById('ele3');

const meses1 = document.getElementById('meses1');
const meses2 = document.getElementById('meses2');
const meses3 = document.getElementById('meses3');


pais1.addEventListener('click', function () {
  const ansPais1 = prompt(pais1);
  pais1.innerText = 'Pais: ' + ansPais1;
})
pais2.addEventListener('click', function () {
  const ansSigno2 = prompt(pais2);
  pais2.innerText = 'Pais: ' + ansPais2;
})
pais3.addEventListener('click', function () {
  const ansSigno3 = prompt(pais3);
  pais3.innerText = 'Pais: ' + ansPais3;
})

///////////////////////////////////////////////

capital1.addEventListener('click', function () {
  const ansCapital1 = prompt(capital1);
  capital1.innerText = 'Capital: ' + ansCapital1;
})
capital2.addEventListener('click', function () {
  const ansCapital2 = prompt(capital2);
  capital2.innerText = 'Capital: ' + ansCapital2;
})
capital3.addEventListener('click', function () {
  const ansCapital3 = prompt(capital3);
  capital3.innerText = 'Capital: ' + ansCapital3;
})

///////////////////////////////////////////////

extencion1.addEventListener('click', function () {
  const ansExtencion1 = prompt(extencion1);
  extencion1.innerText = 'Extencion: ' + ansExtencion1;
})
extencion2.addEventListener('click', function () {
  const ansExtencion2 = prompt(extencion2);
  extencion2.innerText = 'Extencion: ' + ansExtencion2;
})
extencion3.addEventListener('click', function () {
  const ansExtencion3 = prompt(extencion3);
  extencion3.innerText = 'Extencion: ' + ansExtencion3;
})

let user = document.getElementById('user')

if (localStorage.getItem('userName')) {
  const dataSaved = localStorage.getItem('userName')
  user.innerText = dataSaved
}
user.addEventListener('click', function () {
  let answerUser = prompt('Ingrese su usuario')
  user.innerText = answerUser
  localStorage.setItem('userName', answerUser)
})


let btn = document.getElementById('btn')
btn.addEventListener('click', function () {
  user.innerText = 'Usuario'
  localStorage.clear()
})