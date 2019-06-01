
  $(document).ready(function(){});

  /*----------------------------------------------------------------*/

  $("#mostrar").click(function(){
      getProductos();
      $("#mostrar").css({"display" : "none"});
  });

/*--------------------------------------------------------------*/

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
              +"<h2>"
              + pro.name+" - "+"$"+ pro.price
              +"</h2>"
              +"<br>"
              +"<div class='md'>"
              +"<img src="+pro.image+">"
              +"</div>"
              +"<br>"
              +"<div class='md'>"
              +"<p>" + "<strong>Descripción :</strong>" + "<br/><br/>"
              + pro.description
              +"</p>"
              +"</div>"
              +"</div>"
           );
         }
      },
      error : function(respuesta){
        alert("Error al encontrar y mostrar los productos");
      },
    });

  }

/*-----------------------------------------------------------------------*/

    window.onload =  function(){

    $.ajax({
      type : "GET",
      url : "https://mini-shop-rg.herokuapp.com/products",
      dataType : "json",

      success : function(resultado){
            var listaProductos = $('#ofertas');
            var collectionsProductos = resultado;

            for (var i = 0; i < collectionsProductos.length; i++) {

            var pro =  collectionsProductos[i]

            if (pro.price < 25.00) {
              listaProductos.append(
                "<div class='col-3'>"
                +"<h2>"
                + pro.name+" - "+"$"+ pro.price
                +"</h2>"
                +"<br>"
                +"<div class='md2'>"
                +"<img src="+pro.image+">"
                +"</div>"
                +"<br>"
                +"<div class='md2'>"
                +"<p>" + "<strong>Descripción :</strong>" + "<br/><br/>"
                + pro.description
                +"</p>"
                +"</div>"
                +"</div>"
             );
            }
        }

      },
      error : function(respuesta){
        alert("Error al encontrar y mostrar los productos en oferta");
      },
    });

  }
