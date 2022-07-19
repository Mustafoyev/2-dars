var elBtn = document.querySelector('.hero-section-link');
var elModal = document.querySelector('.modal');
var elMbtn = document.querySelector('.modal__btn');

elBtn.addEventListener('click', function () {
	elModal.classList.add('open-modal');
});

elMbtn.addEventListener('click', function () {
	elModal.classList.remove('open-modal');
});

elModal.addEventListener('click', function () {
	elModal.classList.remove('open-modal');
});
