let board = [];
let hasConflicted=[];
let score=0;
$(function (){
    newGame();
});

function  newGame(){
    //初始化棋盘格和数字
    init();
    //两个数
    generateOneNumber();
    generateOneNumber();
}
function restartGame() {
    $("#gameOver").remove();
    updateScore(0);
    newGame();

}

function init(){
    for (let i=0;i<4;i++){
        board[i]=[];
        hasConflicted[i]=[];
        for(let j=0;j<4;j++){
            //初始化小格子
             board[i][j] = 0;
             hasConflicted[i][j]=false;
             let gridCell = $("#grid-cell-"+i+"-"+j);
             gridCell.css("top",getPosTop(i,j));
             gridCell.css("left",getPosLeft(i,j));
        }
    }

    updateBoardView();
    score=0;
    $("#score").text(0);
}

function updateBoardView(){
    $(".number-cell").remove();
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
           $("#grid-container").append("<div class='number-cell' id='number-cell-"+ i +'-'+j+"'></div>")
            let numberCell=$("#number-cell-"+i+"-"+j);
            if(board[i][j]===0){
                numberCell.css("width","0px");
                numberCell.css("height","0px");
                numberCell.css("top",getPosTop(i,j)+50);
                numberCell.css("left",getPosLeft(i,j)+50);
            }
            else{
                numberCell.css("width","100px");
                numberCell.css("height","100px");
                numberCell.css("top",getPosTop(i,j));
                numberCell.css("left",getPosLeft(i,j));
                numberCell.css("background-color",getNumberBackgroundColor(board[i][j]));
                numberCell.css("color",getNumberColor(board[i][j]));
                numberCell.text(board[i][j]);
            }
            hasConflicted[i][j]=false;
        }
    }
}


function generateOneNumber(){
    //生成随机数
    //1位置
    let randX=parseInt(Math.floor(Math.random() * 4));
    let randY=parseInt(Math.floor(Math.random() * 4));
    //死循环
    for(;;){
        if(board[randX][randY]===0){
            break;
        }

         randX =parseInt( Math.floor(Math.random() * 4));
         randY =parseInt( Math.floor(Math.random() * 4));

    }
    //2数字2或4
    let randNumber = (Math.random() < 0.5 ? 2 : 4);
    //3显示
    board[randX][randY]=randNumber;
    //动画显示
    showNumberWithAnimation(randX,randY,randNumber);
}
