// // Each row contains all numbers from 1 to 9 with no repeats.
// // Each column contains all numbers from 1 to 9 with no repeats.
export default function Board(rows) {
  this.row1 = rows;
  this.row2 = rows;
  this.row3 = rows;
  this.row4 = rows;
  this.row5 = rows;
  this.row6 = rows;
  this.row7 = rows;
  this.row8 = rows;
  this.row9 = rows;
}

//   // row 1 check
//   // multi row check
//   // column check
// Board.prototype.checkRows = function() {
//   let allNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let rowChecked = this.row1;
//   for(let i = 0; i < allNumberArray.length; i++){
//     if (allNumberArray[i] === rowChecked[i]) {
//       return true
//     } else {
//       return false
//     }
//   }
// }

Board.prototype.checkRows = function() {
  let allNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let rowChecked = this.row1;;
  let boolean;
  for(let i = 0; i < allNumberArray.length; i++){
    if (allNumberArray[i] === rowChecked[i]) {
      console.log(i, allNumberArray[i], rowChecked[i])
      boolean = true;
    } else {
      return false
    }
  }
return boolean;
}