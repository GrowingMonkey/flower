var fid=sessionStorage['followId'];
//console.log(sessionStorage['followId']);
$(function(){
    $.ajax({
        type:'GET',
        url:'data/followList.php',
        data:{'fid':fid},
        success: function (data) {
            var html="";
                for(var i=0 ;i<data.length;i++){
                    var wfc=data[i];
                    html+=`
                        <div class="wfc">
                     <div class="actions">
                         <div class="right">
                             <a class="btn btn14" href="#">
                                 <i class="heart"></i>
                                 <span class="text"></span>
                             </a>
                         </div>
                         <div class="left">
                             <a class="btn follow" href="#">
                                 <span class="text">采集</span>
                             </a>
                         </div>
                     </div>
                     <a href="#">
                         <img src="images/${wfc.pic}">
                     </a>

                     <p class="description">【岫玉】8月成品【雀金裘】·【昭雪】</p>

                     <p class="stats">
                             <span class="repin">
                                 <i></i>
                                 117
                             </span>
                             <span class="like">
                                 <i></i>
                                 22
                             </span>
                             <span class="conment">
                                 <i></i>
                                 4
                             </span>
                     </p>

                     <div class="attribution">
                         <a href="#">
                             <img class="avt"
                                  src="images/313e8ad99bf0f1b82827b216025038480d6010674aa88-lGrXTo_sq75sf.jpg">

                             <div class="text"></div>
                         </a>

                         <div class="text">
                             <div class="inner">
                                 <div class="line">
                                     <a class="author x" href="#">媝娫</a> 采集到
                                 </div>
                                 <div class="line">
                                     <a class="x" href="#">娃娃系列</a>
                                 </div>
                                 <a class="replyButton" href="#"></a>
                             </div>
                         </div>
                     </div>
                     <div class="comments muted">
                         <div class="comment">
                             <a href="#">
                                 <img class="avt"
                                      src="images/ac3bc40ed20b8549f1126380a74f023efcf3743a8b90-4mZAhP_sq75sf.jpg">
                             </a>

                             <div class="content">
                                 <a class="author" href="#">沈青莺</a> 这不是……bjd...吧
                             </div>
                             <a class="replyButton" href="#"></a>
                         </div>
                         <div class="comment">
                             <a href="#">
                                 <img class="avt"
                                      src="images/1aec88818e4a448a3946250d488dfdd433dd5d74d90-k8YBaq_sq75sf.jpg">
                             </a>

                             <div class="content">
                                 <a class="author" href="#">螃小螃</a> 这是ob娃娃哦
                             </div>
                             <a class="replyButton" href="#"></a>
                         </div>
                     </div>
                     <div class="write">
                         <a href="#">
                             <img class="avt"
                                  src="images/654953460733026a7ef6e101404055627ad51784a95c-B6OFs4_sq75sf.png">
                         </a>

                         <form class="comments">
                             <textarea placeholder="添加评论或把采集@给好友" autocomplete="off"></textarea>
                             <a class="comment_button btn" href="#">
                                 <span class="text">添加评论</span>
                             </a>
                         </form>
                     </div>
                 </div>
                    `;
                }
            $('#waterfall').html(html);
            $(".wfc").each(function(){
                $(this).css(
                    "margin","0 16px 15px 0"
                );
            });
            $("#waterfall").masonry();
        }
    })
    if(sessionStorage['phone']){
        ph=sessionStorage['phone'];
        ph=String(ph).replace(/(\d{3})(\d{4})(\d{4})/g,"$1****$3");
        var html='';
        html=`
            <li class="notice">
               <i class="nav-icon"></i>
            </li>
            <li class="welcome">
                <span>欢迎回来:${ph}</span>
            </li>
    `;
        $('.header_nav_right ul').html(html);
    }
    
    $('#head>.nav_left>ul>li:eq(0)').click(function(){
        location.href="index-find1.html";
    });
    if(sessionStorage['phone']){
            ph=sessionStorage['phone'];
            ph=String(ph).replace(/(\d{3})(\d{4})(\d{4})/g,"$1****$3");
            var html='';
            html=`
            <li class="notice">
               <i class="nav-icon"></i>
            </li>
            <li class="welcome">
                <span>欢迎回来:${ph}</span>
                <ul class="dropdown_login fade">
                    <li><b></b>我的花瓣</li>
                    <li><b></b>私信</li>
                    <li><b></b>我的关注</li>
                    <li><b></b>查找好友</li>
                    <li><b></b>花瓣认证设计师</li>
                    <li><b></b>账号设置</li>
                    <li class="exit"><b></b>退出</li>
                </ul>
            </li>
    `;
            $('.header_nav_right ul:eq(0)').html(html);
            $('.welcome').hover(function () {
                console.log(11)
                $('.dropdown_login').toggleClass("in");
            });
            $('.exit').click(function () {
                sessionStorage.removeItem('phone');
                location.href="index-find1.html";
            })
        }

});

//模态框-登录界面开关
    $("#login").click(function () {
    $('.modal_login').toggle();
});
    $('#close').click(function (e) {
    e.preventDefault();
    $(this).parent().parent().toggle();
});
//模态框-注册界面开关
    $("#regis").click(function () {
    $('.modal_regist').toggle();

});
    $('#regist_close').click(function (e) {
    e.preventDefault();
    $(this).parent().parent().toggle();
});
//注册异步验证
    $('.btn-regist').click(function (e) {
    e.preventDefault();
    //手机号格式验证
    var reg=/^1[3578]{1}\d{9}$/;
    if(!reg.test($('#phone').val())){
        $('#reupwd').next().html('电话号码格式不正确，请重新输入').css({'display':"block","color":"#e4393c"});
    }
    //验证两次输入的密码是否一致
    else if($('#upwd').val()!=$('#reupwd').val()){
        $('#reupwd').next().html('密码不一致,请重新输入!').css({'display':"block","color":"#e4393c"});
    }
    //手机格式及密码验证成功后将数据发送至客户端
    else if($('#upwd').val()==$('#reupwd').val()){
        var phone=$('#phone').val();
        var upwd=$('#upwd').val();
        var html="";
        $.ajax({
            url:"data/user_add.php",
            type:"post",
            data:{phone:phone,upwd:upwd},
            success: function (result) {
                sessionStorage['phone']=phone;
                if(result.code<0){
                    $('#reupwd').next().html(result.msg).css({'display':"block","color":"#e4393c"});
                }if(result.code>0){
                    $('#reupwd').next().html(result.msg+"请稍后...").css({'display':"block","color":"#3c0"});
                    setTimeout(function () {
                        location.href="index-find1.html";
                    },2000)
                }
            }
        });

    }
});

//登录信息验证

    $('.btn-login').click(function (e) {
    e.preventDefault();
    var phone=$('#userphone').val();
    var upwd=$('#userpwd').val();
    $.ajax({
        url:"data/login.php",
        type:"post",
        data:{phone:phone,upwd:upwd},
        success: function (result) {
            if(result.code<0){
                $('.erro').html(result.msg).css({'display':"block","color":"#e4393c"});
            }else if(result.code>0){
                sessionStorage['phone']=phone;
                $('.erro').html("登录成功，请稍后！").css({'display':"block","color":"#3c0"});
                setTimeout(function () {
                    location.href="index-find1.html";
                },1000)
            }
        }
    });
});



