const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
document.getElementById("year").textContent=new Date().getFullYear();
window.addEventListener("scroll",()=>{const h=document.documentElement;document.querySelector(".progress").style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+"%"});
$("#themeBtn").onclick=()=>document.body.classList.toggle("light");
$$(".filter").forEach(btn=>btn.onclick=()=>{ $$(".filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");let f=btn.dataset.filter;$$(".project").forEach(p=>p.style.display=f==="all"||p.dataset.cat===f?"":"none")});
const modal=$("#modal");
$$(".project").forEach(p=>p.onclick=()=>{ $("#mcat").textContent=p.querySelector(".project-body p").textContent;$("#mtitle").textContent=p.dataset.title;$("#mdesc").textContent=p.dataset.desc;$("#mtech").innerHTML=p.dataset.tech.split(",").map(x=>`<span>${x.trim()}</span>`).join("");$("#mmedia").textContent="Media area — add screenshots or a demo video here";modal.classList.add("show")});
$("#close").onclick=()=>modal.classList.remove("show");modal.onclick=e=>{if(e.target===modal)modal.classList.remove("show")};
