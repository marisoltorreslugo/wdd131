const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
	const isOpen = navigation.classList.toggle("open");

	menuButton.textContent = isOpen ? "✕" : "☰";
	menuButton.setAttribute("aria-expanded", String(isOpen));
	menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});
