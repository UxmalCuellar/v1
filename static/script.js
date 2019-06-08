// toggles menu icon into an x and show/hides menu items
function toggleMenuIcon(x) {
   x.classList.toggle("change");
   document.getElementById("menu").classList.toggle("show");
}

// close dropdown menu if user clicks outside if it
// window.onclick = function(event) {
//    if (!event.target.matches('.toc-holder')) {
//       var dropdowns = document.getElementByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
// 	 var openDropDown = dropdowns[i];
// 	 if (openDropDown.classList.contains('show')) {
// 	    openDropDown.classList.remove('show');
// 	 }
//       }
//    }
// }


$(window).scroll(function() {
   if ($(this).scrollTop()>0) {
      $('.icons').fadeOut();
   } else {
      $('.icons').fadeIn();
   }
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
      $('.icons').fadeIn();
   }
});
