const mainnav = document.querySelector('.nav');
const hambutton = document.getElementById('menu');
const home = document.getElementById('home');
const old = document.getElementById('old');
const newer = document.getElementById('newer');
const large = document.getElementById('large');
const small = document.getElementById('small');


hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('nav');
	hambutton.classList.toggle('show');
});



const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-daylight-1416668-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
	  templeName: "Kyiv Ukraine",
	  location: "Kyevo-Sviatoshyns’ky Rayon, Kyiv, Ukraine",
	  dedicated: "2010, August, 29",
	  area: 22184,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kyiv-ukraine/400x250/kyiv-ukraine-temple-lds-774302-wallpaper.jpg"
	},
	{
	  templeName: "Rome Italy",
	  location: "Rome, Italy",
	  dedicated: "2019, March, 10",
	  area: 41010,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/1-Rome-Temple-2160936.jpg"
	},
	{
	  templeName: "Bern Switzerland",
	  location: "Bern, Switzerland",
	  dedicated: "1955, September, 11",
	  area: 35546,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/ber-switzerland-temple-lds-903376-wallpaper.jpg"
	}
  ];


function createTempleCard(filteredTemples) {
	document.querySelector(".album").innerHTML = "";
	filteredTemples.forEach(temple => {
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedication = document.createElement("p");
		let area = document.createElement("p");
		let img = document.createElement("img");

		name.textContent = temple.templeName;
		location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
		dedication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;
		area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("alt", `${temple.templeName} Temple`);
		img.setAttribute("loading", "lazy");

		card.setAttribute("class", "card")
		card.append(name);
		card.append(location);
		card.append(dedication);
		card.append(area);
		card.append(img);

		document.querySelector(".album").appendChild(card);
	})
}

createTempleCard(temples);

home.addEventListener("click", () => {createTempleCard(temples)});

old.addEventListener("click", () => {
	const oldTemples = temples.filter(temple => {
		let year = parseInt(temple.dedicated.split(',')[0]);
		return year < 1900;
	});
	createTempleCard(oldTemples)
});

newer.addEventListener("click", () => {
	const newTemples = temples.filter(temple => {
		let year = parseInt(temple.dedicated.split(',')[0]);
		return year > 2000;
	});
	createTempleCard(newTemples)
});

large.addEventListener("click", () => {
	const largeTemples = temples.filter(temple => {
		let size = parseInt(temple.area);
		return size > 90000;
	});
	createTempleCard(largeTemples)
});

small.addEventListener("click", () => {
	const smallTemples = temples.filter(temple => {
		let size = parseInt(temple.area);
		return size < 10000;
	});
	createTempleCard(smallTemples)
});