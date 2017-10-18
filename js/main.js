var images = ["#f00d79", "#f00d79", "#740df0", "#740df0", "#f0ac0d", "#f0ac0d", "#2318c1", "#2318c1", "#0df0e8", "#0df0e8", "#f00d14", "#f00d14", "#effc00", "#effc00"];
var rand = [];
var allImg = document.getElementsByClassName("carte");
var back = [];
var gagne = [];
  
// Repartition aleatoire des cartes
  for(i=0; i<14; i++){
      var ordre = Math.floor(Math.random()*images.length);
      rand.push(images[ordre]);
      allImg[i].style.background = images[ordre];
      images.splice(ordre, 1);     
  }

// passer à opacité 0 + lancer fonction decouvrir au click
for (let j=0; j < allImg.length; j++){
  allImg[j].style.opacity = "0";
  allImg[j].addEventListener("click", decouvrir);
}

// passer en opacité 1 au onclick
function decouvrir(){
  this.style.opacity = "1";
  back.push(this);
  
  // Comparer et retourner si les cartes sont différentes
    if((back.length == 2) && (back[0].style.backgroundColor != back[1].style.backgroundColor)){
      setTimeout(function(){
        back[0].style.opacity = "0";
        back[1].style.opacity = "0";
        back = [];
  }, 500);

        
    } 
    // Laisser l'opacité si les cartes sont pareilles 
    else if((back.length == 2) && back[0].style.backgroundColor == back[1].style.backgroundColor){
        back = [];
        gagne.push(this);
        console.log("gagne" + gagne.length);
        if (gagne.length == 7) {
          alert('bravo');
        }

    }
}    



function rejouer() {
  location.reload();
}













