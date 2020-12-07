var canvas = document.getElementById('theCanvas')

function setCanvasWidth() {
	canvas.width = document.body.clientWidth;
	canvas.height = document.body.clientHeight;
}

setCanvasWidth()

const ctx = canvas.getContext("2d")

function clear_canvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const canvasWidth = canvas.width
const canvasHeight = canvas.height
// Parameter for padding
const origin = [20, 20]
// Parameter for size of blocks
const baseUnit = 5
// Parameters for rotation of blocks
const roll = Math.PI/8
const yaw = Math.PI/2.5
// Parameter for gap size between blocks
const gap_ratio = 1.1
// Parameter for color of blocks
colors = ['#00cccc', '#009999', '#66ffff']
// Parameter for letter spacing
const x_letter_spacing = 1
const y_letter_spacing = 5