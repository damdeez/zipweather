$(function () {
    $('#subbtn').on('click', function (e) {
    	e.preventDefault();
    	var textfield = document.getElementById('textfield').value;
        var zipURLjson = 'http://api.openweathermap.org/data/2.5/weather?zip=' + textfield +',us&APPID=7c81a45ff51330c7cc25bc7f027131e8&units=imperial&callback=?';
        if (textfield.length < 4) {
	    		alert("You must put in a 5-digit zip code");
	    		return;
	    	}

	    $.getJSON(zipURLjson, function (data) {
	    	var cityName = data.name,
	    		weatherConditions = data.weather[0].description,
	    		//iconConditions = data.weather[0].icon,
	    		temperature = Math.round(data.main.temp);
	    	weatherConditions.toLowerCase();

	    	$.each(data, function () {
	    		$('#weather-result').text('Looks like the weather in ' +  cityName + ' will consist of ' + weatherConditions + ' with the current temperature of ' + temperature + ' degrees.');
	    	});
	    	function zipresponse () {
		        $('#input-result').text('You entered the zipcode ' + textfield + ', which is in ' + cityName);
		    };
	        zipresponse(textfield);

	    })
	    .error(function () {
	    	$('#error').text('Sorry, something went wrong!');
	    });
    	
	    /*$.ajax({
	    	url: zipURLjson,
	    	dataType: 'jsonp',
	    	data: data

	    	var cityName = data.name,
	    		weatherConditions = data.weather[0].description,
	    		temperature = Math.round(data.main.temp);
	    	
	    	weatherConditions.toLowerCase();
	    })
	    .done(function() {
	    	$('#weather-result').html("Looks like the weather in <i>" + cityName + "</i> will consist of <i>" + weatherConditions + "</i> with the current temperature of <b>" + temperature + "&deg;</b>");
	    })
	    .fail(function() {
	    	$('#result').html("Sorry, something went horribly wrong!");
	    });
	    function zipresponse (zip) {
		        $('#result').html('You entered the zipcode ' + textfield + ', which is in ' + cityName);
		    };
	        zipresponse(textfield);
	    */
    });

});