
//your code herez
const images = document.querySelectorAll(".image");

let dragged = null;

// Drag starts
images.forEach((image) => {
    image.addEventListener("dragstart", function () {
        dragged = this;
        this.classList.add("selected");
    });

    // Allow drop
    image.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    // Drop
    image.addEventListener("drop", function () {
        if (dragged !== this) {
            let tempId = dragged.id;
            dragged.id = this.id;
            this.id = tempId;
        }
    });

    // Drag ends
    image.addEventListener("dragend", function () {
        this.classList.remove("selected");
    });
});
