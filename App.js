let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turnO  = true;
let newGameBtn = document.querySelector("#new-btn");
let msgContainer  = document.querySelector(".msg-container");
let message = document.querySelector("#msg");
let count  =0;
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       
        if (turnO){
            box.innerHTML="O"
            box.style.color="yellow"
            turnO = false;
        }
        else{
            box.innerHTML="X"
            box.style.color="orange"
            turnO = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWiner();
        if(count===9 && ! isWinner){
            gameDraw();
        }
    })
});
const gameDraw = ()=>{
    msg.innerHTML = `Opps Game was a Draw.`;
    msgContainer.classList.remove('hide');
    disabledBoxes();
}
const disabledBoxes = ()=>{
    for (let box of boxes){
        box.disabled = true;
    }
}
const EnabledBoxes = ()=>{
    for (let box of boxes){
        box.disabled = false;
        box.innerHTML=""
    }
}

const showWinner = (winner)=>{
    msg.innerHTML = `Congrulations Winner is ${winner}` ;
    msgContainer.classList.remove("hide")
    disabledBoxes()

}
const checkWiner = ()=>{
    for ( let pattern of winPattern){
            let pos1Val =  boxes[pattern[0]].innerHTML;
            let pos2Val =  boxes[pattern[1]].innerHTML;
            let pos3Val =  boxes[pattern[2]].innerHTML;
      if(pos1Val !="" && pos2Val !="" && pos3Val != ""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            showWinner(pos1Val)
        }
      }
    }
};
const resetGame = ()=>{
    turn0 = true;
    count=0;
    EnabledBoxes();
    msgContainer.classList.add("hide");
}
newGameBtn.addEventListener('click',resetGame)
resetBtn.addEventListener('click',resetGame)