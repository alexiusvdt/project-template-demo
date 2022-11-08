import Board from "/.sudoku.js";

describe('Board', () => {
  const board = new Board();

  test('shall create a Board object with an array as row property')
  expect(board.row1).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);



});