var box1 = document.querySelector(".box-1");
var box2 = document.querySelector(".box-2");
var box3 = document.querySelector(".box-3");
var clear = document.querySelector("clear");

document.addEventListener("keydown", function (e) {
    var key = e.key;
    if (key === "1") {
        box1.innerText = "✨";
    } else if (key === "2") {
        box2.innerText = "😸";
    } else if (key === "3") {
        box3.innerText = "😊";
    }
});

document.addEventListener("click", function (e) {
    var key = e.key;
    if (key !== "1") {
        box1.innerText = "1";
    // } else if (key !== "2") {
        box2.innerText = "2";
    // } else if (key !== "3") {
        box3.innerText = "3";
    }
});
