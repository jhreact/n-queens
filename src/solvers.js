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
  var solution = new Board({n: n});
  var board = new Board({n: n});

  var findSolution = function(board, columns, row) {
    if (row === columns) {
      solution = board;
      return solution;
    }
    for (var col=0; col < columns; col++) {
      board.togglePiece(row, col);
      if (!board.hasAnyRooksConflicts()) {
        findSolution(board, columns, row+1);
      }
      board.togglePiece(row, col);
    }
  };
  findSolution(board, n, 0);
  // console.log("Solution:");
  // console.log(solution.rows());

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.attributes['0'];
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({'n': n});

  var findSolution = function(board, columns, row) {
    if (row === columns) {
      solutionCount++;
      return;
    }
    for (var col=0; col < columns; col++) {
      board.togglePiece(row, col);
      if (!board.hasAnyRooksConflicts()) {
        findSolution(board, columns, row+1);
      }
      board.togglePiece(row, col);
    }
  };
  findSolution(board, n, 0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({n: n});
  var board = new Board({n: n});

  var findSolution = function(board, columns, row) {
    if (row === columns) {
      solution = board;
      return solution;
    }
    for (var col=0; col < columns; col++) {
      board.togglePiece(row, col);
      if (!board.hasAnyQueensConflicts()) {
        findSolution(board, columns, row+1);
      }
      board.togglePiece(row, col);
    }
  };
  findSolution(board, n, 0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.attributes['0'];
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({'n': n});

  var findSolution = function(board, columns, row) {
    if (row === columns) {
      if (! board.hasAnyQueensConflicts()) {
        solutionCount++;
      }
      return solutionCount;
    }
    for (var col=0; col < columns; col++) {
      board.togglePiece(row, col);
      if (!board.hasAnyQueensConflicts()) {
        findSolution(board, columns, row+1);
      }
      board.togglePiece(row, col);
    }
  };
  findSolution(board, n, 0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};