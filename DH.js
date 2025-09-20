const fengmian=document.querySelectorAll('.box>img');
console.log(fengmian);
let tupian=['封面/PixPin_2025-09-14_12-22-58.png','封面/PixPin_2025-09-14_12-29-15.png','封面/PixPin_2025-09-14_12-29-38.png','封面/PixPin_2025-09-14_12-29-56.png','封面/PixPin_2025-09-14_12-30-15.png','封面/PixPin_2025-09-14_12-30-27.png','封面/PixPin_2025-09-14_12-30-40.png','封面/PixPin_2025-09-14_12-30-53.png','封面/PixPin_2025-09-14_12-31-22.png','封面/PixPin_2025-09-14_12-31-42.png','封面/PixPin_2025-09-14_12-32-42.png','封面/PixPin_2025-09-14_12-32-55.png','封面/PixPin_2025-09-14_12-33-07.png','封面/PixPin_2025-09-14_12-33-36.png','封面/PixPin_2025-09-14_12-33-55.png']
for(let i=0;i<fengmian.length;i++){
  fengmian[i].src=tupian[i];
  let videosname='video'+i
  fengmian[i].classList.add(videosname);
}
const shipin=document.querySelectorAll('video');
