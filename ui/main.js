console.log('Loaded!');

// Change the text of the maintext div
var element = document.getElementById('main-text');
element.innerHTML = 'New value';

//Move the image
var element = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft =marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';

    
}
img.onclick = function () {
    var interval = setInerval(moveRight, 100);
     
  
};