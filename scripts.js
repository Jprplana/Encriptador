const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

const botonCopiar = document.querySelector(".btnCopiar");
botonCopiar.style.display = "none";

const botonBorrar = document.querySelector(".borrar");
botonBorrar.style.display = "none";

mostrarImagen();

//ENCRIPTAR

function btnEncriptar() {
  const textoEncriptado = encriptar(inputTexto.value);
  mensaje.value = textoEncriptado;

  const rectangulo = document.querySelector(".rectangulo");
  rectangulo.classList.add("destello");
  
}

function encriptar(stringEncriptada) {
  matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }

  return stringEncriptada;
}

//DESENCRIPTAR
function btnDesencriptar() {
  const textoDesencriptado = desencriptar(inputTexto.value);
  mensaje.value = textoDesencriptado;

  const rectangulo = document.querySelector(".rectangulo");
  rectangulo.classList.add("destello");
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }

  return stringDesencriptada;
}

//COPIAR
function copiar() {
  let copyText = document.getElementById("txt-encriptado");
  copyText.select();
  navigator.clipboard.writeText(copyText.value).then(() => {
  alert("Texto copiado al Clipboard");
})
}

//BORRAR
function borrarTexto() {
  document.getElementById("input-texto").value = "";
  document.getElementById("txt-encriptado").value = "";
}

//OCULTAR/MOSTRAR IMAGENES Y BOTONES
function mostrarImagen() {
  const inputText = document.getElementById("input-texto").value;
  const msjPrevio = document.querySelector(".mensaje_previo");
  const botonBorrar = document.querySelector(".borrar");
  const rectangulo = document.querySelector(".rectangulo");
  

  if (inputText == "") {
    msjPrevio.style.display = "block";
    botonBorrar.style.display = "none";
    rectangulo.classList.remove("destello");
  } else {
    msjPrevio.style.display = "none";
    botonBorrar.style.display = "block";
  }
}

function mostrarCopiar() {
  const botonCopiar = document.querySelector(".btnCopiar");
  botonCopiar.style.display = "block";
}

function mostrarBorrar() {
  const botonBorrar = document.querySelector(".borrar");
  botonBorrar.style.display = "block";
}

function ocultarCopiar() {
  const botonCopiar = document.querySelector(".btnCopiar");
  botonCopiar.style.display = "none";
}