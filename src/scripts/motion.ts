import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const header = document.querySelector<HTMLElement>('[data-header]');
const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const navLinks = [...document.querySelectorAll<HTMLAnchorElement>('[data-nav]')];

const lenis = new Lenis({
	lerp: 0.1,
});

lenis.on('scroll', () => {
	header?.classList.toggle('is-scrolled', lenis.scroll > 12);
	ScrollTrigger.update();
});

gsap.ticker.add((time) => {
	lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

const setMenu = (open: boolean) => {
	document.body.classList.toggle('is-menu-open', open);
	header?.classList.toggle('is-open', open);
	toggle?.setAttribute('aria-expanded', String(open));
	toggle?.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
	if (open) lenis.stop();
	else lenis.start();
};

toggle?.addEventListener('click', () => {
	setMenu(toggle.getAttribute('aria-expanded') !== 'true');
});

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') setMenu(false);
});

document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
	link.addEventListener('click', (event) => {
		const href = link.getAttribute('href');
		if (!href || href === '#') return;
		const target = document.querySelector<HTMLElement>(href);
		if (!target) return;
		event.preventDefault();
		setMenu(false);
		lenis.scrollTo(target, { force: true });
	});
});

navLinks.forEach((link) => {
	const id = link.getAttribute('href')?.slice(1);
	const section = id ? document.getElementById(id) : null;
	if (!section) return;

	ScrollTrigger.create({
		trigger: section,
		start: 'top 42%',
		end: 'bottom 42%',
		onToggle: (self) => {
			if (!self.isActive) return;
			navLinks.forEach((item) => item.classList.toggle('is-active', item === link));
		},
	});
});

const motion = gsap.matchMedia();

motion.add('(prefers-reduced-motion: no-preference)', () => {
	const hero = gsap.timeline({ defaults: { ease: 'power3.out' } });

	hero
		.fromTo('.hero-img', { scale: 1.08 }, { scale: 1, duration: 1.7, ease: 'power2.out' }, 0)
		.fromTo(
			'[data-hero-line]',
			{ yPercent: 110, autoAlpha: 0 },
			{ yPercent: 0, autoAlpha: 1, duration: 1.05, stagger: 0.08 },
			0.1,
		)
		.fromTo(
			'[data-hero-fade]',
			{ autoAlpha: 0, y: 16 },
			{ autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.07 },
			0.4,
		);

	ScrollTrigger.batch('[data-reveal]', {
		start: 'top 88%',
		once: true,
		onEnter: (batch) => {
			gsap.to(batch, {
				autoAlpha: 1,
				y: 0,
				duration: 0.9,
				stagger: 0.08,
				ease: 'power3.out',
				overwrite: true,
			});
		},
	});

	gsap.utils.toArray<HTMLElement>('.media-img').forEach((image) => {
		gsap.fromTo(
			image,
			{ yPercent: -5 },
			{
				yPercent: 5,
				ease: 'none',
				scrollTrigger: {
					trigger: image.parentElement,
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
				},
			},
		);
	});
});

window.addEventListener('load', () => {
	ScrollTrigger.refresh();
});
