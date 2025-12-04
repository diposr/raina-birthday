
(function(){ 
  const emoji='💗';
  function spawn(){
    const e=document.createElement('div');
    e.textContent=emoji;
    e.className='heart';
    e.style.left=Math.random()*100+'vw';
    e.style.bottom='-20px';
    document.body.appendChild(e);
    setTimeout(()=>e.remove(),4500);
  }
  setInterval(spawn,600);
})();
