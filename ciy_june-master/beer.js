// <img src="/images/bottle.png" class="small">
function createBottles(numOfBottles) {
    var divElem = document.createElement('div');

    for (var i = 0; i < numOfBottles; i++) {
        //Create the image
        var imgElem = document.createElement('img');
        imgElem.setAttribute('src', '/images/beer.png');
        imgElem.classList.add('small');

        //append to div
        divElem.appendChild(imgElem);
    }
    return (divElem);
}

// <div>some text</div>
function createText(line) {
    var divElem = document.createElement('div');
    divElem.textContent = line;
    return (divElem);
}

var beerSongElem = document.body.querySelector('#beer-song');

for (var i = 99; i > 0; i--) {
    var pElem = document.createElement('p');
    var bottles = createBottles(i);
    pElem.appendChild(bottles);
    var text = createText(`${i} bottles of beer on the wall, ${i} bottles of beer`);
    pElem.appendChild(text);
    text = createText(`Take one down and pass it around, ${i - 1} bottles of beer on the wall.`)
    pElem.appendChild(text);
    beerSongElem.appendChild(pElem);
}
