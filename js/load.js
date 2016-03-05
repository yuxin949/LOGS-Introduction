var Load = {
    init: function(){
        this.initEvent();
        Levy.init();
        Orange.init();
        Gin.init();
        Garin.init();
        Shonna.init();
    },
    initEvent: function(){
        //1000是ms,也可以用slow代替
        $('.nav-bar').on('click',function(e){
            var name = $(e.target).html();
            $("html,body").animate({
                scrollTop: $("#" + name).offset().top
            },500);
        });
    }

}


$(window).ready(function(){
    Load.init();
})
