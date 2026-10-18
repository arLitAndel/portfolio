/*
	Single-page portfolio behavior.
	Replaces Dimension's modal/overlay navigation with:
	- intro animation on load
	- a sticky top nav that appears after scrolling past the hero
	- scrollspy that highlights the current section's nav link
	(Smooth scrolling itself is handled by CSS: html { scroll-behavior: smooth }.)
*/
(function () {
	'use strict';

	// Play the intro animation (Dimension removes this class on load).
	window.addEventListener('load', function () {
		window.setTimeout(function () {
			document.body.classList.remove('is-preload');
		}, 100);
	});

	var header = document.getElementById('header');
	var topnav = document.getElementById('topnav');
	var navLinks = Array.prototype.slice.call(
		document.querySelectorAll('#topnav .topnav__links a')
	);
	var sections = navLinks
		.map(function (link) {
			return document.querySelector(link.getAttribute('href'));
		})
		.filter(Boolean);

	// Show the sticky nav once the hero has (mostly) scrolled out of view.
	function toggleTopNav() {
		var threshold = header ? header.offsetHeight - 120 : 400;
		if (window.scrollY > threshold) {
			topnav.classList.add('visible');
		} else {
			topnav.classList.remove('visible');
		}
	}

	// Highlight the nav link for whichever section is currently in view.
	if ('IntersectionObserver' in window && sections.length) {
		var observer = new IntersectionObserver(
			function (entries) {
				entries.forEach(function (entry) {
					if (!entry.isIntersecting) return;
					var id = entry.target.getAttribute('id');
					navLinks.forEach(function (link) {
						link.classList.toggle(
							'active',
							link.getAttribute('href') === '#' + id
						);
					});
				});
			},
			{ rootMargin: '-45% 0px -45% 0px', threshold: 0 }
		);
		sections.forEach(function (section) {
			observer.observe(section);
		});
	}

	window.addEventListener('scroll', toggleTopNav, { passive: true });
	window.addEventListener('resize', toggleTopNav);
	toggleTopNav();
})();
