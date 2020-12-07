class Matrix {

	constructor(vectors) {
		this.checkVectors(vectors)
		this.vectors = vectors
	}

	checkVectors(vectors) {
		if (!(Array.isArray(vectors))) {
			throw "Input must be an array of vectors"
		}
		vectors.forEach(function(v) {
			if (!(v instanceof Vector)) {
				throw "Input must be an array of vectors"
			}
		})
	}

	dot(vector) {
		if (!(vector instanceof Vector)) {
			throw "Matrix must be dotted with a vector"
		}

		const x = this.vectors[0].dot(vector)
		const y = this.vectors[1].dot(vector)
		const z = this.vectors[2].dot(vector)
		return new Vector([x, y, z])
	}

	rotateX(theta) {
		var rVectors = []
		this.vectors.forEach(function(v) {
			rVectors.push(v.rotateX(theta))
		})
		return new Matrix(rVectors, this.lines)
	}

	rotateY(theta) {
		var rVectors = []
		this.vectors.forEach(function(v) {
			rVectors.push(v.rotateY(theta))
		})
		return new Matrix(rVectors, this.lines)
	}

	rotateZ(theta) {
		var rVectors = []
		this.vectors.forEach(function(v) {
			rVectors.push(v.rotateZ(theta))
		})
		return new Matrix(rVectors, this.lines)
	}

	translate(t_vec) {
		var tVectors = []
		this.vectors.forEach(function(v) {
			tVectors.push(v.translate(t_vec))
		})
		return new Matrix(tVectors, this.lines)
	}

	add(to_add) {
		var addVectors = []
		this.vectors.forEach(function(v) {
			addVectors.push(v.add(to_add))
		})
		return new Matrix(addVectors, this.lines)
	}

	appendV(v) {
		this.vectors.push(v)
	}

	scale(factor) {
		var scaledMat = new Matrix([])
		this.vectors.forEach(function(v) {
			scaledMat.appendV(v.scale(factor))
		})
		return scaledMat
	}

	plot(color) {
		ctx.fillStyle = color
		ctx.beginPath()
		v1 = this.vectors[0]
		ctx.moveTo(v1.canvasX, v1.canvasY)
		for (var i=1; i<this.vectors.length; i++) {
			var v = this.vectors[i]
			ctx.lineTo(v.canvasX, v.canvasY)
		}
		ctx.closePath()
		ctx.fill()
	}
}






