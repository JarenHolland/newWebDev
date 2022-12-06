$("#productContainer").append("<tr><td></td><td></td><td></td><td></td></tr>");
$("#productContainer").append("<tr><td></td><td></td><td></td><td></td></tr>");
$("#productContainer").append("<tr><td></td><td></td><td></td><td></td></tr>");
$("#productContainer").append("<tr><td></td><td></td><td></td><td></td></tr>");

$("td").click(function(){
    if($(this).hasClass("darkMode")){
      $(this).removeClass("darkMode");
    }
    else{
        $(this).addClass("darkMode");
    }
  })