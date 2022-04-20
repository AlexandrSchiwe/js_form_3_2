let red = document.getElementById('redslider');
let green = document.getElementById('greenslider');
let blue = document.getElementById('blueslider');
let body = document.getElementById('body');

function colorSlider() {
    body.style.backgroundColor = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
};