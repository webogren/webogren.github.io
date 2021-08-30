window.addEventListener("contextmenu",function(ozel_sag_tiklama_sag_click_acilan_menu_islem){
  ozel_sag_tiklama_sag_click_acilan_menu_islem.preventDefault();
  const ozel_sag_tiklama_sag_click_acilan_menu = document.getElementById("ozel_sag_tiklama_sag_click_acilan_menu");
  ozel_sag_tiklama_sag_click_acilan_menu.style.top = ozel_sag_tiklama_sag_click_acilan_menu_islem.offsetY + "px";
  ozel_sag_tiklama_sag_click_acilan_menu.style.left = ozel_sag_tiklama_sag_click_acilan_menu_islem.offsetX + "px";
  ozel_sag_tiklama_sag_click_acilan_menu.classList.add("active");
});

window.addEventListener("click",function(){
  document.getElementById("ozel_sag_tiklama_sag_click_acilan_menu").classList.remove("active");
});




//Bunu sonrasında sil.
document.onload = submit()

        function submit() {
          if (location.href == "duyuru.html") {
            console.log();
          } else {
            location.href = "duyuru.html";
          }
            
        }