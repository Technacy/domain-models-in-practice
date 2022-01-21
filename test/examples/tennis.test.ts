import { expect } from "chai"

type Score = "love" | "15" | "30"

class Game {
  private score1: Score = "love"
  private score2: Score = "love"

  player1DoesPoint() {
    this.score1 = Game.increaseScore(this.score1)
  }

  player2DoesPoint() {
    this.score2 = Game.increaseScore(this.score2)
  }

  private static increaseScore(score: Score): Score {
    if (score === "15") return "30"
    return "15"
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

  it("If player 1 make 2 points and player 2 makes a point score must be 30-15", () => {
    const game = new Game()
    game.player1DoesPoint()
    game.player2DoesPoint()

    game.player1DoesPoint()

    const score = game.score()
    expect(score).eql("30-15")
  })

  it("If player 1 make 2 points and player 2 makes 2 points score must be 30-30", () => {
    const game = new Game()
    game.player1DoesPoint()
    game.player2DoesPoint()
    game.player1DoesPoint()

    game.player2DoesPoint()

    const score = game.score()
    expect(score).eql("30-30")
  })
})
