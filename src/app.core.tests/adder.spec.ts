import { Adder } from "../app.core/adder";

test('should return 42', () => {
    // arrange
    let data: Array<number> = [21,21];
    let adder = new Adder();

    // act
    let result = adder.addStuff(data);

    // assert
    expect(result).toBe(42);
})
