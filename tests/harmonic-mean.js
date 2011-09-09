load('jsArrayStats.js');

var ar = [ 1, 2, 3 ];

var stats = new ArrayStats(ar);

assertEq(stats.harmonicMean(), '1.64', 'ArrayStats#mean');
