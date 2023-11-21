(() => {
	const refs = {
		openButton: document.querySelector('[data-open]'),
		eventList: document.querySelector('[EventList]'),
		openButtonCatalog: document.querySelector('[data-open-catalog]'),
		catalogList: document.querySelector('[CatalogList]'),
	};
	refs.openButton.addEventListener('click', toggleModal);
	refs.openButtonCatalog.addEventListener('click', toggleModalcatalog)

	function toggleModal() {
		refs.eventList.classList.toggle('is-open');
		refs.openButton.classList.toggle('is-open');
	}

	function toggleModalcatalog() {
		refs.catalogList.classList.toggle('is-open');
		refs.openButtonCatalog.classList.toggle('is-open');
	}
})();