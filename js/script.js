const carousel = document.querySelector('.reviews__carousel');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

const date = document.getElementById('date');

function getCardWidth() {
	const card = carousel.querySelector('.reviews__card');
	return card ? card.offsetWidth + parseInt(getComputedStyle(carousel).gap || 0) : 0;
}

leftArrow.addEventListener('click', () => {
	const scrollAmount = getCardWidth();
	carousel.scrollBy({
		left: -scrollAmount,
		behavior: 'smooth',
	});
});

rightArrow.addEventListener('click', () => {
	const scrollAmount = getCardWidth();
	carousel.scrollBy({
		left: scrollAmount,
		behavior: 'smooth',
	});
});

const currentDate = () => new Date().getFullYear();
date.textContent = currentDate();

