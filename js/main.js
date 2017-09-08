
//^funcion guardar datos
$('#guardar').click(function(){
    var nombre=document.getElementById('clave').value;
    var comentario=document.getElementById('valor').value;
    localStorage.setItem(nombre,comentario);

    limpiar();
    recoverData();

});

//funcion limpiar datos
function limpiar(){
    document.getElementById('clave').value="";
    document.getElementById('valor').value="";
}
// Funcion limpiar lista
$('#limpiar').click(function(){
  	$("#comentario").empty();
      localStorage.clear();

});

// Funcion recuperar data
function recoverData(){
     for(var i=0; i<localStorage.length;i++){
      var clave=localStorage.key(i);
      var value=localStorage.getItem(clave);
     $("#comentario").append('<div><p>'+clave+ '<p>'+value+'</p>'+'</div>');

  }
}

// me carga el contenido de la pagina
$(document).ready(function(){
   recoverData ();
});
