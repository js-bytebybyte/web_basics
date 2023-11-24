const	balloon = document.getElementById("balloon");
let		size = 200;
let		colorIndex = 0;

function blowup() {
	size += 10;

	if (colorIndex > 1)
		colorIndex = 0;
	else
		colorIndex++;
	if (size > 420)
	{
		size = 200;
		colorIndex = 0;
	}
	size += 10;
	balloon.style.width = size + "px";
	balloon.style.height = size + "px";
}
balloon.addEventListener("click", blowup())
balloon.addEventListener("mouseout", reverse())