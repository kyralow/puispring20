

            // Initialize and add the map
            function initMap() {
              // The location of Uluru
              var rest = {lat: 40.724581, lng:  -74.002559};
              // The map, centered at Uluru
              var map = new google.maps.Map(
                  document.getElementById('map'), {zoom: 10, center: uluru});
              // The marker, positioned at Uluru
              var marker = new google.maps.Marker({position: rest, map: map});
            }
 
                