//键盘被按
$(document).keydown(function(event){       //event是keydowm自带的
    switch (event.keyCode){
        case 37 ://left
            if(moveLeft()){         //是否可以移动
                //随机生成数
                setTimeout("generateOneNumber();",210);
                //移动后，游戏是否结束
                setTimeout("isGameOver();",300);
            }
            break;
        case 38 ://up
            if(moveUp()){         //是否可以移
                //随机生成数
                setTimeout("generateOneNumber();",210);
                //移动后，游戏是否结束
                setTimeout("isGameOver();",300);
            }
            break;
        case 39 ://right
            if(moveRight()){         //是否可以移
                //随机生成数
                setTimeout("generateOneNumber();",210);
                //移动后，游戏是否结束
                setTimeout("isGameOver();",300);
            }
            break;
        case 40 ://down
            if(moveDown()){         //是否可以移动
                //随机生成数
                setTimeout("generateOneNumber();",210);
                //移动后，游戏是否结束
                setTimeout("isGameOver();",300);
            }
            break;
    }
});

function moveLeft(){
    if(!canMoveLeft(board)){
        return false;
    }
    //向左移动
    for(let i=0;i<4;i++){
        for(let j=1;j<4;j++){
            //数字格有值
            if(board[i][j]!==0){
                for(let k=0;k<j;k++){
                    if(board[i][k]===0&&noBlockHorizontalCol(i,k,j,board)){
                        showMoveAnimation(i,j,i,k);
                        board[i][k]=board[i][j];
                        board[i][j]=0;
                    }
                    else if(board[i][k]===board[i][j]&&noBlockHorizontalCol(i,k,j,board)&&!hasConflicted[i][k]){
                        showMoveAnimation(i,j,i,k);
                        board[i][k]+=board[i][j];
                        board[i][j]=0;
                        score+=board[i][k];
                        updateScore(score);
                        hasConflicted[i][k]=true;
                    }

                }
            }

        }
    }
    setTimeout("updateBoardView();",200);
    return true
}

function moveRight(){
    if(!canMoveRight(board)){
        return false
    }
    for(let i=0;i<4;i++){
        for(let j=2;j>=0;j--){
            if(board[i][j]!==0){
                for(let k=3;k>j;k--){
                    if(board[i][k]===0&&noBlockHorizontalCol(i,j,k,board)){
                        showMoveAnimation(i,j,i,k);
                        board[i][k]=board[i][j];
                        board[i][j]=0;
                    }
                    else if(board[i][k]===board[i][j]&&noBlockHorizontalCol(i,j,k,board)&&!hasConflicted[i][k]){
                        showMoveAnimation(i,j,i,k);
                        board[i][k]+=board[i][j];
                        board[i][j]=0;
                        score+=board[i][k];
                        updateScore(score);
                        hasConflicted[i][k]=true;
                    }
                }
            }
        }
    }
    setTimeout("updateBoardView();",200);
    return true
}
function moveUp() {
    if (!canMoveUp(board)) {
        return false
    }
    for (let i = 1; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] !== 0) {
                for (let k = 0; k < i; k++) {
                    if (board[k][j] ===0 && noBlockHorizontalRow(j, k, i, board)) {
                        showMoveAnimation(i, j, k, j);
                        board[k][j] = board[i][j]
                        board[i][j] = 0;

                    } else if (board[k][j] === board[i][j] && noBlockHorizontalRow(j, k, i, board)&&!hasConflicted[k][j]) {
                        showMoveAnimation(i, j, k, j);
                        board[k][j] += board[i][j];
                        board[i][j] = 0;
                        score += board[k][j];
                        updateScore(score);
                        hasConflicted[k][j]=true;
                    }
                }
            }
        }
    }
    setTimeout('updateBoardView()', 200);
    return true
}

function moveDown()
{
    if(!canMoveDown(board))
    {
        return false
    }
    for(let i=2;i>=0;i--)
    {
        for(let  j=0;j<4;j++)
        {
            if(board[i][j]!==0)
            {
                for(let k=3;k>i;k--)
                {
                    if(board[k][j]===0&&noBlockHorizontalRow(j,i,k,board))
                    {
                        showMoveAnimation( i , j , k , j );
                        board[k][j]=board[i][j]
                        board[i][j]=0;
                    }
                    else if(board[k][j]===board[i][j]&&noBlockHorizontalRow(j,i,k,board)&&!hasConflicted[k][j])
                    {
                        showMoveAnimation( i , j , k , j );
                        board[k][j]+=board[i][j];
                        board[i][j]=0;
                        score+=board[k][j];
                        updateScore(score);
                        hasConflicted[k][j]=true;

                    }
                }
            }
        }
    }
    setTimeout('updateBoardView()',200);
    return true
}


function isGameOver(){
    if(noSpace(board)&&noMove(board)){
        gameOver();
    }
}
function gameOver(){
    $("#grid-container").append("<div id='gameOver' class='gameOver'><p>本次得分</p><span>"+score+"</span><a href='javascript:restartGame();' id ='restartGameButton'>Restart</a></div>");
    let gameOver=$("#gameOver");
    gameOver.css("width","500px");
    gameOver.css("height","500px");
    gameOver.css("background-color","rgba(0,0,0,0.5)");
}


