// WINDOW VH

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


// MENU


var navButton = document.getElementById("navButton");
var menuResponsive = document.getElementById("menu");
var hambIconOne = document.getElementById("hambIconOne");
var hambIconTwo = document.getElementById("hambIconTwo");
var hambIconThree = document.getElementById("hambIconThree");

function displayNav() {

if (menuResponsive.classList) {
  menuResponsive.classList.toggle("menu_show");
  hambIconOne.classList.toggle("hamburger_icon_one");
  hambIconTwo.classList.toggle("hamburger_icon_two");
  hambIconThree.classList.toggle("hamburger_icon_three");
} else {
  // crossborwser For IE9
  // according to w3 schools
  // I've never personally used this method
  var classes = menuResponsive.className.split(" ");
  var i = classes.indexOf("menu_show");

  if (i >= 0)
    classes.splice(i, 1);
  else
    classes.push("menu_show");
    menuResponsive.className = classes.join(" ");
}
}

navButton.onclick = displayNav;



// MENU STYLE

// if (document.location.pathname == "about.html") {
//     console.log(document.URL);
// }
	var sectionOne = $('#sectionOne').offset();
	var sectionTwo = $('#sectionTwo').offset();
	var position = $(window).scrollTop();

	// should start at 0

	$(window).scroll(function() {
	    var scroll = $(window).scrollTop();
	    if( scroll > position ) {
	        console.log('scrollDown');
	        $('.hamburger_div').removeClass('menu_responsive-show');
	        $('.hamburger_div').addClass('menu_responsive-hide');
	    }

	    if( scroll < position ) {
	    	$('.hamburger_div').removeClass('menu_responsive-hide');
	    	$('.hamburger_div').addClass('menu_responsive-show');
	        console.log('scrollUp');
	    }

      if( $('#menu').hasClass('menu_show') ) {
        if( scroll < position ) {
  	    	$('.hamburger_div').removeClass('menu_responsive-hide')
  	    	$('.hamburger_div').addClass('menu_responsive-show');
  	    }
      }
	    // else {
	    //      console.log('scrollUp');
	    // }
	    position = scroll;
	});

  $(window).scroll(function(){
    if ( $(window).scrollTop() >= sectionTwo.top * 1 / 2) {
      // ABAJO
        // $('.hamburger_div').addClass('menu_responsive-show');

      } else {
        // ARRIBA
        $('.hamburger_div').removeClass('menu_responsive-hide');
      }
  })




  // DESKTOPS

  // ---------------------------------


	var x = window.matchMedia("(min-width: 1200px)")

	function myFunction(x) {
	  if (x.matches) { // If media query matches

	  		var windowHeight = $( window ).height();
	  		var position = $(window).scrollTop();
	  		// SCROLL UP & DOWN
		    $(window).scroll(function() {
			    var scroll = $(window).scrollTop();
			    if( scroll > position ) {
            // HACIA ABAJO
			        $('.menu').addClass('menu_scroll-hide');
              $('.laptop_menu_logo_div').addClass('laptop_menu_logo_div--scroll');
              $('.laptop_menu_logo-color').addClass('laptop_menu_logo-color--scroll');
			    }
			    if( scroll < position ) {
            // HACIA ARRIBA
			    	$('.menu').removeClass('menu_scroll-hide');
            // $('.laptop_menu_logo_div').removeClass('laptop_menu_logo_div--scroll');
            // $('.laptop_menu_logo-color').removeClass('laptop_menu_logo-color--scroll');
			    }
			    position = scroll;
			});

      $( document ).ready(function() {
        if ($(window).scrollTop() >= sectionTwo.top * 1 / 2) {
          $('.laptop_menu_logo_div').addClass('laptop_menu_logo_div--scroll');
          $('.laptop_menu_logo-color').addClass('laptop_menu_logo-color--scroll');
          $('.menu').css({
          'padding': '0 15vw',
          'width': '70vw',
          'height': '60px'
        });
        }
      });

			$(window).scroll(function(){
				if ( $(window).scrollTop() >= sectionTwo.top * 1 / 2) {
          // ABAJO
			    	$('.menu').css({
            'padding': '0 15vw',
            'width': '70vw',
            'height': '60px'
          });
			    } else {
            // ARRIBA
			    	$('.menu').css({
            'padding': '0 30vw',
            'width': '40vw',
            'height': '150px'
          });
            $('.menu').removeClass('menu_scroll-hide');
            $('.laptop_menu_logo_div').removeClass('laptop_menu_logo_div--scroll');
            $('.laptop_menu_logo-color').removeClass('laptop_menu_logo-color--scroll');
			    }
			})

	  }
	}

	myFunction(x) // Call listener function at run time
	x.addListener(myFunction) // Attach listener function on state changes


// VIDEO


$(window).scroll(function() {
    $('#bubbles').each(function() {
        if ($(this).visible(true)) {
            $(this)[0].play();
        } else {
            $(this)[0].pause();
        }
    })
});


// LOOP TEXT

let y = document.querySelectorAll('.quote_one');
        y[0];
        y[1].style.opacity = '0';
        y[2].style.opacity = '0';
        y[3].style.opacity = '0';

function test(x) {
        setTimeout(() => {
            x[1].style.opacity = '1';
            setTimeout(() => {
                x[2].style.opacity = '1'
                setTimeout(() => {
                    x[3].style.opacity = '1'
                    setTimeout(()=>
                        {
                            x[0];
                            x[1].style.opacity = '0';
                            x[2].style.opacity = '0';
                            x[3].style.opacity = '0';
                            test(x)
                        }, 3000)
                }, 3000)
            }, 3000)
        }, 3000)
    }
    test(y)



  window.addEventListener("DOMContentLoaded", function(e) {

    var stage = document.getElementById("stage");
    var fadeComplete = function(e) { stage.appendChild(arr[0]); };
    var arr = stage.getElementsByClassName("stage_div");
    for(var i=0; i < arr.length; i++) {
      arr[i].addEventListener("animationend", fadeComplete, false);
    }

    var stageTwo = document.getElementById("stageShare");
    var fadeComplete = function(e) { stageTwo.appendChild(sArr[0]); };
    var sArr = stageTwo.getElementsByClassName("stage_div");
    for(var i=0; i < sArr.length; i++) {
      sArr[i].addEventListener("animationend", fadeComplete, false);
    }

  }, false);


// COUNTER TABLETAS

var tablets = $('#tablets').offset();

$(window).scroll(function(){
  if ($(window).scrollTop() >= tablets.top - 320) {
    $('.count').each(function() {
    var $this = $(this),
          countTo = $this.attr('data-count');
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },
      {
        duration: 2000,
        easing:'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
          //alert('finished');
        }
      });
  });
}
})
