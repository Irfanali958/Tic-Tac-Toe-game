let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgame = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let chance0 = false;
let count = 0;

const winpatterns =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const resetGame = () =>{
    chance0 = false;
    enableboxes();
    msgcontainer.classList.add("hide");
    count=0;
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(chance0){
            box.innerText = "O";
            chance0 = false;
        }
        else{
            box.innerText = "X";
            chance0 = true;
        }
        box.disabled=true;
        let iswinner = checkWinner();
        count++;

        if(count == 9 && !iswinner){
            gamedraw();
        }
    });
});

const gamedraw = ()=>{
    msg.innerText = "The game is draw";
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const disableboxes= () =>{
        for(let box of boxes){
            box.disabled = true;
        }
};

const enableboxes= () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showwinner =(winner)=>{
        msg.innerText = `Congratulation, The winner is ${winner}`;
        msgcontainer.classList.remove("hide");
        disableboxes();
};
    
const checkWinner = ()=>{
    for(let pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
         if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner",pos1val);
                showwinner(pos1val)
            }
        }
    }
};

resetbtn.addEventListener("click",resetGame);
newgame.addEventListener("click",resetGame);