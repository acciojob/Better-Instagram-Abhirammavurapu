
//your code herez
const images = document.querySelectorAll(".image");

let dragged = null;

images.forEach((image) => {
    image.addEventListener("dragstart", function () {
        dragged = this;
        this.classList.add("selected");
    });

    image.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    image.addEventListener("drop", function () {
        if (dragged && dragged !== this) {
            const parent = this.parentNode;

            const draggedNext = dragged.nextSibling;
            const targetNext = this.nextSibling;

            parent.insertBefore(dragged, targetNext);
            parent.insertBefore(this, draggedNext);
        }
    });

    image.addEventListener("dragend", function () {
        this.classList.remove("selected");
        dragged = null;
    });
});