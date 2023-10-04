function timer(){
    var date=new Date();
    var hours=date.getHours();
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();
    var day=date.getDay();
    var daay=date.getDate();
    var year=date.getFullYear();
    var month
    var data;
    var time;
    var timezoon;
    if(hours==0){
        hours=12;
        timezoon="AM";
    }
    else if(hours>12){
        hours-=12;
        timezoon="PM";
    }
    switch (date.getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
        }
        switch (date.getMonth()) {
            case 0:
                month="January";
                break;
            case 1:
                month="February";
                break;
            case 2:
                month="March";
                break;
            case 3:
                month="April";
                break;
            case 4:
                month="May";
                break;
            case 5:
                month="June";
                break;
            case 6:
                month="July";
                break;
            case 7:
                month="August";
                break;
            case 8:
                month="September";
                break;
            case 9:
                month="October";
                break;
            case 10:
                month="November";
                break;
            case 11:
                month="December";
                break;
            default:
                month="Invalid month";
                break;
            }
    hours=hours< 10 ? "0" + hours :hours;
    minutes=minutes< 10 ? "0" + minutes :minutes;
    seconds=seconds< 10 ? "0" + seconds :seconds;
    time = hours + " "+  ":" + " "+ minutes + " " + ":" + " "+  seconds + " "+ timezoon ;
    data = day + "," +" "+ daay + " "+ "," + " "+ month + " " + "," + year;
    document.getElementById("time").innerHTML=time;
    document.getElementById("date").innerHTML=data;
    setTimeout(timer,1000);
}
timer();