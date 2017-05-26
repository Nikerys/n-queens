/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var newBoard = new Board({n: n});
  // iterate through first row
  for (var r = 0; r < n; r++) {
    // iterate through first col
    for (var c = 0; c < n; c++) { 
      // set piece at row col 
      newBoard.togglePiece(r, c);
      // check if any conflicts for rooks
      if (newBoard.hasAnyRooksConflicts()) {
        // if conflict toggle piece
        newBoard.togglePiece(r, c);
      }
    }
  }
  solution = newBoard;
  
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var newBoard = new Board({n: n});
  var solutionCount = 0;
/////////////////////////
  // let r = 0;

  // var recursion = function(r) {
    
  //   if (r === n) {
  //     solutionCount++;
  //     return;
  //   }
    
  //   for (var c = 0; c < n; c++) { 
  //     newBoard.togglePiece(r, c); // toggle on
  //     if (!newBoard.hasAnyRooksConflicts()) { // if conflict toggle off
  //       recursion(r + 1);
  //     } 
  //     newBoard.togglePiece(r, c);
  //   }
//////////////////////////////

 
  let r = 0;
  var recursion = function(r) {
    for (var c = 0; c < n; c++) { 
      newBoard.togglePiece(r, c); // toggle on
      if (!newBoard.hasAnyRooksConflicts()) { // if conflict toggle off
        recursion(r + 1);
      } else {  // no conflict, recurse into branch
        if (r === n) {  // number of rows less than total rows available
          solutionCount++;
        }
      }
      newBoard.togglePiece(r, c);
    }
    
   
       
  };
  
  recursion(r);


  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
