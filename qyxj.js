/* Quantumult X 脚本: 轻颜相机 Unlock VIP （By 浥轻尘） 轻颜相机 Download Link : http://t.cn/A6ZtvYIJ
[rewrite_local] # 轻颜相机 Unlock VIP （By 浥轻尘)
^https?:\/\/commerce-api\.faceu\.mobi\/commerce\/v1\/subscription\/user_info* url script-response-body qyxj.js
[mitm] hostname = *.faceu.mobi,
*/
let obj = JSON.parse($response.body);
 obj.data.flag = true;
 obj.data.end_time = 4092599349;
 $done({
 body: JSON.stringify(obj)
}
);
