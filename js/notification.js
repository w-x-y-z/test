//validar permisos
//camera|microphone|geolocation|notifications|push|midi|clipboard-read|clipboard-write|background-sync|persistent-storage|payment-handler|fullscreen|accelerometer|gyroscope|magnetometer|ambient-light-sensor
const getPermissionBrowser = async (permissionName = "notifications") => {
  try {
    const permission = await navigator.permissions.query({
      name: permissionName,
      userVisibleOnly: true,
    });
    const result = {
      state: permission.state,
      message: `Ok ${permission.name}`,
    };

    //Cuando el usuario cambia los permisos de solicitados antes
    permission.onchange = (e) => {
      console.log(`Se cambio los permisos solicitados`);
      result.state = permission.state;
      result.message = `Ok ${permission.name}`;
    };
    return result;
  } catch (error) {
    return {
      state: "error",
      message: `ERROR: ${error}`,
    };
  }
};

const pedirPermisoNotificacion = async () => {
  let getPermiso = await getPermissionBrowser("notifications");
  if (getPermiso.state !== "granted") {
    try {
      //solicitar permisos de notificación
      let notificacion = await Notification.requestPermission();
      //console.log(getPermiso, notificacion);
    } catch (error) {
      console.log(error, getPermiso);
    }
  }
  return getPermiso;
};


let setNotificacion = (_title, _boby) => {
  pedirPermisoNotificacion()
  .then(e=>{
    if(e.state =='granted'){
      navigator.serviceWorker.ready.then((e) => {
        const options = {
          body: _boby,
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          icon: "./assets/icons/binance.png",
        };
        e.showNotification(_title, options);
      });
    }
  })
};
export {setNotificacion }