export class Adder {
    public addStuff(numbers: Array<number>): number {
        if(!numbers){
            throw new Error("numbers should be defined");
        }
        
        let result = 0;
        for ( let x of numbers) {
            result += x;
        }

        return result;
    }
}