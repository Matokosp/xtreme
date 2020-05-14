




  // DESKTOPS

  // ---------------------------------


	var x = window.matchMedia("(max-width: 1100px)")

	function myFunction(x) {
	  if (x.matches) { // If media query matches

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
        var sectionThree = $('#sectionThree').offset();
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

	  }
	}

	myFunction(x) // Call listener function at run time
	x.addListener(myFunction) // Attach listener function on state changes
