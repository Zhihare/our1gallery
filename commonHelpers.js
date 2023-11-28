(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),links:document.querySelectorAll(".mobile-menu-link"),header:document.querySelector("[data-menu-header]")};t.openMenuBtn.addEventListener("click",a),t.links.forEach(function(i){i.addEventListener("click",a)});function a(){t.menu.classList.toggle("is-open"),t.header.classList.toggle("is-open")}})();const c=document.querySelectorAll('a[href*="#"]');for(let t of c)t.addEventListener("click",function(a){a.preventDefault();const i=t.getAttribute("href").substr(1);document.getElementById(i).scrollIntoView({behavior:"smooth",block:"start"})});(function(t){typeof t.matches!="function"&&(t.matches=t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||function(a){for(var i=this,r=(i.document||i.ownerDocument).querySelectorAll(a),e=0;r[e]&&r[e]!==i;)++e;return Boolean(r[e])}),typeof t.closest!="function"&&(t.closest=function(a){for(var i=this;i&&i.nodeType===1;){if(i.matches(a))return i;i=i.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll(".js-open-modal"),a=document.querySelector(".js-overlay-modal"),i=document.querySelectorAll(".js-modal-close");t.forEach(function(r){r.addEventListener("click",function(e){e.preventDefault();var o=this.getAttribute("data-modal"),n=document.querySelector('.modal[data-modal="'+o+'"]');n.classList.add("active"),a.classList.add("active")})}),i.forEach(function(r){r.addEventListener("click",function(e){var o=this.closest(".modal");o.classList.remove("active"),a.classList.remove("active")})}),document.body.addEventListener("keyup",function(r){var e=r.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),a.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});const s=[{id:1,img:"https://github.com/Zhihare/our1gallery/blob/main/src/img/Event/image%201761x.png?raw=true",img2x:"https://github.com/Zhihare/our1gallery/blob/main/src/img/Event/image%201762x.png?raw=true",data:"May 6, 2023 - November 12, 2024",title:"Lauren Halsey",text:"The Spotlight exhibition series includes a new or never-before-exhibited artwork accompanied by a commissioned piece of writing. It is the hope of this series to create focused and thoughtful dialogues between the visual arts and critics, poets, scholars, etc.In this iteration, the Spotlight features Lauren Halsey’s portal."},{id:2,img:"https://github.com/Zhihare/our1gallery/blob/main/src/img/Event/image%201761x%20(1).png?raw=true",img2x:"https://github.com/Zhihare/our1gallery/blob/main/src/img/Event/image%201762x%20(1).png?raw=true",data:"October 6, 2023 - December 22, 2024",title:"Friends & Lovers",text:"Friends & Lovers is an expansive group exhibition that centers on the relationships between artists and their subjects and explores the infinite ways (both past and present) we are influenced by our inner circles. Highlighting a range of media, practices, and approaches to artmaking, artists in the exhibition include   Peter Cain."},{id:3,img:"https://github.com/Zhihare/our1gallery/blob/main/src/img/Event/image%201771x.png?raw=true",img2x:"https://github.com/Zhihare/our1gallery/blob/main/src/img/Event/image%201772x.png?raw=true",data:"October 6, 2023 - December 22, 2024",title:"Cynthia Daignault",text:"Cynthia Daignault’s new series of paintings—part solo exhibition, virtual group show, and curatorial project—is a collaboration with 36 artists exploring ideas of agency, appropriation, and the traces we leave behind.In collaboration with Cory Arcangel, Conor Backman, Sadie Barnette, Jason Bereswill, Todd Bienvenu, Carol Bove,   Canyon Castato."}];console.log(s);const u={eventList:document.getElementById("EventList")};u.eventList.insertAdjacentHTML("beforeend",g(s));function g(t){return t.reduce((a,{id:i,img:r,img2x:e,data:o,title:n,text:l})=>a+`
	<li data-id= "${i}" class="Event-item">
	 <picture class="img-container">
                        <source
                            srcset="${r}  1x, ${e} 2x"
                            media="(max-width: 768px)" sizes="(width: 358px) 358px, 100vw">
                        <source
                            srcset="${r} 1x, ${e} 2x"
                            media="(max-width: 1440px)" sizes="(width: 415px) 415px, 100vw">
                        <source
                           srcset="${r} 1x, ${e} 2x"
                            media="(min-width: 1440px)" sizes="(width: 415px) 415px, 100vw">
                        <img src="${e}" alt=${n}>
                    </picture>
	<h2 class="event-title">${n}</h2>
	<p class="event-data">${o}</p>
	<p class="event-text">${l}</p>
	<button class="title-button white event js-open-modal" data-modal="1">Visit
			<img class="title-button-img" src="https://github.com/Zhihare/our1gallery/blob/main/src/img/icons/elem%20(1).png?raw=true" width="24px">
		</button>
	</li>
	`,"")}(()=>{const t={openButton:document.querySelector("[data-open]"),eventList:document.querySelector("[EventList]"),openButtonCatalog:document.querySelector("[data-open-catalog]"),catalogList:document.querySelector("[CatalogList]")};t.openButton.addEventListener("click",a),t.openButtonCatalog.addEventListener("click",i);function a(){t.eventList.classList.toggle("is-open"),t.openButton.classList.toggle("is-open")}function i(){t.catalogList.classList.toggle("is-open"),t.openButtonCatalog.classList.toggle("is-open")}})();const m=[{id:1,img:"https://github.com/Zhihare/our1gallery/blob/main/src/img/Catalog/image%20174_1x_400.png?raw=true",img2x:"https://github.com/Zhihare/our1gallery/blob/main/src/img/Catalog/image%20174_2x400.png?raw=true",title:"Nicolas Party: Pastel",price:"$1150.00"},{id:2,img:"https://github.com/Zhihare/our1gallery/blob/main/src/img/Catalog/image%201751x%20(1).png?raw=true",img2x:"https://github.com/Zhihare/our1gallery/blob/main/src/img/Catalog/image%201752x%20(1).png?raw=true",title:"Disturbing Innocence",price:"$1450.00"},{id:3,img:"https://github.com/Zhihare/our1gallery/blob/main/src/img/Catalog/image%201751x.png?raw=true",img2x:"https://github.com/Zhihare/our1gallery/blob/main/src/img/Catalog/image%201752x.png?raw=true",title:"Funny.",price:"$1150.00"},{id:4,img:"https://github.com/Zhihare/our1gallery/blob/main/src/img/Catalog/unsplash_CXjp1ycr5Vw1x.png?raw=true",img2x:"https://github.com/Zhihare/our1gallery/blob/main/src/img/Catalog/unsplash_CXjp1ycr5Vw2x%20(1).png?raw=true",title:"One, Another",price:"$250.00"},{id:5,img:"https://github.com/Zhihare/our1gallery/blob/main/src/img/Catalog/unsplash_I2RnOO8ojQ41x.png?raw=true",img2x:"https://github.com/Zhihare/our1gallery/blob/main/src/img/Catalog/unsplash_I2RnOO8ojQ42x.png?raw=true",title:"Roy Lichtenstein: Pastel",price:"$550.00"},{id:6,img:"https://github.com/Zhihare/our1gallery/blob/main/src/img/Catalog/unsplash_k39RGHmLoV81x.png?raw=true",img2x:"https://github.com/Zhihare/our1gallery/blob/main/src/img/Catalog/unsplash_k39RGHmLoV82x.png?raw=true",title:"All Kets",price:"$2150.00"}],h={catalogList:document.getElementById("CatalogList")};h.catalogList.insertAdjacentHTML("beforeend",d(m));function d(t){return t.reduce((a,{id:i,img:r,img2x:e,title:o,price:n})=>a+`
	<li data-id= "${i}" class="Catalog-item">
	 <picture class="img-container-catalog">
                        <source
                            srcset="${r}  1x, ${e} 2x"
                            media="(max-width: 768px)" sizes="(width: 358px) 358px, 100vw">
                        <source
                            srcset="${r} 1x, ${e} 2x"
                            media="(max-width: 1440px)" sizes="(width: 415px) 415px, 100vw">
                        <source
                           srcset="${r} 1x, ${e} 2x"
                            media="(min-width: 1440px)" sizes="(width: 415px) 415px, 100vw">
                        <img src="${e}" alt=${o}>
                    </picture>
	<div class="catalog-price-container">
		<p class="catalog-title">${o}</p>
		<p class="catalog-price">${n}</p>
	</div>
	</li>
	`,"")}const p=[{id:1,img:"https://github.com/Zhihare/our1gallery/blob/main/src/img/Past/image%201771x.png?raw=true",img2x:"https://github.com/Zhihare/our1gallery/blob/main/src/img/Past/image%201772x.png?raw=true"},{id:2,img:"https://github.com/Zhihare/our1gallery/blob/main/src/img/Past/image%201791x.png?raw=true",img2x:"https://github.com/Zhihare/our1gallery/blob/main/src/img/Past/image%201792x.png?raw=true"},{id:3,img:"https://github.com/Zhihare/our1gallery/blob/main/src/img/Past/image%201801x.png?raw=true",img2x:"https://github.com/Zhihare/our1gallery/blob/main/src/img/Past/image%201802x.png?raw=true"},{id:4,img:"https://github.com/Zhihare/our1gallery/blob/main/src/img/Past/image%201811x.png?raw=true",img2x:"https://github.com/Zhihare/our1gallery/blob/main/src/img/Past/image%201812x.png?raw=true"}],b={past:document.getElementById("pastexb")};b.past.insertAdjacentHTML("beforeend",y(p));function y(t){return t.reduce((a,{id:i,img:r,img2x:e})=>a+`
	<li data-id= "${i}" class="pastexb-item">
    <img class="img-container-pastexb" src="${e}" alt=${i}>              
	</li>
	`,"")}
//# sourceMappingURL=commonHelpers.js.map
