document.addEventListener("DOMContentLoaded",function(){
    const links=document.querySelectorAll('.navbar a');
    for(const links of link){
        link.addEventListener('click',smoothScroll);
    }
    function smoothScroll(e){
        e.preventDefault();
        const targetID=this.getAttribute('href').substring(1);
        const targetElement=document.getElementById(targetID);
        window.scroll({
            top:targetElement.offsetTop,
            behavior:'smooth',
            duration:8000,

        });
    }
})

document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.querySelector(".contact-button");
  
    if (contactButton) {
      contactButton.addEventListener("click", function () {
        const contactSection = document.getElementById("contact");
  
        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    }
  });