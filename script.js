//your code here
const images = document.querySelectorAll(".image");

let dragged = null;

images.forEach((img) => {
    img.addEventListener("dragstart", function () {
        dragged = this;
        this.classList.add("selected");
    });

    img.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    img.addEventListener("drop", function (e) {
        e.preventDefault();

        if (dragged !== this) {
            // Swap the IDs
            const tempId = dragged.id;
            dragged.id = this.id;
            this.id = tempId;
        }
    });

    img.addEventListener("dragend", function () {
        this.classList.remove("selected");
    });
});
