//App Functions
var functions = {

    populateMarkers: function(latLongArr){

        latLongArr.forEach(function(line,j){

            var info = [];
            info.length = line[1].length;
            
            var infowindow = new google.maps.InfoWindow();
            var marker, i;
            
            line[1].forEach(function(stations,i){
                marker = new google.maps.Marker({
                position: new google.maps.LatLng(stations[1], stations[2]),
                map: map,
                icon: line[0]
            });

            $.ajax({
                
                type:"GET",
                url:"https://app.ticketmaster.com/discovery/v2/events.json?size=100&latlong=" 
                + stations[1] + "," + stations[2] + "&"+
                "radius=5&unit=miles&sort=distance,asc&apikey=LYfOBf4l5UcGurejeNMAvQ1TYzsrsnu9",
                async:true,
                dataType: "json"
            }).done(function(json){

            var nearby = "";
            var j=0;

            while(j<json._embedded.events.length && j<10){
                nearby+=("<div class='stuff'>"
                +(j + 1)
                +". " + json._embedded.events[j]._embedded.venues[0].name
                + " (" + json._embedded.events[j].classifications[0].segment.name + ")<br>"
                + json._embedded.events[j].name
                + " - "
                + (json._embedded.events[j].distance).toFixed(2) 
                + "mi<br>"
                + "<img src=" + json._embedded.events[j].images[0].url + " alt='event_img' width='115'>"
                + "<a href=" + json._embedded.events[j].url 
                + " target='_blank'>Purchase tickets now!</a></div><hr>");
                j++;
            }

            info[i] = ("<div class='station'><strong>" + stations[0] 
                        + "</strong>: </div><br><hr>" + nearby);

            });

                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        infowindow.setContent(info[i]);
                        infowindow.open(map, marker);
                    }
                })(marker, i));
            });

        });//end for loop

    },//end populate_markers method

}//end functions object

var map;

