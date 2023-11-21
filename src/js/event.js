import instruments from "./data.json" assert { type: "json" };
console.log(instruments);

const refs = {
	eventList: document.getElementById("EventList"),
}

refs.eventList.insertAdjacentHTML("beforeend", createMarkup(instruments));


function createMarkup(arr) {
	return arr.reduce((markup, { id, img, img2x, data, title, text }) => markup + `
	<li data-id= "${id}" class="Event-item">
	 <picture class="img-container">
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
	<h2 class="event-title">${title}</h2>
	<p class="event-data">${data}</p>
	<p class="event-text">${text}</p>
	<button class="title-button white event js-open-modal" data-modal="1">Visit
			<img class="title-button-img" src="./img/icons/elem (1).png" width="24px">
		</button>
	</li>
	`, "");

}