let items = $(".navItem")

$(items).each(function(){
    $(this).css("color","white")
  })
    
$("#nav").css("background-color","#145")

let itemList = $("li")

for(i = 0; i < itemList.length; i = i+2){
    $(itemList[i]).css("background-color","#ccc")
}

for(i = 1; i < itemList.length; i = i+2){
    $(itemList[i]).css("background-color","#aaa")
}

$("input").val("Jaren")