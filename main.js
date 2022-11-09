var reasons = [
  "Dad",
  "Me",
  "Mom",
  "Brother",
  "Sister",
  "Grandfather",
  "Grandmother",
  "Uncle",
  "Aunt"
];
var images = [
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFWJW9f2df8ibmWPwTui-rpByNkBffoOJ80g&usqp=CAU",
 "https://freepngimg.com/save/29933-cute-cartoon-girl-image/338x640",
 "https://cdn-icons-png.flaticon.com/512/4842/4842349.png",
  "https://i.pinimg.com/736x/77/d4/15/77d41520a3f07995b184797a3734bf44.jpg",
  "https://www.kibrispdr.org/data/907/sister-clipart-28.jpg",
  "https://i.pinimg.com/originals/d5/6c/d2/d56cd25436d0d3f56ad2f143750f7455.png",
  "https://i.pinimg.com/originals/e1/8f/4a/e18f4a4c8e716afeb5a1bbf598db00be.png",
  "https://png.pngitem.com/pimgs/s/371-3718264_character-man-beard-uncle-png-and-vector-image.png",
  "https://cdn-icons-png.flaticon.com/512/7223/7223727.png"

];

var i = 0;
function nextslide() {  document.getElementById("reasontext").innerHTML = reasons[i];
  document.getElementById("album").src = images[i];
  i++;
 
}
