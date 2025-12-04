
document.getElementById("cat").addEventListener("click", e=>{
  for(let i=0;i<10;i++){
    const f=document.createElement("div");
    f.className="flower";
    f.textContent="🌸";
    f.style.left=(e.clientX + (Math.random()*80-40))+"px";
    f.style.top=(e.clientY + (Math.random()*80-40))+"px";
    document.body.appendChild(f);
    setTimeout(()=>f.remove(),1000);
  }
});
