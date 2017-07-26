$(document).ready(function(){

     $(".video_gallery_area").fitVids();    

     $(".second").click(function(){
        $(".aplus_result").hide();
        $(".agread").show();
        $(".a_gread").hide();
    });


     $(".first").click(function(){
        $(".aplus_result").show();
        $(".agread").hide();
        $(".a_gread").hide();
    });


     $(".third").click(function(){
        $(".aplus_result").hide();
        $(".agread").hide();
        $(".a_gread").show();
    });

     

    
    $(".button_two ").click(function(){
        $(".result_second").animate({left:"0%"},1000);
        $(".result").animate({top:"-9999px"},2000);
        $(".result_third").animate({top:"-9999px"},2000);
        $(".result_fourth").animate({left:"-9999px"},2000);
       
    });
    
    $(".button_one ").click(function(){
        $(".result_second").animate({left:"-9999px"},2000);
        $(".result").animate({top:"24%"},1000);
        $(".result_third").animate({top:"-9999px"},1000);
        $(".result_fourth").animate({left:"-9999px"},1000);
        
    });
    
    $(".button_three ").click(function(){
        $(".result_second").animate({left:"-9999px"},2000);
        $(".result").animate({top:"-9999px"},1000);
        $(".result_third").animate({top:"50%"},1000);
        $(".result_fourth").animate({left:"-9999px"},1000);
        
    });
    
    $(".button_four ").click(function(){
        $(".result_second").animate({left:"-9999px"},2000);
        $(".result").animate({top:"-9999px"},1000);
        $(".result_third").animate({top:"-9999px"},1000);
        $(".result_fourth").animate({left:"0%"},1000);
        
    });



    
    
    $("#slider").nivoSlider();
    
    
    $(".navigation").slicknav();
    
    
    $(".navbar-toggle").click(function(){
        $("body").addClass("activator");
    });
    
    
    $(".album_list").owlCarousel({
       
        items : 4,
        itemsDesktop : [1000,4],
        pagination: false,
        navigation:true,
        navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        autoPlay:true
 
    });
    

    
    
    $(".image_1").click(function(){
        
        $(".full_image_one").show(1000);
        $(".row.one_row").hide(1000);
        $(".row.row_two").hide(1000);
    });
    
    $(".button a i ").click(function(){
        
        $(".full_image_one").hide(1000);
        $(".row.one_row").show(1000);
        $(".row.row_two").show(1000);
    });
    
    $(".image_2").click(function(){
        
        $(".full_image_two").show(1000);
        $(".row.one_row").hide(1000);
        $(".row.row_two").hide(1000);
    });
    
    $(".button a i ").click(function(){
        
        $(".full_image_two").hide(1000);
        $(".row.one_row").show(1000);
        $(".row.row_two").show(1000);
    });
    
    

   
    
    
});