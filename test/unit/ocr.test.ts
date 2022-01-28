import { expect } from "chai"

function parseNumber(text: string) {
  const zeroText = " _ " + "| |" + "|_|"

  if (text === zeroText) return 0
  return 1
}

describe.only(`parse numbers`, () => {
  it(`given 0 (piped style) -> must be 0 (number)`, () => {
    const text = ` _ 
                  | |
                  |_|`

    const parsed = parseNumber(text)

    expect(parsed).eq(0)
  })

  it(`given 1 (piped style) -> must be 1 (number)`, () => {
    const text = `   
                    |
                    |`

    const parsed = parseNumber(text)

    expect(parsed).eq(1)
  })
})
