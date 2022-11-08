import Board from "./../src/sudoku.js";

describe('Board', () => {

  test('shall create a Board object with an array as row property', () => {
  let row1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const board = new Board(row1);
  expect(board.row1).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });


});