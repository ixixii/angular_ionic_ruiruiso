【链接】可搜题的微信小程序（含前端后端）
https://download.csdn.net/download/weixin_43931003/11290058

接口地址：http://api.tianapi.com/txapi/baiketiku/index 
https://www.tianapi.com/apiview/185#apicode

1. 先上线网站v1.0
https://angular-ixixii-demo1.stackblitz.io/cart
https://angular-ixixii-demo1.stackblitz.io/assets/shipping.json

1.1 使用肥猫的接口， 
get请求， http://api.91ans.com/s?ques=关于结构化查询语言描述错误的是
返回值：
{
    "ques": "关于结构化查询语言描述错误的是（ ）。",
    "ans": "结构化查询语言简称MySQL。",
    "code": 1
}

var api = "http://a.itying.com/api/productlist";
this.http.get(api).subscribe(response => {
  console.log(response);
});



1.2 使用自己下载的28M的数据库中的题库，双查询

2. 上小程序v1.0
3. 上iOS APP
4. 上安卓软件

肥猫的这个查询页面的html代码可以有以下几种写法：
1. 原生js写
2. vue写
3. angular8写

angular8的官方入门文档在这：https://angular.cn/start
明天用angular8写


=======================

一、Angular  UI组件库  ------------ionic

1、 官网：https://ionicframework.com
      文档：https://ionicframework.com/docs
      概述：是一个移动端UI组件库，可以与Angular/Vue/React组合应用，也可以单独使用(SCRIPT直接引入)

      可以使用lonic的步骤：

      1.下载并安装全局的脚手架工具
      sudo npm i -g ionic
      Password:

      mac:3_ionic beyond$ sudo npm i -g ionic
Password:
npm WARN deprecated ionic@5.4.16: The Ionic CLI now uses ✨ @ionic/cli ✨ for its package name! 👉 https://twitter.com/ionicframework/status/1223268498362851330
/usr/local/bin/ionic -> /usr/local/lib/node_modules/ionic/bin/ionic
+ ionic@5.4.16
added 238 packages from 153 contributors in 28.781s


      2.运行脚手架工具，创建一个空白项目

          ionic    start   项目名
          ionic    start   项目名   blank/tabs/sidemenu

          INFO] Next Steps:
       - Go to your newly created project: cd ./dati
       - Run ionic serve within the app directory to see your app
       - Build features and components: https://ion.link/scaffolding-docs
       - Run your app on a hardware or virtual device:
       https://ion.link/running-docs





      3.进入空白项目，启动开发服务器
          npm    start

       4.使用客户端访问测试
http://localhost:8100/tabs/tab1


ionic generate
? What would you like to generate?
❯ page
component
service
module
class
directive
guard


打包，发布
cd到项目所在根目录 运行 
ionic build --prod


// -----------------
ruiruiso.com
域名注册成功，一年，55元
实名认证成功

解析：

主机记录: 
www
.
@

记录类型：
A

记录值：
47.75.103.58

// -----------------
配置nginx
第1步: 为每一个域名 创建一个单独的文件夹,用来存放其源码
/usr/lcoal/nginx/html/ruiruiso_com_wwwroot
cd /usr/local/nginx/html/
mkdir ruiruiso_com_wwwroot

第2步: 为每一个域名 创建一个单独的Nginx配置文件
在/usr/local/nginx/conf/目录下, 为ruiruiso.com新建一个单独的配置文件,

名称是: vhost_ruiruiso_com.conf

/usr/local/nginx/conf

cp vhost_cn18x_com.conf vhost_ruiruiso_com.conf
vi vhost_ruiruiso_com.conf

第3步: 在Nginx总配置文件中, 引入每个域名单独的配置文件 (记得改配置文件要重启Nginx即可生效)
cd /usr/local/nginx/conf
vi nginx.conf

最后重启nginx
cd sbin
./nginx -s reload


// -----------------
搜索历史
保存至本地

var animeArrInitString = window.localStorage.getItem('animeArr')
var animeArr = JSON.parse(animeArrInitString || '[]')

window.localStorage.setItem('animeArr',JSON.stringify(newValue))


=========================       

https://blog.csdn.net/strong90/article/details/80950563

EventEmitter



ruiruiso_com_wwwroot

----------------
命令1：  ionic serve 
将自动打开 http://localhost:8100/tabs/tab1

命令2： 打包
ionic build --prod
将生成www目录

命令3： 在服务器上， 先删除原来上传的zip
ssh  root@47.75.103.58
cd /usr/local/nginx/html
rm -rf ruiruiso_com_wwwroot.zip

命令4：将www改成ruiruiso_com_wwwroot.zip
并且ssh 上传到  服务器
scp ruiruiso_com_wwwroot.zip root@47.75.103.58:/usr/local/nginx/html/

在服务器上 解压覆盖
unzip ruiruiso_com_wwwroot.zip



===============
上传到git
新建 .gitignore

git init
git add --all
git commit -m 'web angular ionic - 睿睿搜题ruiruiso.com 第一次提交'
git remote add origin https://github.com/ixixii/angular_ionic_ruiruiso.git
git push -u origin master
git push origin master

===============
下载后 
npm install
ionic serve
即可