 // TRI
    // var cards = document.getElementsByClassName("img");
    // var images = [];
    // var ordre = [1,1,2,2,3,3,4,4,5,5,6,6,7,7];

   // CHANGE ORDER OF T
    // for(var i = 0; i < ordre.length; i++){
    //     var rand = Math.floor(Math.random()*cards.length);
    //     var valeur = ordre[rand];
        // console.log(valeur);
      // cards[i].style.backgroundColor ="#"+ordre[i]+"00000";
    //   cards[i].value = ordre[i];
    //   console.log(cards[i]);
    //   cards[i].src ="img/"+ordre[i]+".jpg";
    // }

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


var couleur = ["red", "red", "yellow", "yellow", "blue", "blue", "green", "green", "black", "black", "pink", "pink", "purple", "purple"];
var rand = ["blanc", "blanc", "blanc", "blanc", "blanc", "blanc", "blanc", "blanc", "blanc", "blanc", "blanc", "blanc", "blanc", "blanc"];


function aleatoire(){
  for(i=0; i<couleur.length; i++){
      if(couleur[i] != "blanc"){
        console.log(rand[i]);
      couleur[i] = Math.floor(Math.random()*couleur.length);
      rand[i] = couleur [i];
      document.getElementsByClassName('carte').style.backgroundColor = "blue";
      
    }
      else {
      i--
      console.log("me");
      }
    }
  }




