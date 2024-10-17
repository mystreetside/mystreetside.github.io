(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function s(n){console.info({element:n});let t=parseInt(localStorage.getItem("counter")||"0",10);const o=i=>{t=i,n.innerHTML=`count is ${t}`,localStorage.setItem("counter",t.toString())};n.addEventListener("click",()=>o(t+1)),o(t)}async function a(){return await(await fetch("/files.json")).json()}function u(n){return`
    <article>
      <figure>
        <picture>
          <img alt="${n.alttext}" src="${n.filename}" loading="lazy" width="4032" height="3024" class="clickable-image">
        </picture>
        <figcaption>${n.caption} debugging information ${n.filename}</figcaption>
      </figure>
    </article>
  `}async function l(){const t='<aside><p>click the button and have some fun</p><button id="counter" type="button">testing</button></aside>'+(await a()).map(u).join("");document.querySelector("#app").innerHTML=t,document.querySelectorAll(".clickable-image").forEach(o=>{o.addEventListener("click",()=>{window.open(o.src,"_blank")})}),s(document.querySelector("#counter"))}l();
