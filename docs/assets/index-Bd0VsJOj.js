(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function s(t){console.info({element:t});let n=0;const o=i=>{n=i,t.innerHTML=`count is ${n}`};t.addEventListener("click",()=>o(n+1)),o(0)}async function u(){return await(await fetch("/files.json")).json()}function a(t){return`
    <article>
      <figure>
        <picture>
          <img alt="${t.alttext}" src="${t.filename}" loading="lazy">
        </picture>
        <figcaption>${t.caption} debugging information ${t.filename}</figcaption>
      </figure>
    </article>
  `}async function l(){const n='<aside><button id="counter" type="button">testing</button></aside>'+(await u()).map(a).join("");document.querySelector("#app").innerHTML=n}l();s(document.querySelector("#counter"));
