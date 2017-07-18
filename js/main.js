var couleur = ["red", "red", "yellow", "yellow", "blue", "blue", "green", "green", "black", "black", "pink", "pink", "purple", "purple"];
var rand = [];
var allImg = document.getElementsByClassName("carte");
var back = [];
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
  back.push(this.style.backgroundColor);
  console.log(back);
  
    if((back.length == 2) && (back[0]!= back[1])){

alert("recommence");
back = [];
    }
    else if((back.length == 2) && back[0]== back[1]){
        alert('BARVO');
back = [];


    }
}    


















