var couleur = ["#D5D7CA", "#D5D7CA", "#D7D36C", "#D7D36C", "#ADA915", "#ADA915", "#486855", "#486855", "#4B9295", "#4B9295", "#79BBBA", "#79BBBA", "#EEE731", "#EEE731"];
var rand = [];
var allImg = document.getElementsByClassName("carte");
var back = [];
var gagne = [];
console.log(allImg);
  
// Repartition aleatoire des cartes
  for(i=0; i<14; i++){
      var ordre = Math.floor(Math.random()*couleur.length);
      console.log("ordre :" + ordre);
      console.log(couleur[ordre]);
      rand.push(couleur[ordre]);
      console.log[rand];
      allImg[i].style.background = couleur[ordre];
      couleur.splice(ordre, 1);     
  }

// passer à opacité 0 + lancer fonction decouvrir au click
for (let j=0; j < allImg.length; j++){
  allImg[j].style.opacity = "0";
  allImg[j].addEventListener("click", decouvrir);
}

// passer en opacité 1 au onclick
function decouvrir(){
  console.log(this);
  this.style.opacity = "1";
  back.push(this);
  console.log(back);
  
  // Comparer et retourner si les cartes sont différentes
    if((back.length == 2) && (back[0].style.backgroundColor != back[1].style.backgroundColor)){
      console.log("good");
      setTimeout(function(){
        back[0].style.opacity = "0";
        back[1].style.opacity = "0";
        back = [];
  }, 800);

        
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


















