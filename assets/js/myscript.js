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

// TEXT CHANGE

// function test() {
//     let x = document.querySelectorAll('.quote_one');
//     setTimeout(()=> {
//         x[0];
//         x[1].style.opacity = '0';
//         x[2].style.opacity = '0';
//         x[3].style.opacity = '0';
//         setTimeout(() => {
//             x[1].style.opacity = '1';
//             setTimeout(() => {
//                 x[2].style.opacity = '1'
//                 setTimeout(() => {
//                     x[3].style.opacity = '1'
//                     setTimeout(test(), 3000)
//                 }, 3000)
//             }, 3000)
//         }, 3000)
//     }, 3000)
//     }
//     test()

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





// (function() {
//
//     var quoteOne = $(".quote_one");
//     var quoteIndex = -1;
//
//     function showNextQuote() {
//         ++quoteIndex;
//         quoteOne.eq(quoteIndex % quoteOne.length)
//             .fadeIn(600)
//             .delay(600)
//             .fadeOut(600, showNextQuote);
//     }
//
//     showNextQuote();
//
// })();

// Original JavaScript code by Chirp Internet: www.chirp.com.au
  // Please acknowledge use of this code by including this header.

  window.addEventListener("DOMContentLoaded", function(e) {

    var stage = document.getElementById("stage");
    var fadeComplete = function(e) { stage.appendChild(arr[0]); };
    var arr = stage.getElementsByClassName("stage_div");
    for(var i=0; i < arr.length; i++) {
      arr[i].addEventListener("animationend", fadeComplete, false);
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
