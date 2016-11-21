var _ = require('lodash');

var polygonString = 'POLYGON ((-71.412469 44.121506, -71.46237 44.166504, -71.350026 44.121506, -71.412469 44.121506))';

var tuples =  polygonString
            .replace(/[^\d .-]/g, '')
            .split(' ')
            .slice(1);

var points = convertTuplesToPoints(tuples);
console.log(points);

function createPoint(latitude, longitude) {
        var lat = latitude  || 0,
            lng = longitude || 0;
    
        return {lat: lat, lng: lng};
    }
            
            
function convertTuplesToPoints(tuples) {
        var points = [];
        for(var i=0; i<tuples.length; i=i+2){
            console.log(tuples[i], tuples[i+1]);
            points.push(createPoint(tuples[i], tuples[i+1]));
        }
        return points;
    }        