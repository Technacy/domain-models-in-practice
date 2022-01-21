import { expect } from "chai"

class Game {
  score1: string = "love"
  score2: string = "love"

  addPointToPlayer1() {
    this.score1 = "15"
  }

  score() {
    return `${this.score1}-${this.score2}`
  }
}

describe("Tennis", () => {
  it("Game has `love-love` at beginning", () => {
    const game = new Game() // arrange

    const score = game.score() // act

    expect(score).eql("love-love") // assert
  })

  it("If player 1 make a point score must be 15-love", () => {
     // arrange
    const game = new Game()

    // act
    game.addPointToPlayer1()
    
    // assert
    const score = game.score()
    expect(score).eql("15-love")
  })
})
