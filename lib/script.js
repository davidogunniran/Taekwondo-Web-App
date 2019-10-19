$(document).ready(function () {
    // var timer = [0,0,0,0];
    // const mainTime = $(".game-time");

    // //add leading zeros to numbers 9 or below
    // function leadingZero(time) {
    //     if (time <= 9) {
    //         time = "0" + time;
    //     }
    //     return time;
    // }   

    // //count down timer
    // function runTimer() {
    //     let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    //     mainTime.html(currentTime);
    //     timer[3]--;

    //     timer[0] = Math.floor((timer[3]/100)/60);
    //     timer[1] = Math.floor((timer[3]/100)-(timer[0]*60));
    //     timer[2] = Math.floor(timer[3]-(timer[1]*100) - (timer[0]*6000));
    // }

//New
    const gameTime = $(".game-time").html();
    var timer2 = gameTime;

    function runTimer2() {
        var countdown = timer2.split(":");
        var minutes = parseInt(countdown[0], 10);
        var seconds = parseInt(countdown[1], 10);
        --seconds;
        minutes = (seconds < 0) ? --minutes : minutes;
        seconds = (seconds  < 0) ? 59 : seconds;
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        //minutes = (minutes < 10) ?  minutes : minutes;
        $('.game-time').html(minutes + ':' + seconds);
        if (minutes < 0) clearInterval(interval);
        //check if both minutes and seconds are 0
        if ((seconds <= 0) && (minutes <= 0)) clearInterval(interval);
        timer2 = minutes + ':' + seconds;
    }
    //event listener for keyboard input
    $(window).one("keypress", function(e) {
        if(e.which==32){
            // setInterval(runTimer, 10)
            setInterval(runTimer2, 1000)   
            // console.log("Spacebar");
            // return false
            e.preventDefault();
        }
    });
    //to pause timer
    $(window).one("keydown", function(e){
        if(e.which==32){
            clearInterval(setInterval(runTimer2, 1000));
            setInterval() = null;
            return false;
        }        
    });
});7