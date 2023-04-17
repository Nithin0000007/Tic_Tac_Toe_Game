let audioTurn = new Audio("/javascript/Tic Tac Toe/music/point.mpeg");
let gameBg = new Audio("/javascript/Tic Tac Toe/music/bgmusic.mp3");
gameBg.play();
let gameover = new Audio("/javascript/Tic Tac Toe/music/win.mp3");
let boxes = document.getElementsByClassName("box");
let turn = "X";
let isgameover = false;
let boxtext = document.getElementsByClassName("box-text");

function changeTurn() {
    return turn === "X" ? "O" : "X";
}



function checkWin() {
    let win = [
        [0, 3, 6],
        [0, 1, 2],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        [1, 4, 7],
        [3, 4, 5],
        [6, 7, 8],
    ]

    win.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = "500px";
            gameover.play();
        }
    })

}


Array.from(boxes).forEach(box => {
    let boxText = box.querySelector(".box-text");
    box.addEventListener("click", function () {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "turn for" + turn;
            }
        }
    })
})


let reset = document.getElementById("reset");

reset.addEventListener("click", function () {
    Array.from(boxes).forEach(element => {
        let boxText123 = element.querySelector(".box-text");
        boxText123.innerText = "";
        turn = "X";
        isgameover = false;
        document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
        document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = "0px";
    });
})