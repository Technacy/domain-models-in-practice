import { expect } from "chai"

type Score = "love" | "15" | "30"

class Game {
  private score1: Score = "love"
  private score2: Score = "love"

  player1DoesPoint() {
    if (this.score1 === "15") {
      this.score1 = "30"
    } else {
      this.score1 = "15"
    }
  }

  player2DoesPoint() {
    this.score2 = "15"
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
    game.player1DoesPoint()

    // assert
    const score = game.score()
    expect(score).eql("15-love")
  })

  it("If player 2 make a point score must be 15-15", () => {
    const game = new Game()
    game.player1DoesPoint()

    game.player2DoesPoint()

    const score = game.score()
    expect(score).eql("15-15")
  })

  it("If player 1 make 2 point and player 1 make a point score must be 30-15", () => {
    const game = new Game()
    game.player1DoesPoint()
    game.player2DoesPoint()

    game.player1DoesPoint()

    const score = game.score()
    expect(score).eql("30-15")
  })
})
