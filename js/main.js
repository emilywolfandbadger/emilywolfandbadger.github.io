var database = firebase.database();

//console.log(firebase.database());

function initMap(){

	var map = new google.maps.Map(document.getElementById("map"), {

		center: {lat: 40.8054491, lng: -73.9654415},
		zoom: 10
		scrollwheel: false
	});

	var marker = new google.maps.Marker({
		position: {lat: 40.8054491, lng: -73.9654415},
		map: map,
		title: "Location of Monk's Cafe"
	});
}

var reservationData = {};

$("#resv_date li").on("click", function(){


	var day = $(this).val();
	reservationData.day = day;

});

$("#resv_form").on("submit", function(e){

	e.preventDefault();

	var name = $("#resv_name").val();
	reservationData.name = name;

	var reservationsRef = database.ref("reservations");

	reservationsRef.push(reservationData);

});

console.log(reservationData);