function initMap() {

    function initialize() {
        var myMapOptions = { clickableIcons: false }
    }

    // Create the map with no initial style specified.
    // It therefore has default styling.
    
    map = new google.maps.Map(document.getElementById('map'), {
        
        center: {lat: 34.048775, lng: -118.258615},
        zoom: 11,
        mapTypeControl: false,
        clickableIcons: false
    });

    var stations = [
        //REDLINE
        //https://maps.google.com/mapfiles/ms/icons/red-dot.png
        ["",[['Union Station',  34.055599, -118.233456],
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
        ['North Hollywood', 34.168839, -118.376613]]],
        //end line
        //BLUELINE
        ["https://maps.google.com/mapfiles/ms/icons/blue-dot.png",[
        ['7th Street / Metro Center Station', 34.048175, -118.258915],
        ['Pico Station', 34.040474, -118.266393],
        ['Grand / LATTC Station', 34.032968, -118.268942],
        ['San Pedro Station', 34.026809, -118.255494],
        ['Washington Station', 34.019967, -118.243069],
        ['Vernon Station', 34.003232, -118.243293],
        ['Slausson Station', 33.988811, -118.243360],
        ['Florence Station', 33.974084, -118.243280],
        ['Firestone Station', 33.959591, -118.243191],
        ['103rd Street / Watts Towers Station', 33.942542, -118.243156],
        ['Willowbrook / Rosa Parks Station', 33.928256, -118.238049],
        ['Compton Station', 33.897428, -118.224295],
        ['Artesia Station', 33.876115, -118.222503],
        ['Del Amo Station', 33.848198, -118.211015],
        ['Wardlow Station', 33.819733, -118.195952],
        ['Willow Station', 33.806788, -118.189763],
        ['Pacific Coast Highway Station', 33.789401, -118.189359],
        ['Anaheim Street Station', 33.781793, -118.189376],
        ['5th Street Station', 33.773358, -118.189383],
        ['1st Street Station', 33.768862, -118.189424],
        ['Downtown Long Beach Station', 33.768043, -118.193101],
        ['Pacific Avenue Station', 33.772253, -118.193690]]],
        //end line
        //PURPLELINE
        ["https://maps.google.com/mapfiles/ms/icons/purple-dot.png",[
        ['Union Station',  34.055199, -118.233456],
        ['Civic Center / Grand Park', 34.055042, -118.245244],
        ['Pershing Square', 34.048024, -118.251584],
        ['7th Street / Metro Center', 34.048375, -118.258615],
        ['Westlake / MacArthur Park', 34.056820, -118.275904],
        ['Wilshire / Vermont', 34.062139, -118.290880],
        ['Wilshire / Normandie',34.061608, -118.300931],
        ['Wilshire / Western', 34.062097, -118.308847]]],
        //end line
        //EXPOLINE
        ["https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=E%7C10C4FF",[
        ['7th Street / Metro Center Station', 34.048358, -118.259254],
        ['Pico Station', 34.040656, -118.266847],
        ['LATTC / Ortho Institute Station', 34.029264, -118.273941],
        ['Jefferson / USC Station', 34.021968, -118.278327],
        ['Exposition Park / USC Station', 34.018170, -118.285671],
        ['Exposition / Vermont Station', 34.018318, -118.291802],
        ['Exposition / Western Station', 34.018342, -118.308914],
        ['Exposition / Crenshaw Station', 34.022722, -118.336401],
        ['Farmdale Station', 34.023960, -118.346678],
        ['Exposition / La Brea Station', 34.024828, -118.355144],
        ['La Cienega / Jefferson Station', 34.026360, -118.372123],
        ['Culver City Station', 34.027879, -118.388858],
        ['Palms Station', 34.029293, -118.404250],
        ['Westwood / Rancho Park Station', 34.036796, -118.424521],
        ['Exposition / Sepulveda Station', 34.035416, -118.434290],
        ['Exposition / Bundy Station', 34.031666, -118.453036],
        ['26th Street / Bergamot Station', 34.028001, -118.469102],
        ['17th Street / Santa Monica College Station', 34.023156, -118.480391],
        ['Downtown Santa Monica Station', 34.014019, -118.491398]]]
        //end line
        ];

    //add method here
    functions.populateMarkers(stations);

    //begin red line Polyline
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
            redWestlakeMacArthurPark, redWilshireVermont, redVermontBeverly, 
            redVermontSantaMonica, redVermontSunset, redHollywoodWestern, 
            redHollywoodVine, redHollywoodHighland, redUniversalCityStudioCity, redNorthHollywood],


        strokeColor: "red",
        strokeOpacity: 0.6,
        strokeWeight: 6
    });

    redLinePath.setMap(map);

    //end red line Polyline

    var purpleUnionStation = new google.maps.LatLng(34.055199, -118.233456);
    var purpleCivicCenterGrandPark = new google.maps.LatLng(34.055042, -118.245244);
    var purplePershingSquare = new google.maps.LatLng(34.048024, -118.251584);
    var purple7thStreet = new google.maps.LatLng(34.048375, -118.258615);
    var purpleWestlakeMacArthurPark = new google.maps.LatLng(34.056820, -118.275904);
    var purpleWilshireVermont = new google.maps.LatLng(34.062139, -118.290880);
    var purpleWilshireNormandie = new google.maps.LatLng(34.061608, -118.300931);
    var purpleWilshireWestern = new google.maps.LatLng(34.062097, -118.308847);




    var purpleLinePath = new google.maps.Polyline({
        path: [purpleUnionStation, purpleCivicCenterGrandPark, purplePershingSquare, 
        purple7thStreet, purpleWestlakeMacArthurPark, purpleWilshireVermont, purpleWilshireNormandie, 
        purpleWilshireWestern],


        strokeColor: "#8E67FD",
        strokeOpacity: 0.8,
        strokeWeight: 6
    });

    purpleLinePath.setMap(map);

    var blue7thStreet = new google.maps.LatLng(34.048175, -118.258915);
    var bluePico = new google.maps.LatLng(34.040474, -118.266393);
    var blueGrandLATTC = new google.maps.LatLng(34.032968, -118.268942);
    var blueGrandLATTCa = new google.maps.LatLng(34.033900, -118.270813);
    var blueSanPedro = new google.maps.LatLng(34.026809, -118.255494);
    var blueWashington = new google.maps.LatLng(34.019967, -118.243069);
    var blueWashingtona = new google.maps.LatLng(34.020597, -118.243218);
    var blueVernon = new google.maps.LatLng(34.003232, -118.243293);
    var blueSlausson = new google.maps.LatLng(33.988811, -118.243360);
    var blueFlorence = new google.maps.LatLng(33.974084, -118.243280);
    var blueFirestone = new google.maps.LatLng(33.959591, -118.243191);
    var blue103rdStreetWattsTowers = new google.maps.LatLng(33.942542, -118.243156);
    var blueWillowbrookRosaParks = new google.maps.LatLng(33.928256, -118.238049);
    var blueWillowbrookRosaParksa = new google.maps.LatLng(33.938228, -118.242809);
    var blueCompton = new google.maps.LatLng(33.897428, -118.224295);
    var blueComptona = new google.maps.LatLng(33.903546, -118.224864);
    var blueArtesia = new google.maps.LatLng(33.876115, -118.222503);
    var blueDelAmo = new google.maps.LatLng(33.848198, -118.211015);
    var blueWardlow = new google.maps.LatLng(33.819733, -118.195952);
    var blueWardlowa = new google.maps.LatLng(33.835637, -118.205740);
    var blueWillow = new google.maps.LatLng(33.806788, -118.189763);
    var blueWillowa = new google.maps.LatLng(33.805737, -118.189296);
    var bluePacificCoastHighway = new google.maps.LatLng(33.789401, -118.189359);
    var blueAnaheim = new google.maps.LatLng(33.781793, -118.189376);
    var blue5thStreet = new google.maps.LatLng(33.773358, -118.189383);
    var blue1stStreet = new google.maps.LatLng(33.768862, -118.189424);
    var blue1stStreeta = new google.maps.LatLng(33.768101, -118.189440);
    var blueDowntownLongBeach = new google.maps.LatLng(33.768043, -118.193101);
    var blueDowntownLongBeacha = new google.maps.LatLng(33.768101, -118.193706);
    var bluePacificAve = new google.maps.LatLng(33.772253, -118.193690);
    var bluePacificAvea = new google.maps.LatLng(33.776528, -118.193690);
    var bluePacificAveb = new google.maps.LatLng(33.776554, -118.189386);


    var blueLinePath = new google.maps.Polyline({
        path: [blue7thStreet, bluePico, blueGrandLATTCa, blueGrandLATTC, blueSanPedro, 
            blueWashingtona, blueWashington, blueVernon, blueSlausson, blueFlorence, 
            blueFirestone, blue103rdStreetWattsTowers, blueWillowbrookRosaParksa, 
            blueWillowbrookRosaParks, blueComptona, blueCompton, blueArtesia, blueDelAmo, 
            blueWardlowa, blueWardlow, blueWillow, blueWillowa, bluePacificCoastHighway,
            blueAnaheim, blue5thStreet, blue1stStreet, blue1stStreeta, blueDowntownLongBeach,
            blueDowntownLongBeacha, bluePacificAve, bluePacificAvea, bluePacificAveb],


        strokeColor: "#6991FD",
        strokeOpacity: 0.6,
        strokeWeight: 6
    });

    blueLinePath.setMap(map);

    var expo7thStreet = new google.maps.LatLng(34.048358, -118.259254);
    var expoPico = new google.maps.LatLng(34.040656, -118.266847);
    var expoLATTC = new google.maps.LatLng(34.029264, -118.273941);
    var expoJeffersonUSC = new google.maps.LatLng(34.021968, -118.278327);
    var expoJeffersonUSCa = new google.maps.LatLng(34.018365, -118.280676);
    var expoExpositionUSC = new google.maps.LatLng(34.018170, -118.285671);
    var expoExpositionVermont = new google.maps.LatLng(34.018318, -118.291802);
    var expoExpositionWestern = new google.maps.LatLng(34.018342, -118.308914);
    var expoExpositionWesterna = new google.maps.LatLng(34.018437, -118.315093);
    var expoExpositionCrenshaw = new google.maps.LatLng(34.022722, -118.336401);
    var expoFarmdale = new google.maps.LatLng(34.023960, -118.346678);
    var expoExpositionLaBrea = new google.maps.LatLng(34.024828, -118.355144);
    var expoLaCienegaJefferson = new google.maps.LatLng(34.026360, -118.372123);
    var expoCulverCity = new google.maps.LatLng(34.027879, -118.388858);
    var expoPalms = new google.maps.LatLng(34.029293, -118.404250);
    var expoPalmsa = new google.maps.LatLng(34.031078, -118.413346);
    var expoPalmsb = new google.maps.LatLng(34.037046, -118.419874);
    var expoWestwoodRanchoPark = new google.maps.LatLng(34.036796, -118.424521);
    var expoExpositionSepulveda = new google.maps.LatLng(34.035416, -118.434290);
    var expoExpositionBundy = new google.maps.LatLng(34.031666, -118.453036);
    var expoExpositionBundya = new google.maps.LatLng(34.028801, -118.466642);
    var expo26thStreetBergamot = new google.maps.LatLng(34.028001, -118.469102);
    var expo17thStreetSMC = new google.maps.LatLng(34.023156, -118.480391);
    var expoDowntownSantaMonica = new google.maps.LatLng(34.014019, -118.491398);



    var expoLinePath = new google.maps.Polyline({
        path: [expo7thStreet, expoPico, expoLATTC, expoJeffersonUSC, expoJeffersonUSCa,
              expoExpositionUSC, expoExpositionVermont, expoExpositionWestern, expoExpositionWesterna,
              expoExpositionCrenshaw, expoFarmdale, expoExpositionLaBrea, expoLaCienegaJefferson,
              expoCulverCity, expoPalms, expoPalmsa, expoPalmsb, expoWestwoodRanchoPark, 
              expoExpositionSepulveda, expoExpositionBundy, 
              expoExpositionBundya, expo26thStreetBergamot, expo17thStreetSMC, expoDowntownSantaMonica
              ],


        strokeColor: "#10C4FF",
        strokeOpacity: 0.4,
        strokeWeight: 6
    });

    expoLinePath.setMap(map);

// Set the map's style to the initial value of the selector.
var styleSelector = document.getElementById('style-selector');
    map.setOptions({styles: styles[styleSelector.value]});


// Closes initMap function (do not remove)

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

