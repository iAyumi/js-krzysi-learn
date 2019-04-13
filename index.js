// Import stylesheets
import './style.css';

// Nie ruszaj tego - odnosi się do głównego elementu index.html ;)
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function stretchSlide(){
        this.className = "stretchNews";
}

window.onload = function()
{
    var stretch = document.getElementsByClassName("unstretched");
    for (var i = 1; i < stretch.length + 1; i++) {
        stretch[i].addEventListener('click', stretchSlide);
    }
}