

$(document).ready(function(){

  //cuando se de click se hará uso de la funcion
  $("#boton").click(function(){
    ver();
    $("#text").val("");
  });

});

//function para mostrar los datos en pantalla
function ver(){
  var text = $("#text").val();

  if (text.length > 0) {
    $("#show").append(
         "<br class='br'>"
         + "<center class='center'>"
         +"<li class='li' onClick='tachar(this);'>" +
          text
         +"</li>"
         +"<button id='delete' onClick='eliminar(this);'>X</button> "
         + "</center>"
    )
  }
};


//eliminar un elemento li del DOM
function eliminar(element){
  $(element).remove();
};

//eliminar todos los elementos del DOM
function eliminarTodo(){
  var items = $(".li, #delete, .br,.center");
  $(items).remove();
  $("#text").val("");
};

//function para tachar la tarea
function tachar(element){
  $(element).css("background", "rgb(4, 111, 149)");
}
