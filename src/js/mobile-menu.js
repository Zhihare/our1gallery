(() => {
	const refs = {
		openMenuBtn: document.querySelector('[data-menu-open]'),
		closeMenuBtn: document.querySelector('[data-menu-close]'),
		menu: document.querySelector('[data-menu]'),
		links: document.querySelectorAll('.mobile-menu-link'),
		header: document.querySelector('[data-menu-header]'),
	};
	refs.openMenuBtn.addEventListener('click', toggleModal);
	// refs.closeMenuBtn.addEventListener('click', toggleModal);
	refs.links.forEach(function (link) {
		link.addEventListener('click', toggleModal);
	});
	function toggleModal() {
		refs.menu.classList.toggle('is-open');
		refs.header.classList.toggle('is-open');
	}
})();