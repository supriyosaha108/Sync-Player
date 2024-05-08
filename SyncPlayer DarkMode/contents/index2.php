<html>

<head>
<meta name = "viewport" content = "width=device-width, initial-scale=1">
<title>Sync Player</title>
<link rel = "icon" href="images/icon.png" type = "image/png">
<link rel = "stylesheet" href = "index.css">
</head>

<body>

<input type="hidden" id = "fram2" value="">
<input type="hidden" id = "scrolling" value="0">

<div id="abc1">
<span id="con1" class="con1"></span>
<span id="con2" class="con1"></span>
<video id="fram1" src=""
type='video/x-matroska; codecs="theora, vorbis"'
onclick = "playpause(event)"
ondblclick = "videoseek(event)" 
poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
style = "object-fit: cover";
>
</video>
<img src="images/resize.png" class="con3" onclick = "changescale()" style="right:45px;" >
<img src="images/fs.png" class="con3" onclick = "FS(document.documentElement)">
</div> 

<div id="abc">
<div id="abc123" onclick = "document.getElementById('scrolling').value='1';"></div>
<img src="images/dc.png" class="con3" onclick = "clear1()">
<img src="images/home.png" class="con3" onclick = "location.href = '../index.php';" style="top:40px;">
<img src="images/daynight.png" class="con3" onclick = "inverty();" style="top:80px;">
<div id="def"> 
<input type="text" name="na" id="na"
 spellcheck="false"
 placeholder="Type here"
 autocomplete='off'
 onkeyup="if (event.keyCode == 13) { send1(); }"
 onclick = "document.getElementById('scrolling').value='0';">
<img id="setvideoimg" src='images/play.png' onclick = "setVideo();">
</div> 
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
<script src="index.js"></script>
<script> setInterval(getplaystats, 1000); </script>

</body>
</html>