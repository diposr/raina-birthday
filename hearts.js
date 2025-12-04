// hearts.js - floating hearts and spawnFlowers for Raina birthday site
(function(){
  // create overlay layer
  const layerId = "__float_layer__";
  function ensureLayer(){
    let layer = document.getElementById(layerId);
    if(!layer){
      layer = document.createElement("div");
      layer.id = layerId;
      layer.className = "float-layer";
      document.body.appendChild(layer);
    }
    return layer;
  }

  function rand(min,max){ return Math.random()*(max-min)+min; }

  // create a heart that floats up and dies between 3-5s
  function spawnHeart(){
    const layer = ensureLayer();
    const el = document.createElement("div");
    el.className = "heart";
    el.textContent = "💗";
    const size = rand(16,36);
    el.style.fontSize = size + "px";
    const left = rand(3,97);
    el.style.left = left + "%";
    const dur = rand(3,5);
    el.style.animationDuration = dur + "s";
    el.style.opacity = "0";
    layer.appendChild(el);
    // trigger show
    requestAnimationFrame(()=> el.style.opacity = "1");
    // remove after animation
    setTimeout(()=> el.remove(), dur*1000 + 200);
  }

  // continuous hearts on all pages
  let heartInterval = null;
  function startHearts(){
    if(heartInterval) return;
    // spawn short bursts randomly to look organic
    heartInterval = setInterval(()=>{
      const burst = Math.floor(rand(1,3));
      for(let i=0;i<burst;i++){
        setTimeout(spawnHeart, i*180 + Math.random()*300);
      }
      // randomize next burst 400-1200ms
    }, 700);
  }
  function stopHearts(){ if(heartInterval){ clearInterval(heartInterval); heartInterval=null; } }

  // spawnFlowers - creates floating flowers when cat is tapped
  window.spawnFlowers = function spawnFlowers(x,y){
    const layer = ensureLayer();
    const count = Math.floor(Math.random()*8)+6;
    for(let i=0;i<count;i++){
      const el = document.createElement("div");
      el.className = "flower";
      el.textContent = "🌸";
      const size = Math.floor(Math.random()*20)+18;
      el.style.fontSize = size + "px";
      // start near x,y if provided (client coordinates), else random bottom area
      if(typeof x === "number" && typeof y === "number"){
        el.style.left = (x + (Math.random()*120-60)) + "px";
        el.style.top = (y + (Math.random()*30-20)) + "px";
      } else {
        el.style.left = (Math.random()*90) + "%";
        el.style.top = "70%";
      }
      const dur = Math.random()*2+2.5; // 2.5 - 4.5s
      el.style.animationDuration = dur + "s";
      layer.appendChild(el);
      setTimeout(()=> el.remove(), dur*1000 + 200);
    }
  };

  // start automatically on DOM ready
  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", startHearts);
  } else startHearts();

  // expose small API
  window.__raina_hearts = { start: startHearts, stop: stopHearts, spawnHeart };
})();