import {Rectangle} from "./rectangle";

class Square extends Rectangle{

    constructor(color: string, filled: boolean, side: number) {
        super(color, filled, side, side);
    }
     getSide(): number {
        return this.getWidth();
    }

     setSide(side: number): void {
        this.setWidth(side);
        this.setLength(side);
    }

    //Override method
     setWidth(width: number): void {
        this.setSide(width);
    }

    //Override method
     setLength(length: number): void {
        this.setSide(length);
    }

    //Override method
     toString(): string {
        return "A Square with side="
            + this.getSide()
            + ", which is a subclass of "
            + super.toString();
    }
}

let square: Square = new Square("red",false, 5);
console.log(square);
console.log(square.toString());

