document.addEventListener("DOMContentLoaded", function () {
  const inputRadiosHtml = document.querySelectorAll('input[type="radio"]');
  const contenedorInputHtml = document.getElementById("input");
  const cerrarInputHtml = document.getElementById("cerrar");
  /* const boxHtml = document.querySelectorAll('box') */
  let controlDisplay = false;
  let pantallaWidth = 0;
/*   servicioDisplay(); */
  cerrarInputMobileRedimencionado();
  cerrarDisplay()
  function cerrarInputMobileRedimencionado() {
    pantallaWidth = window.innerWidth;
    
    if (controlDisplay === false) {
      controlDisplay =
        pantallaWidth <= 1050
          ? contenedorInputDisplayNone()
          : contenedorInputDisplayFlex();
      /* console.log("se ejecuta unva vez: se cierra input"); */
      servicioDisplay();
      console.log(pantallaWidth <= 1050);
      console.log(controlDisplay);
    } else {
      /* console.log("se ejecuta unva vez: se abre input"); */
      
      controlDisplay =
        pantallaWidth >= 1051
          ? contenedorInputDisplayFlex()
          : console.log("No es mayor");
      console.log(controlDisplay);
    }
  }

  function contenedorInputDisplayNone() {
    console.log("Es menor que 1050 pixeles")
    contenedorInputHtml.style.display = "none";
    return true;
  }
  function contenedorInputDisplayFlex() {
    contenedorInputHtml.style.display = "flex";
    /* controlDisplay = false */
    console.log("aqui debe convertirse a false: ", controlDisplay);
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
    inputRadiosHtml.forEach(function (currentValue, index, array) {
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
