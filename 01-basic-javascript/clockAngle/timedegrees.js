function calcDegrees(hr, min) {
    "use strict";
    var DPH = 30;
    var DPM = 6;

    var hourAngle = (hr + min / 60) * DPH;
    var minAngle = min * DPM;
    var handAngle = Math.abs(minAngle - hourAngle);

    if (handAngle > 180) {
        handAngle = 360 - handAngle;
    }
    //
    console.log("Angles\n======\nHour   : " + hourAngle + "°\nMinute : " + minAngle + "°\nAngle  : " + handAngle + "°");
}
/*  var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();

console.log(hours + ":" + minutes);
*/
calcDegrees(2, 50);