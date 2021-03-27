var names=[
    "Family Book",
    "Father",
    "Grandfather",
    "Mother",
    "Sister",
    "Brother",
    "Grandmother"
];
var images=[
    "https://images-na.ssl-images-amazon.com/images/I/51KNpAKei-L.jpg",
    "https://img1.pnghut.com/22/6/15/u60rvNupvT/cartoon-action-figure-boss-baby-tshirt-animation.jpg",
    "https://previews.123rf.com/images/jemastock/jemastock1806/jemastock180602468/102904024-cute-father-cartoon-vector-illustration-graphic-design.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzZQsaoKcC-x0UpdwsUDw8HoZBfyeU7EMSVxi7ktG-A6-6t8Q6eoVGdkKvLUdNUY9yWEw&usqp=CAU",
    "https://www.clipartmax.com/png/middle/221-2216870_brothers-and-sisters-cartoon.png",
    "https://webstockreview.net/images/brother-clipart-animated-9.jpg",
    "https://image.shutterstock.com/image-illustration/cartoon-old-woman-cane-260nw-1376524529.jpg"
];
var i=0;
function Nextslide(){
    document.getElementById("img1").src = images[i];
    document.getElementById("Name").innerHTML = names[i];
    i++;
    if(i == 7)
    {
      i = 0;
    }
}