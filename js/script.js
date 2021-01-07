//h1
document.querySelectorAll("h1")[0].style.color = "gray";
document.querySelectorAll("h1")[0].style.textAlign = "center";

//Paragraph Tag
document.querySelectorAll("p")[0].style.color = "lightgray";
document.querySelectorAll("p")[0].style.textAlign = "center";

//Footer
// Set background and text color for the Footer
document.querySelectorAll("footer")[0].style.backgroundColor = "black";
document.querySelectorAll("footer")[0].style.color = "white";

// Set the Footer Element to be center
document.querySelectorAll("footer")[0].style.textAlign = "center";

// Slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//Contact Form
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

/*Order Form*/
function updateTotal(){
  var tot = 0;
  tot += f.tiger.value * 3 +
         f.monkey.value * 3.5 +
         f.elephant.value * 12 +
         f.penguin.value * 12;
  document.getElementById("cost").value = tot.toFixed(2);
}

var f = document.forms['order-form'];
var sel = document.getElementsByTagName("select");

for(var i=0; i<sel.length; i++) {
  sel[i].onchange = function(){updateTotal()};
}

f.onsubmit = function(){
  alert("Your total cost will be: \\$" + f.cost.value);
  return false;
}