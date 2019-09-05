/* 
 * Toggles menu icon into an x and show/hides menu items 
 */
function toggleMenuIcon(x) {
   x.classList.toggle("change");
   document.getElementById("menu").classList.toggle("show");
}

/*
// close dropdown menu if user clicks outside if it
window.onclick = function(event) {
   if (!event.target.matches('.toc-holder')) {
      var dropdowns = document.getElementByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
	 var openDropDown = dropdowns[i];
	 if (openDropDown.classList.contains('show')) {
	    openDropDown.classList.remove('show');
	 }
      }
   }
}
*/

/* 
 * Show icons if at the top of the page or bottom else fade out
 */
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

/*
 * Scroll to top of page
 */
$(document).ready(function () {
  $(window).scroll(function () {
    var top =  $(".goto-top");
        if ( $('body').height() <= (    $(window).height() + $(window).scrollTop() + 200 )) {
  top.animate({"margin-left": "0px"},1500);
        } else {
            top.animate({"margin-left": "-100%"},1500);
        }
    });

    $(".goto-top").on('click', function () {
        $("html, body").animate({scrollTop: 0}, 400);
    });
});

/*
 * smooth scroll to all links
 */
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    } 
  });
});

/* email is copied to clipboard when clicked 


var copyEmailBtn = document.querySelector(".copy-email");

copyEmailBtn.addEventListener("click", function(event) {
   copyToClipboard("uxmal.c@gmail.com");
});

function copyToClipboard(email) {
   navigator.clipboard.writeText(email);
}
*/
function copyEmail() {
   var copytext = document.getElementById("copy-email").value;
   copytext.select();
   copytext.setSelectionRange(0, 20);
   
   document.execCommand("copy");

   var tooltip = document.getElementById("emailToolTip");
   tooltip.innerHTML = "COPIED TO CLIPBOARD";
}

function mouseOut() {
   var tooltip = document.getElementById("emailToolTip");
   tooltip.innerHTML = "CLICK TO COPY";
}















