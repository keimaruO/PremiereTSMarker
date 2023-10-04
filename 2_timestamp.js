//タイムコードのテキストファイルの行ごとに配列に挿入
var mytextArray =[]; 

//テキストファイルを行ごとに読み込み
function readtext(){
var fileDirectory = File.openDialog("Select Text file","");
var myFile = new File(fileDirectory);
    if (myFile.open("r")){
        var myText = "";
        while(!myFile.eof){
            mytextArray.push(myFile.readln())
        }
    }
myFile.close();
}

//タイムコードのテキストファイルを秒数に変換
//ちなみにテキストファイルのタイムコードはフレームは無しで00:00:00 or 00:00のように時間：分：秒で格納されている

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
    
    return hours+minutes+seconds;
}

//とりまテキストファイルを配列に入れる関数を実行
readtext()

//あとは配列の分だけマーカー作成を実行
//CREATE NEW MARKERS
for (var i=0; i < mytextArray.length ; i++ ){
    var markers = app.project.activeSequence.markers;
    var newMark = markers.createMarker(timecodeToSecond(mytextArray[i]));
}