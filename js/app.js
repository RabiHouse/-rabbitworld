(()=>{
const $=s=>document.querySelector(s),C=window.CHARS;
C.forEach(c=>{if(c.imgs&&c.imgs.length)c.img=c.imgs[0]});
let lang;try{lang=localStorage.getItem("lang")}catch(e){}
lang=lang||((navigator.language||"ja").startsWith("ja")?"ja":"en");
const t=o=>o[lang],page=document.body.dataset.page;
const nav=[["index","home","ホーム","Home"],["characters","rabbits","うさたち","Rabbits"],["map","map","マップ","Map"],["wallpapers","item","アイテム","Item"],["story","story","お話","Story",1],["guide","guide","ガイド","Guide"],["links","link","リンク","Link"]];
const pair=(k,l,alt)=>`<span class="${l} nvi"><img class="a" src="img/nav/${k}-${l}-o.webp" alt="${alt}"><img class="b" src="img/nav/${k}-${l}-p.webp" alt="" aria-hidden="true"></span>`;
const navBtn=n=>{const inner=pair(n[1],"ja",n[2])+pair(n[1],"en",n[3]);if(n[4])return `<span class="nvw"><span class="nv off" aria-disabled="true">${inner}</span><small class="cs">coming soon</small></span>`;return `<a class="nv" href="${n[0]}.html"${(page==n[0]||(page=="character"&&n[0]=="characters"))?" aria-current=page":""}>${inner}</a>`};
$("#hd").outerHTML=`<header class="top"><button id="burger" type="button" aria-label="menu" aria-expanded="false" aria-controls="menu"><span></span><span></span><span></span></button><a class="logo" href="index.html">🐰 <span class="ja">うさの国</span><span class="en">Rabbit World</span></a><nav id="menu">${nav.map(navBtn).join("")}</nav><button id="lang" type="button" class="nv"><span class="ja nvi"><img class="a" src="img/nav/lang-en-o.webp" alt="English"><img class="b" src="img/nav/lang-en-p.webp" alt="" aria-hidden="true"></span><span class="en nvi"><img class="a" src="img/nav/lang-ja-o.webp" alt="日本語"><img class="b" src="img/nav/lang-ja-p.webp" alt="" aria-hidden="true"></span></button></header>`;
$("#ft").outerHTML=`<footer><a href="../">← <span class="ja">メインサイトへ</span><span class="en">Back to main site</span></a><br><a class="fsm" href="terms.html"><span class="ja">利用規約・プライバシー</span><span class="en">Terms &amp; Privacy</span></a><br><i class="fa-solid fa-heart"></i> © RabbitflowerDiary</footer>`;
const card=c=>{const pic=c.img?`<img src="${c.img}" alt="${t(c.name)}">`:c.emoji;
 const inner=`<div class="pic">${pic}</div><h3>${t(c.name)}</h3><p>${t(c.role)}</p>${c.host?`<p>🏠 ${lang=="ja"?"うさの国の案内役":"Our guide"}</p>`:""}`;
 const note=c.note?`<p>${t(c.note)}</p>`:"";
 if(c.href)return `<a class="card" style="--c:${c.color}" href="${c.href}" target="_blank" rel="noopener">${inner}${note}</a>`;
 return c.soon?`<div class="card soon" style="--c:${c.color}">${inner}<p>${lang=="ja"?"準備中":"Coming soon"}</p></div>`:`<a class="card" style="--c:${c.color}" href="character.html?id=${c.id}">${inner}</a>`};
const gal=(a,alt,cls="")=>`<div class="gal ${cls}"><div class="track">${a.map((s,i)=>{const o=typeof s=="string"?{src:s}:s,im=`<img src="${o.src}" alt="${alt} ${i+1}"${i?' loading="lazy"':""}>`;return o.cap?`<figure>${im}<figcaption>${o.cap}</figcaption></figure>`:im}).join("")}</div>`+(a.length<2?"":`<button class="nav prev" type="button" aria-label="${lang=="ja"?"前の画像":"Previous image"}">‹</button><button class="nav next" type="button" aria-label="${lang=="ja"?"次の画像":"Next image"}">›</button><div class="dots">${a.map(()=>"<i></i>").join("")}</div>`)+`</div>`;
const pic=c=>c.img?gal(c.imgs||[c.img],t(c.name)):`<div class="gal noimg">${c.emoji||"🐰"}</div>`;
const cl=(p,w)=>`https://res.cloudinary.com/${window.CLOUD||"dzgxt2s8f"}/image/upload/f_auto,q_auto:best,c_fill,g_auto,ar_4:3,w_${w}/${p}`;
const homeBlock=c=>{const h=c.home,cp=h.caps?t(h.caps):[],im=(h.imgs||[]).map((p,i)=>({src:cl(p,1600),cap:cp[i]||""}));
 return `<section class="home" style="--c:${c.color}"><h2>${h.emoji||"🏠"} ${t(h.name)}</h2>${im.length?gal(im,t(h.name),"homegal"):""}<div class="homet">${t(h.text).map(x=>`<p>${x}</p>`).join("")}</div>${h.facts?`<div class="facts">${h.facts.map(f=>`<div class="fact"><span class="fi">${f.i}</span><div><b>${t(f.k)}</b><br>${t(f.v)}</div></div>`).join("")}</div>`:""}${h.map?`<p class="more"><a class="btn mini" href="map.html"><i class="fa-solid fa-map-location-dot"></i> ${lang=="ja"?"地図で見る":"See the map"}</a></p>`:""}</section>`};
const upd=tr=>{const g=tr.parentNode,i=Math.round(tr.scrollLeft/tr.clientWidth);g.querySelectorAll(".dots i").forEach((d,k)=>d.classList.toggle("on",k==i))};
document.addEventListener("scroll",e=>{if(e.target.classList&&e.target.classList.contains("track"))upd(e.target)},true);
document.addEventListener("click",e=>{const b=e.target.closest(".nav");if(!b)return;const tr=b.parentNode.querySelector(".track");tr.scrollBy({left:(b.classList.contains("next")?1:-1)*tr.clientWidth,behavior:"smooth"})});
document.querySelectorAll("[data-scene]").forEach(el=>{const k=el.dataset.scene;if(!window.SCENES||!SCENES[k])return;const b=el.classList.contains("banner"),ar=b?"3:1":"4:1",u=w=>sceneUrl(k,w,ar),sz=b?"(min-width:1000px) 830px, 90vw":"(min-width:1000px) 1000px, 100vw";el.innerHTML=`<img src="${u(1600)}" srcset="${u(800)} 800w, ${u(1200)} 1200w, ${u(1600)} 1600w, ${u(2400)} 2400w, ${u(3200)} 3200w" sizes="${sz}" alt=""${b?"":' loading="lazy"'}>`});
document.querySelectorAll(".mail").forEach(m=>{m.textContent=m.dataset.u+"@"+m.dataset.d});
const pageOf=c=>c.soon||c.href?"":"character.html?id="+c.id;
function closePop(){const p=$("#pop");if(p)p.hidden=true}
document.addEventListener("click",e=>{const pop=$("#pop");if(!pop)return;const pin=e.target.closest(".pin");
 if(!pin){if(!e.target.closest("#pop"))pop.hidden=true;return}
 const c=C.find(x=>x.id==pin.dataset.id),w=$(".map-wrap"),u=pageOf(c);
 pop.innerHTML=`<div class="pic">${c.img?`<img src="${c.img}" alt="">`:c.emoji}</div><div><b>${t(c.name)}</b><br><small>${t(c.role)}</small>${c.alert?`<br><small class="warn">${t(c.alert)}</small>`:""}${u?`<br><a class="btn mini" href="${u}">${lang=="ja"?"紹介ページへ":"Profile"} →</a>`:""}</div>`;
 pop.style.setProperty("--c",c.color);pop.hidden=false;
 const W=w.clientWidth,H=w.clientHeight,px=c.map[0]/100*W,py=c.map[1]/100*H,pw=pop.offsetWidth,ph=pop.offsetHeight;
 let l=px+26;if(l+pw>W-6)l=px-26-pw;
 pop.style.left=Math.max(6,l)+"px";pop.style.top=Math.min(Math.max(py-ph/2,6),H-ph-6)+"px";
 const b=pop.querySelector("a");if(b)b.focus({preventScroll:true})});
document.addEventListener("keydown",e=>{if(e.key=="Escape")closePop()});
function render(){
 const wl=$("#walls");if(wl){const W=window.WALLS||[];wl.innerHTML=W.map(w=>{const c=C.find(k=>k.id==w.char),col=c?c.color:"#C9A8F0",dl=w.free?`<a class="btn mini" href="${w.file}" download><i class="fa-solid fa-download"></i> ${lang=="ja"?"無料ダウンロード":"Free download"}</a>`:`<a class="btn mini" href="${w.link||SHOPS[w.shop]||SHOPS.suzuri}" target="_blank" rel="noopener"><i class="fa-solid fa-cart-shopping"></i> ${lang=="ja"?"購入ページへ":"Get it"}</a>`;
  return `<div class="wall" style="--c:${col}"><img src="${w.thumb}" alt="${t(w.title)}" loading="lazy"><span class="tag">${w.free?(lang=="ja"?"無料":"Free"):(lang=="ja"?"有料":"Paid")}</span><h3>${t(w.title)}</h3><p>${c?t(c.name)+" ・ ":""}${w.size||""}</p>${dl}</div>`}).join("")}
 const lk=$("#linkbox");if(lk)lk.innerHTML=(window.LINKS||[]).map(g=>{const it=g.items.filter(i=>i.url||i.soon);return it.length?`<section class="lgroup" style="--c:${g.c}"><h2>${t(g.g)}</h2>${it.map(i=>{const nm=typeof i.name=="string"?i.name:t(i.name),ic=`<span class="li"><i class="${i.icon}"></i></span>`;return i.url?`<a class="linkbtn" href="${i.url}" target="_blank" rel="noopener">${ic}<span class="lt">${nm}</span></a>`:`<span class="linkbtn off" aria-disabled="true">${ic}<span class="lt">${nm}<small>coming soon</small></span></span>`}).join("")}</section>`:""}).join("");
 const mp=$("#pins");if(mp){closePop();
  mp.innerHTML=C.filter(c=>c.map).map(c=>`<button class="pin${c.alert?" alert":""}" type="button" data-id="${c.id}" style="left:${c.map[0]}%;top:${c.map[1]}%;--c:${c.color}" aria-label="${t(c.name)}" title="${t(c.name)}">${c.img?`<img src="${c.img}" alt="">`:c.emoji}</button>`).join("");
  $("#chips").innerHTML=C.filter(c=>pageOf(c)).map(c=>`<a class="chip" style="--c:${c.color}" href="${pageOf(c)}">${t(c.name)}</a>`).join("")}
 document.documentElement.lang=lang;
 const g=$("#list");if(g){const h=C.filter(x=>x.host),fr=C.filter(x=>x.group=="friends"),r=C.filter(x=>!x.host&&x.group!="friends").slice(0,page=="home"?3:99);g.innerHTML=`<div class="host-row">${h.map(card).join("")}</div><div class="grid">${r.map(card).join("")}</div>${page=="characters"&&fr.length?`<h2 class="grouph">🐾 ${lang=="ja"?"ほかの国のなかまたち":"Friends from other lands"}</h2><div class="grid">${fr.map(card).join("")}</div>`:""}${page=="home"?`<p class="more"><a class="btn" href="characters.html">${lang=="ja"?"他のうさも見る":"See more rabbits"} →</a></p>`:""}`};
 const d=$("#detail");if(d){const c=C.find(x=>x.id==new URLSearchParams(location.search).get("id")&&!x.soon);
  if(!c){d.innerHTML=`<p>${lang=="ja"?"このうさは見つかりませんでした。":"We couldn't find this resident."}</p>`;return}
  document.title=t(c.name)+" | "+(lang=="ja"?"うさの国":"Rabbit World");
  d.innerHTML=`<div class="profile" style="--c:${c.color}">${pic(c)}<div><h1>${t(c.name)}</h1>${c.tagline?`<p>${t(c.tagline)}</p>`:""}${c.tags?`<p class="tags">${t(c.tags).map(x=>`<span>${x}</span>`).join("")}</p>`:""}</div></div>`+
  (c.sections||[]).map(s=>`<div class="box" style="--c:${c.color}"><h2>${t(s.t)}</h2>${s.p?`<p>${t(s.p)}</p>${s.link?`<p><a class="btn mini" href="${s.link}" target="_blank" rel="noopener"><i class="fa-solid fa-tv"></i> ${t(s.linkText||s.t)}</a></p>`:""}`:`<ul>${t(s.ul).map(x=>`<li>${s.link?`<a href="${s.link}" target="_blank" rel="noopener">${x}</a>`:x}</li>`).join("")}</ul>`}</div>`).join("")+(c.home?homeBlock(c):"")}
 document.querySelectorAll(".track").forEach(upd)
}
const bg=$("#burger"),mn=$("#menu"),setMenu=o=>{mn.classList.toggle("open",o);bg.setAttribute("aria-expanded",o)};
bg.onclick=e=>{e.stopPropagation();setMenu(!mn.classList.contains("open"))};
document.addEventListener("click",e=>{if(!e.target.closest("#menu"))setMenu(false)});
document.addEventListener("keydown",e=>{if(e.key=="Escape")setMenu(false)});
$("#lang").onclick=()=>{lang=lang=="ja"?"en":"ja";try{localStorage.setItem("lang",lang)}catch(e){}render()};
render();
})();
