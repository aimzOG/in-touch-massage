var i,j,acc=document.getElementsByClassName("accordion"),handleAccordionClick=function(){for(j=0;j<acc.length;j++)acc[j].classList.remove("active"),acc[j].nextElementSibling.classList.remove("show");this.classList.add("active"),this.nextElementSibling.classList.add("show")};for(i=0;i<acc.length;i++)acc[i].onclick=handleAccordionClick;