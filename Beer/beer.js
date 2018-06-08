function createBottles() {
    var divElem = document.createElement('div');

    for (var i = 0; i < numofBottles> {
        //Create the image
        //1- divElem , 2-loop num (for) Create image, appendChild image to divElem , 3-return divElem
        var imgElem = document.createElemen('img')
        imgElem.setAttribute('src', '/images/beer.png');
        imgElem.classList.add('small');

//append to div
divElem.appendChild(imgElem);

    }


    return (imgElem);

}

var beerSongElem = document.body.querySelector('#beer-song');

for(var i = 99; i>0; i--){

var Bottles = createBottles(10);
beerSongElem.appendChild(bottle);  //createBottles (5) = <div> <img><img><img><img><img></div>
}