var T = 0;
var h, m, s;

function count() {

    h = (Math.floor((T / 3600) % 60));
    m = (Math.floor((T / 60) % 60));
    s = (Math.floor(T % 60));
    if (h < 10)
        h = "0" + h
    if (m < 10)
        m = "0" + m
    if (s < 10)
        s = "0" + s

    document.getElementById("time").innerHTML = h + ":" + m + ":" + s
    T++;
}

function mystart() {
    keeper = setInterval(count, 1000);
}

function mystop() {
    clearInterval(keeper);
}

function myreset() {
    clearInterval(keeper);
    document.getElementById("time").innerHTML = "00:00:00"
    T = 0;
}