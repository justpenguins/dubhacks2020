/**
  * Date: 10/17/2020
  * This Javacript file would add some functions to the map and make
  * it interactive
  */
function initMap() {
  let coord1 = { lat: 47.5374665, lng: -122.2830449 }
  let coord2 = { lat: 47.569190, lng: -122.325940 }
  let coord3 = { lat: 47.5252004, lng: -122.264473 }
  let coord4 = { lat: 47.5278341, lng: -122.368958385751 }

  let map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 47.5374665, lng: -122.2830449 },
    zoom: 12,
  });

  let marker1 = new google.maps.Marker({
    position: coord1,
    title:"Aurora Testing Site",
    map: map,
  });
  let marker2 = new google.maps.Marker({
    position: coord2,
    title:"SODO Drive-Through Site",
    map: map,
  });
  let marker3 = new google.maps.Marker({
    position: coord3,
    title:"Rainier Beach Walk-Up Site",
    map: map,
  });
  let marker4 = new google.maps.Marker({
    position: coord4,
    title:"West Seattle Walk-Up Site",
    map: map,
  });
}

function initMap2() {
  let coord5 = { lat: 47.664430, lng: -122.314008 }
  let coord6 = { lat: 47.662179, lng: -122.295092629209 }
  let coord7 = { lat: 47.6377589, lng: -122.356126436674 }
  let coord8 = { lat: 47.6201294, lng: -122.312948 }
  let coord9 = { lat: 47.618117, lng: -122.3036882 }
  let coord10 = { lat: 47.6683664, lng: -122.374279460212 }
  let coord11 = { lat: 47.5695825, lng: -122.2882218 }
  let coord12 = { lat:47.5798703, lng: -122.386046418975 }
  let coord13 = { lat: 47.55978655, lng: -122.384924707792 }
  let coord14 = { lat: 47.5374665, lng: -122.2830449 }

  let map2 =new google.maps.Map(document.getElementById("map2"), {
    center: { lat: 47.643649, lng: -122.325350},
    zoom: 10,
  });

  let marker5 = new google.maps.Marker({
    position: coord5,
    title:"Free Mask at Safeway",
    map: map2,
  });
  let marker6 = new google.maps.Marker({
    position: coord6,
    title:"Free Mask at Safeway",
    map: map2,
  });
  let marker7 = new google.maps.Marker({
    position: coord7,
    title:"Free Mask at Safeway",
    map: map2,
  });
  let marker8 = new google.maps.Marker({
    position: coord8,
    title:"Free Mask at Safeway",
    map: map2,
  });
  let marker9 = new google.maps.Marker({
    position: coord9,
    title:"Free Mask at Safeway",
    map: map2,
  });
  let marker10 = new google.maps.Marker({
    position: coord10,
    title:"Free Mask at Safeway",
    map: map2,
  });
  let marker11 = new google.maps.Marker({
    position: coord11,
    title:"Free Mask at Safeway",
    map: map2,
  });
  let marker12 = new google.maps.Marker({
    position: coord12,
    title:"Free Mask at Safeway",
    map: map2,
  });
  let marker13 = new google.maps.Marker({
    position: coord13,
    title:"Free Mask at Safeway",
    map: map2,
  });
  let marker14 = new google.maps.Marker({
    position: coord14,
    title:"Free Mask at Safeway",
    map: map2,
  });
}
