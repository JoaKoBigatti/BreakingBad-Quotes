(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const i=async()=>(await(await fetch("https://api.breakingbadquotes.xyz/v1/quotes")).json())[0],a=async n=>{document.querySelector("#app-title").innerHTML="Breaking Bad - App",n.innerHTML="Loading...";const r=document.createElement("blockquote"),c=document.createElement("h3"),o=document.createElement("button");o.className="button",o.innerText="Next Quote";const e=t=>{r.innerHTML=t.quote,c.innerHTML=t.author,n.replaceChildren(r,c,o)};o.addEventListener("click",()=>{n.innerHTML="Loading...",i().then(e)}),i().then(e)};document.querySelector("#app").innerHTML=`
  <div>
    <a target="_blank">
      <img src="assets/logo/breaking-bad-quotes_header.png" class="logo" alt="Vite logo" />
    </a>
    <h1 id="app-title">Hello Vite!</h1>
    <div class="card">

    </div>

  </div>
`;const u=document.querySelector(".card");a(u);
