

// function t10(event) {
// let div = document.querySelector('.div-10 img');
// let style = getComputedStyle(div);
// let width = parseInt(style.width);
// let height = parseInt(style.height);

// if (event.keyCode == 37 || event.keyCode == 39) {
//     div.style.width = (width + 1) + "px"; 
//     div.style.height = height + "px";
// }

// if (event.keyCode == 38 || event.keyCode == 40) {
//     div.style.width = width + "px";
//     div.style.height = (height + 1) + "px";
// }

// }


//document.querySelector('.i-10').onkeydown = t10;


function t11(event) {
    
    
    let keyBoard = document.querySelectorAll('.container-2 div');
    for (let i = 0; i < keyBoard.length; i++) {
        let atr = keyBoard[i].getAttribute('data-key');
        
        if (event.code == atr) {
            keyBoard[i].classList.toggle('bg-red');       
        }
   }

}

function t11_2(event) {
    let keyBoard = document.querySelectorAll('.container-2 div');
    for (let i = 0; i < keyBoard.length; i++) {
       
        let atr = keyBoard[i].getAttribute('data-key');
        if(event.code === "CapsLock" || atr === "CapsLock") continue;
        if( keyBoard[i].classList.contains('bg-red')) keyBoard[i].classList.remove("bg-red");
    }
    
}




document.addEventListener("keydown", t11)
document.addEventListener("keyup", t11_2) 
document.addEventListener("keydown", (event)=> console.log(event))