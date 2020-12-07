v1 = new Vector([-1, 1, 0]) // top left corner
v2 = new Vector([1, 1, 0]) // top right corner
v3 = new Vector([1, -1, 0]) // bottom right corner
v4 = new Vector([-1, -1, 0]) // bottom left corner

square = new Matrix([v1, v2, v3, v4])

// Add yaw and roll
rightFace = square.translate(new Vector([0, 0, 1])).rotateY(-yaw).rotateX(roll)
// Flip horizontally, move to the right, then add yaw and roll
topFace = square.rotateX(Math.PI/2).translate(new Vector([0, 1, 0])).rotateY(-yaw).rotateX(roll)
// Flip vertically, move left and then add yaw and roll
leftFace = square.rotateY(Math.PI/2).translate(new Vector([-1, 0, 0])).rotateY(-yaw).rotateX(roll)

cube = new Tensor([rightFace, topFace, leftFace], colors)

topLeft = leftFace.vectors[0]
topRight = leftFace.vectors[1]
bottomLeft = leftFace.vectors[3]

// Get the horizontal translation vector
t_x = topRight.add(topLeft.scale(-1))
t_x = t_x.scale(gap_ratio)
// Get the vertical translation vector
t_y = bottomLeft.add(topLeft.scale(-1))
t_y = t_y.scale(gap_ratio)

var front_face_width = (cube.matrices[2].vectors[1].x - cube.matrices[2].vectors[0].x)
var gap_width = front_face_width*gap_ratio - front_face_width
var right_face_width = (cube.matrices[0].vectors[1].x - cube.matrices[0].vectors[0].x)

// Assumes every row is the same length
// Returns width of letter in vector units
function width_of_letter(letter) {
	var num_blocks = letter[0].length
	var width = front_face_width*num_blocks + gap_width*(num_blocks-1) + x_letter_spacing
	return width
}

var front_face_height = (cube.matrices[2].vectors[1].y - cube.matrices[2].vectors[2].y)
var gap_height = front_face_height*gap_ratio - front_face_height
var right_face_height = cube.matrices[1].vectors[1].y - cube.matrices[1].vectors[0].y
// The height of a single letter
var height_of_letter = front_face_height*5 + gap_height*4 + right_face_height + y_letter_spacing

// Plot a block based on its grid position; grid dimensions is 5x4; (0,0) for top left and (4,3) for bottom right
function plot_block(n, m, x_pos, y_pos) {
	// Local position
	block = cube.translate(t_x.scale(m).translate(t_y.scale(n)))
	// Global position
	block = block.translate(new Vector([x_pos, -y_pos, 0]))
	block.plot()
}

// Plot a letter based on a nested array of 1's
// We plot blocks starting from the bottom row for correct overlapping
function plot_letter(letter, x_pos, y_pos) {
	const num_rows = letter.length
	const num_cols = letter[0].length
	for (var row_index=num_rows-1; row_index>=0; row_index--) {
		for (var col_index=0; col_index<num_cols; col_index++) {
			if (letter[row_index][col_index]) {
				// let t1 = performance.now()
				plot_block(row_index, col_index, x_pos, y_pos)
				// let t2 = performance.now()
				// console.log(t2 - t1)
			}
		}
	}
}