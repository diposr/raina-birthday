(function(){
  const layerId="__float_layer__";
  function ensureLayer(){
    let l=document.getElementById(layerId);
    if(!l){ l=document.createElement('div'); l.id=layerId; l.className='float-layer'; document.body.appendChild(l); }
    return l;
  }
  function rand(min,max){ return Math.random()*(max-min)+min; }
  function spawnHeart(){
    const l=ensureLayer();
    const el=document.createElement('div'); el.className='heart'; el.textContent='💗';
    const size = Math.floor(rand(18,36));
    el.style.fontSize = size+'px';
    el.style.left = rand(4,96)+'%';
    const dur = rand(3,5);
    el.style.animationDuration = dur+'s';
    l.appendChild(el);
    setTimeout(()=> el.remove(), dur*1000 + 300);
  }
  let interval=null;
  function startHearts(){
    if(interval) return;
    interval = setInterval(()=>{ const burst=Math.floor(rand(1,3)); for(let i=0;i<burst;i++) setTimeout(spawnHeart, i*140 + Math.random()*220); }, 700);
  }
  function stopHearts(){ if(interval){ clearInterval(interval); interval=null; } }
  window.spawnFlowers = function(x,y){
    const l=ensureLayer();
    const count = Math.floor(Math.random()*8)+6;
    for(let i=0;i<count;i++){
      const el=document.createElement('div'); el.className='flower'; el.textContent='🌸';
      el.style.fontSize = (Math.floor(Math.random()*20)+18)+'px';
      if(typeof x==='number' && typeof y==='number'){ el.style.left = (x + (Math.random()*120-60)) + 'px'; el.style.top = (y + (Math.random()*30-20)) + 'px'; }
      else { el.style.left = Math.random()*90 + '%'; el.style.top = '70%'; }
      const dur = Math.random()*2+2.5;
      el.style.animationDuration = dur+'s';
      l.appendChild(el);
      setTimeout(()=> el.remove(), dur*1000 + 300);
    }
  };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', startHearts); else startHearts();
  window.__raina_hearts = { start:startHearts, stop:stopHearts, spawnHeart:spawnHeart };
})();