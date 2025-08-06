function jb() {
   const pc=['MJQ','DCX','SYX','LYW','ZZY','YHX','HJL'];
   let mjq=Math.floor(Math.random()*pc.length);
   console.log(pc[mjq]);
   const body=document.querySelector('body');
   document.body.style.backgroundImage = "url('bj/bj" + pc[mjq] + ".png')";
   }
   
   const adleft = document.querySelector('.adleft');
   const h3c = document.querySelector('.adright>h3');
   const ppc = document.querySelector('.adright>p');
  const nrr = document.querySelector('.anr')
   const nll = document.querySelector('.anl');
   const h3cc=['决战朝鲜','光与夜之恋','迷你世界']
   const ppcc=['一款战争模拟游戏','一款黄色游戏','一款盗版沙盒游戏']
  let i =0
  
  
  nrr.addEventListener('click', function() {
      i++;
      if (i > 2) {
         i = 0;
      }
      console.log(i);
      
      adleft.src = `./AD/AD(${i}).png`;
      h3c.textContent = h3cc[i];
      ppc.textContent = ppcc[i];
      // log(pc); // This line seems incorrect, consider removing or fixing if needed
  });

  nll.addEventListener('click', function() {
      i--;
      if (i < 0) {
         i = 2;
      }
      console.log(i);
      
      adleft.src = `./AD/AD(${i}).png`;
      h3c.textContent = h3cc[i];
      ppc.textContent = ppcc[i];
  });