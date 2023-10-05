// Array to store timestamps and comments
var mytextArray = []; 

// Read the text file line by line
function readtext(){
    var fileDirectory = File.openDialog("Select Text file","");
    var myFile = new File(fileDirectory);
    if (myFile.open("r")){
        while(!myFile.eof){
            var line = myFile.readln();
            var parts = line.split(" "); // Splitting by space to separate timestamp and comment
            if (parts.length >= 2) {
                mytextArray.push({
                    timestamp: parts[0],
                    comment: parts.slice(1).join(" ") // Joining the rest of the parts to form the comment
                });
            }
        }
    }
    myFile.close();
}

// Convert timecode to seconds
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

// Read the text file
readtext();

// Create markers for each timestamp and comment
for (var i=0; i < mytextArray.length ; i++ ){
    var markers = app.project.activeSequence.markers;
    var newMark = markers.createMarker(timecodeToSecond(mytextArray[i].timestamp));
    newMark.name = mytextArray[i].comment; // Set the marker's name or comment to the comment from the text file
    newMark.comments = mytextArray[i].timestamp; // Set the marker's comments to the timestamp for display on hover

    // Assign different colors to the markers
    var colors = ["magenta", "cyan", "yellow", "green", "blue", "red"];
    newMark.color = colors[i % colors.length];
}
