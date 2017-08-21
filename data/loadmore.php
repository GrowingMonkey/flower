<?php
    header("Content-Type:application/json;charset=utf-8");
    @$load=$_REQUEST['load'] or die('{"code":-2,"msg":"load require"}');
    $count=3;
   require('init.php');
     $output=[
            'dataimg'=>null,
            'data_intro'=>null
          ];
$sql="SELECT COUNT(*) FROM imgs";
      $result=mysqli_query($conn,$sql);
      $row=mysqli_fetch_row($result);
      //计算总的页数
      $load=$load-1;
      $sql = "SELECT * FROM imgs LIMIT $load,$count";  //MySQL中的分页查询图片
      $result = mysqli_query($conn, $sql);
      $output['dataimg'] = mysqli_fetch_all($result, MYSQLI_ASSOC);
      $sql = "SELECT * FROM intro LIMIT $load,$count";  //MySQL中的分页查询文字
      $result = mysqli_query($conn, $sql);
      $output['data_intro']= mysqli_fetch_all($result, MYSQLI_ASSOC);

      echo json_encode($output);
?>