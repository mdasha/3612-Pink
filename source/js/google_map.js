	function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(59.936311,30.322823),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
		var myLatLng = new google.maps.LatLng(59.936311,30.322823);
		var beachMarker = new google.maps.Marker ({
			position: myLatLng,
			map: map
			});
      }
google.maps.event.addDomListener(window, 'load', initialize);
