(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),links:document.querySelectorAll(".mobile-menu-link"),header:document.querySelector("[data-menu-header]")};t.openMenuBtn.addEventListener("click",n),t.links.forEach(function(i){i.addEventListener("click",n)});function n(){t.menu.classList.toggle("is-open"),t.header.classList.toggle("is-open")}})();const l=document.querySelectorAll('a[href*="#"]');for(let t of l)t.addEventListener("click",function(n){n.preventDefault();const i=t.getAttribute("href").substr(1);document.getElementById(i).scrollIntoView({behavior:"smooth",block:"start"})});(function(t){typeof t.matches!="function"&&(t.matches=t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||function(n){for(var i=this,a=(i.document||i.ownerDocument).querySelectorAll(n),e=0;a[e]&&a[e]!==i;)++e;return Boolean(a[e])}),typeof t.closest!="function"&&(t.closest=function(n){for(var i=this;i&&i.nodeType===1;){if(i.matches(n))return i;i=i.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll(".js-open-modal"),n=document.querySelector(".js-overlay-modal"),i=document.querySelectorAll(".js-modal-close");t.forEach(function(a){a.addEventListener("click",function(e){e.preventDefault();var o=this.getAttribute("data-modal"),s=document.querySelector('.modal[data-modal="'+o+'"]');s.classList.add("active"),n.classList.add("active")})}),i.forEach(function(a){a.addEventListener("click",function(e){var o=this.closest(".modal");o.classList.remove("active"),n.classList.remove("active")})}),document.body.addEventListener("keyup",function(a){var e=a.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),n.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});const r=[{id:1,img:"./img/event/image 1761x.png",img2x:"./img/event/image 1762x.png",data:"May 6, 2023 - November 12, 2024",title:"Lauren Halsey",text:"The Spotlight exhibition series includes a new or never-before-exhibited artwork accompanied by a commissioned piece of writing. It is the hope of this series to create focused and thoughtful dialogues between the visual arts and critics, poets, scholars, etc.In this iteration, the Spotlight features Lauren Halsey’s portal."},{id:2,img:"./img/event/image 1761x (1).png",img2x:"./img/event/image 1762x (1).png",data:"October 6, 2023 - December 22, 2024",title:"Friends & Lovers",text:"Friends & Lovers is an expansive group exhibition that centers on the relationships between artists and their subjects and explores the infinite ways (both past and present) we are influenced by our inner circles. Highlighting a range of media, practices, and approaches to artmaking, artists in the exhibition include   Peter Cain."},{id:3,img:"./img/event/image 1771x.png",img2x:"./img/event/image 1772x.png",data:"October 6, 2023 - December 22, 2024",title:"Cynthia Daignault",text:"Cynthia Daignault’s new series of paintings—part solo exhibition, virtual group show, and curatorial project—is a collaboration with 36 artists exploring ideas of agency, appropriation, and the traces we leave behind.In collaboration with Cory Arcangel, Conor Backman, Sadie Barnette, Jason Bereswill, Todd Bienvenu, Carol Bove,   Canyon Castato."}];console.log(r);const d={eventList:document.getElementById("EventList")};d.eventList.insertAdjacentHTML("beforeend",g(r));function g(t){return t.reduce((n,{id:i,img:a,img2x:e,data:o,title:s,text:c})=>n+`
	<li data-id= "${i}" class="Event-item">
	 <picture class="img-container">
                        <source
                            srcset="${a}  1x, ${e} 2x"
                            media="(max-width: 768px)" sizes="(width: 358px) 358px, 100vw">
                        <source
                            srcset="${a} 1x, ${e} 2x"
                            media="(max-width: 1440px)" sizes="(width: 415px) 415px, 100vw">
                        <source
                           srcset="${a} 1x, ${e} 2x"
                            media="(min-width: 1440px)" sizes="(width: 415px) 415px, 100vw">
                        <img src="${e}" alt=${s}>
                    </picture>
	<h2 class="event-title">${s}</h2>
	<p class="event-data">${o}</p>
	<p class="event-text">${c}</p>
	<button class="title-button white event js-open-modal" data-modal="1">Visit
			<img class="title-button-img" src="./img/icons/elem (1).png" width="24px">
		</button>
	</li>
	`,"")}(()=>{const t={openButton:document.querySelector("[data-open]"),eventList:document.querySelector("[EventList]"),openButtonCatalog:document.querySelector("[data-open-catalog]"),catalogList:document.querySelector("[CatalogList]")};t.openButton.addEventListener("click",n),t.openButtonCatalog.addEventListener("click",i);function n(){t.eventList.classList.toggle("is-open"),t.openButton.classList.toggle("is-open")}function i(){t.catalogList.classList.toggle("is-open"),t.openButtonCatalog.classList.toggle("is-open")}})();const m=[{id:1,img:"../img/Catalog/image 174_1x_400.png",img2x:"../img/Catalog/image 174_2x400.png",title:"Nicolas Party: Pastel",price:"$1150.00"},{id:2,img:"../img/Catalog/image 1751x (1).png",img2x:"../img/Catalog/image 1752x (1).png",title:"Disturbing Innocence",price:"$1450.00"},{id:3,img:"./img/Catalog/image 1751x.png",img2x:"./img/Catalog/image 1752x.png",title:"Funny.",price:"$1150.00"},{id:4,img:"./img/Catalog/unsplash_CXjp1ycr5Vw1x.png",img2x:"./img/Catalog/unsplash_CXjp1ycr5Vw2x (1).png",title:"One, Another",price:"$250.00"},{id:5,img:"./img/Catalog/unsplash_I2RnOO8ojQ41x.png",img2x:"./img/Catalog/unsplash_I2RnOO8ojQ42x.png",title:"Roy Lichtenstein: Pastel",price:"$550.00"},{id:6,img:"./img/Catalog/unsplash_k39RGHmLoV81x.png",img2x:"./img/Catalog/unsplash_k39RGHmLoV82x.png",title:"All Kets",price:"$2150.00"}],u={catalogList:document.getElementById("CatalogList")};u.catalogList.insertAdjacentHTML("beforeend",p(m));function p(t){return t.reduce((n,{id:i,img:a,img2x:e,title:o,price:s})=>n+`
	<li data-id= "${i}" class="Catalog-item">
	 <picture class="img-container-catalog">
                        <source
                            srcset="${a}  1x, ${e} 2x"
                            media="(max-width: 768px)" sizes="(width: 358px) 358px, 100vw">
                        <source
                            srcset="${a} 1x, ${e} 2x"
                            media="(max-width: 1440px)" sizes="(width: 415px) 415px, 100vw">
                        <source
                           srcset="${a} 1x, ${e} 2x"
                            media="(min-width: 1440px)" sizes="(width: 415px) 415px, 100vw">
                        <img src="${e}" alt=${o}>
                    </picture>
	<div class="catalog-price-container">
		<p class="catalog-title">${o}</p>
		<p class="catalog-price">${s}</p>
	</div>
	</li>
	`,"")}const h=[{id:1,img:"./img/Past/image 1771x.png",img2x:"./img/Past/image 1772x.png"},{id:2,img:"./img/Past/image 1791x.png",img2x:"./img/Past/image 1792x.png"},{id:3,img:"./img/Past/image 1801x.png",img2x:"./img/Past/image 1802x.png"},{id:4,img:"./img/Past/image 1811x.png",img2x:"./img/Past/image 1812x.png"}],x={past:document.getElementById("pastexb")};x.past.insertAdjacentHTML("beforeend",f(h));function f(t){return t.reduce((n,{id:i,img:a,img2x:e})=>n+`
	<li data-id= "${i}" class="pastexb-item">
    <img class="img-container-pastexb" src="${e}" alt=${i}>              
	</li>
	`,"")}
//# sourceMappingURL=commonHelpers.js.map
