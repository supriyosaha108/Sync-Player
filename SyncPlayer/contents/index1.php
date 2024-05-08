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

<div id="topnav">
<img id="topimg" src='images/c.png' onclick = "window.location.href='../index.php'">
<h1>Sync Player</h1>
<img id="topFS" src='images/fs.png' onclick = "FS(document.documentElement)">
<img id="topFS" src='images/dc.png' onclick = "clear1()">
</div>

<div id="abc1">
<iframe id="fram1" src="" frameborder="0"></iframe>
</div> 

<div id="abc">

<div id="abc123" onclick = "document.getElementById('scrolling').value='1'"></div>

<div id="def"> 

<input type="text" name="na" id="na"
 spellcheck="false"
 placeholder="Type here"
 autocomplete='off'
 onkeyup = "if (event.keyCode == 13) { send1(); }"
 onclick = "document.getElementById('scrolling').value='0'" >

<button onclick = "send1();">
<img id="setvideoimg" src='images/send.png'>
</button>

<button onclick = "setVideo();" id="setvideobtn">
<img id="setvideoimg" src='images/y.png'>
</button>

</div>

</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script> <script src="index.js"></script>
<script> setInterval(getstates, 1000); </script>

</body>
</html>