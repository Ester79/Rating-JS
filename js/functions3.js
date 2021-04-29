


$(document).ready(function(){
    $("#estrella5").mouseover(function(){
        $("#estrella5, #estrella4, #estrella3, #estrella2, #estrella1").addClass("changecolor");
    $("#estrella5").mouseout(function(){
        $("#estrella5, #estrella4, #estrella3, #estrella2, #estrella1").removeClass("changecolor");
    });
    });

    $("#estrella4").mouseover(function(){
        $("#estrella4, #estrella3, #estrella2, #estrella1").addClass("changecolor");
    $("#estrella4").mouseout(function(){
        $("#estrella4, #estrella3, #estrella2, #estrella1").removeClass("changecolor");
    });
    });

    $("#estrella3").mouseover(function(){
        $("#estrella3, #estrella2, #estrella1").addClass("changecolor");
    $("#estrella3").mouseout(function(){
        $("#estrella3, #estrella2, #estrella1").removeClass("changecolor");
    });
    });

    $("#estrella2").mouseover(function(){
        $("#estrella2, #estrella1").addClass("changecolor");
    $("#estrella2").mouseout(function(){
        $("#estrella2, #estrella1").removeClass("changecolor");
    });
    });

    $("#estrella1").mouseover(function(){
        $("#estrella1").addClass("changecolor");
    $("#estrella1").mouseout(function(){
        $("#estrella1").removeClass("changecolor");
    });
    });
});
  

