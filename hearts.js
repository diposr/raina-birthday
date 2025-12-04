
// hearts.js - floating heart emojis
(function(){ 
  const emoji = '💗';
  const minDur = 3000; // ms
  const maxDur = 5000; // ms
  const spawnInterval = 600; // ms between spawns
  function rand(min, max){ return Math.random()*(max-min)+min; }
  function createHeart(){ 
    const el = document.createElement('div');
    el.className = 'heart';
    el.textContent = emoji;
    const size = Math.floor(rand(14, 30));
    el.style.fontSize = size + 'px';
    const left = rand(5, 95);
    el.style.left = left + 'vw';
    const dur = Math.floor(rand(minDur, maxDur));
    el.style.animation = 'floatUp ' + (dur/1000) + 's linear forwards';
    // slight horizontal drift using transform
    el.style.transform = 'translateY(0) rotate(' + Math.floor(rand(-20,20)) + 'deg)';
    document.body.appendChild(el);
    // remove after duration
    setTimeout(() => { try{ document.body.removeChild(el);}catch(e){} }, dur + 200);
  }
  // spawn hearts continuously
  let timer = setInterval(createHeart, spawnInterval);
  // stop on pagehide to avoid leaks
  window.addEventListener('pagehide', ()=>clearInterval(timer));
})();
