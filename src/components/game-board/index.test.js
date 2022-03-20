import { mergeCell } from ".";

describe('merge cell', () => {
  test('two cell null', () => {
    const input = [0, 0]
    const output = [0, 0]
    expect(mergeCell(input[0], input[1])).toEqual(output)
  })

  test('once cell null', () => {
    const input = [2, 0]
    const output = [0, 2]
    expect(mergeCell(input[0], input[1])).toEqual(output)
  })

  test('once cell null 2', () => {
    const input = [0, 4]
    const output = [0, 4]
    expect(mergeCell(input[0], input[1])).toEqual(output)
  })

  test('two cell difference', () => {
    const input = [4, 16]
    const output = [4, 16]
    expect(mergeCell(input[0], input[1])).toEqual(output)
  })

  test('two cell the same', () => {
    const input = [16, 16]
    const output = [0, 32]
    expect(mergeCell(input[0], input[1])).toEqual(output)
  })

})