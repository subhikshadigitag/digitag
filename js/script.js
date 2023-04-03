
/*sticky nav bar*/

/*window.onscroll = function() {stickyNavbar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}*/
/*sticky ends*/






// loader
function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 2000);
}

window.onload = fadeOut();

// loader ends



//  sliding head
 const slideInContainer = document.querySelector('.slide-in-container');

 function handleScroll() {
   const threshold = 400;
   if (window.scrollY > threshold) {
     slideInContainer.classList.add('slide-in');
   }
 }
 
 
 window.addEventListener('scroll', handleScroll);
//  sliding ends





  // Get the text element
  const text = document.querySelector('.text');

  // Get the width of the text element
  const textWidth = text.offsetWidth;
  
  // Set the width of the slider element to the width of the text element
  const slider = document.querySelector('.slider');
  slider.style.width = textWidth + 'px';
  

// chat box

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }