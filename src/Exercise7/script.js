var audio=new Audio("Creeping_Spiders.mp3");
var date=new Date();
var i=1;



function playpause(){
    if(audio.paused){
        audio.play();
    }
    else{
        audio.pause();
    }
}

function showDate(){
    document.write(date);
}

function cycleColors(){

    if(i===1){
        document.getElementById("button").style.backgroundColor="red";
        i++;
    }
    else if(i===2){

        document.getElementById("button").style.backgroundColor="green";
        i++;
    }
    else if(i===3){

        document.getElementById("button").style.backgroundColor="blue";
        i=1;
    }
}

function printMe() {
    print();
}