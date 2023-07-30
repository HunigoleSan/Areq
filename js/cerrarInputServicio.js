
document.addEventListener("DOMContentLoaded", function () {
  const inputRadiosHtml = document.querySelectorAll('input[type="radio"]');
  let SERVICIO_LINKS_HTML = document.querySelectorAll('.servicios__links');
  console.log(SERVICIO_LINKS_HTML)
  const contenedorInputHtml = document.getElementById("input");
  const cerrarInputHtml = document.getElementById("cerrar");
  let controlDisplay = false;
  let pantallaWidth = 0;
  cerrarInputMobileRedimencionado();
  cerrarDisplay()
  function cerrarInputMobileRedimencionado() {
    pantallaWidth = window.innerWidth;
    
    if (controlDisplay === false) {
      controlDisplay =
        pantallaWidth <= 1050
          ? contenedorInputDisplayNone()
          : contenedorInputDisplayFlex();
      servicioDisplay();
    } else {
      controlDisplay =
        pantallaWidth >= 1051
          ? contenedorInputDisplayFlex()
          : console.log("No es mayor");
      console.log(controlDisplay);
    }
  }
  function contenedorInputDisplayNone() {
    contenedorInputHtml.style.display = "none";
    return true;
  }
  function contenedorInputDisplayFlex() {
    contenedorInputHtml.style.display = "flex";
    return false;
  }
  function debounce(func, delay) {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(func, delay);
    };
  }
  const debounceResize = debounce(cerrarInputMobileRedimencionado, 100);
  function servicioDisplay() {
    
    
    SERVICIO_LINKS_HTML.forEach(function (currentValue, index, array) {
      
      currentValue.addEventListener("click", function (e) {
        contenedorInputHtml.style.display = "flex";
      });
    });
  }
  function cerrarDisplay() { 
    cerrarInputHtml.addEventListener('click',function(){
        contenedorInputHtml.style.display = "none";
    })
  }
  window.addEventListener("resize", debounceResize);
});
