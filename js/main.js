//variables
let tratResCli
let horaResCli;
let nombreResCli;
let emailResCli ;
let telResCli ;
let fechaResCli ;
let notaResCli;
let ultiReserva;
let resButton;
let flagOptRes;
let menRes;
let ultiReservaLocal ;
let tratamientos;
const url = './js/data.json';
//Inicia carga de datos
/* Se dispara cuadno se carga la pagina*/
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  setCalendarProperties();
  //AGREGADO POR DESAFIO OPTIMIZANDO PRYECTO
  // Reservas en localstorage, si no hay nada asigna array vacio, OPERADOR LOGICO OR
  ultiRes = JSON.parse( localStorage.getItem('reservas') ) || [];
});

//Evento onclick en boton reservas
resButton = document.querySelector(".resButton");
resButton.onclick = ()=>{
  //AGREGADO POR DESAFIO OPTIMIZANDO PRYECTO
  //INTEGRANDO OPERADOR TERNARIO
  fechaResCli == undefined ? (fechaResCli = fechaResCliente(), mensajeReservas()) : mensajeReservas();
  
};  
