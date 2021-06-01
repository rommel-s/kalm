const box = document.getElementById("box")
const button = document.getElementById("start-animation")

button.addEventListener('click', () => {
	box.style.animation = "blow 12s infinite"
})