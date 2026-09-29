
// Hämta knapparna från HTML
const redButton = document.getElementById("redButton");
const blueButton = document.getElementById("blueButton");
const greenButton = document.getElementById("greenButton");

// När användaren klickar på Röd
redButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "red";
});

// När användaren klickar på Blå
blueButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";
});

// När användaren klickar på Grön
greenButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "green";
});

