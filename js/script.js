// mobile menu
function openNav(){
    document.getElementById("sidenav").style.width="50%";
}
function closeNav(){
    document.getElementById("sidenav").style.width="0";
}

$(document).ready(function(){
    // SLIDER
    $(".check-btn1").css("background","#bf2222");
    $(".check-btn1").click(function(){
        $(".change-slider1").show(800);
        $(".change-slider2").hide(800);
        $(".change-slider3").hide(800);
        $(".check-btn1").css("background","#bf2222");
        $(".check-btn2").css("background","#dcdcdc");
        $(".check-btn3").css("background","#dcdcdc");

    });

    $(".change-slider2").hide();
    $(".check-btn2").click(function(){
        $(".change-slider2").show(800);
        $(".change-slider1").hide(800);
        $(".change-slider3").hide(800);
        $(".check-btn2").css("background","#bf2222");
        $(".check-btn1").css("background","#dcdcdc");
        $(".check-btn3").css("background","#dcdcdc");
    });

    $(".change-slider3").hide();
    $(".check-btn3").click(function(){
        $(".change-slider3").show(800);
        $(".change-slider1").hide(800);
        $(".change-slider2").hide(800);
        $(".check-btn3").css("background","#bf2222");
        $(".check-btn1").css("background","#dcdcdc");
        $(".check-btn2").css("background","#dcdcdc");
    });
    // form button
    $(".form-btn").click(function(){
        $(this).css("background","#981b1b");
    });

    // Safari smoth scroll
    $("a").on("click", function(event){
        if(this.hash !== ""){
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top
                },200,
                function(){
                    window.location.hash = hash;
                }
            );
        }
    });

    // stikey menu
    // Stikey menu class
    $(".js-stikey-menu").waypoint(function(derection){
        if(derection == "down"){
            $(".navigation").addClass("stikey");
        }else{
            $(".navigation").removeClass("stikey");
        };
    })

});