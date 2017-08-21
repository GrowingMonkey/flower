SET NAMES UTF8;
DROP DATABASE IF EXISTS huaban;
CREATE DATABASE huaban CHARSET=UTF8;
USE huaban;

#首页图片table
CREATE TABLE imgs(mid INT PRIMARY KEY AUTO_INCREMENT,pic1 VARCHAR(64),pic2 VARCHAR(64),pic3 VARCHAR(64),pic4 VARCHAR(64),pic5 VARCHAR(64),pic6 VARCHAR(64));
INSERT INTO imgs VALUES

(NULL,"images/recommend.jpg","images/recommend2.jpg","images/recommend3.jpg","images/recommend4.jpg",
"images/recommend5.jpg","images/recommend6.jpg"),

(NULL,"images/recommend7.jpg","images/recommend8.png","images/recommend9.jpg","images/recommend10.jpg",
"images/recommend11.jpg","images/recommend12.jpg"),

(NULL,"images/recommend13.jpg","images/recommend14.jpg","images/recommend15.jpg","images/recommend16.jpg",
"images/recommend17.jpg","images/recommend18.jpg"),

(NULL,"images/recommend19.jpg","images/recommend20.jpg","images/recommend21.jpg","images/recommend22.jpg","images/recommend23.jpg","images/recommend24.jpg"),

(NULL,"images/recommend25.jpg","images/recommend26.jpg","images/recommend27.jpg","images/recommend28.jpg","images/recommend29.jpg","images/recommend30.jpg"),

(NULL,"images/recommend31.jpg","images/recommend32.jpg","images/recommend33.jpg","images/recommend34.jpg","images/recommend35.jpg","images/recommend36.jpg"),

(NULL,"images/recommend37.jpg","images/recommend38.jpg","images/recommend39.jpg","images/recommend40.jpg","images/recommend41.jpg","images/recommend42.jpg"),

(NULL,"images/recommend61.jpg","images/recommend3.jpg","images/recommend4.jpg","images/recommend5.jpg",
"images/recommend6.jpg","images/recommend7.jpg"),

(NULL,"images/recommend43.jpg","images/recommend44.jpg","images/recommend45.jpg","images/recommend46.jpg","images/recommend47.jpg","images/recommend48.jpg"),

(NULL,"images/recommend49.jpg","images/recommend50.jpg","images/recommend51.jpg","images/recommend52.jpg",
"images/recommend53.jpg","images/recommend54.jpg"),

(NULL,"images/recommend55.jpg","images/recommend56.jpg","images/recommend57.jpg","images/recommend58.jpg","images/recommend59.jpg","images/recommend60.jpg");

#首页图片介绍table
CREATE TABLE intro(tid INT PRIMARY KEY AUTO_INCREMENT,resource1 VARCHAR(32) ,collect1 INT,fans1 INT,from1 VARCHAR(32)
 ,resource2
VARCHAR(32),collect2 INT,fans2 INT,from2 VARCHAR(32),resource3 VARCHAR(32),collect3 INT,fans3 INT,from3 VARCHAR(32),
resource4 VARCHAR
(32),collect4 INT,fans4 INT,from4 VARCHAR(32) );

INSERT INTO intro VALUES
(NULL,"裙角生香，风凉袖轻挽",20,34,'彼岸-三生来世',"孤独患者",926,3662,'达令',"花的嫁纱",19,30,'Y-与白日梦',"比心",20,30,'洪小璇'),
(NULL,"抓狂",20,80,'洪小璇',"phone",3,443,'彼岸-三生来世',"爱插画",19,30,'猴哥monkey',"陈某某的日常",20,30,'Robin'),
(NULL,"衡-photography",20,34,'衡允',"曹青原手绘插画作品",3,5,'原手的画师爱世界',"适应孤独",19,30,'猴哥monkey',"雪山",20,30,'Robin'),
(NULL,"互道晚安却又各自清醒",20,34,'洪小璇',"【在自己的房间里】",3,5,'彼岸-三生来世',"爱插画",19,30,'猴哥monkey',"我就是爱那个无脸男",20,30,'Robin'),
(NULL,"中日式排版",33,65,'Ren',"原创壁纸",2,30,'qiuqiu',"花花",24,30,'不及你一人暖',"小森林",20,30,'aurnlh'),
(NULL,"[平面]酷炫",20,63,'hom_l',"电视剧《一起长大》",2,30,'洪小璇',"文艺录",20,30,'达令',"机器猫",20,30,'绿NEMO'),
(NULL,"视觉摄影-儿童",25,52,'nigel_c',"电影海报",34,30,'安豆可好',"小空的世界",64,30,'LOVE小空',"摄影-壁纸",20,30,'KEN'),
(NULL,"电视剧《一起长大》",99,96,'洪小璇',"电视剧《一起长大》",54,30,'洪小璇',"电视剧《一起长大》",20,30,'洪小璇',"电视剧《一起长大》",20,30,'洪小璇'),
(NULL,"电视剧《一起长大》",87,12,'洪小璇',"电视剧《一起长大》",78,30,'洪小璇',"电视剧《一起长大》",20,30,'洪小璇',"电视剧《一起长大》",20,30,'洪小璇'),
(NULL,"电视剧《一起长大》",87,12,'洪小璇',"电视剧《一起长大》",78,30,'洪小璇',"电视剧《一起长大》",20,30,'洪小璇',"中日式海报",20,30,'HOM_L'),
(NULL,"电视剧《一起长大》",45,45,'洪小璇',"电视剧《一起长大》",65,30,'洪小璇',"《灵域》剧照",20,30,'灵域动画',"电视剧《一起长大》",20,30,'洪小璇');

