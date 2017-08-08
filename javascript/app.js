//App Functions
var functions = {
    weather: "",
    info: "",
    currentDate: moment().format().substr(0,19)+"Z",//format for TM api startDateTime/endDateTime
    weekDate: moment().add(14,'day').format().substr(0,19)+"Z",
    transitLines: [
        //REDLINE
        //https://maps.google.com/mapfiles/ms/icons/red-dot.png
        [["Red Line", 802],"",[['Union Station',  34.055599, -118.233456, 80214],
        ['Civic Center / Grand Park', 34.055442, -118.245244, 80213],
        ['Pershing Square', 34.048424, -118.251584, 80212],
        ['7th Street / Metro Center', 34.048775, -118.258615, 80211],
        ['Westlake / MacArthur Park', 34.057220, -118.275904, 80210],
        ['Wilshire / Vermont', 34.062539, -118.290880, 80209],
        ['Vermont / Beverly',34.076710, -118.291938, 80208],
        ['Vermont / Santa Monica', 34.090496, -118.292032, 80207],
        ['Vermont / Sunset', 34.098378, -118.291433, 80206],
        ['Hollywood / Western', 34.101498, -118.308962, 80205],
        ['Hollywood / Vine', 34.101153, -118.325783, 80204],
        ['Hollywood / Highland', 34.101727, -118.339255, 80203],
        ['Universal City / Studio City', 34.139095, -118.362394, 80202],
        ['North Hollywood', 34.168839, -118.376613, 80201]]],
        //end line
        //BLUELINE
        [["Blue Line", 801],"https://maps.google.com/mapfiles/ms/icons/blue-dot.png",[
        ['7th Street / Metro Center Station', 34.048175, -118.258915, 80122],
        ['Pico Station', 34.040474, -118.266393, 80121],
        ['Grand / LATTC Station', 34.032968, -118.268942, 80120],
        ['San Pedro Station', 34.026809, -118.255494, 80119],
        ['Washington Station', 34.019967, -118.243069, 80118],
        ['Vernon Station', 34.003232, -118.243293, 80117],
        ['Slauson Station', 33.988811, -118.243360, 80116],
        ['Florence Station', 33.974084, -118.243280, 80115],
        ['Firestone Station', 33.959591, -118.243191, 80114],
        ['103rd Street / Watts Towers Station', 33.942542, -118.243156, 80113],
        ['Willowbrook / Rosa Parks Station', 33.928331, -118.239053, 80112],
        ['Compton Station', 33.897428, -118.224295, 80111],
        ['Artesia Station', 33.876115, -118.222503, 80110],
        ['Del Amo Station', 33.848198, -118.211015, 80109],
        ['Wardlow Station', 33.819733, -118.195952, 80108],
        ['Willow Station', 33.806788, -118.189763, 80107],
        ['Pacific Coast Highway Station', 33.789401, -118.189359, 80106],
        ['Anaheim Street Station', 33.781793, -118.189376, 80105],
        ['5th Street Station', 33.773358, -118.189383, 80154],
        ['1st Street Station', 33.768862, -118.189424, 80153],
        ['Downtown Long Beach Station', 33.768043, -118.193101, 80101],
        ['Pacific Avenue Station', 33.772253, -118.193690, 80102]]],
        //end line
        //PURPLELINE
        [["Purple Line", 805],"https://maps.google.com/mapfiles/ms/icons/purple-dot.png",[
        ['Union Station',  34.055199, -118.233456, 80214],
        ['Civic Center / Grand Park', 34.055042, -118.245244, 80213],
        ['Pershing Square', 34.048024, -118.251584, 80212],
        ['7th Street / Metro Center', 34.048375, -118.258615, 80211],
        ['Westlake / MacArthur Park', 34.056820, -118.275904, 80210],
        ['Wilshire / Vermont', 34.062139, -118.290880, 80209],
        ['Wilshire / Normandie',34.061608, -118.300931, 80215],
        ['Wilshire / Western', 34.062097, -118.308847, 80216]]],
        //end line
        //EXPOLINE
        [["Expo Line", 806],"https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=E%7C10C4FF",[
        ['7th Street / Metro Center Station', 34.048358, -118.259254, 80122],
        ['Pico Station', 34.040656, -118.266847, 80121],
        ['LATTC / Ortho Institute Station', 34.029264, -118.273941, 80123],
        ['Jefferson / USC Station', 34.021968, -118.278327, 80124],
        ['Exposition Park / USC Station', 34.018170, -118.285671, 80125],
        ['Exposition / Vermont Station', 34.018318, -118.291802, 80126],
        ['Exposition / Western Station', 34.018342, -118.308914, 80127],
        ['Exposition / Crenshaw Station', 34.022722, -118.336401, 80128],
        ['Farmdale Station', 34.023960, -118.346678, 80129],
        ['Exposition / La Brea Station', 34.024828, -118.355144, 80130],
        ['La Cienega / Jefferson Station', 34.026360, -118.372123, 80131],
        ['Culver City Station', 34.027879, -118.388858, 80132],
        ['Palms Station', 34.029293, -118.404250, 80133],
        ['Westwood / Rancho Park Station', 34.036796, -118.424521, 80134],
        ['Exposition / Sepulveda Station', 34.035416, -118.434290, 80135],
        ['Exposition / Bundy Station', 34.031666, -118.453036, 80136],
        ['26th Street / Bergamot Station', 34.028001, -118.469102, 80137],
        ['17th Street / Santa Monica College Station', 34.023156, -118.480391, 80138],
        ['Downtown Santa Monica Station', 34.014019, -118.491398, 80139]]],
        //end line
        //GOLDLINE
        [["Gold Line", 804], "https://maps.google.com/mapfiles/marker_yellow.png",[
        ['Atlantic Station', 34.033367, -118.155009, 80401],
        ['East LA Civic Center Station', 34.033352, -118.161200, 80402],
        ['Maravilla Station', 34.033303, -118.168146, 80403],
        ['Indiana Station', 34.034280, -118.192164, 80404],
        ['Soto Station', 34.043719, -118.210042, 80405],
        ['Mariachi Plaza Station', 34.047211, -118.219646, 80406],
        ['Pico / Aliso Station', 34.047637, -118.225904, 80407],
        ['Little Tokyo / Arts District Station', 34.050040, -118.237899, 80408],
        ['Union Station', 34.056051, -118.234757, 80409],
        ['Chinatown Station', 34.063861, -118.235809, 80410],
        ['Lincoln Heights / Cypress Park Station', 34.081166, -118.220256, 80411],
        ['Heritage Square Station', 34.087479, -118.212954, 80412],
        ['Southwest Museum Station', 34.098404, -118.206474, 80413],
        ['Highland Park Station', 34.111166, -118.192605, 80414],
        ['South Pasadena Station', 34.115189, -118.157796, 80415],
        ['Fillmore Station', 34.133474, -118.148193, 80416],
        ['Del Mar Station', 34.141808, -118.148251, 80417],
        ['Memorial Park Station', 34.147835, -118.147727, 80418],
        ['Lake Station', 34.151812, -118.131591, 80419],
        ['Allen Station', 34.152395, -118.113956, 80420],
        ['Sierra Madre Villa Station', 34.147730, -118.081368, 80421],
        ['Arcadia Station', 34.142667, -118.029040, 80422],
        ['Monrovia Station', 34.133050, -118.003233, 80423],
        ['Duarte / City of Hope Station', 34.132497, -117.967519, 80424],
        ['Irwindale Station', 34.129033, -117.932434, 80425],
        ['Azusa Downtown Station', 34.135768, -117.906787, 80426],
        ['APU / Citrus College Station', 34.136797, -117.891637, 80427]]],
        //end line
        //GREENLINE
        [["Green Line", 803], "https://maps.google.com/mapfiles/marker_green.png",[
        ['Redondo Beach Station', 33.894577, -118.369161, 80301],
        ['Douglas Station', 33.905288, -118.383232, 80302],
        ['El Segundo Station', 33.916187, -118.386777, 80303],
        ['Mariposa Station', 33.923288, -118.387579, 80304],
        ['Aviation / LAX Station', 33.929612, -118.377150, 80305],
        ['Hawthrone / Lennox Station', 33.933416, -118.351733, 80306],
        ['Crenshaw Station', 33.925231, -118.326407, 80307],
        ['Vermont / Athens Station', 33.928660, -118.291698, 80308],
        ['Harbor Freeway Station', 33.928681, -118.281095, 80309],
        ['Avalon Station', 33.927490, -118.265171, 80310],
        ['Willowbrook / Rosa Parks Station', 33.928240, -118.238031, 80311],
        ['Long Beach Boulevard Station', 33.925011, -118.210230, 80312],
        ['Lakewood Boulevard Station', 33.913066, -118.140266, 80313],
        ['Norwalk Station', 33.914116, -118.104085, 80314]]],
        //end line
        ],
    populateMarkers: function(latLongArr){

        latLongArr.forEach(function(line,j){

            var lineName = line[0][0];
            var lineID = line[0][1];
            var stationID = line[2][j][3];
            var info = [];
            info.length = line[2].length;
            
            var infowindow = new google.maps.InfoWindow();
            var marker, i;
            //do not change from i, it is same i of station index!
            line[2].forEach(function(stations,i){
                marker = new google.maps.Marker({

                    position: new google.maps.LatLng(stations[1], stations[2]),
                    map: map,
                    icon: line[1]

                    });


                    google.maps.event.addListener(marker, 'click', (function(marker, i) {
                            return function() {
                                console.log(lineName);
                                console.log(stations[0]);
                                console.log(stations[1]);
                                console.log(stations[2]);
                                functions.addInfo(stations[0],stations[1],stations[2],lineName,lineID,stationID).then(function(){
                                    console.log(functions.info);
                                    infowindow.setContent(functions.info);
                                    infowindow.open(map, marker);
                                });

                            }
                    })(marker, i));

                    marker.addListener('click', function() {
                    map.setZoom(16);
                    map.setCenter(marker.getPosition());
                    var styleSelector = document.getElementById('style-selector');
                    map.setOptions({styles: styles["retro"],
                                    draggable: false,
                                    disableDoubleClickZoom: true
                            });
                    });

                    google.maps.event.addListener(infowindow,'closeclick',function(){

                    map.setOptions({styles: styles["silver"],
                                    draggable: true,
                                    disableDoubleClickZoom: false,
                                    center: this.position,
                                    zoom: 13,
                                    mapTypeControl: false,
                                    clickableIcons: false
                                }); ; //removes the marker
    // then, remove the infowindows name from the array
});

                });
            });

                /*

                http://api.worldweatheronline.com/premium/v1/weather.ashx?key=b0c790597a9545408c072433170408&q=34.0555892,-118.2335296&num_of_days=2&tp=3&format=json
                HSapqKFWyAlQB7MxBkl3dvnFWzTWBkQ9
                LYfOBf4l5UcGurejeNMAvQ1TYzsrsnu9(current)
                https://app.ticketmaster.com/discovery/v2/events.json?size=100
                &latlong=34.026809,-118.255494&radius=5&unit=miles&sort=distance,asc
                &startDateTime=2017-08-04T23:36:03Z&endDateTime=2017-08-11T23:36:03Z
                &apikey=HSapqKFWyAlQB7MxBkl3dvnFWzTWBkQ9

                */

        //sync ajax calls
        // var tempMetro = "https://api.metro.net/agencies/lametro-rail/routes/" + line[0][1] + "/stops/" + 
        //                 stations[3] + "/predictions/";



        

    },//end populate_markers method

    addInfo: function(stations,lat,long,line,ID,stationID){
                //sync ajax calls

        return $.when(

            $.ajax({type:"GET",
                    url:"https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='("
                    + lat + "," + long + ")') and u='f'&format=json",
                    async:true,
                    dataType: "json"}),
            $.ajax({type:"GET",
                    url:"https://app.ticketmaster.com/discovery/v2/events.json?size=100&latlong=" 
                    + lat + "," + long
                    + "&radius=5&unit=miles&sort=distance,asc"
                    + "&startDateTime=" + functions.currentDate
                    + "&endDateTime=" + functions.weekDate
                    + "&apikey=LYfOBf4l5UcGurejeNMAvQ1TYzsrsnu9",
                    async:true,
                    dataType: "json"}),
            $.ajax({type:"GET",
                    url: "https://api.metro.net/agencies/lametro-rail/routes/" + ID + "/stops/" + 
                        stationID + "/predictions/",
                    async: true,
                    dataType: "json"})).then(function(resp1, resp2, resp3) {

                        var upcomingTrain = "";

                        for (var i = 0; i < resp3[0].items.length && i < 3; i++) {
                                               
                        upcomingTrain += moment().add(resp3[0].items[i].minutes, 'minutes').format("h:mm A") + "/";

                        }

                        var nearby = "";
                        var j=0;

                        functions.weather = "Local weather: "
                        + resp1[0].query.results.channel.item.forecast[0].high + "H/ " 
                        + resp1[0].query.results.channel.item.forecast[0].low + "L/"
                        + resp1[0].query.results.channel.item.forecast[0].text;
//begin   
    
                        if(jQuery.isEmptyObject(resp2[0]._embedded)){

                            nearby="Check again soon for more events!"

                        }
                        else{

                            while(j<resp2[0]._embedded.events.length && j<10){
                                var genre = ""
                                //console.log(resp2[0]._embedded.events[j]._embedded.venues[0].name)
                                //console.log(resp2[0]._embedded.events[j].classifications[0].segment.name)

                                if (resp2[0]._embedded.events[j].classifications){
                                    genre = resp2[0]._embedded.events[j].classifications[0].segment.name;
                                }
                                else{
                                    genre = "N/A"
                                }

                                nearby+=("<div class='stuff'>"
                                +"<span class='position'>" + (j + 1)
                                +". </span>" + resp2[0]._embedded.events[j]._embedded.venues[0].name
                                + " (" + genre + ")<span id='eventDate'> - "
                                + resp2[0]._embedded.events[j].dates.start.localDate
                                +"</span><br>"
                                + resp2[0]._embedded.events[j].name
                                + " - "
                                + (resp2[0]._embedded.events[j].distance).toFixed(2) 
                                + "mi<br>"
                                + "<img src=" + resp2[0]._embedded.events[j].images[0].url
                                + " alt='event_img' width='115' station='"
                                + stations + "' line='"
                                + line + "'>"
                                + "<a href=" + resp2[0]._embedded.events[j].url 
                                + " target='_blank'>Purchase tickets now!</a></div><hr>");
                                j++;                    
                            }//end while loop
                        }//end if statement

                    functions.info = ("<div class='station'><strong>" + stations 
                        + "<br>Upcoming Trains (real-time): " + upcomingTrain.slice(0,upcomingTrain.length-1)
                        + "</strong>" + "</div><div class='weather'>" + functions.weather + "</div><hr>" + nearby);
//end 

        });



    },
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

    //add method here
    functions.populateMarkers(functions.transitLines);

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
    var blueSlauson = new google.maps.LatLng(33.988811, -118.243360);
    var blueFlorence = new google.maps.LatLng(33.974084, -118.243280);
    var blueFirestone = new google.maps.LatLng(33.959591, -118.243191);
    var blue103rdStreetWattsTowers = new google.maps.LatLng(33.942542, -118.243156);
    var blueWillowbrookRosaParks = new google.maps.LatLng(33.928331, -118.239053);
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
            blueWashingtona, blueWashington, blueVernon, blueSlauson, blueFlorence, 
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

        var goldAtlantic = new google.maps.LatLng(34.033367, -118.155009);
    var goldEastLACivicCenter = new google.maps.LatLng(34.033352, -118.161200);
    var goldMiravilla = new google.maps.LatLng(34.033303, -118.168146);
    var goldMiravillaa = new google.maps.LatLng(34.033275, -118.192183);
    var goldIndiana = new google.maps.LatLng(34.034280, -118.192164);
    var goldIndianaa = new google.maps.LatLng(34.035972, -118.192439);
    var goldSoto = new google.maps.LatLng(34.043719, -118.210042);
    var goldSotoa = new google.maps.LatLng(34.047190, -118.218483);
    var goldMariachiPlaza = new google.maps.LatLng(34.047211, -118.219646);
    var goldPicoAliso = new google.maps.LatLng(34.047637, -118.225904);
    var goldPicoAlisoa = new google.maps.LatLng(34.049003, -118.237946);
    var goldLittleTokyoArtsDistrict = new google.maps.LatLng(34.050040, -118.237899);
    var goldLittleTokyoa = new google.maps.LatLng(34.053499, -118.237638);
    var goldLittleTokyob = new google.maps.LatLng(34.053553, -118.235447);
    var goldUnion = new google.maps.LatLng(34.056051, -118.234757);
    var goldUniona = new google.maps.LatLng(34.060089, -118.233622);
    var goldUnionb = new google.maps.LatLng(34.062209, -118.236182);
    var goldChinatown = new google.maps.LatLng(34.063861, -118.235809);
    var goldChinatowna = new google.maps.LatLng(34.067977, -118.233910);
    var goldChinatownb = new google.maps.LatLng(34.071658, -118.226591);
    var goldChinatownc = new google.maps.LatLng(34.078599, -118.223541);
    var goldLincolnCypress = new google.maps.LatLng(34.081166, -118.220256);
    var goldHeritageSquare = new google.maps.LatLng(34.087479, -118.212954);
    var goldHeritageSquarea = new google.maps.LatLng(34.090127, -118.211302);
    var goldHeritageSquareb = new google.maps.LatLng(34.092979, -118.211399);
    var goldSouthwestMuseum = new google.maps.LatLng(34.098404, -118.206474);
    var goldSouthwestMuseuma = new google.maps.LatLng(34.099980, -118.204870);
    var goldSouthwestMuseumb = new google.maps.LatLng(34.104151, -118.204470);
    var goldSouthwestMuseumc = new google.maps.LatLng(34.106116, -118.202695);
    var goldHighlandPark = new google.maps.LatLng(34.111166, -118.192605);
    var goldHighlandParka = new google.maps.LatLng(34.112174, -118.189312);
    var goldHighlandParkb = new google.maps.LatLng(34.109961, -118.180116);
    var goldHighlandParkc = new google.maps.LatLng(34.111864, -118.171037);
    var goldHighlandParkd = new google.maps.LatLng(34.112756, -118.160881);
    var goldSouthPasadena = new google.maps.LatLng(34.115189, -118.157796);
    var goldSouthPasadenaA = new google.maps.LatLng(34.120827, -118.150928);
    var goldSouthPasadenaB = new google.maps.LatLng(34.124416, -118.150492);
    var goldSouthPasadenaC = new google.maps.LatLng(34.127066, -118.148018);
    var goldFillmore = new google.maps.LatLng(34.133474, -118.148193);
    var goldDelMar = new google.maps.LatLng(34.141808, -118.148251);
    var goldDelMara = new google.maps.LatLng(34.147106, -118.148153);
    var goldMemorialPark = new google.maps.LatLng(34.147835, -118.147727);
    var goldMemorialParka = new google.maps.LatLng(34.151769, -118.145666);
    var goldLake = new google.maps.LatLng(34.151812, -118.131591);
    var goldAllen = new google.maps.LatLng(34.152395, -118.113956);
    var goldAllena = new google.maps.LatLng(34.152467, -118.093468);
    var goldAllenb = new google.maps.LatLng(34.147965, -118.084938);
    var goldSierraMadreVilla = new google.maps.LatLng(34.147730, -118.081368);
    var goldSierraMadreVillaA = new google.maps.LatLng(34.148750, -118.040354);
    var goldArcadia = new google.maps.LatLng(34.142667, -118.029040);
    var goldArcadiaA = new google.maps.LatLng(34.137939, -118.021037);
    var goldMonrovia = new google.maps.LatLng(34.133050, -118.003233);
    var goldMonroviaA = new google.maps.LatLng(34.132335, -117.999374);
    var goldDuarteCityofHope = new google.maps.LatLng(34.132497, -117.967519);    
    var goldDuarteCityofHopea = new google.maps.LatLng(34.132442, -117.952715);
    var goldDuarteCityofHopeb = new google.maps.LatLng(34.128347, -117.939894);
    var goldIrwindale = new google.maps.LatLng(34.129033, -117.932434);
    var goldIrwindalea = new google.maps.LatLng(34.129809, -117.926867);
    var goldAzusaDowntown = new google.maps.LatLng(34.135768, -117.906787);
    var goldAzusaDowntowna = new google.maps.LatLng(34.136660, -117.902417);
    var goldAzusaDowntownb = new google.maps.LatLng(34.136541, -117.894688);
    var goldAPUCitrusCollege = new google.maps.LatLng(34.136797, -117.891637);
    


    var goldLinePath = new google.maps.Polyline({
    path: [goldAtlantic, goldEastLACivicCenter, goldMiravilla, goldMiravillaa, goldIndiana, 
            goldIndianaa, goldSoto, goldSotoa, goldMariachiPlaza, goldPicoAliso, goldPicoAlisoa,
            goldLittleTokyoArtsDistrict, goldLittleTokyoa, goldLittleTokyob, goldUnion, goldUniona,
            goldUnionb, goldChinatown, goldChinatowna, goldChinatownb, goldChinatownc,
            goldLincolnCypress, goldHeritageSquare, goldHeritageSquarea, goldHeritageSquareb,
            goldSouthwestMuseum, goldSouthwestMuseuma, goldSouthwestMuseumb, goldSouthwestMuseumc,
            goldHighlandPark, goldHighlandParka, goldHighlandParkb, goldHighlandParkc, 
            goldHighlandParkd, goldSouthPasadena, goldSouthPasadenaA, goldSouthPasadenaB,
            goldSouthPasadenaC, goldFillmore, goldDelMar, goldDelMara, goldMemorialPark, 
            goldMemorialParka, goldLake, goldAllen, goldAllena, goldAllenb, goldSierraMadreVilla,
            goldSierraMadreVillaA, goldArcadia, goldArcadiaA, goldMonrovia, goldMonroviaA, 
            goldDuarteCityofHope, goldDuarteCityofHopea, goldDuarteCityofHopeb, goldIrwindale,
            goldIrwindalea, goldAzusaDowntown, goldAzusaDowntowna, goldAzusaDowntownb,
            goldAPUCitrusCollege],


    strokeColor: "#F0AB00",
    strokeOpacity: 0.6,
    strokeWeight: 6
    });
    goldLinePath.setMap(map);

    var greenRedondoBeach = new google.maps.LatLng(33.894577, -118.369161);
    var greenDouglas = new google.maps.LatLng(33.905288, -118.383232);
    var greenDouglasa = new google.maps.LatLng(33.907906, -118.385297);
    var greenDouglasb = new google.maps.LatLng(33.915151, -118.385507);
    var greenElSegundo = new google.maps.LatLng(33.916187, -118.386777);
    var greenElSegundoa = new google.maps.LatLng(33.917019, -118.387490);
    var greenMariposa = new google.maps.LatLng(33.923288, -118.387579);
    var greenMariposaA = new google.maps.LatLng(33.926931, -118.387512);
    var greenMariposaB = new google.maps.LatLng(33.928132, -118.386487);
    var greenMariposaC = new google.maps.LatLng(33.929593, -118.382298);
    var greenAviationLAX = new google.maps.LatLng(33.929612, -118.377150);
    var greenAviationLAXa = new google.maps.LatLng(33.929643, -118.376136);
    var greenAviationLAXb = new google.maps.LatLng(33.929940, -118.374392);
    var greenAviationLAXc = new google.maps.LatLng(33.930044, -118.368240);
    var greenAviationLAXd = new google.maps.LatLng(33.933494, -118.355953);
    var greenAviationLAXe = new google.maps.LatLng(33.933649, -118.353648);
    var greenHawthroneLennox = new google.maps.LatLng(33.933416, -118.351733);
    var greenHawthroneLennoxa = new google.maps.LatLng(33.932176, -118.347652);
    var greenHawthroneLennoxb = new google.maps.LatLng(33.925613, -118.337243);
    var greenHawthroneLennoxc = new google.maps.LatLng(33.924863, -118.333802);
    var greenCrenshaw = new google.maps.LatLng(33.925231, -118.326407);
    var greenCrenshawa = new google.maps.LatLng(33.925464, -118.321448);
    var greenCrenshawb = new google.maps.LatLng(33.925500, -118.310623);
    var greenCrenshawc = new google.maps.LatLng(33.928437, -118.295711);
    var greenVermontAthens = new google.maps.LatLng(33.928660, -118.291698);
    var greenHarborFreeway = new google.maps.LatLng(33.928681, -118.281095);
    var greenHarborFreewaya = new google.maps.LatLng(33.928649, -118.277262);
    var greenHarborFreewayb = new google.maps.LatLng(33.927490, -118.270582);
    var greenAvalon = new google.maps.LatLng(33.927490, -118.265171);
    var greenAvalona = new google.maps.LatLng(33.927522, -118.258760);
    var greenAvalonb = new google.maps.LatLng(33.928612, -118.250109);
    var greenAvalonc = new google.maps.LatLng(33.928761, -118.246980);
    var greenWillowbrook = new google.maps.LatLng(33.928240, -118.238031);
    var greenWillowbrooka = new google.maps.LatLng(33.928018, -118.233320);
    var greenWillowbrookb = new google.maps.LatLng(33.929660, -118.224301);
    var greenWillowbrookc = new google.maps.LatLng(33.929556, -118.221846);
    var greenWillowbrookd = new google.maps.LatLng(33.928967, -118.219307);
    var greenLongBeachBoulevard = new google.maps.LatLng(33.925011, -118.210230);
    var greenLongBeachBoulevarda = new google.maps.LatLng(33.916693, -118.191206);
    var greenLongBeachBoulevardb = new google.maps.LatLng(33.911580, -118.176244);
    var greenLongBeachBoulevardc = new google.maps.LatLng(33.911098, -118.168754);
    var greenLongBeachBoulevardd = new google.maps.LatLng(33.912941, -118.148264);
    var greenLakewoodBoulevard = new google.maps.LatLng(33.913066, -118.140266);
    var greenNorwalk = new google.maps.LatLng(33.914116, -118.104085);

    


    var greenLinePath = new google.maps.Polyline({
    path:  [greenRedondoBeach, greenDouglas, greenDouglasa, greenDouglasb, greenElSegundo,
            greenElSegundoa, greenMariposa, greenMariposaA, greenMariposaB, greenMariposaC,
            greenAviationLAX, greenAviationLAXa, greenAviationLAXb, greenAviationLAXc,
            greenAviationLAXd, greenAviationLAXe, greenHawthroneLennox, greenHawthroneLennoxa,
            greenHawthroneLennoxb, greenHawthroneLennoxc, greenCrenshaw, greenCrenshawa,
            greenCrenshawb, greenCrenshawc, greenVermontAthens, greenHarborFreeway,
            greenHarborFreewaya, greenHarborFreewayb, greenAvalon, greenAvalona, greenAvalonb,
            greenAvalonc, greenWillowbrook, greenWillowbrooka, greenWillowbrookb, 
            greenWillowbrookc, greenWillowbrookd, greenLongBeachBoulevard, 
            greenLongBeachBoulevarda, greenLongBeachBoulevardb, greenLongBeachBoulevardc,
            greenLongBeachBoulevardd, greenLakewoodBoulevard, greenNorwalk],


    strokeColor: "#61C250",
    strokeOpacity: 0.6,
    strokeWeight: 6
    });
    greenLinePath.setMap(map);

// Set the map's style to the initial value of the selector.
var styleSelector = document.getElementById('style-selector');
    map.setOptions({styles: styles[styleSelector.value]});


// Closes initMap function (do not remove)

}

//click listener to populate myEvents
$(document).on("click",".stuff",function(){

    if($('#myEvent').is(':has(p)')){
        $("#myEvent").empty();
    }

    var current = $(this).html(); 
    var dateNew = "";

    var myEvent = $("<div>");
    myEvent.addClass("mEvnt");
    myEvent.html($(this).find('img').attr('station') + "<br>(<span>" + $(this).find('img').attr('line') + "</span>)"
    + "<hr>" + current);     

    dateNew = myEvent.find('#eventDate').text().replace("- ","<br>")

    myEvent.find('img').attr("width","100");
    myEvent.find('span').attr("style","font-size:8px;font-weight:bolder;vertical-align:middle;");
    myEvent.find('a').text("Purchase now!");
    myEvent.find('a').attr("style","font-size:10px")
    myEvent.find('.position').text("");
    myEvent.find('#eventDate').html(dateNew);
    $("#myEvent").prepend(myEvent);

});//modify for .stuff class

$("#clearMyEvents").on("click",function(){

    $("#myEvent").html("<p>Click and event to add it!</p>")
    
});

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