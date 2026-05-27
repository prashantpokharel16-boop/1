function showMessage(){

  alert("Welcome To Flex Zone 🔥");

}

window.addEventListener("scroll", function(){

  const nav = document.querySelector("nav");

  if(window.scrollY > 100){

    nav.style.background = "rgba(0,0,0,0.9)";

  }
  else{

    nav.style.background = "rgba(0,0,0,0.5)";

  }

});
