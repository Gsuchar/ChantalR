//array
let reservas = new Array();

//clases 
class Reserva{
  constructor(tratamiento, fecha, hora, nombre, email, tel, notas){
    this.tratamiento = tratamiento;
    this.fecha = fecha;
    this.hora = hora;
    this.nombre = nombre;
    this.email = email;
    this.tel = tel;
    this.notas = notas;
  }
};

//Funciones
function nuevaReserva(){
  reservas.push(new Reserva(tratResCli, fechaResCli, horaResCli, nombreResCli, emailResCli, telResCli, notaResCli));
};

function mensajeReservas(){
  //FORMULARIO DATOS
  let nombreRes = document.querySelector("#resv_form_nombre");
  let emailRes = document.querySelector("#resv_form_email");
  let telRes = document.querySelector("#resv_form_tel");
  let notasRes = document.querySelector("#resv_form_men");
  let fechaResCli2;
  nombreResCli = nombreRes.value;
  emailResCli = emailRes.value;
  telResCli = telRes.value ;
  notaResCli = notasRes.value;
  //parche momentaño porque si agrego mas de una reserva sin refrescar para sumar al array me guarda con la misma fecha del anterior
  fechaResCli = fechaResCliente();
  if (tratResCli!='' && fechaResCli!='' && horaResCli!='' && nombreResCli!='' && emailResCli!='' && telResCli!='' &&
    tratResCli!=undefined && fechaResCli!=undefined && horaResCli!=undefined && nombreResCli!=undefined && emailResCli!=undefined && telResCli!=undefined){
    //meti este parche asqueroso por temas de tiempo, se me perdia en undefined la fecha tomada dle datepicker
    fechaResCli2= fechaResCli;
    //AGREGADO POR DESAFIO INTEGRANDO LIBRERIAS
    swal({
      title: "¿Estan correctos los datos?",
      text: "Usted solicito la reserva con los siguientes datos: "+ "\n" +"Tratamiento: " + tratResCli+"\n"   + "Fecha: " + fechaResCli+"\n" +
      "Hora: " + horaResCli+"\n" + "Nombre: "+nombreResCli + "\n" + "Email: "+ emailResCli+"\n" + "Tel: "+ telResCli+"\n" + "Notas: "+ notaResCli, 
      icon: "info",
      buttons: true,
    })
    .then((confirmCliDatos) => {
      if (confirmCliDatos) {
        swal("Listo, confirmaste tu Reserva!", {
          icon: "success"          
        });
        fechaResCli= fechaResCli2;
        nuevaReserva();
        hide_show('reservStep3', 'reservStep4', true);       
        ultiReserva = (reservas) => { 
          ultiReserva = reservas[reservas.length-1];        
        };   
        ultiReserva(reservas);
        mensajeReservaExitosa();
      } 
    });

  }else{
    swal({
      title: "Faltan datos por completar",
      text: "Por favor revisar que se seleccionaran y completaran todos los datos requeridos.", 
      icon: "error",
      dangerMode: true,
    });
  }
};

function mensajeReservaExitosa(){
 //AGREGADO POR DESAFIO OPTIMIZANDO PRYECTO
  //Desestructuro objeto ultiReserva
  const {tratamiento, fecha, hora, nombre, email, tel, notas} = ultiReserva;  
  const mensajeReserva = document.getElementById('mensajeReserva_container');//Tomo id contenedor de mensaje  
  const menResDiv = document.createElement("div");  
  mensajeReserva.append(menResDiv);
  menResDiv.innerText = "Tratamiento: " + tratamiento +"\n" + "Fecha: " + fecha +"\n" +
  "Hora: " + hora +"\n" + "Nombre: "+nombre  + "\n" + "Email: "+ email +"\n" + "Tel: "+ tel +"\n" + "Notas: "+ notas +"\n" ;
  //Guardo reserva en localstorage
  localStorage.setItem("reserva", JSON.stringify(ultiReserva));
   /* PONGO UN console.log PARA MOSTRAR COMO SE GRABO EN LOCALSTORAGE, SOLO PARA FACILITAR CORRECION...NO QUEDARA EN SITIO FINAL*/  
  ultiReservaLocal = JSON.parse(localStorage.getItem("reserva"));
    console.log(ultiReservaLocal);
  //Detalle estetico al finalizar la reserva queden todas las opciones marcadas
  res4.className =res4.className.replace("", "active ");
  if (screen.width <=767) {    
      res1.style.display = "none";
      res2.style.display = "none";
      res3.style.display = "none";      
    };
 
};
