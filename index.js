var modal = document.getElementById('modal')
var modalButton = document.getElementById('mainButton')

modalButton.onclick = function () {
	fadeIn(modal)
}

window.onclick = function (ev) {
	if (ev.target === modal && !modal.classList.contains('is-hidden')) {
		fadeOut(modal)
	}
}

function fadeIn(el, display){
	if (el.classList.contains('is-hidden')){
		el.classList.remove('is-hidden');
	}
	el.style.opacity = 0;
	el.style.display = display || "block";

	(function fade() {
		var val = parseFloat(el.style.opacity);
		if (!((val += .5) > 1)) {
			el.style.opacity = val;
			requestAnimationFrame(fade);
		}
	})();
}

function fadeOut(el){
	el.style.opacity = 1;

	(function fade() {
		if ((el.style.opacity -= .5) < 0) {
			el.style.display = 'none';
			el.classList.add('is-hidden');
		} else {
			requestAnimationFrame(fade);
		}
	})();
}