#关注列表类table
CREATE TABLE follow(fid INT PRIMARY KEY AUTO_INCREMENT,fname VARCHAR(8));
INSERT INTO follow VALUES
(1,'SD娃娃'),
(2,'旧物改造'),
(3,'古风海报'),
(4,'简笔画'),
(5,'夜景手机壁纸'),
(6,'杨洋'),
(7,'条纹服饰');

#关注列表分类图片table-
CREATE TABLE followImg(pid INT PRIMARY KEY AUTO_INCREMENT,pic VARCHAR(64),fid INT);
INSERT INTO followImg VALUES
(NULL,'SD/SD1.jpg',1),
(NULL,'SD/SD2.jpg',1),
(NULL,'SD/SD3.jpg',1),
(NULL,'SD/SD4.jpg',1),
(NULL,'SD/SD5.jpg',1),
(NULL,'SD/SD6.jpg',1),
(NULL,'SD/SD7.jpg',1),
(NULL,'SD/SD8.jpg',1),
(NULL,'SD/SD9.jpg',1),
(NULL,'SD/SD10.jpg',1),
(NULL,'SD/SD11.jpg',1),
(NULL,'SD/SD12.jpg',1),
(NULL,'SD/SD13.jpg',1),
(NULL,'SD/SD14.jpg',1),
(NULL,'SD/SD15.jpg',1),
(NULL,'SD/SD16.jpg',1),
(NULL,'SD/SD17.jpg',1),
(NULL,'SD/SD18.jpg',1),
(NULL,'SD/SD19.jpg',1),
(NULL,'SD/SD20.jpg',1),
(NULL,'SD/SD21.jpg',1),
(NULL,'SD/SD22.jpg',1),
(NULL,'SD/SD23.jpg',1),
(NULL,'JWGZ/JWGZ1.jpg',2),
(NULL,'JWGZ/JWGZ2.jpg',2),
(NULL,'JWGZ/JWGZ3.jpg',2),
(NULL,'JWGZ/JWGZ4.jpg',2),
(NULL,'JWGZ/JWGZ5.jpg',2),
(NULL,'JWGZ/JWGZ6.jpg',2),
(NULL,'JWGZ/JWGZ7.jpg',2),
(NULL,'JWGZ/JWGZ8.jpg',2),
(NULL,'JWGZ/JWGZ9.jpg',2),
(NULL,'JWGZ/JWGZ10.jpg',2),
(NULL,'JWGZ/JWGZ11.jpg',2),
(NULL,'JWGZ/JWGZ12.jpg',2),
(NULL,'JWGZ/JWGZ13.jpg',2),
(NULL,'JWGZ/JWGZ14.jpg',2),
(NULL,'JWGZ/JWGZ15.jpg',2),
(NULL,'JWGZ/JWGZ16.jpg',2),
(NULL,'JWGZ/JWGZ17.jpg',2),
(NULL,'JWGZ/JWGZ18.jpg',2),
(NULL,'JWGZ/JWGZ19.jpg',2),
(NULL,'JWGZ/JWGZ20.jpg',2),
(NULL,'JWGZ/JWGZ21.jpg',2),
(NULL,'JWGZ/JWGZ22.jpg',2),
(NULL,'JWGZ/JWGZ23.jpg',2),
(NULL,'JWGZ/JWGZ24.jpg',2),
(NULL,'JWGZ/JWGZ25.jpg',2),
(NULL,'JWGZ/JWGZ26.jpg',2),
(NULL,'JWGZ/JWGZ27.jpg',2),
(NULL,'JWGZ/JWGZ28.jpg',2),
(NULL,'GFHB/GFHB1.jpg',3),
(NULL,'GFHB/GFHB2.jpg',3),
(NULL,'GFHB/GFHB3.jpg',3),
(NULL,'GFHB/GFHB4.jpg',3),
(NULL,'GFHB/GFHB5.jpg',3),
(NULL,'GFHB/GFHB6.jpg',3),
(NULL,'GFHB/GFHB7.jpg',3),
(NULL,'GFHB/GFHB8.jpg',3),
(NULL,'GFHB/GFHB9.jpg',3),
(NULL,'GFHB/GFHB10.jpg',3),
(NULL,'GFHB/GFHB11.jpg',3),
(NULL,'GFHB/GFHB12.jpg',3),
(NULL,'GFHB/GFHB13.jpg',3),
(NULL,'GFHB/GFHB14.jpg',3),
(NULL,'GFHB/GFHB15.jpg',3),
(NULL,'GFHB/GFHB16.jpg',3),
(NULL,'GFHB/GFHB17.jpg',3),
(NULL,'GFHB/GFHB18.jpg',3),
(NULL,'GFHB/GFHB19.jpg',3),
(NULL,'GFHB/GFHB20.jpg',3),
(NULL,'GFHB/GFHB21.jpg',3),
(NULL,'GFHB/GFHB22.jpg',3),
(NULL,'GFHB/GFHB23.jpg',3),
(NULL,'GFHB/GFHB24.jpg',3),
(NULL,'JBH/JBH1.jpg',4),
(NULL,'JBH/JBH2.jpg',4),
(NULL,'JBH/JBH3.jpg',4),
(NULL,'JBH/JBH4.jpg',4),
(NULL,'JBH/JBH5.jpg',4),
(NULL,'JBH/JBH6.jpg',4),
(NULL,'JBH/JBH7.jpg',4),
(NULL,'JBH/JBH8.jpg',4),
(NULL,'JBH/JBH9.jpg',4),
(NULL,'JBH/JBH10.jpg',4),
(NULL,'JBH/JBH10.jpg',4),
(NULL,'JBH/JBH11.jpg',4),
(NULL,'JBH/JBH12.jpg',4),
(NULL,'JBH/JBH13.jpg',4),
(NULL,'JBH/JBH14.jpg',4),
(NULL,'JBH/JBH15.jpg',4),
(NULL,'JBH/JBH16.jpg',4),
(NULL,'JBH/JBH17.jpg',4),
(NULL,'JBH/JBH18.jpg',4),
(NULL,'JBH/JBH19.jpg',4),
(NULL,'JBH/JBH20.jpg',4),
(NULL,'JBH/JBH21.jpg',4),
(NULL,'JBH/JBH22.jpg',4),
(NULL,'JBH/JBH23.jpg',4),
(NULL,'JBH/JBH24.jpg',4),
(NULL,'JBH/JBH25.jpg',4),
(NULL,'JBH/JBH26.jpg',4),
(NULL,'JBH/JBH27.jpg',4),
(NULL,'JBH/JBH28.jpg',4),
(NULL,'JBH/JBH29.jpg',4),
(NULL,'JBH/JBH30.jpg',4),
(NULL,'JBH/JBH31.jpg',4),
(NULL,'BZ/BZ1.jpg',5),
(NULL,'BZ/BZ2.jpg',5),
(NULL,'BZ/BZ3.jpg',5),
(NULL,'BZ/BZ4.jpg',5),
(NULL,'BZ/BZ5.jpg',5),
(NULL,'BZ/BZ6.jpg',5),
(NULL,'BZ/BZ7.jpg',5),
(NULL,'BZ/BZ8.jpg',5),
(NULL,'BZ/BZ9.jpg',5),
(NULL,'BZ/BZ10.jpg',5),
(NULL,'BZ/BZ11.jpg',5),
(NULL,'BZ/BZ12.jpg',5),
(NULL,'BZ/BZ13.jpg',5),
(NULL,'BZ/BZ14.jpg',5),
(NULL,'BZ/BZ15.jpg',5),
(NULL,'BZ/BZ16.jpg',5),
(NULL,'BZ/BZ17.jpg',5),
(NULL,'BZ/BZ18.jpg',5),
(NULL,'BZ/BZ19.jpg',5),
(NULL,'BZ/BZ20.jpg',5),
(NULL,'BZ/BZ21.jpg',5),
(NULL,'BZ/BZ22.jpg',5),
(NULL,'BZ/BZ23.jpg',5),
(NULL,'BZ/BZ24.jpg',5),
(NULL,'BZ/BZ25.jpg',5),
(NULL,'BZ/BZ26.jpg',5),
(NULL,'YY/YY1.jpg',6),
(NULL,'YY/YY2.jpg',6),
(NULL,'YY/YY3.jpg',6),
(NULL,'YY/YY4.jpg',6),
(NULL,'YY/YY5.jpg',6),
(NULL,'YY/YY6.jpg',6),
(NULL,'YY/YY7.jpg',6),
(NULL,'YY/YY8.jpg',6),
(NULL,'YY/YY9.jpg',6),
(NULL,'YY/YY10.jpg',6),
(NULL,'YY/YY11.jpg',6),
(NULL,'YY/YY12.jpg',6),
(NULL,'YY/YY13.jpg',6),
(NULL,'YY/YY14.jpg',6),
(NULL,'YY/YY15.jpg',6),
(NULL,'YY/YY16.jpg',6),
(NULL,'YY/YY17.jpg',6),
(NULL,'YY/YY18.jpg',6),
(NULL,'YY/YY19.jpg',6),
(NULL,'YY/YY20.jpg',6),
(NULL,'YY/YY21.jpg',6),
(NULL,'YY/YY22.jpg',6),
(NULL,'YY/YY23.jpg',6),
(NULL,'YY/YY24.jpg',6),
(NULL,'YY/YY25.jpg',6),
(NULL,'YY/YY26.jpg',6),
(NULL,'YY/YY27.jpg',6),
(NULL,'YY/YY28.jpg',6),
(NULL,'YY/YY29.jpg',6),
(NULL,'YY/YY30.jpg',6),
(NULL,'YY/YY31.jpg',6),
(NULL,'YY/YY32.jpg',6),
(NULL,'YY/YY33.jpg',6),
(NULL,'YY/YY34.jpg',6),
(NULL,'YY/YY35.jpg',6),
(NULL,'YY/YY36.jpg',6),
(NULL,'YY/YY37.jpg',6),
(NULL,'YY/YY38.jpg',6),
(NULL,'YY/YY39.jpg',6),
(NULL,'YY/YY40.jpg',6),
(NULL,'YY/YY41.jpg',6),
(NULL,'YY/YY42.jpg',6),
(NULL,'YY/YY43.jpg',6),
(NULL,'YY/YY44.jpg',6),
(NULL,'YY/YY43.jpg',6),
(NULL,'YY/YY46.jpg',6),
(NULL,'YY/YY47.jpg',6),
(NULL,'YY/YY48.jpg',6),
(NULL,'TWFS/TWFS1.jpg',7),
(NULL,'TWFS/TWFS2.jpg',7),
(NULL,'TWFS/TWFS3.jpg',7),
(NULL,'TWFS/TWFS4.jpg',7),
(NULL,'TWFS/TWFS5.jpg',7),
(NULL,'TWFS/TWFS6.jpg',7),
(NULL,'TWFS/TWFS7.jpg',7),
(NULL,'TWFS/TWFS8.jpg',7),
(NULL,'TWFS/TWFS9.jpg',7),
(NULL,'TWFS/TWFS10.jpg',7),
(NULL,'TWFS/TWFS11.jpg',7),
(NULL,'TWFS/TWFS12.jpg',7),
(NULL,'TWFS/TWFS13.jpg',7),
(NULL,'TWFS/TWFS14.jpg',7),
(NULL,'TWFS/TWFS15.jpg',7),
(NULL,'TWFS/TWFS16.jpg',7),
(NULL,'TWFS/TWFS17.jpg',7),
(NULL,'TWFS/TWFS18.jpg',7),
(NULL,'TWFS/TWFS19.jpg',7),
(NULL,'TWFS/TWFS20.jpg',7),
(NULL,'TWFS/TWFS21.jpg',7),
(NULL,'TWFS/TWFS22.jpg',7),
(NULL,'TWFS/TWFS23.jpg',7),
(NULL,'TWFS/TWFS24.jpg',7),
(NULL,'TWFS/TWFS25.jpg',7),
(NULL,'TWFS/TWFS26.jpg',7),
(NULL,'TWFS/TWFS27.jpg',7),
(NULL,'TWFS/TWFS28.jpg',7),
(NULL,'TWFS/TWFS29.jpg',7),
(NULL,'TWFS/TWFS30.jpg',7);

#用户列表
CREATE  TABLE huaban_users (
uid INT PRIMARY KEY AUTO_INCREMENT,
phone VARCHAR(11),
upwd VARCHAR(16),
rgisttime BIGINT
);
INSERT INTO huaban_users VALUES
(NULL,13408539003,'123456','1477998785435'),
(NULL,13458517322,'123456','1479000785435');