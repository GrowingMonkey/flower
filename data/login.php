<?php
    header('Content-Type:application/json;charset=utf-8');
    @$phone=$_REQUEST['phone'] or die('{"code":-1,"msg":"phone required"}');
    @$upwd=$_REQUEST['upwd'] or die('{"code":-1,"msg":"upwd required"}');
    require('init.php');
    $sql="SELECT uid FROM huaban_users WHERE phone='$phone' AND upwd='$upwd'";
    $result=mysqli_query($conn,$sql);
        $user=mysqli_fetch_row($result);
        if($user===null){
            $list=[
            "code"=>-2,
            "msg"=>"用户名或密码错误!"
            ];
        }else{
            $list=[
            "code"=>1,
            "msg"=>"login succ",
            "uname"=>$phone,
            ];
        }
        echo json_encode($list);
?>