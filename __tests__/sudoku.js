import Board from "./../src/sudoku.js";

describe('Board', () => {

  test('shall create a Board object with nine row properties', () => {
  let rows = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const board = new Board(rows);
  board.row1 = rows;
  board.row2 = rows;
  board.row3 = rows;
  board.row4 = rows;
  board.row5 = rows;
  board.row6 = rows;
  board.row7 = rows;
  board.row8 = rows;
  board.row9 = rows;
  
  expect(board.row1).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(board.row2).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(board.row3).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(board.row4).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(board.row5).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(board.row6).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(board.row7).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(board.row8).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(board.row9).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });


});