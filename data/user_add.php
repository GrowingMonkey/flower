<?php
header('Content-Type:application/json;charset=utf-8');

@$phone=$_REQUEST['phone'] or die('{"code":-2,"msg":"电话号码不能为空"}');
@$upwd=$_REQUEST['upwd'] or die('{"code":-3,"msg":"密码不能为空"}');
$time=time()*1000;
require('init.php');
$sql="SELECT uid FROM huaban_users WHERE phone=$phone";
$result=mysqli_query($conn,$sql);
$uid=mysqli_fetch_row($result);
if($uid==null){
    $sql="INSERT INTO huaban_users VALUES(NULL,'$phone','$upwd','$time')";
    $result=mysqli_query($conn,$sql);
    if($result===false){
        $output=[
            "code"=>-1,
            "msg"=>"注册失败",
            "sql"=>$sql
        ];
    }else{
        $output=[
            "code"=>1,
            "msg"=>"注册成功",
            "uid"=>mysqli_insert_id($conn)
        ];
    }

}
else{
    $output=[
            "code"=>-1,
            "msg"=>"注册失败,该用户名已存在!"
        ];
}

echo json_encode($output);
?>