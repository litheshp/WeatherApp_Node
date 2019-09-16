
$(document).ready(function() {
    
        $(".menu-bar").on("click",function(){
           if($(".sidebar").css("width")=="75px"){
               $(".sidebar").animate({width:"0",speed:"fast"});
               $('[canvas="content"]').css("width","100%");
               $('[canvas="content"]').animate({"margin-left": "0", speed: "fast"});
               $('.footer').animate({"margin-left": "0", speed: "fast"});
           }
           else{
            $('[canvas="content"]').css("width","calc(100% - 75px)");
            $(".sidebar").animate({width:"75px",speed:"fast"});
            $('[canvas="content"]').animate({"margin-left": "75px", speed: "fast"});
            $('.footer').animate({"margin-left": "75px", speed: "fast"});
           
           }
       });
       $(".user").on("click",function(){
           if($(".userProfile").css("height")=="218px"){
               $(".userProfile").animate({height:"0",speed:"fast"});
               $(".userProfile").css("border","0");
               $(".user img").css("border","2px solid #f1f1f1");
               $(".userProfile").css("box-shadow","0px 0px 0px 0px");
               
           }
           else{
            $(".userProfile").animate({height:"218px",speed:"fast"});
            $(".userProfile").css("border","1px solid #ccc");
            $(".user img").css("border","2px solid #c1c1c1");
            $(".userProfile").css("box-shadow","0px 4px 8px 4px rgba(0, 0, 0, 0.2)");
           }
       });
});
$(document).click(function(){
       if($(".sidebar").css("width")=="75px"){
        $(".sidebar").animate({width:"0",speed:"fast"});
        $('[canvas="content"]').css("width","100%");
        $('[canvas="content"]').animate({"margin-left": "0", speed: "fast"});
        $('.footer').animate({"margin-left": "0", speed: "fast"});
        }
        if($(".userProfile").css("height")=="218px"){
            $(".userProfile").animate({height:"0",speed:"fast"});
            $(".userProfile").css("border","0");
            $(".user img").css("border","2px solid #f1f1f1");
            $(".userProfile").css("box-shadow","0px 0px 0px 0px");
        }

});