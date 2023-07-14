window.onscroll = function() {
  var navbar = document.getElementById("myNavbar");
  if (window.pageYOffset > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};
