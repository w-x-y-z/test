
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("https://w-x-y-z.github.io/test/sw.js")
    .then(function (registration) {
      console.log("Service Worker registrado correctamente");
    })
    .catch(function (error) {
      console.log("Error al registrar el Service Worker:", error);
    });
}
// Agregar evento de clic al botón
//document.getElementById('notifyButton').addEventListener('click', showNotification);
notifyButton.addEventListener("click", () => {
  debugger;
  simularNotificacionPush();
});
