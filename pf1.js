//背景変化
window.addEventListener("scroll",function(){
    let scroll = window.pageYOffset;

    if(scroll > 2400){
        document.body.style.background = "linear-gradient(to top, #09203f 0%, #7084a5 100%)";
    }else if(scroll > 1600){
        document.body.style.background = "linear-gradient(to top, #7084a5 30%, #ada6be 50%, #CED3F2 60%, #d4b0b5 80%, #3C4C59 100%)";
    }else{
        document.body.style.background = "linear-gradient(to top, #eadeb9 55%, #d0e4f3 75%, #569de1 90%, #2f65be 100%)";
    }
    // else{
    //     document.body.style.background = "linear-gradient(to top, #ebe1bd 30%, #88A5B7 70%, #528799 100%)"
    // }
});



// スクロールして画面内遷移
$(function(){
    $('#top-tag a[href^="#"]').click(function(){ //#top-tagで初期位置を制定
        var adjust = -70; //移動先位置の調整
        var speed = 400; //スクロール速度m秒
        var href= $(this).attr("href"); //リンク先を取得してhrefに代入
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + adjust;
        $('body,html').animate({scrollTop:position}, speed, 'linear');
        return false;
    });
});

//トップへ戻る
$(function(){
    $(window).scroll(function(){
        var TargetPos = 800;
        var ScrollPos = $(window).scrollTop();
        if(ScrollPos >= TargetPos){
            $("#top-button").fadeIn();
        }else{
            $("#top-button").fadeOut();
        }
    });
});






//skill背景デザイン
$(function(){
    $(window).scroll(function(){
        var TargetP1 = 2500;
        var ScrollP1 = $(window).scrollTop();
        if(ScrollP1 >= TargetP1){
            $(".p1").fadeIn(1000);
        }else{
            $(".p1").fadeOut(900);
        }
    });
});
$(function(){
    $(window).scroll(function(){
        var TargetP2 = 2500;
        var ScrollP2 = $(window).scrollTop();
        if(ScrollP2 >= TargetP2){
            $(".p2").fadeIn(1200);
        }else{
            $(".p2").fadeOut(1000);
        }
    });
});
$(function(){
    $(window).scroll(function(){
        var TargetP3 = 2500;
        var ScrollP3 = $(window).scrollTop();
        if(ScrollP3 >= TargetP3){
            $(".p3").fadeIn(1400);
        }else{
            $(".p3").fadeOut(1100);
        }
    });
});
$(function(){
    $(window).scroll(function(){
        var TargetP4 = 2500;
        var ScrollP4 = $(window).scrollTop();
        if(ScrollP4 >= TargetP4){
            $(".p4").fadeIn(1600);
        }else{
            $(".p4").fadeOut(600);
        }
    });
});
$(function(){
    $(window).scroll(function(){
        var TargetP5 = 2500;
        var ScrollP5 = $(window).scrollTop();
        if(ScrollP5 >= TargetP5){
            $(".p5").fadeIn(1800);
        }else{
            $(".p5").fadeOut(1500);
        }
    });
});
$(function(){
    $(window).scroll(function(){
        var TargetP6 = 2500;
        var ScrollP6 = $(window).scrollTop();
        if(ScrollP6 >= TargetP6){
            $(".p6").fadeIn(2000);
        }else{
            $(".p6").fadeOut(1000);
        }
    });
});
$(function(){
    $(window).scroll(function(){
        var TargetP7 = 2500;
        var ScrollP7 = $(window).scrollTop();
        if(ScrollP7 >= TargetP7){
            $(".p7").fadeIn(2200);
        }else{
            $(".p7").fadeOut(1300);
        }
    });
});
$(function(){
    $(window).scroll(function(){
        var TargetP8 = 2500;
        var ScrollP8 = $(window).scrollTop();
        if(ScrollP8 >= TargetP8){
            $(".p8").fadeIn(2400);
        }else{
            $(".p8").fadeOut(900);
        }
    });
});
$(function(){
    $(window).scroll(function(){
        var TargetP9 = 2500;
        var ScrollP9 = $(window).scrollTop();
        if(ScrollP9 >= TargetP9){
            $(".p9").fadeIn(2600);
        }else{
            $(".p9").fadeOut(1000);
        }
    });
});
$(function(){
    $(window).scroll(function(){
        var TargetP10 = 2500;
        var ScrollP10 = $(window).scrollTop();
        if(ScrollP10 >= TargetP10){
            $(".p10").fadeIn(2800);
        }else{
            $(".p10").fadeOut(500);
        }
    });
});
$(function(){
    $(window).scroll(function(){
        var TargetP11 = 2500;
        var ScrollP11 = $(window).scrollTop();
        if(ScrollP11 >= TargetP11){
            $(".p11").fadeIn(3000);
        }else{
            $(".p11").fadeOut(1100);
        }
    });
});
$(function(){
    $(window).scroll(function(){
        var TargetP12 = 2500;
        var ScrollP12 = $(window).scrollTop();
        if(ScrollP12 >= TargetP12){
            $(".p12").fadeIn(3200);
        }else{
            $(".p12").fadeOut(900);
        }
    });
});
$(function(){
    $(window).scroll(function(){
        var TargetP13 = 2500;
        var ScrollP13 = $(window).scrollTop();
        if(ScrollP13 >= TargetP13){
            $(".p13").fadeIn(3400);
        }else{
            $(".p13").fadeOut(800);
        }
    });
});


/* 下ラインの背景デザイン */
$(function(){
    $(window).scroll(function(){
        var TargetP14 = 2900;
        var ScrollP14 = $(window).scrollTop();
        if(ScrollP14 >= TargetP14){
            $(".p14").fadeIn(1000);
        }else{
            $(".p14").fadeOut(800);
        }
    });
});

$(function(){
    $(window).scroll(function(){
        var TargetP15 = 2900;
        var ScrollP15 = $(window).scrollTop();
        if(ScrollP15 >= TargetP15){
            $(".p15").fadeIn(1500);
        }else{
            $(".p15").fadeOut(800);
        }
    });
});

$(function(){
    $(window).scroll(function(){
        var TargetP16 = 2900;
        var ScrollP16 = $(window).scrollTop();
        if(ScrollP16 >= TargetP16){
            $(".p16").fadeIn(2000);
        }else{
            $(".p16").fadeOut(800);
        }
    });
});
$(function(){
    $(window).scroll(function(){
        var TargetP17 = 2900;
        var ScrollP17 = $(window).scrollTop();
        if(ScrollP17 >= TargetP17){
            $(".p17").fadeIn(2500);
        }else{
            $(".p17").fadeOut(800);
        }
    });
});

// 星表示

// $(function(){
//     $(window).scroll(function(){
//         var toProfile = 1000;
//         var toSkills = 2900;
//         var Scroll_star = $(window).scrollTop();
//         if(Scroll_star < toProfile){
//             $(".container-stars p").fadeIn(1000);
//         }else if(Scroll_star > toSkills){
//             $(".container-stars p").fadeIn(800);
//         }
//         else{
//             $(".container-stars p").fadeOut(800);
//         }
//     });
// });

$(function(){
    $(window).scroll(function(){
        var toProfile = 1000;
        var toSkills = 2500;
        var Scroll_star = $(window).scrollTop();
        if(Scroll_star > toProfile && Scroll_star < toSkills){
            $(".container-stars p").fadeOut(1000);
        }
        else{
            $(".container-stars p").fadeIn(800);
        }
    });
});
