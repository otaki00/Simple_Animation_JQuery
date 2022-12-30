// we build application with jqeuery
// we will make the website 
// 1- when open make a load line then when it finish
// display the elements in order
$("#home").animate({width:'100%'},3000).animate({height:'60vh'},3000,function(){
    $("h1").fadeIn(3000,function(){
        $(".div1").slideDown(3000,function(){
            $(".div2").slideDown(3000,function(){
                $(".div3").slideDown(3000)
            })
        })
    })
});
