(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),links:document.querySelectorAll(".mobile-menu-link"),header:document.querySelector("[data-menu-header]")};t.openMenuBtn.addEventListener("click",n),t.links.forEach(function(o){o.addEventListener("click",n)});function n(){t.menu.classList.toggle("is-open"),t.header.classList.toggle("is-open")}})();const s=document.querySelectorAll('a[href*="#"]');for(let t of s)t.addEventListener("click",function(n){n.preventDefault();const o=t.getAttribute("href").substr(1);document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"})});(function(t){typeof t.matches!="function"&&(t.matches=t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||function(n){for(var o=this,c=(o.document||o.ownerDocument).querySelectorAll(n),e=0;c[e]&&c[e]!==o;)++e;return Boolean(c[e])}),typeof t.closest!="function"&&(t.closest=function(n){for(var o=this;o&&o.nodeType===1;){if(o.matches(n))return o;o=o.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll(".js-open-modal"),n=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");t.forEach(function(c){c.addEventListener("click",function(e){e.preventDefault();var r=this.getAttribute("data-modal"),l=document.querySelector('.modal[data-modal="'+r+'"]');l.classList.add("active"),n.classList.add("active")})}),o.forEach(function(c){c.addEventListener("click",function(e){var r=this.closest(".modal");r.classList.remove("active"),n.classList.remove("active")})}),document.body.addEventListener("keyup",function(c){var e=c.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),n.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});
//# sourceMappingURL=commonHelpers.js.map
