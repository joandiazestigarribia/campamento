// nav bar responsive

document.querySelector('.icon-menu').addEventListener('click', () => {
    document.querySelector('.nav__list').classList.toggle('show');
});

// works

/*
var modal = document.getElementById('myModal');
var img = document.getElementById('slidercampa1');
var img2 = document.getElementById('slidercampa2');
var modalImg = document.getElementById('img01');
// var works = document.getElementById('theWorks');

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    // captionText.innerHTML = this.alt;
}

img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    // captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
} */

function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("myModal").style.display = "block";
  }