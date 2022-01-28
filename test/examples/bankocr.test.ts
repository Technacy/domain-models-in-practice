import { expect } from "chai"

// prettier-ignore
const ZERO = " _ " +
                 "| |" +
                 "|_|";

// prettier-ignore
const ONE = "   " +
                "  |" +
                "  |";
// prettier-ignore-end

class Reader {
  decode(entry: string) {
    return entry === ZERO ? "0" : "1"
  }
}

describe("Bank OCR", () => {
  const reader = new Reader()

  it("Can read Zero", () => {
    const decodedEntry = reader.decode(ZERO)

    expect(decodedEntry).eql("0")
  })

  it("Can read One", () => {
    const decodedEntry = reader.decode(ONE)

    expect(decodedEntry).eql("1")
  })
})
