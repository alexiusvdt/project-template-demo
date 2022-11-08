import Board from "./../src/sudoku.js";

describe('Board', () => {
  // beforeEach(() => {
  //   const board = new Board(rows);
  //   let rows = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //   board.row1 = rows;
  // })  
  let rows = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const board = new Board(rows);
  let rows2 = [1, 5, 3, 4, 5, 6, 8, 8,];
  const board2 = new Board(rows2);

  test('shall create a Board object with nine row properties', () => {
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

  test('shall verify all numbers between 1 and 9 present & unique in row', () => {
    expect(board.checkRows()).toBeTruthy();
    expect(board2.checkRows()).toBeFalsy();
  });

});