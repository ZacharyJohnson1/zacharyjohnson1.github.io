//
const doc = document.querySelector('.container');
doc.addEventListener('mousemove', (e) => {
	doc.style.backgroundColor = `rgb(${e.offsetX / 4},${e.offsetY / 2},${(Math.random() * 255)})`;
});