// Get the close button
const closeBtn = document.querySelector(".close");

// Close modal when X is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
};

const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const images = document.querySelectorAll(".gallery-img");

images.forEach(img => {
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

document.querySelector(".close").onclick = function () {
    modal.style.display = "none";
};