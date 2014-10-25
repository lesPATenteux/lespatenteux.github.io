$(function($){
   
    $("#_who").on("click", function(){
        alert("Ce contenu n'est pas disponible pour le moment. Merci de revenir plus tard");
    })
    
})(jQuery);

function fade(id, delay){    
    if(delay && delay >0){
        window.setTimeout(function(){
            $(id).addClass("in");
        }, delay);
    } else {
        $(id).addClass("in");
    } 
}