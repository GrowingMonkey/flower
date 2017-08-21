/*广告图片数组*/
//广告轮播
    var imgs = [
        {"img": "images/banner2.jpg"},
        {"img": "images/banner3.jpg"},
        {"img": "images/banner4.jpg"}
    ];
    var slider = {
        LIWIDTH: 0,//保存每个li的宽度
        $imgs: null,//保存轮播的ul imgs元素
        DURATION: 2000,//每次轮播的总时间
        WAIT: 5000,//每次自动轮播之间的时间间隔
        timer: null,//保存自动轮播的定时器序号
        canAuto: true,//保存是否可启动自动轮播
        init() {
            this.LIWIDTH = parseFloat($("#slider").css("width"));
            this.$imgs = $("#imgs");
            this.updateView();
            this.startAuto();
        },
        move(n) {
            this.$imgs.animate({left: -n * this.LIWIDTH}, this.DURATION, ()=> {
                imgs = imgs.concat(imgs.splice(0, n));
                this.updateView();
                this.$imgs.css("left", 0);
                this.startAuto();
            });
        },
        startAuto(){
            this.timer = setTimeout(this.move.bind(this, 1), this.WAIT);
        },
        updateView() {
            for (var i = 0, imgsHTML = ""; i < imgs.length; i++) {
                imgsHTML += `<li><img src=${imgs[i].img}></li>`;
            }
            this.$imgs.html(imgsHTML).css("width", imgs.length * this.LIWIDTH);
        }
    }
    
    slider.init();

//微信二维码显示隐藏功能
    $(".gfwx").hover(function () {
            $(this).children('.wx').toggle();
        }
    );
//下拉菜单
    $("#dropdown").hover(function () {
            $(this).children('.main-menu').toggleClass("in")
        }
    );
//鼠标滚动后效果
    $(window).scroll(function () {
    if ($("body").scrollTop() >= 220) {
        $('.header_nav').addClass('nav_bg');
        $('.header_nav a,.header_nav span').css("color", "#000");
        $('.header_nav_left>ul>li:first-child').css('background', "url(images/logo1.svg) no-repeat");
        $('.header_nav_left>ul>li:last-child').css('background', "url(images/menu_sprite.svg) 0 -248px no-repeat");
        $('#regis').css({'color': '#000', 'background': '#fff', 'border': '1px solid #ddd'});
        $(".nav-search").css("display", "block").click(function () {
            $(this).children('input').css('border', '1px solid #999')
        })
    } else {
        $('.header_nav').removeClass('nav_bg');
        $('.header_nav_left>ul>li>a').css("color", "#fff");
        $('.header_nav_left>ul>li:first-child').css('background', "url(images/logo.svg) no-repeat");
        $('.header_nav_left>ul>li:last-child').css('background', "url(images/menu_sprite.svg) -50px -558px  no-repeat");
        $('#regis').css({'color': '#fff', 'background': 'transparent', 'border': '1px solid #fff'});
        $(".nav-search").css("display", "none");
    }
});

-

