
// var images = [

//     "https://pbs.twimg.com/media/EaUCSPLUMAEPiIf.jpg",
//     "https://i.ytimg.com/vi/aAE02ZN3T9g/maxresdefault.jpg",
//     "https://qph.fs.quoracdn.net/main-qimg-df1c7310a2024cd4e71c17ebc4cef19f.webp"

//   ]

//   var imageHead = document.getElementById("tc");
//   var i = 0;
// setInterval(function() {
//       imageHead.style.backgroundImage = "url(" + images[i] + ")";
//       imageHead.style.opacity="0.9";
//       imageHead.style.transitionDuration="1s"
//       imageHead.style.backgroundRepeat="no-repeat"
//       imageHead.style.position="relative";
//       imageHead.style.backgroundAttachment="fixed";
//       imageHead.style.minHeight="50vh"
//       imageHead.style.backgroundSize="cover";

//       i = i + 1;
//       if (i == images.length) {
//         i =  0;
//       }
// }, 2000);



$(window).scroll(function(){
  var height = $(window).scrollTop();
  if ( height > 0 ) {
    $('.navbar-sticky').addClass('visible');
  } else {
    $('.navbar-sticky').removeClass('visible');
  }
  if (height > 260) {
    $('.gotop').fadeIn();
  }else {
    $('.gotop').fadeOut();
    }
 });


$('.navbar-collapse .nav-link:not(.dropdown-toggle)').click(function () {
  $('#collapsibleNavbar').collapse('hide');
});

$('.navbar-cross').click(function () {
  $('#collapsibleNavbar')[0].style.width = "0";
});

$('#collapsibleNavbar').on('hidden.bs.collapse', function () {
  $('#collapsibleNavbar')[0].style.removeProperty('width');
});
