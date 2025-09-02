function jb() {
  const pc = ['MJQ', 'DCX', 'SYX', 'LYW', 'ZZY', 'YHX', 'HJL'];
  let mjq = Math.floor(Math.random() * pc.length);
  console.log(pc[mjq]);
  const body = document.querySelector('body');
  document.body.style.backgroundImage = "url('bj/bj" + pc[mjq] + ".png')";
}
const adleft = document.querySelector('.adleft');
const h3c = document.querySelector('.adright>h3');
const ppc = document.querySelector('.adright>p');
const nrr = document.querySelector('.anr')
const nll = document.querySelector('.anl');
const h3cc = ['决战朝鲜', '光与夜之恋', '迷你世界']
const ppcc = ['一款战争模拟游戏', '一款黄色游戏', '一款盗版沙盒游戏']
let i = 0

function dk() {
  i++;
  if (i > 2) {
    i = 0;
  }
  console.log(i);
  adleft.src = `./AD/AD(${i}).png`;
  h3c.textContent = h3cc[i];
  ppc.textContent = ppcc[i];
}
nrr.addEventListener('click', dk);


nll.addEventListener('click', function () {
  i--;
  if (i < 0) {
    i = 2;
  }
  console.log(i);

  adleft.src = `./AD/AD(${i}).png`;
  h3c.textContent = h3cc[i];
  ppc.textContent = ppcc[i];
})
let dkkkk = setInterval(dk, 5000);
adleft.addEventListener('mouseenter', function () {
  clearInterval(dkkkk);
})
adleft.addEventListener('mouseleave', function () {
  dkkkk = setInterval(dk, 5000);
})
const rightidp = document.querySelector('.right_id p');
rightidp.addEventListener('click', function () {
  console.log('点击了');

})

let imgs = ['DM_20250815104153_001.jpg', 'app.png', 'Snipaste_2025-01-15_16-36-36.png', 'telegram-6896827_1280.jpg', 'Snipaste_2025-01-15_16-41-00.png', 'Snipaste_2025-01-15_16-43-04.png', 'Snipaste_2025-01-15_16-44-31.png', 'Snipaste_2025-01-15_16-45-34.png', 'DM_20250813094850_001.png', 'DM_20250813094926_001.png', 'DM_20250813095020_001.png', 'PixPin_2025-08-13_09-48-15.png'];
let hs = ['nova桌面', 'free', '奇妙应用', 'telegram', 'bilimiao', 'aurora store', '太极', 'magisk面具', 'TIM', '七点工具箱', '酷狗概念版', '卡世界']
let txt = ['轻量和优质安卓桌面', '免费看片是我的秘密武器', '海量安卓软件资源', '知名加密通讯软件', '非常好用的第三方B站客户端', '轻量开源版Google Play', '为你的安卓应用内嵌模块', '为你的手机系统内嵌模块,也可以root你的手机', '轻量简洁版QQ', '集成两百多种工具', '每日登录就送VIP的音乐软件', '推广和购买流量卡'];
for (let i = 0; i < imgs.length; i++) {
  document.write(`<div class="right"><img src="${imgs[i]}" alt=""><div class="txt"><h3>${hs[i]}</h3><br><p>${txt[i]}</p></div><a href=""><img src="icons8-download-48.png" alt=""></a></div>`)
}
const diaoche=document.querySelector('.hu')
function sj(){
const date=new Date()
let dy=date.getFullYear()
let dm=date.getMonth()+1
let dd=date.getDate()
let dh=date.getHours()
let dmi=date.getMinutes()
let ds=date.getSeconds()
let dz=date.getDay()
const xq=['周日','周一','周二','周三','周四','周五','周六']
dh=dh<10 ? '0'+dh:dh
dm=dm<10 ? '0'+dm:dm
dd=dd<10 ? '0'+dd:dd
ds=ds<10 ? '0'+ds:ds
dmi=dmi<10 ? '0'+dmi:dmi
return dy+'/'+dm+'/'+dd+' '+dh+':'+dmi+':'+ds+'  '+xq[dz]}

setInterval(function() {
  diaoche.innerHTML=`<h4 class="hu">${sj()}</h4>`
},1000);
console.log(sj());

window.onload = function() {
const ddb=document.querySelector('.db')
console.log(ddb.style.opacity);


window.addEventListener('scroll',
  function () {
   const lg=document.documentElement.scrollTop
   console.log(lg);
   
   
   if (lg>=500){
    ddb.style.opacity=1
   }else{
     ddb.style.opacity=0
   }
  }
)
ddb.addEventListener('click',function(){
document.documentElement.scrollTop=0
})}







