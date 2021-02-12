function showNumberWithAnimation(i,j,randNumber){
    let numberCell = $("#number-cell-"+i+"-"+j);
    numberCell.css("background-color",getNumberBackgroundColor(randNumber));
    numberCell.css("color",getNumberColor(randNumber));
    numberCell.text(randNumber);
    numberCell.animate({
        width: "100px",
        height: "100px",
        top:getPosTop(i,j),
        left:getPosLeft(i,j)
    },50);

}

function showMoveAnimation(fromX,fromY,toX,toY){
    //获取当前数字格的元素
    let numberCell=$("#number-cell-"+fromX+"-"+fromY);
    numberCell.animate({
        top: getPosTop(toX,toY),
        left: getPosLeft(toX,toY)
    },200);
}

function updateScore(score){
    $("#score").text(score);
}