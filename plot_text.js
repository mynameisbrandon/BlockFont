// Takes a string and plots it to the screen
// 'offset' just makes this function animatable
function plot_text(text, offset=0) {
	text = text.toUpperCase()
	var x_position = 0
	var y_position = 0
	for (var i=0; i<text.length; i++) {
		char = text[i]
		if (char == '\n') {
			y_position += height_of_letter
			x_position = 0
		} else {
			letter = letter_map[text[i]]
			plot_letter(letter, x_position, y_position - offset)
			x_position += width_of_letter(letter)
		}
	}
}

