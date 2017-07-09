var gen = sentenceGenerator(txt);
var indexedWords = txt.split(" ");

window.onload = function() {
    $('#bg-text')[0].innerHTML = gen.take(410);
    $('#para-viewport').parallaxify({positionProperty: 'transform',responsive:true,alphaFilter:0.7});
}
