function reloadClock() {
    playSound();
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    const segGrad = 270 + sec * 6;
    const minGrad = 270 + min * 6;
    const hourGrad = hour > 12 ? 270 + (hour - 12) * 30 + (min / 2) : hour * 30 + (min / 2);

    document.getElementById("seconds").style.transform = "rotate(" + segGrad + "deg) translate(47px)";
    document.getElementById("minutes").style.transform = "rotate(" + minGrad + "deg) translate(47px)";
    document.getElementById("hour").style.transform = "rotate(" + hourGrad + "deg) translate(30px)";

    setTimeout("reloadClock()", 1000);
}

const playSound = () => {
    let ticTac = document.getElementById("audio");
    ticTac.play();
}

function onOf() {
    const bombeta  = document.getElementById("bombeta");
    const bombilla = document.getElementById("bombilla");
    const overlay = document.getElementById("overlay");
    const switchWall = document.getElementById("switchWall");
    const light = document.getElementById("switch");

    if (bombeta.className == "bombeta bombeta_off") {
        light.className = "switch switch-on";
        bombeta.className = "bombeta bombeta_on";
        bombilla.className = "bombilla bombilla_on";
        overlay.className = "";
        switchWall.className = "switch-wall switch-wall-on";
    } else {
        light.className = "switch switch-off";
        bombeta.className = "bombeta bombeta_off";
        bombilla.className = "bombilla bombilla_off";
        overlay.className = "overlay";
        switchWall.className = "switch-wall switch-wall-off";
    }
}