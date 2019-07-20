function initMap(){

	var map = new google.maps.Map(document.getElementById('map'), {

		center: {lat: 35.681290, lng: 139.754848},
		zoom: 9
		zoomControl: false,
		fullScreenControl: true,
		styles: styles
	});

}

var styles = [

{

	stylers: [
{ hue: "#00ffe6" },
{ saturation: -20 }
	]
},{
	featureType: "road",
	elementType: "geometry",
	stylers: [
		{ lightness: 100 },
		{ visibility: "simplified" }
	]

},{

	featureType: "road",
	elementType: "labels",
	stylers: [
		{ visibility: "off" }
	]
}
];
