import { expect } from "chai"


describe("Tennis", () => {

    it("Game has `love-love` at beginning", () => {
        const game = new Game(); // arrange

        const score = game.score(); // act

        expect(score).eql("love-love"); // assert
    })
})