const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(function(journey) {
      return journey.startLocation;
  })
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(function(journey) {
    return journey.endLocation;
})
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(function(journey) {
    return journey.transport === transport;
})
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(function(journey) {
    return journey.distance >= minDistance;
})
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((runningTotal, journey) => {
    return runningTotal + journey.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const modeOfTransport = this.journeys.map(function(journey) {
    return journey.transport;
  });
  return modeOfTransport.filter(function(transport, index) {
    return modeOfTransport.indexOf(transport) === index;
});
}

module.exports = Traveller;