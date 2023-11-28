import instruments from "./past.json" assert { type: "json" };

const refs = {
	past: document.getElementById("pastexb"),
}



refs.past.insertAdjacentHTML("beforeend", createMarkup(instruments));


function createMarkup(arr) {
	return arr.reduce((markup, { id, img, img2x }) => markup + `
	<li data-id= "${id}" class="pastexb-item">
    <img class="img-container-pastexb" src="${img2x}" alt=${id}>              
	</li>
	`, "");
}