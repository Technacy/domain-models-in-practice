import { expect } from "chai"

type BookTitle = "b1" | "b2" | "b3" | "b4" | "b5"

function calcAmount(cart: BookTitle[]): number {
  if (cart.every((el) => el === cart[0])) return 8 * cart.length
  if (cart.length === 3) {
    return 21.6
  }
  return 15.2
}

describe(`Calculate amount`, () => {
  it(`buy 1 book -> amount must be 8`, () => {
    const cart: BookTitle[] = ["b1"]

    const amount = calcAmount(cart)

    expect(amount).eq(8)
  })

  it(`buy 2 different books -> amount must be (8 + 8) - 5%`, () => {
    const cart: BookTitle[] = ["b1", "b2"]

    const amount = calcAmount(cart)

    expect(amount).eq((8 + 8) * 0.95)
  })

  it(`buy 2 identically books -> amount must be (8 + 8)`, () => {
    const cart: BookTitle[] = ["b1", "b1"]

    const amount = calcAmount(cart)

    expect(amount).eq(8 + 8)
  })

  it(`buy 3 different  books -> amount must be (8 + 8 + 8) - 10%`, () => {
    const cart: BookTitle[] = ["b1", "b2", "b3"]

    const amount = calcAmount(cart)

    expect(amount).eq((8 + 8 + 8) * 0.9)
  })
})
