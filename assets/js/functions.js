$(function($){
   
    
    
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