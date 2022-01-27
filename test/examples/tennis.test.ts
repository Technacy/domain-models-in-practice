// import { expect } from "chai"

// const scores = ["love", "15", "30", "40"]

// class Game {
//   private score1: number = 0
//   private score2: number = 0

//   constructor(score1: number, score2: number) {
//     this.score1 = score1
//     this.score2 = score2
//   }

//   player1DoesPoint() {
//     this.score1 = Game.increaseScore(this.score1, this.score2)
//   }

//   player2DoesPoint() {
//     this.score2 = Game.increaseScore(this.score2, this.score1)
//   }

//   private static increaseScore(scoreA: number, scoreB: number): number {
//     const ret = scoreA + 1
//     return ret
//   }

//   score() {
//     if (this.score1 === this.score2 && this.score1 >= 3) return "deuce"
//     if (this.score1 > 3 && this.score1 > this.score2) return "adv1"
//     if (this.score2 > 3) return "adv2"
//     return `${scores[this.score1]}-${scores[this.score2]}`
//   }
// }

// describe("Tennis", () => {
//   it("Game has `love-love` at beginning", () => {
//     const game = new Game() // arrange

//     const score = game.score() // act

//     expect(score).eql("love-love") // assert
//   })

//   it("If player 1 make a point score must be 15-love", () => {
//     // arrange
//     const game = new Game()

//     // act
//     game.player1DoesPoint()

//     // assert
//     const score = game.score()
//     expect(score).eql("15-love")
//   })

//   it("If player 2 make a point score must be 15-15", () => {
//     const game = new Game()
//     game.player1DoesPoint()

//     game.player2DoesPoint()

//     const score = game.score()
//     expect(score).eql("15-15")
//   })

//   it("If player 1 make 2 points and player 2 makes a point score must be 30-15", () => {
//     const game = new Game()
//     game.player1DoesPoint()
//     game.player2DoesPoint()

//     game.player1DoesPoint()

//     const score = game.score()
//     expect(score).eql("30-15")
//   })

//   it("If player 1 make 2 points and player 2 makes 2 points score must be 30-30", () => {
//     const game = new Game()
//     game.player1DoesPoint()
//     game.player2DoesPoint()
//     game.player1DoesPoint()

//     game.player2DoesPoint()

//     const score = game.score()
//     expect(score).eql("30-30")
//   })

//   it("If player 1 make 3 points and player 2 makes 2 points score must be 40-30", () => {
//     const game = new Game()
//     game.player1DoesPoint()
//     game.player2DoesPoint()
//     game.player1DoesPoint()
//     game.player2DoesPoint()

//     game.player1DoesPoint()

//     const score = game.score()
//     expect(score).eql("40-30")
//   })

//   it("If player 1 make 3 points and player 2 makes 3 points score must be deuce", () => {
//     const game = new Game()
//     game.player1DoesPoint()
//     game.player2DoesPoint()
//     game.player1DoesPoint()
//     game.player2DoesPoint()
//     game.player1DoesPoint()

//     game.player2DoesPoint()

//     const score = game.score()
//     expect(score).eql("deuce")
//   })

//   it("If player 1 make 4 points and player 2 makes 3 points score must be adv1", () => {
//     const game = new Game()
//     game.player1DoesPoint()
//     game.player2DoesPoint()
//     game.player1DoesPoint()
//     game.player2DoesPoint()
//     game.player1DoesPoint()
//     game.player2DoesPoint()

//     game.player1DoesPoint()

//     const score = game.score()
//     expect(score).eql("adv1")
//   })

//   it("If player 1 make 4 points and player 2 makes 4 points score must be deuce", () => {
//     const game = new Game()
//     game.player1DoesPoint()
//     game.player2DoesPoint()
//     game.player1DoesPoint()
//     game.player2DoesPoint()
//     game.player1DoesPoint()
//     game.player2DoesPoint()
//     game.player1DoesPoint()

//     game.player2DoesPoint()

//     const score = game.score()
//     expect(score).eql("deuce")
//   })

//   it("Players are in deuce and player 2 make point -> adv2", () => {
//     const game = new Game()
//     game.player1DoesPoint()
//     game.player2DoesPoint()
//     game.player1DoesPoint()
//     game.player2DoesPoint()
//     game.player1DoesPoint()
//     game.player2DoesPoint()
//     game.player1DoesPoint()
//     game.player2DoesPoint()

//     game.player2DoesPoint()

//     const score = game.score()
//     expect(score).eql("adv2")
//   })
// })
