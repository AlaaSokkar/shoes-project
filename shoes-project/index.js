let mainPhoto=document.getElementById("mainPhoto");
let secPhoto=document.getElementById("secPhoto");
  
document.addEventListener("click",function(e){
  
    mainPhoto.src=e.target.src;
})