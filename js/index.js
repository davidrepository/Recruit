$(() => {
	gsap.registerPlugin(ScrollTrigger);

	const sections = document.querySelectorAll('section');
	const block1 = document.querySelector('.grid__block1');
	const block2 = document.querySelector('.grid__block2');
	const block3 = document.querySelector('.grid__block3');
	const block3_1 = document.querySelector('.grid__block3-1');

	sections.forEach(section => {
		gsap.fromTo(
			section.children,
			{ y: 50, opacity: 0 },
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
		{ y: -600 },
		{
			y: 2000,
			duration: 1,
			scrollTrigger: {
				trigger: '.grid__block1',
				start: 'top 40%',
				end: '+=' + window.innerHeight * 8,
				scrub: 1,
			},
		},
	);

	gsap.fromTo(
		block2,
		{ y: -1000 },
		{
			y: 4000,
			duration: 1,
			// opacity: 1,
			// ease: 'easeInOut',
			scrollTrigger: {
				trigger: '.grid__block2',
				start: 'top 10%',
				end: '+=' + window.innerHeight * 8,
				scrub: 1,
			},
		},
	);

	gsap.fromTo(
		block3,
		{ y: 0 },
		{
			y: 8000,
			duration: 1,
			scrollTrigger: {
				trigger: '.grid__block3',
				start: 'top 40%',
				end: '+=' + window.innerHeight * 24,
				scrub: 1,
			},
		},
	);

	gsap.fromTo(
		block3_1,
		{ y: 0 },
		{
			y: 3000,
			duration: 1,
			scrollTrigger: {
				trigger: '.grid__block3-1',
				start: 'top 20%',
				end: '+=' + window.innerHeight * 6,
				scrub: 1,
			},
		},
	);

	// Header, Hamburger, Mouse
	const siteBar = $('.site-bar');
	const body = $('body');

	const hamburger = $('.site-bar__hamburger');
	const headerFooterMouse = $('.header__footer-mouse');

	const sideBarIn = 'mobile-menu--in';
	const sideBarOut = 'mobile-menu--out';
	const sideBarActive = 'site-bar--active';

	$(window).scroll(() => {
		$(this).scrollTop() > 0
			? siteBar.addClass(sideBarActive)
			: siteBar.removeClass(sideBarActive);
	});

	hamburger.click(() => {
		let timeout;

		if (body.hasClass(sideBarIn)) {
			clearTimeout(timeout);
			body.removeClass(sideBarIn);
			body.addClass(sideBarOut);

			timeout = setTimeout(() => {
				body.removeClass(sideBarOut);
			}, 200);
		} else {
			clearTimeout(timeout);
			body.removeClass(sideBarOut);
			body.addClass(sideBarIn);
		}
	});

	$('a.navigate').click(e => {
		e.preventDefault;

		e.stopPropagation();
		if (e.currentTarget.hash !== '') {
			e.preventDefault();

			const hash = e.currentTarget.hash;

			console.log(window.location.hash);

			$('html, body').animate(
				{
					scrollTop: $(hash).offset().top - 100,
				},
				800,
				// () => (window.location.hash = hash),
			);
		}
	});
});
