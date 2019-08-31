var body = document.querySelector('body');
var color1 = document.querySelector('#colorPicker1');
var color2 = document.querySelector('#colorPicker2');
var styleText = document.querySelector('#currentBackground');
var random = document.querySelector('#randomColor');

function changeBackgroundStyle () {
    var style = 'linear-gradient(to right, ' + color1.value +', ' + color2.value + ')';
    body.style.background = style;
    styleText.textContent = style + ';';
}

color1.value = '#FF00FF';
color1.addEventListener('change', changeBackgroundStyle);
color2.value = '#00FFFF';
color2.addEventListener('change', changeBackgroundStyle);

random.addEventListener('click', function () {
    var ranColor1 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    var ranColor2 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

    color1.value = ranColor1;
    color2.value = ranColor2;

    changeBackgroundStyle();
});

changeBackgroundStyle();
