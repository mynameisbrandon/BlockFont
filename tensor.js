
class Tensor {
	constructor(matrices, colors) {
		this.matrices = matrices
		this.colors = colors
	}

	translate(v) {
		var t = new Tensor([], this.colors)
		for (var m of this.matrices) {
			t.matrices.push(m.translate(v))
		}
		return t
	}

	plot() {
		for (var i=0; i < this.matrices.length; i++) {
			this.matrices[i].plot(this.colors[i])
		}
	}
}