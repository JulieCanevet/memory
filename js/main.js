 // TRI
 
   // CHANGE ORDER OF T
    // for(var position=T.length-1; position>=1; position--){
    //     var hasard=Math.floor(Math.random()*(position+1));
    //     var sauve=T[position];
    //     T[position]=T[hasard];
    //     T[hasard]=sauve;
    // }
    // cards[i].style.background = couleur[ordre];     

    // console.log(T);
    //    for(var position = ordre.length-1; position>=1; position++){
    //     var hasard=Math.floor(Math.random()*(position+1));
    //     var sauve=ordre[position];
    //     ordre[position]=ordre[hasard];
    //     ordre[hasard]=sauve;
    // }

   // for (var j = 0; j < ordre.length; j++) {
   //    cards[j].style.backgroundColor ="#"+ordre[j]+"00000";
   //    cards[j].value =ordre[j];
   //    cards[j].src ="img/"+ordre[j]+".jpg";
   //  }




// var cards = document.getElementsByTagName('DIV');
// var newArray = Array.from(cards);
// console.log(newArray);
// newArray.sort();


// function aleatoire(){
// for (i=0; i < cards.length; i++){
//     // var rand = Math.floor(Math.random()*cards.length);
//     // console.log(rand);
//     // var position = cards[i];
//     // console.log(oui);
//     // cards[i] = cards[rand];
//     // console.log(cards[i]);
//     // console.log(cards[rand]);
//     // cards[rand] = oui;
// cards.sort()
// console.log(cards);
// }

// }

// var carte = new Array(document.getElementsByTagName('DIV'));
 
// function melange(carte){
// for (var i=0; i<carte.length; i++){
//     var alea=Math.floor(Math.random()*carte.length);
//     temp=carte[i];
//     carte[i]=carte[alea];
//     carte[alea]=temp;
// }
// }
 
// function changeImage(x){
//     visible=0;
                 
//     if (visible<3){
                     
//         visible=visible+1;
                 
//         var balise = "<img src='" +carte[x]+ "'/> ";
//         document.getElementById(x).innerHTML = balise;
         
//         coup++
                     
//         }else{
//         visible=0;
                 
// }
                 
// }

// Repartition aleatoire des cartes
var couleur = ["red", "red", "yellow", "yellow", "blue", "blue", "green", "green", "black", "black", "pink", "pink", "purple", "purple"];
var rand = [];
var allImg = document.getElementsByClassName("carte");
console.log(allImg);
  for(i=0; i<14; i++){
      var ordre = Math.floor(Math.random()*couleur.length);
      console.log("ordre :" + ordre);
      console.log(couleur[ordre]);
      rand.push(couleur[ordre]);
      console.log[rand];
      allImg[i].style.background = couleur[ordre];
      couleur.splice(ordre, 1);     
  }

for (let j=0; j < allImg.length; j++){
  allImg[j].style.opacity = "0";
  allImg[j].addEventListener("click", decouvrir);
}



function decouvrir(){
  console.log(this);
this.style.opacity = "1";



}



















