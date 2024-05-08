<html>

<head>
<meta name = "viewport" content = "width=device-width, initial-scale=1">
<title>Sync Player</title>
<link rel = "icon" href = "contents/images/icon.png" type = "image/png">

<style>

body {
  background-color: white;
  background-image: url("contents/images/a.gif"); background-position: center; background-repeat: no-repeat; background-size:cover ;
  display: flex;
  justify-content: center;
  font-family: "Consolas";
  font-weight: bolder;
  color: black;
  align-items: center;
  flex-wrap: wrap;
}
#yu {
  max-width: 95%;
  height: auto;
  border-radius: 0.5em;
  box-shadow: 0 5px 10px #0003;
  animation: scale 0.5s ease-in-out;
}
@keyframes scale {
  0% {
    opacity: 0;
    transform: scale(0.75);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
p,
button {
  font-size: 1.5em;
  max-width: 100%;
  text-align: center;
  animation: scale 1s ease-in-out;
}
button {
  cursor: pointer;
  font-size: 1.2em;
  text-decoration: none;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  color: white;
  text-shadow: 1px 2px 1px black;
  font-family: "Segoe UI";
  font-weight: 500;
  border: 2px outset rgb(100, 100, 100);
  background-color: rgb(50, 50, 50);
  display: block;
  animation: scale 2s ease-in-out;
}
button:active {
  border: 2px outset rgb(50, 50, 50);
}
#ac {
  width: 50%;
  font-size: 1em;
  margin-top: 50px;
  border-radius: 30px;
  padding: 14px;
  outline: none;
  border-style: none;
  background-color: rgb(50, 50, 50);
  color: white;
  box-shadow: 2px 2px 5px grey;
  padding-left: 30px;
  padding-right: 30px;
  text-align: center;
  transition: transform 0.5s;
  caret-color:transparent;
}
#ac:focus {
  box-shadow: 2px 2px 5px gold, -2px -2px 5px gold;
  transform: scale(1.2);
}

</style>
</head>

<body>

<img src="contents/images/a.png" alt="" id="yu">

<p>
Sync Player platform where you can watch videos together
<input type="password" name="" id="ac" placeholder="Passcode">
</p>

<center>
<button onclick = "pass('index1.php')"> Watch YouTube </button> <br>
<button onclick = "pass('index2.php')"> Watch Movie </button> <br><br>
</center>

<script>
  function pass(str) {
    if (document.getElementById("ac").value === "9474") {
      window.location.href = "contents/" + str ;
    }
  }
</script>

</body>
</html>

