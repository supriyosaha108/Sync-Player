<?php

$con = mysqli_connect("localhost", "root", "", "vids") or die("Failed");
$param = $_POST['param'];

if($param=="setplay")
{
  $stats = $_POST['stats'];  $time1 = $_POST['time']; 
  if($stats==1){ $q = mysqli_query($con, "update vids set state='$stats', time='$time1' where id='supss'"); }
  else{ $q = mysqli_query($con, "update vids set state='$stats' where id='supss'");}  
}

else if($param=="clear"){
$q = "update vids set msg='' where id='supss';";
$q1 = mysqli_query($con, $q);
}

elseif($param=="resetvideo"){
$q1 = mysqli_query($con, "update vids set url='' , state='1', time='0' where id='supss';");
}

else if($param=="setvideo"){
$na = base64_decode($_POST["na"]); $d = "";
if (strpos($na, 'youtube') or strpos($na, 'youtu.be')) {
$na = str_replace("watch?v=","",$na);
$c = explode("/",$na);
$d = base64_encode("https://www.youtube.com/embed/".$c[count($c)-1]."?autoplay=1&controls=0");}
else { $d = $na; }
$q = "update vids set url='$d' where id='supss';";
$q1 = mysqli_query($con, $q);
echo "success";
}

else if($param=="send1"){
$k = "<div>".$_POST['k']."</div>";
$q = "update vids set msg=CONCAT(msg,'$k') where id='supss';";
$q1 = mysqli_query($con, $q);
}

else if($param=="getplay")
{
$q = mysqli_query($con, "select * from vids where id='supss'"); 
$arr = mysqli_fetch_assoc($q);
$person = array("stat"=>$arr['state'],"time"=>$arr['time'], "msg"=>$arr["msg"], "url"=>$arr["url"]);
header("Content-Type: application/json");
echo json_encode($person);
}

else if($param=="syncplay")
{
$q = mysqli_query($con, "select * from vids where id='supss'"); 
$arr = mysqli_fetch_assoc($q);
$person = array("msg"=>$arr["msg"], "url"=>$arr["url"]);
header("Content-Type: application/json");
echo json_encode($person);
}


?>