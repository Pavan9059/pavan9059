const approved = [...CANDIDATES];
let slide = 0;
let timer;

const slideshow=document.getElementById("slideshow");
const counter=document.getElementById("counter");
const dots=document.getElementById("dots");

function esc(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}
function renderSlide(){
 if(!approved.length){slideshow.innerHTML="<div class='empty'>No approved candidates yet.</div>";return;}
 if(slide>=approved.length) slide=0;
 const c=approved[slide];
 counter.textContent=`${slide+1} / ${approved.length}`;
 slideshow.innerHTML=`<article class="feature-card">
   <div class="feature-top"><div class="candidate-avatar xl">${esc(c.initials)}</div><div><span class="eyebrow">APPROVED CONSULTANT</span><h3>${esc(c.name)}</h3><p>${esc(c.title)}</p></div><span class="availability">${esc(c.status)}</span></div>
   <div class="feature-meta"><span>📍 ${esc(c.location)}</span><span>◆ ${esc(c.visa)}</span><span>◷ ${esc(c.experience)}</span></div>
   <p class="summary">${esc(c.summary)}</p>
   <h4>Top Skills</h4><div class="skill-list">${c.skills.map(x=>`<span>${esc(x)}</span>`).join("")}</div>
   <h4>Certifications</h4><div class="cert-list">${c.certifications.map(x=>`✓ ${esc(x)}`).join(" • ")}</div>
   <a class="profile-link" href="candidate.html?id=${encodeURIComponent(c.id)}">View full profile →</a>
 </article>`;
 dots.innerHTML=approved.map((_,i)=>`<button class="${i===slide?"active":""}" aria-label="Candidate ${i+1}" onclick="go(${i})"></button>`).join("");
}
function go(i){slide=i;renderSlide();restart();}
function restart(){clearInterval(timer);timer=setInterval(()=>{slide=(slide+1)%approved.length;renderSlide()},6000);}
document.getElementById("prev").onclick=()=>go((slide-1+approved.length)%approved.length);
document.getElementById("next").onclick=()=>go((slide+1)%approved.length);
window.go=go;
renderSlide();restart();
