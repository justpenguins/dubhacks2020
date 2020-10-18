/**
  * Date: 10/17/2020
  * This Javacript file would add some functions to the map and make
  * it interactive
  */
function myMap() {
    var myLatLng = new google.maps.LatLng(47.6050, -122.3344);
    //TODO: add in all the different coordinates of all the facilities (setting them as consts may be better)

    var mapProp= {
        zoom: 15,
        center: myLatLng
      };

    /* sets js in html*/
    var map = new google.maps.Map(document.getElementById("googleMap"),
    mapProp);

    /* sets a floating marker*/
    var marker = new google.maps.Marker({
    position: myLatLng,
    title: "Test Marker!"
    });
    //TODO: Adding different icons amy also be good.

    marker.setMap(map);
  }






