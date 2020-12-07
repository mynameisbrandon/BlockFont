class Vector {
	constructor(xyz) {
		this.x = xyz[0]
		this.y = xyz[1]
		this.z = xyz[2]
	}

	dot(other) {
		if (!(other instanceof Vector)) {
			throw 'Parameter must be a vector'
		}

		return this.x*other.x + this.y*other.y + this.z*other.z
	}

	rotateX(theta) {
		const rotMatrix = new Matrix([
						  new Vector([1, 0, 0]),
						  new Vector([0, Math.cos(theta), -Math.sin(theta)]),
						  new Vector([0, Math.sin(theta), Math.cos(theta)])
						  ])
						  
		return rotMatrix.dot(this)
	}

	rotateY(theta) {
		const rotMatrix = new Matrix([
						  new Vector([Math.cos(theta), 0, -Math.sin(theta)]),
						  new Vector([0, 1, 0]),
						  new Vector([Math.sin(theta), 0, Math.cos(theta)])])

		return rotMatrix.dot(this)
	}

	rotateZ(theta) {
		const rotMatrix = new Matrix([
						  new Vector([Math.cos(theta), -Math.sin(theta), 0]),
						  new Vector([Math.sin(theta), Math.cos(theta), 0]),
						  new Vector([0, 0, 1])])

		return rotMatrix.dot(this)
	}

	translate(v) {
		if (!(v instanceof Vector)) {
			throw 'Input must be a Vector'
		}
		return new Vector([this.x+v.x, this.y+v.y, this.z+v.z])
	}

	add(v) {
		return new Vector([this.x+v.x, this.y+v.y, this.z*v.z])
	}

	scale(factor) {
		return new Vector([this.x*factor, this.y*factor, this.z*factor])
	} 

	get canvasX() {
		return origin[0] + this.x*baseUnit
	}

	get canvasY() {
		return origin[1] - this.y*baseUnit
	}
}






