// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;
/*ROADBLOCK - errors thrown from toggleImage() when not on "about" page - 8/17/18
FIX - wrapped toggleImage() and toggleMenu() into a new function menuClick() - 8/19/18*/
menuBtn.addEventListener("click", menuClick);


/*ROADBLOCK - get funcionality of toggleMenu (button click) to Work - 7/27/18
  FIX - instead of addEventListener("click", toggleMenu()); use addEventListener("click", toggleMenu); - 8/10/18 */

// TODO reverse list item slide in order
function toggleMenu() {

    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        //Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));


        //Set Menu State
        showMenu = false;
    }
    /*ROADBLOCK - GET http://127.0.0.1:3000/dist/js/main.js/ 404 (Not Found)
    (index):1 Refused to execute script from 'http://127.0.0.1:3000/dist/js/main.js/' because its MIME type ('text/html') is not executable, and strict MIME type checking is enabled. - 8/8/2018
      WORKAROUND - moved main.js out of js folder into dist with index.html - 8/10/2018*/
}

function menuClick() {
    toggleMenu();
    if (document.URL.indexOf("about.html") >= 0) {
        toggleImage();
    }
}

function toggleImage() {
    let hide = document.getElementById("myPortrait");
    if (hide.style.visibility === "hidden") {
        hide.style.visibility = "visible";
    } else {
        hide.style.visibility = "hidden";
    }
}

// modal functionality
// PROJECT 1
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// PROJECT 2
var modal1 = document.getElementById('myModal1');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById('myImg1');
var modalImg1 = document.getElementById("img011");
var captionText1 = document.getElementById("caption1");
img1.onclick = function () {
    modal1.style.display = "block";
    modalImg1.src = this.src;
    captionText1.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
    modal1.style.display = "none";
}

// PROJECT 3
var modal2 = document.getElementById('myModal2');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById('myImg2');
var modalImg2 = document.getElementById("img012");
var captionText2 = document.getElementById("caption2");
img2.onclick = function () {
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText2.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[2];

// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
    modal2.style.display = "none";
}

// PROJECT 4
var modal3 = document.getElementById('myModal3');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img3 = document.getElementById('myImg3');
var modalImg3 = document.getElementById("img013");
var captionText3 = document.getElementById("caption3");
img3.onclick = function () {
    modal3.style.display = "block";
    modalImg3.src = this.src;
    captionText3.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close")[3];

// When the user clicks on <span> (x), close the modal
span3.onclick = function () {
    modal3.style.display = "none";
}
