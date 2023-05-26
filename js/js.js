//alert("Olá");

// array de img: Aracaju, Manaus, Rio de Janeiro
var images = [
"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Aracaju_city%2C_Brazil_%2851555584559%29.jpg/800px-Aracaju_city%2C_Brazil_%2851555584559%29.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Cruise_ship_in_Manaus%2C_Brazil.jpg/800px-Cruise_ship_in_Manaus%2C_Brazil.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Rio_de_Janeiro_city.jpg/800px-Rio_de_Janeiro_city.jpg",
];


var imageNumber = 0;
var imageLength = images.length -1;
//alert(images[imageNumber]);
function changeImage(x) {
imageNumber += x;
if (imageNumber > imageLength) {
imageNumber = 0;
}

var im = document.getElementById("slideshow");
im.src = images[imageNumber];
im.style.borderRadius="3em";
im.style.height = "100%";
//im.style.opacity = "0.3";
//im.style.width = "100%";
//conteúdo do item da var image. Pode ser verificado com:
//alert(images[imageNumber])
return false;
}

function autoRun () {
	setInterval("changeImage(1)",1000);
}




