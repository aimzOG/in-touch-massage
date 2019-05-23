/* Toggle between adding and removing the "active" and "show" classes when the user clicks on one of the "Section" buttons. The "active" class is used to add a background color to the current button when its belonging panel is open. The "show" class is used to open the specific accordion panel */
var acc = document.getElementsByClassName("accordion");
var i;
var j;

var handleAccordionClick = function () {
  for (j = 0; j < acc.length; j++) {
    acc[j].classList.remove("active");
    acc[j].nextElementSibling.classList.remove("show");
  }
  this.classList.add("active");
  this.nextElementSibling.classList.add("show");
}

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = handleAccordionClick;
}
