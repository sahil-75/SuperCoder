var character = document.getElementById("character");
var block = document.getElementById("block");

function jump() {
    console.log('hello')
    character.classList.add("jumpAnimation");
    setTimeout(function () {
        character.classList.remove("jumpAnimation");
    }, 1000);
}

var gameOver = setInterval(function () {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft > 0 && blockLeft < 50 && characterTop > 350) {
        block.style.left = "50px";
        block.style.animation = "none";
        setTimeout(function () {
            if (!alert('Game Over')) {
                window.location.reload();
            }
        }, 100);
    }
}, 100);