// Takes a word (string) and returns it's canvas width
function width_of_word(word) {
	var width = 0
	for (char of word) {
		char = char.toUpperCase()
		letter = letter_map[char]
		width += width_of_letter(letter)*baseUnit
	}
	return width
}

// Subtract origin[0] so that the text is padded evenly on left and right
const MAX_X_POSITION = canvasWidth - origin[0]

// Helper function for break_text()
// Breaks up a single line into multiple lines so that it fits on the screen
function break_line(words) {
	broken_line = []
	var word_index = 0
	var last_break = 0
	var x_position = 0
	while (word_index < words.length) {
		if (x_position + width_of_word(words[word_index]) > MAX_X_POSITION) {
			broken_line.push(words.slice(last_break, word_index).join(' '))
			last_break = word_index
			x_position = 0
		} else {
			x_position += width_of_word(words[word_index]) + width_of_word(' ')
			word_index += 1
		}
	}
	broken_line.push(words.slice(last_break).join(' '))
	return broken_line
}

// Helper function for break_text()
// Split text into array lines on '\n'
// Split each line into array words on ' '
function split_text(text) {
	text = text.split('\n')
	for (var i=0; i<text.length; i++) {
		text[i] = text[i].split(' ')
	}
	return text
}

// Takes a text input and breaks up each line so that it fits on the screen
function break_text(text) {
	text = split_text(text)
	var broken_text = []
	for (var l=0; l<text.length; l++) {
		broken_text.push(...break_line(text[l]))
	}
	return broken_text.join('\n')
}