import instruments from "./past.json" assert { type: "json" };

const refs = {
	past: document.getElementById("pastexb"),
}

const photo = [
	{
		"id": 1,
		"img": "./img/Past/image 1771x.png",
		"img2x": "./img/Past/image 1772x.png"
	},
	{
		"id": 2,
		"img": "./img/Past/image 1791x.png",
		"img2x": "./img/Past/image 1792x.png"
	},
	{
		"id": 3,
		"img": "./img/Past/image 1801x.png",
		"img2x": "./img/Past/image 1802x.png"
	},
	{
		"id": 4,
		"img": "./img/Past/image 1811x.png",
		"img2x": "./img/Past/image 1812x.png"
	}
]



refs.past.insertAdjacentHTML("beforeend", createMarkup(photo));


function createMarkup(arr) {
	return arr.reduce((markup, { id, img, img2x }) => markup + `
	<li data-id= "${id}" class="pastexb-item">
    <img class="img-container-pastexb" src="${img2x}" alt=${id}>              
	</li>
	`, "");
}