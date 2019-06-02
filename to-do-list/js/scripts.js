

$(document).ready(function(){

  //cuando se de click se hará uso de la funcion
  $("#boton").click(function(){
    ver();
    $("#text").val("");
  });

  //eliminar un elemento li del DOM
  $("ul").on("click", "img", function(event){
      $(this).parent().fadeOut(500, function(){
        $(this).remove(".li, #delete,.center");
      })
  });

  //eliminar todos los elementos del DOM
  $("#clean").on("click", function(){
    $(".li, #delete,.center").fadeOut(500, function(){
      $(".li, #delete,.center").remove();
    });
    $("#text").val("");
  });

});




//function para mostrar los datos en pantalla
function ver(){
  var text = $("#text").val();

  if (text.length > 0) {
    $("#show").append(
          "<center class='center'>"
         +"<li class='li' onClick='tachar(this);'>" +
          text +"<img src='images/delete.png'/>"
         +"</li>"
         + "</center>"
    )
  }
};

//function para tachar la tarea
function tachar(element){
  $(element).css("background", "rgb(4, 111, 149)");
}
