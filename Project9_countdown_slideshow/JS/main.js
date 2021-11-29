function countdown() { //Creating countdown function 
    var seconds = document.getElementById("seconds").value;//variable for the seconds countdown
    function tick() {//creating function tick to countdown seconds
        seconds= seconds-1;// Second countdown formula  
        timer.innerHTML=seconds;//timer
        setTimeout(tick,1000);//setting up speed of tick    
        if(seconds==-1) {//if statement conditions
            alert ("Time's up");// display alert when conditions are met 
        }
    }
   
    tick();
}




var slideIndex = 1;// assigning variables 
showSlides(slideIndex);


function plusSlides(n) {// Next/previous controls
  showSlides(slideIndex += n);
}


function currentSlide(n) {// Thumbnail image control function
  showSlides(slideIndex = n);
}

function showSlides(n) { //showslide function 
  var i;//assigning variable for function
  var slides = document.getElementsByClassName("mySlides");//assigning variable for function
  var dots = document.getElementsByClassName("dot");//assigning variable for function
  if (n > slides.length) {slideIndex = 1}//if statement conditions
  if (n < 1) {slideIndex = slides.length}//if statement conditions
  for (i = 0; i < slides.length; i++) {//for loop
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {//for loop 
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}