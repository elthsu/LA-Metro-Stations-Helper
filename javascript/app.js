
      var map;
      function initMap() {

        function initialize() {
            var myMapOptions = { clickableIcons: false }
        }

        // Create the map with no initial style specified.
        // It therefore has default styling.
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 33.95, lng: -118.10},
          zoom: 11,
          mapTypeControl: false,
          clickableIcons: false
        });


        var transitLayer = new google.maps.TransitLayer();
        transitLayer.setMap(map);

          //try adding flag logic here
        var redStations = [
        ['Union Station',  34.055599, -118.233456],
        ['Civic Center / Grand Park', 34.055442, -118.245244],
        ['Pershing Square', 34.048424, -118.251584],
        ['7th Street / Metro Center', 34.048775, -118.258615],
        ['Westlake / MacArthur Park', 34.057220, -118.275904],
        ['Wilshire / Vermont', 34.062539, -118.290880],
        ['Vermont / Beverly',34.076710, -118.291938],
        ['Vermont / Santa Monica', 34.090496, -118.292032],
        ['Vermont / Sunset', 34.098378, -118.291433],
        ['Hollywood / Western', 34.101498, -118.308962],
        ['Hollywood / Vine', 34.101153, -118.325783],
        ['Hollywood / Highland', 34.101727, -118.339255],
        ['Universal City / Studio City', 34.139095, -118.362394],
        ['North Hollywood', 34.168839, -118.376613],

      ];


      var infoRed = ['Union Station', 'Civic Center / Grand Park', 'Pershing Square', '7th Street / Metro Center', 'Westlake / MacArthur Park', 'Wilshire / Vermont', 'Vermont / Beverly', 'Vermont / Santa Monica', 'Vermont / Sunset', 'Hollywood / Western', 'Hollywood / Vine', 'Hollywood / Highland', 'Universal City / Studio City', 'North Hollywood'];

      var infowindowRed = new google.maps.InfoWindow();

    var markerRed, i;

    for (i = 0; i < redStations.length; i++) { 
      markerRed = new google.maps.Marker({
        position: new google.maps.LatLng(redStations[i][1], redStations[i][2]),
        map: map
      });

      google.maps.event.addListener(markerRed, 'click', (function(markerRed, i) {
        return function() {
          infowindowRed.setContent(infoRed[i]);
          infowindowRed.open(map, marker);
        }
      })(markerRed, i));
    }


    var redUnionStation = new google.maps.LatLng(34.055599, -118.233456);
    var redCivicCenterGrandPark = new google.maps.LatLng(34.055442, -118.245244);
    var redPershingSquare = new google.maps.LatLng(34.048424, -118.251584);
    var red7thStreet = new google.maps.LatLng(34.048775, -118.258615);
    var redWestlakeMacArthurPark = new google.maps.LatLng(34.057220, -118.275904);
    var redWilshireVermont = new google.maps.LatLng(34.062539, -118.290880);
    var redVermontBeverly = new google.maps.LatLng(34.076710, -118.291938);
    var redVermontSantaMonica = new google.maps.LatLng(34.090496, -118.292032);
    var redVermontSunset = new google.maps.LatLng(34.098378, -118.291433);
    var redHollywoodWestern = new google.maps.LatLng(34.101498, -118.308962);
    var redHollywoodVine = new google.maps.LatLng(34.101153, -118.325783);
    var redHollywoodHighland = new google.maps.LatLng(34.101727, -118.339255);
    var redUniversalCityStudioCity = new google.maps.LatLng(34.139095, -118.362394);
    var redNorthHollywood = new google.maps.LatLng(34.168839, -118.376613);

    var redLinePath = new google.maps.Polyline({
    path: [redUnionStation, redCivicCenterGrandPark, redPershingSquare, red7thStreet, 
            redWestlakeMacArthurPark, redWilshireVermont, redVermontBeverly, redVermontSantaMonica, redVermontSunset, redHollywoodWestern, redHollywoodVine, redHollywoodHighland, redUniversalCityStudioCity, redNorthHollywood],


    strokeColor: "red",
    strokeOpacity: 0.6,
    strokeWeight: 6
    });
    redLinePath.setMap(map);


    var purpleStations = [
        ['Union Station',  34.055199, -118.233456],
        ['Civic Center / Grand Park', 34.055442, -118.245244],
        ['Pershing Square', 34.048424, -118.251584],
        ['7th Street / Metro Center', 34.048775, -118.258615],
        ['Westlake / MacArthur Park', 34.057220, -118.275904],
        ['Wilshire / Vermont', 34.062539, -118.290880],
        ['Wilshire / Normandie',34.061608, -118.300931],
        ['Wilshire / Western', 34.062097, -118.308847],

      ];


      var infoPurple = ['Union Station', 'Civic Center / Grand Park', 'Pershing Square', '7th Street / Metro Center', 'Westlake / MacArthur Park', 'Wilshire / Vermont', 'Wilshire / Normandie', 'Wilshire / Western'];

      var infowindowPurple = new google.maps.InfoWindow();

      var purpleIcon = 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png';

      var markerPurple, j;


      for (j = 0; j < purpleStations.length; j++) { 
      markerPurple = new google.maps.Marker({
        position: new google.maps.LatLng(purpleStations[j][1], purpleStations[j][2]),
        map: map,
        icon: purpleIcon
      });

      google.maps.event.addListener(markerPurple, 'click', (function(markerPurple, j) {
        return function() {
          infowindowPurple.setContent(infoPurple[j]);
          infowindowPurple.open(map, markerPurple);
        }
      })(markerPurple, j));
    }

    




    var purpleUnionStation = new google.maps.LatLng(34.055199, -118.233456);
    var purpleCivicCenterGrandPark = new google.maps.LatLng(34.055042, -118.245244);
    var purplePershingSquare = new google.maps.LatLng(34.048024, -118.251584);
    var purple7thStreet = new google.maps.LatLng(34.048375, -118.258615);
    var purpleWestlakeMacArthurPark = new google.maps.LatLng(34.056820, -118.275904);
    var purpleWilshireVermont = new google.maps.LatLng(34.062139, -118.290880);
    var purpleWilshireNormandie = new google.maps.LatLng(34.061608, -118.300931);
    var purpleWilshireWestern = new google.maps.LatLng(34.062097, -118.308847);




    var purpleLinePath = new google.maps.Polyline({
    path: [purpleUnionStation, purpleCivicCenterGrandPark, purplePershingSquare, purple7thStreet, purpleWestlakeMacArthurPark, purpleWilshireVermont, purpleWilshireNormandie, purpleWilshireWestern],


    strokeColor: "purple",
    strokeOpacity: 0.8,
    strokeWeight: 6
    });
    purpleLinePath.setMap(map);



        // Set the map's style to the initial value of the selector.
        var styleSelector = document.getElementById('style-selector');
        map.setOptions({styles: styles[styleSelector.value]});


      }

      var styles = {
        default: null,
        silver: [
          {
            elementType: 'geometry',
            stylers: [{color: '#f5f5f5'}]
          },
          {
            elementType: 'labels.icon',
            stylers: [{visibility: 'off'}]
          },
          {
            elementType: 'labels.text.fill',
            stylers: [{color: '#616161'}]
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [{color: '#f5f5f5'}]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{color: '#bdbdbd'}]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{color: '#eeeeee'}]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#757575'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#e5e5e5'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9e9e9e'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#ffffff'}]
          },
          {
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [{color: '#757575'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#dadada'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: '#616161'}]
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9e9e9e'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{color: '#e5e5e5'}]
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{color: '#eeeeee'}]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#c9c9c9'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9e9e9e'}]
          }
        ],

        retro: [
          {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
          {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
          {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
          {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [{color: '#c9b2a6'}]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'geometry.stroke',
            stylers: [{color: '#dcd2be'}]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{color: '#ae9e90'}]
          },
          {
            featureType: 'landscape.natural',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#93817c'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [{color: '#a5b076'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#447530'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#f5f1e6'}]
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{color: '#fdfcf8'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#f8c967'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#e9bc62'}]
          },
          {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry',
            stylers: [{color: '#e98d58'}]
          },
          {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry.stroke',
            stylers: [{color: '#db8555'}]
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{color: '#806b63'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'labels.text.fill',
            stylers: [{color: '#8f7d77'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#ebe3cd'}]
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [{color: '#b9d3c2'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#92998d'}]
          }
        ]
      };

