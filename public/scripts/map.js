var map;
var mapUser = [];
var mapHazards = [];
var mapARequests = [];
var userLocation = {lat: 39.61114, lng: -75.689443};
      
// initializes the map
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: userLocation,
    mapTypeId: 'terrain'
  });
        
  // This event listener will call addEventMarker() when the map is clicked.
  map.addListener('click', function(event) {
    addEventMarker(event.latLng);
  });
  
  //initialize the User Marker
  addUserMarker(userLocation);
 
}

// Adds a marker to the map and push to the array.
function addUserMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    //animation: google.maps.Animation.DROP
  });
  mapUser.push(marker);
}

// Adds a Event Marker to the map and push to the proper array.
function addEventMarker(location) {
  var eventIcon = {
    // This marker is 20 pixels wide by 32 pixels high.
    //size: new google.maps.Size(20, 32),
    scaledSize: new google.maps.Size(50, 50),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(25, 25)
  };

  // use the proper icon
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
  
  // create the Marker
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    icon: eventIcon,
    shape: shape,
    animation: google.maps.Animation.DROP,
  });

  // add it to the proper array
  if (document.getElementById("AR_Opt").selected){
    mapARequests.push(marker);
  }
  else{
    mapHazards.push(marker);
  }
}


// Removes Hazards from the map and array
function deleteHazards() {
  for (var i = 0; i < mapHazards.length; i++) {
    mapHazards[i].setMap(null);
  }
  mapHazards = [];
}


// Removes Assistance Requests from the map and array
function deleteARequests() {
  for (var i = 0; i < mapARequests.length; i++) {
    mapARequests[i].setMap(null);
  }
  mapARequests = [];
}


// removes all Event Markers from the Map
function deleteAll() {
  deleteHazards();
  deleteARequests();
}