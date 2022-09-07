import {Shape} from "./shape";

class Circle extends Shape {
    private _radius: number

    constructor(color: string, filled: boolean, radius: number) {
        super(color, filled);
        this._radius = radius;
    }

    getRadius(): number {
        return this._radius;
    }

    setRadius(value: number) {
        this._radius = value;
    }

    getArea(): number {
        return this._radius * this._radius * Math.PI;
    }

    getPerimeter(): number {
        return 2 * this._radius * Math.PI;
    }

    toString(): string {
        return "A Circle with radius = "
            + this.getRadius()
            + ", which is a subclass of "
            + super.toString();
    }

}
