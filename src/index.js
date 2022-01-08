let detailsImage = document.querySelector(".details-image");
let detailsTitle = document.querySelector(".details-title");
let mainContentEl = document.querySelector(".main-content");
let selectedItem;
let anchors = document.querySelectorAll(".thumbnails-anchor");//all HTML elements belonging to the clas thumbnails-anchor
let detSound = document.querySelector(".details-sound");

function barklingBrown(){
    let audio = new Audio();
    audio.src = 'brown.mp3';
    audio.autoplay = true;
}
function barklingScientist(){
    let audio = new Audio();
    audio.src='scientist.mp3';
    audio.autoplay = true;    
}
function barklingBummer(){
    let audio = new Audio();
    audio.src='bummer.mp3';
    audio.autoplay = true;    
}
function barklingSpeaker(){
    let audio = new Audio();
    audio.src='speaker.mp3';
    audio.autoplay = true;    
}
function barklingDolly(){
    let audio = new Audio();
    audio.src='dolly.mp3';
    audio.autoplay = true;    
}

for(let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function(event) {
        event.preventDefault(); //canceling default behavior of anchor element hitting
        showDetails();
        setDetails(anchors[i]); //setDetails function call with passing reference to appropriate anchor
   })
}
function setDetails(anchor) {
    let hrefValue = anchor.getAttribute("href");
    detailsImage.setAttribute("src", hrefValue );
    anchor.parentElement.classList.add("selected");
    if (selectedItem && selectedItem!=anchor.parentElement){
        selectedItem.classList.remove("selected")
    } selectedItem = anchor.parentElement;
    
    let thumbTitleSelector = `[href="${hrefValue}"] .thumbnails-title`;
    let thumbTitleElement = document.querySelector(thumbTitleSelector);
    let thumbSoundSelector = `[href="${hrefValue}"] .thumbnails-sound`;
    let thumbSoundElement = document.querySelector(thumbSoundSelector);
    let sValue = thumbSoundElement.getAttribute("src");
    detailsTitle.textContent = `${thumbTitleElement.textContent}: ${anchor.getAttribute('data-details-title')}` ;
    detSound.setAttribute("src",sValue);
    detSound.muted = false;
    setTimeout(trulyMuted,2000);
}
function trulyMuted(){
    detSound.muted = true;
}

function showDetails() {
    mainContentEl.classList.remove('hidden');
    detailsImage.parentElement.classList.add('is-tiny');
    setTimeout(removeIsTiny);
}
function removeIsTiny() {
    detailsImage.parentElement.classList.remove('is-tiny');
}
function hideDetails() {
    mainContentEl.classList.add('hidden') ;
    if (selectedItem) {
        selectedItem.classList.remove('selected')
    } 
}

