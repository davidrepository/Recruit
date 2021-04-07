$(() => {
	gsap.registerPlugin(ScrollTrigger);

	const sections = document.querySelectorAll('section');
	const block1 = document.querySelector('.block1');
	const block2 = document.querySelector('.block2');

	sections.forEach(section => {
		gsap.fromTo(
			section.children,
			{ y: 100, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				stagger: 0.2,
				duration: 1,
				ease: 'easeInOut',
				scrollTrigger: {
					trigger: section,
					start: 'top 40%',
				},
			},
		);
	});

	gsap.fromTo(
		block1,
		{ y: 0 },
		{
			y: 3000,
			duration: 1,
			scrollTrigger: {
				trigger: '.block1',
				start: 'top 20%',
				end: '+=' + window.innerHeight * 4,
				scrub: 1,
			},
		},
	);

	gsap.fromTo(
		block2,
		{ y: -800 },
		{
			y: 4000,
			duration: 1,
			// opacity: 1,
			// ease: 'easeInOut',
			scrollTrigger: {
				trigger: '.block2',
				start: 'top 20%',
				end: '+=' + window.innerHeight * 4,
				scrub: 1,
				// end: 'top 30%',
				// markers: true,
			},
		},
	);

	// Header
	const header = $('.header');
	$(window).scroll(() => {
		$(this).scrollTop() > 0
			? header.addClass('active')
			: header.removeClass('active');
	});

	// Sidebar
	const hamburger = $('.header__hamburger');
	const body = $('body');
	hamburger.click(() => {
		let timeout;

		if (body.hasClass('sidebar-in')) {
			clearTimeout(timeout);
			body.removeClass('sidebar-in');
			body.addClass('sidebar-out');

			timeout = setTimeout(() => {
				body.removeClass('sidebar-out');
			}, 200);
		} else {
			clearTimeout(timeout);
			body.removeClass('sidebar-out');
			body.addClass('sidebar-in');
		}
	});
});
