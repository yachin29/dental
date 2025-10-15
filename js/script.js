




//ハンバーガー

$('#ham-btn').on('touchstart ',function(){
$(this).toggleClass('click');

$('#g-nav-sp').fadeToggle();

});

var windowWidth = $(window).width();

$(window).on('load resize', function(){
  var ww = $(window).width();
  if(windowWidth != ww) {
    if($(window).outerWidth() < 768 ){
    //スマホの時の状態
    $('#g-nav-sp').hide();
  }else{
    //タブレット・PCの時の状態
    $('#ham-btn').removeClass('click');
  };
   windowWidth = ww;
  };
});



thisYear = new Date().getFullYear();
document.querySelector('#thisYear').textContent = thisYear;


$(window).on('load resize', function(){
if(window.matchMedia('(min-width:768px)').matches){

$('.bxslider').bxSlider({
auto:true,
mode:'fade',
pager:false,
controls:false
});
}
});
