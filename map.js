$(window).load(function() {
    var markers = new Array();
    var iconSrc = {};
    iconSrc['Dining'] = '/wp-content/themes/jacksonpark/images/neighborhood/dining.png';
    iconSrc['Markets'] = '/wp-content/themes/jacksonpark/images/neighborhood/markets.png';
    iconSrc['Hotels'] = '/wp-content/themes/jacksonpark/images/neighborhood/hotels.png';
    iconSrc['Education & Culture'] = '/wp-content/themes/jacksonpark/images/neighborhood/cultural.png';
    iconSrc['Banks'] = '/wp-content/themes/jacksonpark/images/neighborhood/banks.png';
    var locations = [
        ["Birch Coffee", "40-37 23rd St, Long Island City, NY 11101", "Dining", 40.7534129, -73.9402717, 1],
        ["The Baroness", "4126 Crescent St, Long Island City, NY 11101", "Dining", 40.7517006, -73.9399369, 1],
        ["Gordo�䏭 Cantina", "24-11 Bridge Plaza N, Long Island City, NY 11101", "Dining", 40.7512107, -73.9407816, 1],
        ["Commissary Market", "25-15 Queens Plaza N, Long Island City, NY 11101", "Markets", 40.7508676, -73.9395361, 1],
        ["Queens & Paupers", "27-8 Queens Plaza S, Long Island City, NY 11101", "Dining", 40.750097, -73.9396479, 1],
        ["Triple Shot World Atlas", "2706 Queens Plaza S, Long Island City, NY 11101", "Dining", 40.750011, -73.939739, 1],
        ["Chickpea", "42-09 28th St, Long Island City, NY 11101", "Dining", 40.7494011, -73.9389438, 1],
        ["The Beast Next Door Cafe & Bar", "42-51 27th St, Long Island City, NY 11101", "Dining", 40.7488628, -73.9407778, 1],
        ["M. Wells Steakhouse", "43-15 Crescent St, Long Island City, NY 11101", "Dining", 40.7484929, -73.942296, 1],
        ["Toby�䏭 Estate Coffee", "26-25 Jackson Ave, Long Island City, NY 11101", "Dining", 40.747696, -73.941604, 1],
        ["Levante", "26-21 Jackson Avenue, Long Island City, NY 11101", "Dining", 40.7476347, -73.9417521, 1],
        ["Dutch Kills Bar", "27-24 Jackson Ave, Long Island City, NY 11101", "Dining", 40.7476172, -73.9401446, 1],
        ["The Burger Garage", "25-36 Jackson Ave, Long Island City, NY 11101", "Dining", 40.7468029, -73.9424434, 1],
        ["Starbucks", "25-01 Jackson Ave Long Island City, NY 11101", "Dining", 40.7472594, -73.9443527, 1],
        ["Brooks 1890", "2428 Jackson Ave, Long Island City, NY 11101", "Dining", 40.7462698, -73.9441073, 1],
        ["Il Falco", "21-50 44th Dr, Long Island City, NY 11101", "Dining", 40.7474998, -73.9455531, 1],
        ["LIC Market", "21-52 44th Dr, Long Island City, NY 11101", "Markets", 40.747459, -73.94552, 1],
        ["The Inkan Restaurant", "4502 23rd St, Long Island City, NY 11101", "Dining", 40.7468529, -73.9455877, 1],
        ["M. Wells Dinette", "MoMA PS1, 22-25 Jackson Ave, Long Island City, NY 11101", "Dining", 40.7454901, -73.9473572, 1],
        ["BIA Restaurant & Bar", "23-10 Jackson Ave, Long Island City, NY 11101", "Dining", 40.7458948, -73.9453142, 1],
        ["Gaw Gai Restaurant", "23-06 Jackson Ave, Long Island City, NY 11101", "Dining", 40.7457108, -73.9453483, 1],
        ["Food Cellar & Co. Market", "4-85 47th Rd, Long Island City, NY 11101", "Markets", 40.7456508, -73.9566041, 1],
        ["Cranberry", "28-2 42nd Rd, Long Island City, NY 11101", "Markets", 40.7489525, -73.9396382, 1],
        ["Chase Bank", "25-15 Queens Plaza N, Long Island City, NY 11101", "Banks", 40.7508676, -73.9395361, 1],
        ["Astoria Bank", "26-26 Jackson Ave, Long Island City, NY 11101", "Banks", 40.7472699, -73.9411425, 1],
        ["Bank of America", "24-10 Jackson Ave, Long Island City, NY 11101", "Banks", 40.7460155, -73.944526, 1],
        ["Citibank", "1 Ct Square W, Long Island City, NY 11120", "Banks", 40.7470143, -73.9438751, 1],
        ["Santander Bank", "24-29 Jackson Ave, Long Island City, NY 11101", "Banks", 40.746598, -73.944532, 1],
        ["TD Bank", "21-31 46th Ave, Long Island City, NY 11101", "Banks", 40.7459624, -73.9468696, 1],
        ["Country Inn & Suites", "40-34 Crescent St, Long Island City, NY 11101", "Hotels", 40.7527349, -73.9389672, 1],
        ["Comfort Inn", "42-24 Crescent St, Long Island City, NY 11101", "Hotels", 40.7500425, -73.9414434, 1],
        ["LIC Marriott & Residences", "43-10 Crescent Street, Long Island City, NY 11101", "Hotels", 40.7487167, -73.9424822, 1],
        ["Hilton Garden Inn", "29-21 41st Ave, Long Island City, NY 11101", "Hotels", 40.7502177, -73.9368844, 1],
        ["Q4 Hotel", "29-09 Queens Plaza N, Long Island City, NY 11101", "Hotels", 40.7499514, -73.9374944, 1],
        ["Courtyard by Marriott", "29-15 Queens Plaza N, Long Island City, NY 11101", "Hotels", 40.749998, -73.937042, 1],
        ["Aloft Hotel", "27-45 Jackson Ave, Long Island City, NY 11101", "Hotels", 40.748496, -73.93985, 1],
        ["Brooklyn Boulders", "23-10 41st Ave, Long Island City, NY 11101", "Education & Culture", 40.7526871, -73.9403643, 1],
        ["Bright Horizons at Long Island City", "42-09 28th St, Long Island City, NY 11101", "Education & Culture", 40.7494011, -73.9389438, 1],
        ["CUNY Law School", "2 Ct Square W, Long Island City, NY 11101", "Education & Culture", 40.7478922, -73.9436757, 1],
        ["Montessori Kids of Long Island City", "5 Ct Square W, Long Island City, NY 11101", "Education & Culture", 40.74663, -73.942833, 1],
        ["Yoga Studio 6 LIC", "27-28 Thomson Ave Work Studio # 6, (1st Floor), Long Island City, NY 11101", "Education & Culture", 40.745759, -73.941765, 1],
        ["MoMA PS1", "22-25 Jackson Ave, Long Island City, NY 11101", "Education & Culture", 40.7455325, -73.9473422, 1],
        ["Chipotle", "26-14 Jackson Ave, Queens, NY 11101", "Dining", 40.747071, -73.943816, 1],
        ["Starbucks", "26-14 Jackson Ave, Long Island City, NY 11101", "Dining", 40.747142, -73.94404, 1],
        ["Sapps", "27-26 Jackson Ave, Long Island City, NY 11101", "Markets", 40.7476259, -73.940084, 15, 1],
        ["Etto Espresso Bar", "42-77 Hunter St, Long Island City, NY 11101", "Dining", 40.748378, -73.942757, 1],
        ["Olives Organic Market", "4237 27th St, Long Island City, NY 11101", "Markets", 40.7492016, -73.9427512, 1],
        ["PS 384Q", "27-35 Jackson Avenue, Long Island City, NY 11101", "Education & Culture", 40.748059, -73.940252, 1],
    ];
    var originalStyle = [{ "elementType": "geometry", "stylers": [{ "color": "#242f3e" }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#746855" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "color": "#242f3e" }] }, { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#263c3f" }] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#6b9a76" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#38414e" }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#212a37" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#9ca5b3" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#746855" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#1f2835" }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#f3d19c" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#2f3948" }] }, { "featureType": "transit.station", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#17263c" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#515c6d" }] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "color": "#17263c" }] }];
    var subwayStyle = [{ "elementType": "geometry", "stylers": [{ "color": "#242f3e" }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#746855" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "color": "#242f3e" }] }, { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#263c3f" }] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#6b9a76" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#38414e" }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#212a37" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#9ca5b3" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#746855" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#1f2835" }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#f3d19c" }] }, { "featureType": "transit", "stylers": [{ "visibility": "on" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#2f3948" }] }, { "featureType": "transit", "elementType": "geometry.fill", "stylers": [{ "color": "#ffeb3b" }, { "visibility": "on" }] }, { "featureType": "transit.station", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#17263c" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#515c6d" }] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "color": "#17263c" }] }];
    var map = new google.maps.Map(document.getElementById('map'), { zoom: 16, scrollwheel: false, center: new google.maps.LatLng(40.748496, -73.93985), mapTypeControlOptions: { mapTypeIds: [] }, disableDefaultUI: true, mapTypeId: google.maps.MapTypeId.ROADMAP, styles: originalStyle });
    var marker = new google.maps.Marker({ position: new google.maps.LatLng(40.748092, -73.937986), map: map, icon: '/wp-content/themes/jacksonpark/images/neighborhood/jp.png' });
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    for (i = 0; i < locations.length; i++) { marker = new google.maps.Marker({ position: new google.maps.LatLng(locations[i][3], locations[i][4]), map: map, icon: iconSrc[locations[i][2]] });
        markers.push(marker);
        google.maps.event.addListener(marker, 'click', (function(marker, i) { return function() { infowindow.setContent("<h4>" + locations[i][0] + "</h4>" + "<h5>" + locations[i][1] + "</h5>");
                infowindow.open(map, marker); } })(marker, i)); }

    function CustomZoomControl(controlDiv, map) { var controlUIzoomIn = document.getElementById('map-zoom-in'),
            controlUIzoomOut = document.getElementById('map-zoom-out');
        controlDiv.appendChild(controlUIzoomIn);
        controlDiv.appendChild(controlUIzoomOut);
        google.maps.event.addDomListener(controlUIzoomIn, 'click', function() { map.setZoom(map.getZoom() + 1) });
        google.maps.event.addDomListener(controlUIzoomOut, 'click', function() { map.setZoom(map.getZoom() - 1) }); }
    var zoomControlDiv = document.createElement('div');
    var zoomControl = new CustomZoomControl(zoomControlDiv, map);
    map.controls[google.maps.ControlPosition.BOTTOM_RIGHT].push(zoomControlDiv);

    function show(category) { for (var i = 0; i < locations.length; i++) { if (locations[i][2] == category) { markers[i].setVisible(true); } } }

    function hide(category) { for (var i = 0; i < locations.length; i++) { if (locations[i][2] == category) { markers[i].setVisible(false); } } }
    $(".checkbox").click(function() { var cat = $(this).attr("value"); if ($(this).is(":checked")) { show(cat); } else { hide(cat); } });
    $("#Subway").click(function() { if ($(this).is(":checked")) { map.setOptions({ styles: subwayStyle }); } else { map.setOptions({ styles: originalStyle }); } });
});