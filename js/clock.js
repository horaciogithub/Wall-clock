function reloadClock() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let segGrad = 270 + sec * 6;
    let minGrad = 270 + min * 6;
    let hourGrad;

    if (hour > 12) {
        hourGrad = 270 + (hour - 12) * 30 + (min / 2);
    } else {
        hourGrad = hour * 30 + (min / 2);
    }

    document.getElementById("seconds").style.transform = "rotate(" + segGrad + "deg) translate(47px)";
    document.getElementById("minutes").style.transform = "rotate(" + minGrad + "deg) translate(47px)";
    document.getElementById("hour").style.transform = "rotate(" + hourGrad + "deg) translate(30px)";

    // Audio
    let ticTac = document.getElementById("audio");
    ticTac.play();

    setTimeout("reloadClock()", 1000);
}

function onOf() {
    let light = document.getElementById("switch");
    let bulb = document.getElementById("bulb");
    let overlay = document.getElementById("overlay");
    let switchWall = document.getElementById("switchWall");

    if (light.className == "switch switch-off") {
        light.className = "switch switch-on";
        bulb.className = "bulb bulb-on";
        overlay.className = "";
        switchWall.className = "switch-wall switch-wall-on";
    } else {
        light.className = "switch switch-off";
        bulb.className = "bulb bulb-off";
        overlay.className = "overlay";
        switchWall.className = "switch-wall switch-wall-off";
    }
}