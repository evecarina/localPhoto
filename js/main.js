
//^funcion guardar datos
$('#guardar').click(function(){
localStorage.nombre=document.getElementById('clave').value;
localStorage.comentario=document.getElementById('valor').value;

mostrarDatos();

limpiar();
});

//funcion mostrar datos
function mostrarDatos(){
 var nombre= localStorage.nombre;
 var comentario=localStorage.comentario;
// var texto= document.createTextNode(localStorage.comentario)
 $("#comentario").append("<div><p>"+ nombre+"</p>"+'<p>'+comentario+'</p></div>');

}

//funcion limpiar datos
function limpiar(){
document.getElementById('clave').value="";
document.getElementById('valor').value="";
}
// Funcion limpiar lista
$('#limpiar').click(function(){
	$("#comentario").empty();

});

// Funcion recuperar data

function recoverData(){
for (i=0;i<localStorage.length;i++) { //bucle para recorrer todos los datos
  var nombre=localStorage.key(i); //obtener la clave del dato
   var comentario=localStorage.getItem(nombre); //obtener el valor del dato

  $("#comentario").append("<div><p>"+nombre+"</p><p>"+comentario+'</p></div>');

   // var comentario=localStorage.key(i); //obtener la clave del dato
   // var comentario=localStorage.getItem(comentario);
   //   $("#comentario").append("<div><p>"+nombre+"</p><p>"+comentario+'</p></div>');


  }

}


// Cargar primero todo el contenido de la lista
$(document).ready(function(){
    // $("button").click(function(){
    //     $("p").slideToggle();
    // });
   recoverData ();
});