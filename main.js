
var test_input = 'Hi there Im brandon\nNice to meet you\nThis app is cool you can listen to music and it will display the lyrics on your screen\ntesting testing'

var offset = -canvas.height/baseUnit

function scroll_text(text) {
	clear_canvas()
	plot_text(text, offset)
	offset = offset + .5
}

function animate_lyrics(text) {
	text = break_text(text)
	setInterval(scroll_text, 10, text)
}

animate_lyrics(test_input)



