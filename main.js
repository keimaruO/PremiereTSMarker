var mytextArray = []; 

// テキストファイルを一行ずつ読み
function readtext(){
    var fileDirectory = File.openDialog("Select Text file","");
    var myFile = new File(fileDirectory);
    if (myFile.open("r")){
        while(!myFile.eof){
            var line = myFile.readln();
            var parts = line.split(" ");
            if (parts.length >= 2) {
                mytextArray.push({
                    timestamp: parts[0],
                    comment: parts.slice(1).join(" ")
                });
            }
        }
    }
    myFile.close();
}

// タイムコードを秒に変換
function timecodeToSecond(timeString){
    var timeArray = timeString.split(":");
    var hours = 0, minutes = 0, seconds = 0;
    if (timeArray.length == 3) {
        hours = parseInt(timeArray[0]) * 60 * 60;
        minutes = parseInt(timeArray[1]) * 60;
        seconds = parseInt(timeArray[2]);
    } else if (timeArray.length == 2) {
        minutes = parseInt(timeArray[0]) * 60;
        seconds = parseInt(timeArray[1]);
    } else {
        seconds = parseInt(timeArray[0]);
    }
    
    return hours + minutes + seconds;
}

// テキストファイルを読みこ
readtext();

// マーカー作成
for (var i=0; i < mytextArray.length ; i++ ){
    var markers = app.project.activeSequence.markers;
    var newMark = markers.createMarker(timecodeToSecond(mytextArray[i].timestamp));
    newMark.name = mytextArray[i].comment;
    newMark.comments = mytextArray[i].timestamp; // マウスでフォーカスするとコメント表示

    // マーカーごとに異なる色を割り当て
    var colorIndices = [0, 1, 2, 3, 4, 5, 6, 7]; // 0 = Green, 1 = Red, 2 = Purple, 3 = Orange, 4 = Yellow, 5 = White, 6 = Blue, 7 = Cyan
    newMark.setColorByIndex(colorIndices[i % colorIndices.length], i);
}