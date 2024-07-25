v = document.getElementById("t1");
v.value = "0";
var ans,
  o,
  t = "",
  v1,
  v2;
function getInput(a) {
  if (v.value == "0") {
    if (a != "+" && a != "*" && a != "/" && a != "%") {
      v.value = a;
    } else {
      v.value = v.value + a;
    }
  } else {
    v.value = v.value + a;
  }
}
function clearall() {
  v.value = "0";
  ans = null;
  t = "";
  v1 = null;
  o = null;
}
function remove() {
  if (v.value != "0" && v.value.length != 1) {
    v.value = v.value.substring(0, v.value.length - 1);
  } else {
    v.value = "0";
  }
}
function result() {
  for (i = 0; i < v.value.length; i++) {
    if (
      v.value[i] == "+" ||
      v.value[i] == "-" ||
      v.value[i] == "*" ||
      v.value[i] == "/" ||
      v.value[i] == "%" ||
      i == v.value.length - 1
    ) {
      if (o == null) {
        if (t == "") {
          t = "0";
        }
        ans = parseFloat(t);
        t = "";
      } else {
        if (o == "+") {
          if (i == v.value.length - 1) {
            t += v.value[i];
          }
          ans = ans + parseFloat(t);
          t = "";
        } else if (o == "-") {
          if (i == v.value.length - 1) {
            t += v.value[i];
          }
          ans = ans - parseFloat(t);
          t = "";
        } else if (o == "*") {
          if (i == v.value.length - 1) {
            t += v.value[i];
          }
          ans = ans * parseFloat(t);
          t = "";
        } else if (o == "/") {
          if (i == v.value.length - 1) {
            t += v.value[i];
          }
          if (t == "0") {
            ans = "Error!";
            break;
          }
          ans = ans / parseFloat(t);
          t = "";
        } else if (o == "%") {
          if (i == v.value.length - 1) {
            t += v.value[i];
          }
          ans = ans % parseFloat(t);
          t = "";
        }
      }
      if (
        v.value[i] == "+" ||
        v.value[i] == "-" ||
        v.value[i] == "*" ||
        v.value[i] == "/" ||
        v.value[i] == "%"
      ) {
        o = v.value[i];
      }
    } else {
      t += v.value[i];
    }
  }
  if (o == null) {
    ans = parseFloat(v.value);
  }
  if ("" + ans == "NaN") {
    ans = "Error!";
  }
  console.log(ans);
  v.value = ans;
  ans = null;
  o = null;
  t = "";
}
