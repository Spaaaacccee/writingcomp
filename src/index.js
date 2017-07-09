var gen = sentenceGenerator(txt);
var indexedWords = txt.split(" ");

window.onload = function () {

    //iOS scrolling fix
    var vpH = window.innerHeight;
    document.documentElement.style.height = vpH.toString() + "px";
    body.style.height = vpH.toString() + "px";


    $('#bg-text')[0].innerHTML = gen.take(410);
    $('#para-viewport').parallaxify({
        positionProperty: 'transform',
        responsive: true,
        alphaFilter: 0.7
    });
}
