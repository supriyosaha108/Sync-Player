function FS(element) {
  if (element.requestFullScreen) { element.requestFullScreen(); } 
  else if (element.mozRequestFullScreen) { element.mozRequestFullScreen(); } 
  else if (element.webkitRequestFullScreen) { element.webkitRequestFullScreen(); }
}

function send1() {
  if (document.getElementById("na").value.trim() != "") {
    var xhttp = new XMLHttpRequest();
    $.ajax({
      url: "php/sync.php",
      type: "POST",
      data: { param: "send1", k: document.getElementById("na").value.trim() },
    });
  }
  document.getElementById("na").value = "";
}

function resetvideo() {
  document.getElementById("fram1").src = "";
  $.ajax({ url: "php/sync.php", type: "POST", data: { param: "resetvideo" } });
}

function clear1() {
  $.ajax({ url: "php/sync.php", data: { param: "clear" }, type: "POST" });
}

function setVideo() {
  resetvideo();
  $.ajax({
    url: "php/sync.php",
    data: { param: "setvideo", na: document.getElementById("na").value },
    type: "POST",
  });
  document.getElementById("na").value = "";
}

function setplaystats() {
  var v = document.getElementById("fram1");
  var x;
  if (v.paused) { x = 0; } else { x = 1; }
  $.ajax({
    url: "php/sync.php",
    type: "POST",
    data: { param: "setplay", stats: x, time: v.currentTime },
  });
}

function getplaystats() {
  var v = document.getElementById("fram1");
  if (v.readyState == 4) { document.getElementById("con2").innerText = ""; } 
  else { document.getElementById("con2").innerText = "Please Wait";  }
  var x;
  if (v.paused) { x = 1; } else { x = 0; }
  var abc123 = document.getElementById("abc123");
  var s11 = document.getElementById("scrolling");
  $.ajax({
    url: "php/sync.php",
    type: "POST",
    data: { param: "getplay" },
    success: function (response) {
      if (response.stat == "1" && !v.paused) {
        v.pause();
        if (v.currentTime !== response.time) {
          v.currentTime = response.time;
        }
        con1.innerText = "| |";
        con1.style.opacity = "1";
        setTimeout(function () { con1.style.opacity = "0"; }, 500);
      }
       else if (response.stat == "0" && v.paused) {
        v.play();
        con1.innerText = "▶️";
        con1.style.opacity = "1";
        setTimeout(function () { con1.style.opacity = "0"; }, 500);
      }
      abc123.innerHTML = response.msg;
      if (s11.value == "0") {
        abc123.scrollTop = abc123.scrollHeight;
      }
      if (document.getElementById("fram2").value !== response.url) {
        document.getElementById("fram2").value = response.url;
        document.getElementById("fram1").src = document.getElementById("fram2").value;
      }
    },
  });
}

function getstates() {
  var v = document.getElementById("fram1");
  var abc123 = document.getElementById("abc123");
  var s11 = document.getElementById("scrolling");
  $.ajax({
    url: "php/sync.php",
    type: "POST",
    data: { param: "syncplay" },
    success: function (response) {
      abc123.innerHTML = response.msg;
      if (s11.value == "0") { abc123.scrollTop = abc123.scrollHeight; }
      if (document.getElementById("fram2").value !== response.url) {
        document.getElementById("fram2").value = response.url;
        document.getElementById("fram1").src = document.getElementById("fram2").value;
      }
    },
  });
}

function playpause(event) {
  var vid = document.getElementById("fram1");
  var max = vid.offsetWidth;
  var con1 = document.getElementById("con1");
  if (event.clientX < 0.8 * max && event.clientX > 0.3 * max) {
    setplaystats();
  }
}

function videoseek(event) {
  var vid = document.getElementById("fram1");
  var max = vid.offsetWidth;
  var con1 = document.getElementById("con1");
  if (event.clientX > 0.8 * max) {
    vid.currentTime += 60;
    vid.play();
    con1.innerText = ">>> 60 seconds";
  } else if (event.clientX < 0.3 * max) {
    vid.currentTime -= 60;
    vid.play();
    con1.innerText = "60 seconds <<<";
  }
  con1.style.opacity = "1";
  setTimeout(function () { con1.style.opacity = "0"; }, 500);
}

function changescale() {
  var vid = document.getElementById("fram1");
  if (vid.style.objectFit === "") { vid.style.objectFit = "cover"; }
  else if (vid.style.objectFit === "cover") { vid.style.objectFit = "fill"; }
  else if (vid.style.objectFit === "fill") { vid.style.objectFit = ""; }
}