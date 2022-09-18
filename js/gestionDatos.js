//AGREGADO PARA DESAFIO FETCH
function loadData (){
  fetch(url)
  .then(respuesta => respuesta.json())
  .then( resultado => {
    tratamientos = resultado.tratamientos;
    horas = resultado.horas;
    })
  .then (() =>cargarTratamientos( tratamientos ))  
  .then (() =>cargarHorarios( horas ))  
};

//muestra o esconde y marca activas o desactiva cabezales de menu reservas
function hide_show(esconder, mostrar, next){
  document.getElementById(esconder).style.display = "none";
  document.getElementById(mostrar).style.display = "block";
  reslinks = document.getElementsByClassName("restabLinks");
  res1 = document.querySelector("#res1");
  res2 = document.querySelector("#res2");
  res3 = document.querySelector("#res3");
  res4 = document.querySelector("#res4");
  if(next){
    if (res1.className =='restabLinks'){      
      cambioClase(res1, " active");
      ocultoMobile(reservStep1, res1);
    }else if (res2.className =='restabLinks'){
      cambioClase(res2, " active");
      ocultoMobile(reservStep2,res2, res1 );
      }else if(res3.className =='restabLinks'){        
        cambioClase(res3, " active");
        ocultoMobile(reservStep3,res3, res2);
      }
  }else{
    //Esto lo prodia mejorar integrando a la funcion de ocultar, pero por tiempos lo deje asi por ahora.
    var Link =document.getElementById(esconder).id;
    if (Link=='reservStep2'){
      res2.className =res2.className.replace(" active", "");
      //
      if (screen.width <=767) {
      res1.style.display = "block";
      res2.style.display= "none";
      };
    }else if(Link=='reservStep3'){      
      res3.className =res3.className.replace(" active", "");
       if (screen.width <=767) {
        res2.style.display = "block"
        res3.style.display= "none"
      
      };
    };
  };
};

function cambioClase(ele, clase) {
  ele.className = ele.className += clase;
};
function ocultoMobile(buttonContainer, button, buttonPrev){
  if (screen.width <=767) {
    if(buttonContainer.style.display = "block"){
      button.style.display = "block";
      buttonPrev.style.display= "none"
    }
  }else if (screen.width > 767){
    button.style.display = "block";
      buttonPrev.style.display= "block"
  }
};


//Funcion para cambio de solapas con detalle de tratamientos
function openTab(evt, tabText) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabDatos");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tabLinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabText).style.display = "block";
  evt.currentTarget.className += " active";
};

function cargarTratamientos( tratamientos ) {          
  const divTrat    = document.querySelector('#divTrat');
  divTrat.innerHTML = '';
  tratamientos.forEach( (tratamientos) => {

      let trat = document.createElement('div');
      trat.classList.add('col-md-4');
      divTrat.appendChild( trat );
      trat.innerHTML = `<div id="t${tratamientos.id}" class="cell py-1 tratRes">${tratamientos.nombre}</div>`;        

  } );  
  //Captura tratamiento seleccionado por cliente
  $('.tratRes').click(function(){
    $('.tratRes').removeClass('select');
    $(this).addClass('select');
    //Guardo valor de div seleccionado, tomando como valor si contenido texto
    tratResCli = document.getElementById(this.id).innerHTML;
  });
};


//Carga datos dinamicos de Horarios
function cargarHorarios( horas ) {          
  const divHoras    = document.querySelector('#divHoras');
  divHoras.innerHTML = '';
  horas.forEach( (horas) => {

      let hora = document.createElement('div');
      hora.classList.add('col-md-4');
      divHoras.appendChild( hora );      
      hora.innerHTML = `<div id="h${horas.id}" class="cell py-1 horaRes">${horas.hora}</div>`;        

  } );
    //Captura hora seleccionada por cliente
  $('.horaRes').click(function(){
  $('.horaRes').removeClass('select');
  $(this).addClass('select');
  //Guardo valor de div seleccionado, tomando como valor si contenido texto
  horaResCli = document.getElementById(this.id).innerHTML;
  });  
};

//Captura fecha seleccionada por el cliente
let pickFecha = document.querySelector("#dp1");
function fechaResCliente (){
  if(pickFecha.value != "" && pickFecha.value!= undefined){
    fechaResCli = pickFecha.value;
    return fechaResCli;
  }
};

/*** FUNCIONES DATEPICKER ***/
function setCalendarProperties(){
  $('.datepicker').datepicker({
    language: "es",
    format: 'dd/mm/yyyy',
    autoclose: true,
    startDate: '0d',
    days:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],
    daysShort:["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"],
    daysMin:["Do","Lu","Ma","Mi","Ju","Vi","Sa"],
    months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
    monthsShort:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],
    today:"Hoy",
    monthsTitle:"Meses",
    clear:"Borrar",
    weekStart:1

  });   
};
/*** FIN FUNCIONES DATEPICKER ***/