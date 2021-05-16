
$(function() {
	$('.mainHeader').find('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.owl-dots').css('display','none')
//// Кнопки слайдера
$('.owl-next').css('width', '45px')
$('.owl-next').css('border-radius', '100px')
$('.owl-next').css('height', '45px')
$('.owl-next').css('margin-top', '-10px')
// $('.owl-next').css('background', '#fff')
$('.owl-next').css('margin-bottom', '25px')
$('.owl-next').css('margin-left', '20px')
$('.owl-next').css('background-image', 'url(assets/images/arrowr.png)')
//
$('.owl-prev').css('width', '45px')
$('.owl-prev').css('border-radius', '100px')
$('.owl-prev').css('height', '45px')
$('.owl-prev').css('margin-top', '-10px')
// $('.owl-prev').css('background', '#fff')
$('.owl-prev').css('margin-bottom', '29px')
$('.owl-prev').css('background-image', 'url(assets/images/arrowl.png)')
//
$('.owl-nav').css('text-align','end')
$('.owl-nav').css('margin-top','-64px')
$('.owl-nav').css('position', 'relative')
$('.owl-nav').css('padding-right', '100px')
////
var winHeight = $(window).height()
var res = winHeight - 130
$('.slider__photo').css('height',res+'px')
$('.slider__photo').css('object-fit','cover')
$('.slider__photo').css('object-position','center')


// function createSticky(sticky) {
	
// 	if (typeof sticky !== "undefined") {

// 		var	pos = sticky.offset().top,
// 				win = $(window);
			
// 		win.on("scroll", function() {
//     		if(win.scrollTop() >= pos ) {
//     			sticky.addClass("fixed");
//     			sticky.removeClass("rel");
//     		} 
//     		else
//     			{ sticky.removeClass("fixed");
//     			sticky.addClass("rel");}  
// 		});			
// 	}
// };

////
$(window).scroll(function() {
var height = $(window).scrollTop();
var heightPost = $('.polos').scrollTop();
    if(height > winHeight-500){
    $('.listh2').addClass('animate__fadeInLeft');
    }

     if(height > winHeight-500){
    $('.gal').addClass('animate__fadeInRight');
    }

    if(height > winHeight+150){
    $('.post').addClass('animate__fadeInUpBig');
    }


});
////
$('.litGal').find('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1100:{
            items:3
        },

        1300:{
            items:4
        }
    }
});

$('.bar').mouseenter(function(){
    $('.bar').addClass('animate__headShake');
},function(){
    $('.bar').removeClass('animate__headShake')
})

$('.owl-next span').remove()
$('.owl-prev span').remove()

$('.block').click(function (){
    window.location.href = "ivent.html";
})

$('.post').click(function (){
    window.location.href = "news_page.html";
})

$('.content').find('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1100:{
            items:3
        },

    }
});
$('.owl-dots').css('display','none')

jQuery('td').each(function(i,elem){
  if($(this).html() === ''){
    $(this).css('background','white')
  };
})
$('.news_pagePhoto').css('object-position','top')

$('td').css({
    'border-style':'none',
   'border-color': 'white',
})

$('tr').css('border-bottom-width','0px')

var cost = 0
$('td').click(function(){
    if ($(this).hasClass('chose'))
        $(this).removeClass('chose');
    else{
       $(this).addClass('chose');
    }
})

$('td').click(function(){
    if ($(this).hasClass('chose'))
        cost++
    else{
       cost=cost-1
    }
})

date = ''

$('.but').click(function(){
    if ($(this).hasClass('but_active'))
        $(this).removeClass('but_active');
    else{
        $(this).addClass('but_active');
       if ($('.first').hasClass('but_active')){
        $('.second').removeClass('but_active')
        date  = $('.first').html()
       }
       $(this).addClass('but_active');
       if ($('.second').hasClass('but_active')){
        $('.first').removeClass('but_active')
        date = $('.second').html()
       }
    }
})

$('.btn_buy_bil').click(function(){
    $('.costtext').text('Стоимость билетов : ' + cost*350 + ' руб.');
    $('.costdate').text('Дата и время : ' + date )

})


})
