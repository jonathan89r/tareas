
  $(document).ready(function(){});

  $("#mostrar").click(function(){
      getProductos();
  });

  function getProductos(){

    $.ajax({
      type : "GET",
      url : "https://mini-shop-rg.herokuapp.com/products",
      dataType : "json",

      success : function(resultado){
            var listaProductos = $('#lista-productos');
            var collectionsProductos = resultado;

            for (var i = 0; i < collectionsProductos.length; i++) {

            var pro =  collectionsProductos[i]

            listaProductos.append(
              "<div>"
              +"<p>"
              +"<h2>"
              + pro.name +"-" + pro.price
              +"</h2>"
              +"<br>"
              +"<div class='md'>"
              +"<img src="+pro.image+">"
              +"</div>"
              +"<br>"
              +"<div class='md'>"
              + pro.description
              +"</div>"
              +"</p>"
              +"</div>"
           );
         }
      },
      error : function(respuesta){
        alert("Error al encontrar y mostrar los productos");
      },
    });

  }
