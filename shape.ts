export class Shape {
    private _color: string = "blue"
    private _filled: boolean = false

    constructor(color: string, filled: boolean) {
        this._color = color;
        this._filled = filled;
    }

    getColor(): string {
        return this._color;
    }

    setColor(value: string) {
        this._color = value;
    }

    getFilled(): boolean {
        return this._filled;
    }

    setFilled(value: boolean) {
        this._filled = value;
    }

    toString(): string {
        return "A Shape with color of "
            + this.getColor()
            + " and "
            + (this.getFilled() ? "filled" : "not filled");
    }
}