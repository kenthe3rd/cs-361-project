var map;
var stdMarkers = [];
var floodMarkers = [];

      
function initMap() {
  
  var startingPoint = {lat: 39.61114, lng: -75.689443};
  map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: startingPoint,
          mapTypeId: 'terrain'
        });
        
  // This event listener will call addMarker() when the map is clicked.
  map.addListener('click', function(event) {
    addMarkerFlood(event.latLng);
  });
  
  //initialize the center mark
  addMarkerStandard(startingPoint);
 
}

// Adds a marker to the map and push to the array.
function addMarkerStandard(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    animation: google.maps.Animation.DROP
  });
  stdMarkers.push(marker);
}

// Adds a marker to the map and push to the array.
function addMarkerFlood(location) {
  var floodIcon = {
    url: './icons/electric.png',
    // This marker is 20 pixels wide by 32 pixels high.
    //size: new google.maps.Size(20, 32),
    scaledSize: new google.maps.Size(50, 50),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(25, 25)
  };

  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };
  
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    icon: floodIcon,
    shape: shape,
    animation: google.maps.Animation.BOUNCE,
  });
  floodMarkers.push(marker);
}
