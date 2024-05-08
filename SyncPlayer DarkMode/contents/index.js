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
    data: { param: "setvideo", na: window.btoa(document.getElementById("na").value) },
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
  if (v.readyState == 4) { document.getElementById("con2").innerText = ""; document.getElementById("con2").style.visibility = "hidden"; } 
  else if (v.src == window.location.href || v.src == "") { document.getElementById("con2").innerText = "No media"; document.getElementById("con2").style.visibility = "visible"; } 
  else { document.getElementById("con2").innerText = "Please wait"; document.getElementById("con2").style.visibility = "visible"; }
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
        con1.innerText = "Paused";
        con1.style.opacity = "1";
        setTimeout(function () { con1.style.opacity = "0"; }, 500);
      }
       else if (response.stat == "0" && v.paused) {
        v.play();
        con1.innerText = "Play";
        con1.style.opacity = "1";
        setTimeout(function () { con1.style.opacity = "0"; }, 500);
      }
      var imagedata = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVBAMAAABbObilAAAAG1BMVEX///9HcEz///////////////////////////8zZYOpAAAACXRSTlP/AN67jUJZJhB0tW6uAAAAr0lEQVQI1y2PvQvCQAzFH23FtbEWbzyqguOJ4Fwt7lqwONpB7NiK6NxB8M/25WwOkh/5eLlARGZFtu1FYoikDsCi95xDbamc4G81OR94HCNlCAtLF4Mt4UmezFzRAivxAjkfavIDsHAIOnKibBFwp0xVigpDXiewIx81SzcSMSw7TFg7vPe+g0PZfJNRooWxUWe+8nER/1bqKgqtyWnj+dXrLdVFsfF3mep2ru689wfcjxoMt/n+7wAAAABJRU5ErkJggg==" ;
      var s = response.msg;
      var j = s.split("</div>");
      var s1 = '' ;
      for(i = 0; i < j.length; i++) {
        j[i] += " <img src='"+imagedata+"' style='position: absolute; left: -28px; top: 0.5em; border: 1px solid white; border-radius: 50%;'></div>";
        s1 += j[i];
      }
      abc123.innerHTML = s1;
      if (s11.value == "0") {
        abc123.scrollTop = abc123.scrollHeight;
      }
      if (document.getElementById("fram2").value !== window.atob(response.url)) {
        document.getElementById("fram2").value = window.atob(response.url);
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
      var imagedata = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVBAMAAABbObilAAAAG1BMVEX///9HcEz///////////////////////////8zZYOpAAAACXRSTlP/AN67jUJZJhB0tW6uAAAAr0lEQVQI1y2PvQvCQAzFH23FtbEWbzyqguOJ4Fwt7lqwONpB7NiK6NxB8M/25WwOkh/5eLlARGZFtu1FYoikDsCi95xDbamc4G81OR94HCNlCAtLF4Mt4UmezFzRAivxAjkfavIDsHAIOnKibBFwp0xVigpDXiewIx81SzcSMSw7TFg7vPe+g0PZfJNRooWxUWe+8nER/1bqKgqtyWnj+dXrLdVFsfF3mep2ru689wfcjxoMt/n+7wAAAABJRU5ErkJggg==" ;
      var s = response.msg;
      var j = s.split("</div>");
      var s1 = '' ;
      for(i = 0; i < j.length; i++) {
        j[i] += " <img src='"+imagedata+"' style='position: absolute; left: -28px; top: 0.5em; border: 1px solid white; border-radius: 50%;'></div>";
        s1 += j[i];
      }
      abc123.innerHTML = s1;
      if (s11.value == "0") { abc123.scrollTop = abc123.scrollHeight; }
      if (document.getElementById("fram2").value !== window.atob(response.url)) {
        document.getElementById("fram2").value = window.atob(response.url);
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

function inverty() {
  var x = document.getElementById("abc");
  if(x.style.filter == ""){ x.style.filter = "invert(100%)" ; }
  else { x.style.filter = "" ; }
}