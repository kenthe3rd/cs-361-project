var map;
var mapMarkers = [];
var userLocation;

if (navigator.geolocation) {
  console.log("in nav");
  navigator.geolocation.getCurrentPosition(function(position) {
    userLocation = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    infoWindow.setPosition(pos);
    infoWindow.setContent('Location found.');
    infoWindow.open(map);
    map.setCenter(pos);
  }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } 
  else {
    // Browser doesn't support Geolocation
    // handleLocationError(false, infoWindow, map.getCenter());
    userLocation = {lat: 39.61114, lng: -75.689443};
  }

//else {
//  userLocation = {lat: 39.61114, lng: -75.689443};
//}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: userLocation,
    mapTypeId: 'terrain'
  });
        
  // This event listener will call addMarker() when the map is clicked.
  map.addListener('click', function(event) {
    addEventMarker(event.latLng);
  });
  
  //initialize the center mark
  addUserMarker(userLocation);
 
}

// Adds a marker to the map and push to the array.
function addUserMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    //animation: google.maps.Animation.DROP
  });
  mapMarkers.push(marker);
}

// Adds a marker to the map and push to the array.
function addEventMarker(location) {
  var eventIcon = {
    // This marker is 20 pixels wide by 32 pixels high.
    //size: new google.maps.Size(20, 32),
    scaledSize: new google.maps.Size(50, 50),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(25, 25)
  };

  if (document.getElementById("AR_Opt").selected){
    eventIcon["url"] = './icons/otherHaz.png';
  }
   else if (document.getElementById("FI_Opt").selected){
    eventIcon["url"] = './icons/fire.png';
  }
  else if (document.getElementById("FL_Opt").selected){
    eventIcon["url"] = './icons/flooding.png';
  }
  else if (document.getElementById("EL_Opt").selected){
    eventIcon["url"] = './icons/electric.png';
  }
  else {
    eventIcon["url"] = './icons/toxic.png';
  }

  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };
  
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    icon: eventIcon,
    shape: shape,
    animation: google.maps.Animation.DROP,
  });
  mapMarkers.push(marker);
}


// Adds a marker to the map and push to the array.
function deleteMarkers() {
  for (var i = 0; i < mapMarkers.length; i++) {
    mapMarkers[i].setMap(null);
  }
  mapMarkers = [];
  addUserMarker(userLocation);
}