//页面载入时函数
$(function () {
        //页面加载完成后一步加载图片
        $.ajax({
            type: 'get',
            url: 'data/loadmore.php',
            data: {'load': 1},
            success: function (data) {
                var html = $('.recommend>.content').html();
                //console.log(data.data_intro[1].resource1);
                if (data) {
                    for (var i = 0; i < data.dataimg.length; i++) {
                        var imgs = data.dataimg[i];
                        var text = data.data_intro[i];
                        html += `
                     <div class="recommend-box">
                        <div class="recommend-box-img">
                            <a href="#"><img src="${imgs.pic1}"  ></a>
                        </div>
                        <div class="recommend-box-img">
                        <div class="recommend-box-img-top">
                            <h1>画板</h1>
                            <h4>${text.resource1}</h4>
                            <h5><span>${text.collect1}采集</span><span>${text.fans1}粉丝</span></h5>

                        <p>来自<a href="#">${text.from1}</a></p>

                            <div class="info-tra-left"></div>
                        </div>
                        <div class="recommend-box-img-bottom">
                            <div class="info-tra-right"></div>
                            <h1><p>画板</p></h1>
                            <h4>${text.resource2}</h4>
                            <h5><span>${text.collect2}采集</span><span>${text.fans2}粉丝</span></h5>

                            <p>来自<a href="#">${text.from2}</a></p>
                         </div>

                    </div>
                        <div class="recommend-box-img">
                            <a href="#"><img src="${imgs.pic2}"></a>
                        </div>
                        <div class="recommend-box-img">
                         <a href="#"><img src="${imgs.pic3}"></a>
                        </div>
                    </div>

                    <div class="recommend-box">
                        <div class="recommend-box-img">
                            <a href="#"><img src="${imgs.pic4}"></a>
                        </div>

                        <div class="recommend-box-img">
                             <a href="#"><img src="${imgs.pic5}"></a>
                        </div>
                        <div class="recommend-box-img">
                        <div class="recommend-box-img-top">
                            <h1>画板</h1>
                            <h4>${text.resource3}</h4>
                            <h5><span>${text.collect3}采集</span><span>${text.fans3}粉丝</span></h5>
                            <p>来自<a>${text.from3}</a></p>
                            <div class="info-tra-left"></div>
                        </div>
                        <div class="recommend-box-img-bottom">
                            <h1><p>画板</p></h1>
                            <h4>${text.resource4}</h4>
                            <h5><span>${text.collect4}采集</span><span>${text.fans4}粉丝</span></h5>
                            <p>来自<a href="#">${text.from4}</a></p>
                            <div class="info-tra-right"></div>
                        </div>
                    </div>
                    <div class="recommend-box-img">
                        <a href="#"><img src="${imgs.pic6}"></a>
                    </div>
                </div>
                `;

                        $('.recommend>.content').html(html);
                    }
                } else {
                    $('#loadmore').html("没有更多了！");
                }

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



        //用户登录成功后显示内容

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

//点击加载更多
    var n = 4;
    $('#loadmore').click(function (e) {
    e.preventDefault();
    $.ajax({
        type: 'get',
        url: 'data/loadmore.php',
        data: {'load': n},
        success: function (data) {
            var html = $('.recommend>.content').html();
            //console.log(data.data_intro[1].resource1);
            if (data.dataimg[0] != undefined && data.data_intro[1] != undefined) {
                for (var i = 0; i < data.dataimg.length; i++) {
                    var imgs = data.dataimg[i];
                    var text = data.data_intro[i];
                    html += `
                     <div class="recommend-box">
                        <div class="recommend-box-img">
                            <a href="#"><img src="${imgs.pic1}"></a>
                        </div>
                        <div class="recommend-box-img">
                        <div class="recommend-box-img-top">
                            <h1>画板</h1>
                            <h4>${text.resource1}</h4>
                            <h5><span>${text.collect1}采集</span><span>${text.fans1}粉丝</span></h5>

                        <p>来自<a href="#">${text.from1}</a></p>

                            <div class="info-tra-left"></div>
                        </div>
                        <div class="recommend-box-img-bottom">
                            <div class="info-tra-right"></div>
                            <h1><p>画板</p></h1>
                            <h4>${text.resource2}</h4>
                            <h5><span>${text.collect2}采集</span><span>${text.fans2}粉丝</span></h5>

                            <p>来自<a href="#">${text.from2}</a></p>
                         </div>

                    </div>
                        <div class="recommend-box-img">
                            <a href="#"><img src="${imgs.pic2}"></a>
                        </div>
                        <div class="recommend-box-img">
                         <a href="#"><img src="${imgs.pic3}"></a>
                        </div>
                    </div>

                    <div class="recommend-box">
                        <div class="recommend-box-img">
                            <a href="#"><img src="${imgs.pic4}"></a>
                        </div>

                        <div class="recommend-box-img">
                             <a href="#"><img src="${imgs.pic5}"></a>
                        </div>
                        <div class="recommend-box-img">
                        <div class="recommend-box-img-top">
                            <h1>画板</h1>
                            <h4>${text.resource3}</h4>
                            <h5><span>${text.collect3}采集</span><span>${text.fans3}粉丝</span></h5>
                            <p>来自<a>${text.from3}</a></p>
                            <div class="info-tra-left"></div>
                        </div>
                        <div class="recommend-box-img-bottom">
                            <h1><p>画板</p></h1>
                            <h4>${text.resource4}</h4>
                            <h5><span>${text.collect4}采集</span><span>${text.fans4}粉丝</span></h5>
                            <p>来自<a href="#">${text.from4}</a></p>
                            <div class="info-tra-right"></div>
                        </div>
                    </div>
                    <div class="recommend-box-img">
                        <a href="#"><img src="${imgs.pic6}"></a>
                    </div>
                </div>
                `;

                    $('.recommend>.content').html(html);
                }
            } else {
                $('#loadmore').html("没有更多了！");
            }

            n += 3;
        }
    });
});

//关注列表跳转
    $('.contant ul.list').on('click', 'li', function (e) {
    e.preventDefault();
    var fid = $(this).index();
    sessionStorage['followId'] = fid + 1;
    if (fid == 0) {
        location.href = 'petal_sdwawa.html';
    }
    else if (fid == 1) {
        location.href = 'petal_jiuwugaizao.html';
    }
    else if (fid == 2) {
        location.href = 'petal_gufenghaibao.html';
    }
    else if (fid == 3) {
        location.href = 'petal_huatongbi.html';
    }
    else if (fid == 4) {
        location.href = 'petal_bizi.html';
    }
    else if (fid == 5) {
        location.href = 'petal_yangyang.html';
    }
    else if (fid == 6) {
        location.href = 'petal_tiaowenfushi.html';
    }
});

//附着边栏显示隐藏
    $('.group_item').hover(function () {
        $(this).children('.elevator_group').toggleClass("in");
    });



