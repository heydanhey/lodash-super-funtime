
var _ = require('lodash');

var IncidentPolylines = [
  {
    Geo: [
      {
        Latitude: 41.90395,
        Longitude: -87.6287
      },
      {
        Latitude: 41.90395,
        Longitude: -87.62903
      },
      {
        Latitude: 41.90395,
        Longitude: -87.62903
      },
      {
        Latitude: 41.90394,
        Longitude: -87.62999
      },
      {
        Latitude: 41.90394,
        Longitude: -87.62999
      },
      {
        Latitude: 41.90392,
        Longitude: -87.63147
      },
      {
        Latitude: 41.90392,
        Longitude: -87.63147
      },
      {
        Latitude: 41.90388,
        Longitude: -87.63246
      },
      {
        Latitude: 41.90388,
        Longitude: -87.63246
      },
      {
        Latitude: 41.90386,
        Longitude: -87.63291
      }
    ]
  }
];

function toTuples(coordinates) {
	return _.chain(coordinates || [])
		.map(function (coordinate) {
			return [
				coordinate.Latitude,
				coordinate.Longitude
			]
		})
		.flatten()
		.value();
}
		
var polylines = _.chain(IncidentPolylines || [])
  		.pluck('Geo')
  		.map(toTuples)
  		.map(function(strip) {
  		    try {
            return IncidentPolyline.create(strip, incidentType);
          } catch(err) {
            console.warn('Polylines has invalid geometry', strip);
          }
  		})
      .compact() // remove undefined
  		.value();
  		
console.log(polylines);