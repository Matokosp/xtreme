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


// var myIndex = 0;
// carousel();
//
// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("storyline_slide");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}
//   x[myIndex-1].style.display = "block";
//   setTimeout(carousel, 2000); // Change image every 2 seconds
// }
