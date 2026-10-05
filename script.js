const CORRECT_CODE="090226";let entered="";
const screens=[...document.querySelectorAll(".screen")],display=document.getElementById("codeDisplay"),error=document.getElementById("error");
function showScreen(id){screens.forEach(s=>s.classList.toggle("active",s.id===id));window.scrollTo({top:0,behavior:"smooth"})}
function renderCode(){display.textContent="•".repeat(entered.length)+"•".repeat(Math.max(0,6-entered.length))}
document.querySelectorAll("[data-key]").forEach(b=>b.onclick=()=>{if(entered.length<6){entered+=b.dataset.key;renderCode()}});
document.querySelector('[data-action="clear"]').onclick=()=>{entered="";renderCode();error.textContent=""};
document.querySelector('[data-action="back"]').onclick=()=>{entered=entered.slice(0,-1);renderCode();error.textContent=""};
document.getElementById("unlockBtn").onclick=()=>{if(entered===CORRECT_CODE){showScreen("homeScreen")}else{error.textContent="Codul nu este corect ❤️";entered="";renderCode()}};
document.querySelectorAll(".love-box").forEach(b=>b.onclick=()=>showScreen(b.dataset.go));
document.querySelectorAll(".back").forEach(b=>b.onclick=()=>{const c=b.closest(".screen").id;showScreen(c==="letterScreen"?"letterChoiceScreen":"homeScreen")});
document.querySelectorAll(".style-choice").forEach(b=>b.onclick=()=>{document.getElementById("letter").className="letter "+b.dataset.style;showScreen("letterScreen")});
document.addEventListener("keydown",e=>{if(/^[0-9]$/.test(e.key)&&entered.length<6){entered+=e.key;renderCode()}if(e.key==="Backspace"){entered=entered.slice(0,-1);renderCode()}if(e.key==="Enter")document.getElementById("unlockBtn").click()});
setInterval(()=>{const h=document.createElement("div");h.className="floating-heart";h.textContent=["♥","♡","❤"][Math.floor(Math.random()*3)];h.style.left=Math.random()*100+"%";h.style.fontSize=12+Math.random()*20+"px";h.style.animationDuration=4+Math.random()*3+"s";document.getElementById("hearts").appendChild(h);setTimeout(()=>h.remove(),7000)},800);renderCode();