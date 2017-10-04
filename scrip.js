let char = document.querySelector("img.hero");
let shakeButton = document.querySelector("#shake");
shakeButton.addEventListener('click', makeShake)
function makeShake() {
    console.log("make shake");
    char.classList.toggle("shakecss");
}


let jumpButton = document.querySelector("#jump");
jumpButton.addEventListener('click', makeJump)
function makeJump() {
    console.log("make jump");
    char.classList.toggle("jumpcss");
}


let oneButton = document.querySelector("#one");
oneButton.addEventListener('click', oneJump)
function oneJump() {
    console.log("one jump");
    char.classList.toggle("onecss");
}


let moveButton = document.querySelector("#move");
moveButton.addEventListener('click', move1)
function move1() {
    console.log("move from 30");
    char.classList.toggle("movecss");
}

let miscarebutton = document.querySelector("#miscare")
miscarebutton.addEventListener('click', miscare1)
function miscare1(){
    console.log("move to 30")
    char.classList.toggle("miscarecss")
}

 let mfrombutton = document.querySelector("#mfrom");
mfrombutton.addEventListener('click', mfrom1)
function mfrom1(){
    console.log("move from 30");
    char.classList.toggle("mfromcss");
}


let fadeButton = document.querySelector("#fade");
fadeButton.addEventListener('click', fade1 );
function fade1(){
    console.log("be fade");
    char.classList.toggle("fadecss")
}

let glowButton = document.querySelector("#glow");
glowButton.addEventListener("click", glow1)
function glow1(){
    console.log("glow")
    char.classList.toggle("glowcss")
}


let mirrorButton = document.querySelector("#mirror")
mirrorButton.addEventListener("click", mirror1)
function mirror1(){
    console.log("see mirror")
    char.classList.toggle("mirrorcss")
}





let downButton = document.querySelector("#down")
downButton.addEventListener("click", down1)
function down1(){
    console.log("fall down")
    char.classList.toggle("downcss")
}



















