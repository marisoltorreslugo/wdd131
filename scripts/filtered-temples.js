const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
	const isOpen = navigation.classList.toggle("open");

	menuButton.textContent = isOpen ? "✕" : "☰";
	menuButton.setAttribute("aria-expanded", String(isOpen));
	menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg",
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg",
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-62834-main.jpg",
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
	},
	{
		templeName: "Redlands California",
		location: "Redlands California",
		dedicated: "2003, September, 14",
		area: 17300,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/redlands-california-temple/redlands-california-temple-37504-main.jpg",
	},
	{
		templeName: "Apia, Samoa",
		location: "Apia, Samoa",
		dedicated: "1983, August, 5",
		area: 18691,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/apia-samoa-temple/apia-samoa-temple-13905-main.jpg",
	},
	{
		templeName: "Tuxtla Gutiérrez, Mexico",
		location: "Tuxtla Gutiérrez, Mexico",
		dedicated: "2000, March, 12",
		area: 10700,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/tuxtla-gutierrez-mexico-temple/tuxtla-gutierrez-mexico-temple-15226-main.jpg",
	},
	{
		templeName: "Villahermosa, Mexico",
		location: "Villahermosa, Tabasco, Mexico",
		dedicated: "2000, May, 21",
		area: 10700,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/villahermosa-mexico-temple/villahermosa-mexico-temple-67267-main.jpg",
	},
];

createTempleCard(temples);

const oldTemplesLink = document.querySelector("#old-temples");
const newTemplesLink = document.querySelector("#new-temples");
const templesLargerLink = document.querySelector("#temples-larger");
const templesSmallerLink = document.querySelector("#temples-smaller");
const allTemplesLink = document.querySelector("#all-temples");

oldTemplesLink.addEventListener("click", () => {
	createTempleCard(
		temples.filter((temple) => {
			const year = Number(temple.dedicated.split(",")[0]);
			return year < 1900;
		}),
	);
});

newTemplesLink.addEventListener("click", () => {
	createTempleCard(
		temples.filter((temple) => {
			const year = Number(temple.dedicated.split(",")[0]);
			return year > 2000;
		}),
	);
});

templesLargerLink.addEventListener("click", () => {
	createTempleCard(temples.filter((temple) => temple.area > 90000));
});

templesSmallerLink.addEventListener("click", () => {
	createTempleCard(temples.filter((temple) => temple.area < 10000));
});

allTemplesLink.addEventListener("click", () => {
	createTempleCard(temples);
});

function createTempleCard(filteredTemples) {
	document.querySelector(".res-grid").innerHTML = "";
	filteredTemples.forEach((temple) => {
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedication = document.createElement("p");
		let area = document.createElement("p");
		let img = document.createElement("img");

		name.textContent = temple.templeName;
		location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
		dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
		area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("alt", `${temple.templeName} Temple`);
		img.setAttribute("loading", "lazy");

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);
		card.appendChild(img);

		document.querySelector(".res-grid").appendChild(card);
	});
}
