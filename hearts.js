function spawnHeart(){
const h=document.createElement('div');
h.textContent='💗';
h.style.position='fixed';
h.style.left=Math.random()*100+'vw';
h.style.bottom='0';
h.style.fontSize='24px';
h.style.opacity='1';
h.style.transition='all 3s linear';
document.body.appendChild(h);
setTimeout(()=>{h.style.transform='translateY(-300px)';h.style.opacity='0';},10);
setTimeout(()=>h.remove(),3100);
}
setInterval(spawnHeart,700);
function spawnFlowers(){
const f=document.createElement('div');
f.textContent='🌸';
f.style.position='fixed';
f.style.left='50%';
f.style.top='60%';
f.style.fontSize='30px';
f.style.transition='all 3s linear';
document.body.appendChild(f);
setTimeout(()=>{f.style.transform='translateY(-200px)';f.style.opacity='0';},10);
setTimeout(()=>f.remove(),3100);
}
