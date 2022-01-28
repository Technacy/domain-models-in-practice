/* eslint-disable prettier/prettier */
import { expect } from "chai"

const zeroText = " _ " + "| |" + "|_|"
const oneText = "   " + "  |" + "  |"
const twoText = " _ " + " _|" + "|_ "
const threeText = " _ " + " _|" + " _|"

function parseNumber(text: string) {
  if (text === zeroText) return 0
  if (text === oneText) return 1
  if (text === twoText) return 2

  return 3
}

describe.only(`parse numbers`, () => {
  it(`given 0 (piped style) -> must be 0 (number)`, () => {
    const parsed = parseNumber(zeroText)

    expect(parsed).eq(0)
  })

  it(`given 1 (piped style) -> must be 1 (number)`, () => {
    const parsed = parseNumber(oneText)

    expect(parsed).eq(1)
  })

  it(`given 2 (piped style) -> must be 2 (number)`, () => {
    const parsed = parseNumber(twoText)

    expect(parsed).eq(2)
  })

  it(`given 3 (piped style) -> must be 3 (number)`, () => {
    const parsed = parseNumber(threeText)

    expect(parsed).eq(3)
  })
})
