var database = firebase.database();

//console.log(firebase.database());

function initMap(){

	var map = new google.maps.Map(document.getElementById("map"), {

		center: {lat: 40.8054491, lng: -73.9654415},
		zoom: 10
	});

	var marker = new google.maps.Marker({
		position: {lat: 40.8054491, lng: -73.9654415},
		map: map,
		title: "Location of Mike's Cafe"
	});
}

var reservationData = {};

$("#resv_date").next("ul").children("li").on("click", function(){


	var day = $(this).text();

	reservationData.day = day;

});

$("#resv_form").on("submit", function(e){

	e.preventDefault();

	

	var name = $("#resv_name").val();
	reservationData.name = name;

	var reservationsRef = database.ref("reservations");

	reservationsRef.push(reservationData);

	

});

//console.log(reservationData);

function getReservations(){

	database.ref("reservations").on("child_added", function(snapshot, prevChildKey){

		var newReservation = snapshot.val();

		var source = $("#reservation-template").html();
		var template = Handlebars.compile(source);
		var data = {name: newReservation.name,
					day: newReservation.day};
		var newReservationHTML = template(data);
		
		$("#resv_list").append(newReservationHTML);	

	
	});
};

$("document").ready(function(){

	$("#resv_form").validate({
		rules: {
			resv_name: {
				required:true,
				minlength: 1
			},
			resv_date: {
				required:true
			}
		}
	});
	
			getReservations();



});




