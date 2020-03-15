/* 
 * Toggles menu icon into an x and show/hides menu items 
 */
function toggleMenuIcon(x) {
   x.classList.toggle("change");
   document.getElementById("menu").classList.toggle("show");
}

/* 
 * Show icons if at the top of the page or bottom else fade out
 */
$(window).scroll(function () {
   if ($(this).scrollTop() > 0) {
      $('.icons').fadeOut();
   } else {
      $('.icons').fadeIn();
   }
});

/*
 * Scroll to top of page
 */
$(document).ready(function () {
   $(window).scroll(function () {
      var top = $(".goto-top");
      if ($('body').height() <= ($(window).height() + $(window).scrollTop() + 200)) {
         top.animate({ "margin-left": "0px" }, 1500);
      } else {
         top.animate({ "margin-left": "-100%" }, 1500);
      }
   });

   $(".goto-top").on('click', function () {
      $("html, body").animate({ scrollTop: 0 }, 400);
   });
});

/*
 * smooth scroll to all links
 */
$(document).ready(function () {
   $("a").on('click', function (event) {
      if (this.hash !== "") {
         event.preventDefault();
         var hash = this.hash;
         $('html, body').animate({
            scrollTop: $(hash).offset().top
         }, 800, function () {

            window.location.hash = hash;
         });
      }
   });
});

/*  
 * show name facts 
 */
$(document).ready(function () {
   $('.name-title').click(function () {
      $('#say-my-name').fadeIn();
      $('#say-my-name').delay(3500).fadeOut();
   });
});