import { IMain } from "./interfaces/IMain";

export class Main implements IMain {
    public name: string;

    constructor(_name: string) {
        this.name = _name;
    }

    public init(): void {
        console.log(this.name);
    }
}