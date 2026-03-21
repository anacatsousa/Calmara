const carousel = document.querySelector('.reviews__carousel');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const date = document.getElementById('date');

function getCardWidth() {
	const card = carousel.querySelector('.reviews__card');
	return card ? card.offsetWidth + parseInt(getComputedStyle(carousel).gap || 0) : 0;
}

// A11y

function updateAriaHidden() {
	const cards = carousel.querySelectorAll('.reviews__card');
	const visibleIndex = Math.round(carousel.scrollLeft / carousel.offsetWidth);

	cards.forEach((card, index) => {
		card.setAttribute('aria-hidden', index === visibleIndex ? 'false' : 'true');
	});
}

function focusVisibleCard() {
	const cards = carousel.querySelectorAll('.reviews__card');
	const visibleIndex = Math.round(carousel.scrollLeft / carousel.offsetWidth);
	cards[visibleIndex].setAttribute('tabindex', '-1');
	cards[visibleIndex].focus();
}

leftArrow.addEventListener('click', () => {
	const scrollAmount = getCardWidth();
	carousel.scrollBy({
		left: -scrollAmount,
		behavior: 'smooth',
	});
	setTimeout(() => {
		updateAriaHidden();
		focusVisibleCard();
	}, 300);
});

rightArrow.addEventListener('click', () => {
	const scrollAmount = getCardWidth();
	carousel.scrollBy({
		left: scrollAmount,
		behavior: 'smooth',
	});
	setTimeout(() => {
		updateAriaHidden();
		focusVisibleCard();
	}, 300);
});

updateAriaHidden();

const currentDate = () => new Date().getFullYear();
date.textContent = currentDate();
