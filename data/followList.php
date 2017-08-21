<?php
    header("Content-Type:application/json;charset=utf-8");
    @$fid=$_REQUEST['fid'] or die('{"code":-2,"msg":"fid require"}');
    require('init.php');
    $sql="SELECT * FROM followImg WHERE fid='$fid'";
    $result=mysqli_query($conn,$sql);
    $list=mysqli_fetch_all($result,MYSQLI_ASSOC);

    echo json_encode($list);
?>