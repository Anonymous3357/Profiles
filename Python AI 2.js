/*
微信公众号：ios黑科技
官方网站：s7aa.cn

圈X
[rewrite_local]
#Python Ai解锁会员
^http:\/\/ws\.60he\.com\/(book|user).+ url script-response-body pyai.js
Surge

Python = type=http-response,pattern=^http:\/\/ws\.60he\.com\/(book\.|user).+,requires-body=1,max-size=0,timeout=1000,script-path=Python AI 2.js

[mitm]
hostname= ws.60he.com

下载地址：
https://apps.apple.com/cn/app/id1471351733

*/



var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const bk = '/book';
const ur = '/user';

if (url.indexOf(bk) != -1) {
    obj.data.isFree = 1,
    body = JSON.stringify(obj);
} 
if (url.indexOf(ur) != -1) {
    obj.data.vip = 333,
    body = JSON.stringify(obj);
} 
$done({body});