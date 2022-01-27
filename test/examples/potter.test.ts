import { expect } from "chai"

type BookTitle = "b1" | "b2" | "b3" | "b4" | "b5"

function calcAmount(cart: BookTitle[]): number {
  if (cart.every((el) => el === cart[0])) return 8 * cart.length

  const discount = [0, 0.95, 0.9, 0.8, 0.75]

  return 8 * cart.length * discount[cart.length - 1]
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

  it(`buy 4 different  books -> amount must be (8 + 8 + 8 + 8) - 20%`, () => {
    const cart: BookTitle[] = ["b1", "b2", "b3", "b4"]

    const amount = calcAmount(cart)

    expect(amount).eq((8 + 8 + 8 + 8) * 0.8)
  })

  it(`buy 5 different  books -> amount must be (8 + 8 + 8 + 8 + 8) - 25%`, () => {
    const cart: BookTitle[] = ["b1", "b2", "b3", "b4", "b5"]

    const amount = calcAmount(cart)

    expect(amount).eq((8 + 8 + 8 + 8 + 8) * 0.75)
  })

  it(`buy 0 books -> 0 as result`, () => {
    const cart: BookTitle[] = []

    const amount = calcAmount(cart)

    expect(amount).eq(0)
  })
})
