<html>

<head>
<meta name = "viewport" content = "width=device-width, initial-scale=1">
<title>Sync Player</title>
<link rel = "icon" href = "images/icon.png" type = "image/png">
<link rel = "stylesheet" href = "index.css">
</head>

<body>

<input type="hidden" id="fram2" value="">
<input type="hidden" id="scrolling" value="0">

<div id="abc1">
<iframe id="fram1" src="" frameborder="0"></iframe>
<img src="images/fs.png" class="con3" onclick = "FS(document.documentElement)" style="background-color: rgba(0,0,0,0.55); right:0px;">

</div> 

<div id="abc">

<div id="abc123" onclick = "document.getElementById('scrolling').value='1'"></div>
<img src="images/dc.png" class="con3" onclick = "clear1()">
<img src="images/home.png" class="con3" onclick = "location.href = '../index.php';" style="top:40px;">
<img src="images/daynight.png" class="con3" onclick = "inverty();" style="top:80px;">
<div id="def"> 

<input type="text" name="na" id="na"
 spellcheck="false"
 placeholder="Type here"
 autocomplete='off'
 onkeyup = "if (event.keyCode == 13) { send1(); }"
 onclick = "document.getElementById('scrolling').value='0'" >
<img id="setvideoimg" src='images/play.png' onclick = "setVideo();">
</button>

</div>

</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script> <script src="index.js"></script>
<script> setInterval(getstates, 1000); </script>

</body>
</html>