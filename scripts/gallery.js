"use strict";

// Run the gallery when the page loads 
window.addEventListener("load", createGallery);

function createGallery() {

    // Gallery container 
    let galleryBox = document.getElementById("galleryBox");

    // Parts of the gallery 
    let gTitle = document.createElement("h3");
    let gCounter = document.createElement("div");
    let gPrev = document.createElement("div");
    let gNext = document.createElement("div");
    let gPlay = document.createElement("div");
    let gImages = document.createElement("div");

    // Design the gallery title 
    galleryBox.appendChild(gTitle);
    gTitle.id = "gTitle";
    gTitle.textContent = galleryTitle;

    // Design the slide counter 
    galleryBox.appendChild(gCounter);
    gCounter.id = "gCounter";
    let currentImg = 1;
    gCounter.textContent = currentImg + " / " + imgCount;

    // Design the previous button 
    galleryBox.appendChild(gPrev);
    gPrev.id = "gPrev";
    gPrev.innerHTML = "&#9664;";
    gPrev.onclick = showPrev;

    // Design the next button 
    galleryBox.appendChild(gNext);
    gNext.id = "gNext";
    gNext.innerHTML = "&#9654;";
    gNext.onclick = showNext;

    // Design the play-pause button 
    galleryBox.appendChild(gPlay);
    gPlay.id = "gPlay";
    gPlay.innerHTML = "&#9199;";

    let timeID;
    gPlay.onclick = function () {
        if (timeID) {
            window.clearInterval(timeID);
            timeID = undefined;
        } else {
            showNext();
            timeID = window.setInterval(showNext, 1500);
        }
    };

    // Design the images container 
    galleryBox.appendChild(gImages);
    gImages.id = "gImages";

    // Add images from the array 
    for (let i = 0; i < imgCount; i++) {
        let image = document.createElement("img");
        image.src = imgFiles[i];
        image.alt = imgCaptions[i];
        image.onclick = createOverlay;
        gImages.appendChild(image);
    }

    // Move forward through images 
    function showNext() {
        gImages.appendChild(gImages.firstElementChild);
        (currentImg < imgCount) ? currentImg++ : currentImg = 1;
        gCounter.textContent = currentImg + " / " + imgCount;
    }

    // Move backward through images 
    function showPrev() {
        gImages.insertBefore(gImages.lastElementChild, gImages.firstElementChild);
        (currentImg > 1) ? currentImg-- : currentImg = imgCount;
        gCounter.textContent = currentImg + " / " + imgCount;
    }

    // Create fullscreen overlay 
    function createOverlay() {
        let overlay = document.createElement("div");
        overlay.id = "gOverlay";

        let figureBox = document.createElement("figure");
        overlay.appendChild(figureBox);

        let overlayImage = this.cloneNode("true");
        figureBox.appendChild(overlayImage);

        let overlayCaption = document.createElement("figcaption");
        overlayCaption.textContent = this.alt;
        figureBox.appendChild(overlayCaption);

        let closeBox = document.createElement("div");
        closeBox.id = "gOverlayClose";
        closeBox.innerHTML = "&times;";
        closeBox.onclick = function () {
            document.body.removeChild(overlay);
        };

        overlay.appendChild(closeBox);
        document.body.appendChild(overlay);
    }
}