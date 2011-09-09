load('jsArrayStats.js');

var ar = [ 1, 2, 3 ];

var stats = new ArrayStats(ar);

assertEq(stats.mean(), '2.00', 'ArrayStats#mean');
