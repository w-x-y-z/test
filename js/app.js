let url = window.location.href;
let swLocation = "./sw.js";
let SW;

if (navigator.serviceWorker) {
  if (url.includes("localhost")) {
    swLocation = "./sw.js";
  }
  navigator.serviceWorker.register(swLocation)
  .then(res=>{
    SW=res;
    console.log('Service Worker registrado exitosamente:', res.scope);
  })
  .catch(error=>{
    console.error('Error al registrar el Service Worker:', error);
  })
}
function test(params) {
  resultado.insertAdjacentHTML('beforeend', `<p>${Date()}</p>`);
  util.setNotificacion('Test',`${Date()}`);
}

let intervalo;
btnIniciar.addEventListener("click",(e)=>{
  resultado.innerHTML='';
  test();
  intervalo= setInterval(test,1000*15);
})

btnTerminar.addEventListener("click",(e)=>{
  clearInterval(intervalo);
})


import * as util from './notification.js';