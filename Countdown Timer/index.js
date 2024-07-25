v1 = document.getElementById("days");
v2 = document.getElementById("hrs");
v3 = document.getElementById("mins");
v4 = document.getElementById("secs");
p1 = document.getElementById("p1");
p2 = document.getElementById("p2");
p3 = document.getElementById("p3");
p4 = document.getElementById("p4");
b1 = document.querySelector(".b1");
b2 = document.querySelector(".b2");
b3 = document.querySelector(".b3");
var a = 0,
  c = 0,
  st = 0;
var days, hrs, mins, secs;
v1.value = "00";
v2.value = "00";
v3.value = "00";
v4.value = "00";
b1.addEventListener("click", () => {
  days = 0;
  hrs = 0;
  mins = 0;
  secs = 0;
  v1.value = "0" + days;
  v2.value = "0" + hrs;
  v3.value = "0" + mins;
  v4.value = "0" + secs;
  clearInterval(t);
  a = 0;
  st = 0;
});
b2.addEventListener("click", () => {
  if (st == 0) {
    days = parseInt(v1.value);
    hrs = parseInt(v2.value);
    mins = parseInt(v3.value);
    secs = parseInt(v4.value);
    st = 1;
  }
  if (a == 0) {
    t = setInterval(play, 1000);
    a = 1;
  }
});
b3.addEventListener("click", () => {
  clearInterval(t);
  a = 0;
});
function play() {
  secs -= 1;
  if (secs >= 10 && secs < 60) {
    if (days < 10 && hrs < 10 && mins < 10) {
      v1.value = "0" + days;
      v2.value = "0" + hrs;
      v3.value = "0" + mins;
      v4.value = secs;
    } else if (days < 10 && hrs < 10 && mins >= 10) {
      v1.value = "0" + days;
      v2.value = "0" + hrs;
      v3.value = mins;
      v4.value = secs;
    } else if (days < 10 && hrs >= 10 && mins < 10) {
      v1.value = "0" + days;
      v2.value = hrs;
      v3.value = "0" + mins;
      v4.value = secs;
    } else if (days < 10 && hrs >= 10 && mins >= 10) {
      v1.value = "0" + days;
      v2.value = hrs;
      v3.value = mins;
      v4.value = secs;
    } else if (days >= 10 && hrs < 10 && mins < 10) {
      v1.value = days;
      v2.value = "0" + hrs;
      v3.value = "0" + mins;
      v4.value = secs;
    } else if (days >= 10 && hrs >= 10 && mins < 10) {
      v1.value = days;
      v2.value = hrs;
      v3.value = "0" + mins;
      v4.value = secs;
    } else if (days >= 10 && hrs < 10 && mins >= 10) {
      v1.value = days;
      v2.value = "0" + hrs;
      v3.value = mins;
      v4.value = secs;
    } else {
      v1.value = days;
      v2.value = hrs;
      v3.value = mins;
      v4.value = secs;
    }
  } else if (secs >= 0 && secs < 10) {
    if (days < 10 && hrs < 10 && mins < 10) {
      v1.value = "0" + days;
      v2.value = "0" + hrs;
      v3.value = "0" + mins;
      v4.value = "0" + secs;
    } else if (days < 10 && hrs < 10 && mins >= 10) {
      v1.value = "0" + days;
      v2.value = "0" + hrs;
      v3.value = mins;
      v4.value = "0" + secs;
    } else if (days < 10 && hrs >= 10 && mins < 10) {
      v1.value = "0" + days;
      v2.value = hrs;
      v3.value = "0" + mins;
      v4.value = "0" + secs;
    } else if (days < 10 && hrs >= 10 && mins >= 10) {
      v1.value = "0" + days;
      v2.value = hrs;
      v3.value = mins;
      v4.value = "0" + secs;
    } else if (days >= 10 && hrs < 10 && mins < 10) {
      v1.value = days;
      v2.value = "0" + hrs;
      v3.value = "0" + mins;
      v4.value = "0" + secs;
    } else if (days >= 10 && hrs >= 10 && mins < 10) {
      v1.value = days;
      v2.value = hrs;
      v3.value = "0" + mins;
      v4.value = "0" + secs;
    } else if (days >= 10 && hrs < 10 && mins >= 10) {
      v1.value = days;
      v2.value = "0" + hrs;
      v3.value = mins;
      v4.value = "0" + secs;
    } else {
      v1.value = days;
      v2.value = hrs;
      v3.value = mins;
      v4.value = "0" + secs;
    }
  } else {
    if (days > 0 || hrs > 0 || mins > 0) {
      secs = 59;
    } else {
      clearInterval(t);
    }
    if (mins > 0) {
      mins -= 1;
    } else {
      if (hrs > 0) {
        mins = 59;
        hrs -= 1;
      } else {
        if (days > 0) {
          mins = 59;
          hrs = 23;
          days -= 1;
        }
      }
    }
  }
}
