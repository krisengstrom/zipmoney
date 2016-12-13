var h4s = document.querySelectorAll('.faq h4');

for (var i=0; i<h4s.length; i++) {
	h4s[i].addEventListener('click', function() {
		this.parentElement.classList.toggle('open');
	});
}