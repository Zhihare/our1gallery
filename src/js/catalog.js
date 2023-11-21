import instruments from "./catalog.json" assert { type: "json" };


const refs = {
	catalogList: document.getElementById("CatalogList"),
}

refs.catalogList.insertAdjacentHTML("beforeend", createMarkup(instruments));


function createMarkup(arr) {
	return arr.reduce((markup, { id, img, img2x, title, price }) => markup + `
	<li data-id= "${id}" class="Catalog-item">
	 <picture class="img-container-catalog">
                        <source
                            srcset="${img}  1x, ${img2x} 2x"
                            media="(max-width: 768px)" sizes="(width: 358px) 358px, 100vw">
                        <source
                            srcset="${img} 1x, ${img2x} 2x"
                            media="(max-width: 1440px)" sizes="(width: 415px) 415px, 100vw">
                        <source
                           srcset="${img} 1x, ${img2x} 2x"
                            media="(min-width: 1440px)" sizes="(width: 415px) 415px, 100vw">
                        <img src="${img2x}" alt=${title}>
                    </picture>
	<div class="catalog-price-container">
		<p class="catalog-title">${title}</p>
		<p class="catalog-price">${price}</p>
	</div>
	</li>
	`, "");

}