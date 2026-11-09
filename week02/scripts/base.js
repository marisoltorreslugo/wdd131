const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function () {
	alert("Hola 1");
	if (input.value.trim() !== "") {
		alert("Hola 2");
		const li = document.createElement("li");
		const deleteButton = document.createElement("button");

		li.textContent = input.value;
		deleteButton.textContent = "X";
		deleteButton.ariaLabel = "Delete Chapter";
		deleteButton.addEventListener("click", function () {
			list.removeChild(li);
			input.focus();
		});

		li.appendChild(deleteButton);
		list.appendChild(li);
		input.value = "";
		input.focus();
	}
});
