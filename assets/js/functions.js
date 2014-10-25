$(function($){
   
    window.onload = function(){
        fade("#test", 200);
    }
    
})(jQuery);

function fade(id, delay){
    if(!$(id).hasClass("fade")){
        $(id).addClass("fade");
    }
    
    if(delay && delay >0){
        window.setTimeout(function(){
            $(id).addClass("in");
        }, delay);
    } else {
        $(id).addClass("in");
    } 
}