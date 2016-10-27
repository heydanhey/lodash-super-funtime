var _ = require('lodash');

var colors = ['darkRed', 'yellow', 'green'];
var shapes = [[41.8413734,-87.6600266,41.8415604,-87.6596603], [41.8413734,-87.6600266,41.8415604,-87.6596603], [41.8413734,-87.6600266,41.8415604,-87.6596603]];


var offsetColors  = _.chain(colors)
                .tail()
                .map(function (color) {
                    return (color);
                })
                .value();
                
console.log(offsetColors.length);

var offsetSettings  = _.map(offsetColors, function (color) {
                return [{
                    pen: {strokeColor: color, lineWidth: 12}
                }];
            });
            
console.log(offsetSettings.length)

var offsetLines  = _
                .chain(shapes)
                .tail()
                .map(function (shape) {
                    return _.flatten(_.map(offsetSettings, function(setting) { return [shape, setting]; }))
                })
                .value();
                
// var offsetLines  = _.map(_.tail(shapes), function (shape) {
//                     return _.flatten(_.map(offsetSettings, function(setting) { return [shape, setting]; }))
//                 })

// var offsetLines = [["g1"],["g2"]];
var test = _.map(offsetLines, function(line){ return _.map(line, function(l){return l}) });

// console.log(_.concat(offsetLines));
// console.log(_.concat(offsetLines).length);
console.log(offsetLines);
console.log(test);

var unoffsetLine = ["g0"];

// offsetLines.unshift(unoffsetLine);
var polylines = [];
polylines.push(unoffsetLine[0]);
_.forEach(offsetLines, function(line){
    polylines.push(line[0]);
})

// var polylines = _.flattenDepth(offsetLines, 1);
                
console.log(polylines.length);
console.log(polylines);

