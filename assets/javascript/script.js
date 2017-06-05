//button  id= searchBtnForSearch
//input  id="searchInput"
//button  id="searchBtn"
//button data-animal="tiger",lion,monkey
// picture goes here  id="placeForPic"


 $( document ).ready(function(){

	var Topics = ["monkey", "elephant","bird","cats", "dogs", "rabbit","chicken","turtle","goldfish","fish","frog","cow","pig"];

//------------------------------------------------------
	function button(){
		$("#buttonView").empty();
		for (var i=0; i<Topics.length; i++){
			var a = $("<button>");
			a.addClass("animal");
			a.addClass("btn btn-success");
			a.attr("id","searchBtn");
			a.attr("data-animal",Topics[i]);
			a.text(Topics[i]);
			$("#buttonView").append(a);

		}
	}

//------------------------------------------------------

	function dislpay(){
    var animal = $(this).attr("data-animal");
    	 		console.log("hello "+animal);
    var key = "dc6zaTOxFJmzC";
 	var queryURL = "http://api.giphy.com/v1/gifs/random?api_key="+key+"&limit=10&tag="+ animal;

 	$.ajax({
 		url: queryURL,
 		method: "GET"
 	}).done(function(response){
 		console.log(response);
 		var result = response.data;
 		for (var i=0; i<10; i++){
 			console.log("result");  //not working
 		var rating = response.rating;
 	//	var p = $("<p>").text("Rating: "+ result[i].rating);
		var p = $("<p>").text("Rating: "+ rating);
		
		var image= $("<img>");
		var imgUrl= result.fixed_height_small_url;
	//	image.attr("src", result[i].images.imgUrl);
		image.attr("src", imgUrl);
		image.attr("id", "image");

		var newImage = $("<div id = 'item'>");
			var ni = $("<div>");

		ni.append(p);
		ni.append(image);
		newImage.append(ni);
		$("#placeForPic").prepend(newImage);
 		};


	$("#image").on("click",function(){
	$("#image").animate({
    height: '350px',
    width: '350px'
	}); 
    });  

	});

};

	$(document).on("click", ".animal", dislpay);
	button();

});

