const mainnav = document.querySelector('.nav');
const hambutton = document.getElementById('menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('nav');
	hambutton.classList.toggle('show');
});