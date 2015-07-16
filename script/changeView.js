/**
 * Created by yyc on 2015/7/15.
 */

/*


window.addEventListener('scroll',function(e){
    var scrollTop = window.scrollY;
     if(scrollTop > 0 && scrollTop < articleHeight){
        title1.classList.add('title-anim');
        content1.classList.add('content-anim');
    }else if(scrollTop >= articleHeight && scrollTop < articleHeight*2){
        title2.classList.add('title-anim');
        content2.classList.add('content-anim');
    }else if(scrollTop >= articleHeight*2 && scrollTop < articleHeight*3){
        title3.classList.add('title-anim2');
        content3.classList.add('content-anim');
    }
})


    */

//alert(1);
$(document).ready(function() {


    window.addEventListener('scroll', function (e) {

        var scrollTop = window.scrollY;

        if (scrollTop > 800 && scrollTop < 1600) {
            //alert("1");
            $("#fourMembers").addClass("title-anim");
           // 等一下 要把 这个 有 层次 的视差滚动加上.....
              //


        }


    });



})