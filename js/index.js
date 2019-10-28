$(document).ready(function () {
  $("#submit").click( function(){
	   $("#cName").html("");
	   $("#region").html("");
	   $("#capital").html("");
	   $("#longitude").html("");
	   $("#latitude").html("");
    
 
    
   
    var code = $("#input").val();
	if (code.length > 3 || code.length < 2) {
		return $("#cName").html("Country Code Must be 2 or 3 Letters Long");
	}
	if (code.match(/[^a-zA-Z]+/) ){
		return $("#cName").html("Country Codes Only Contain letters");
		 
	}
	
       var url= "http://api.worldbank.org/v2/country/" + code + "?format=json";
    
    
   $.getJSON(url, function(data){
     if  (data[1] == null){
		 $("#cName").html("Invalid Country Code");
	 }
     console.log(data);
      $("#cName").html(data[1][0].name);
	   $("#region").html("Region: " + data[1][0].region.value);
	   $("#capital").html("Capital City: " + data[1][0].capitalCity);
	   $("#longitude").html("Longitude: " + data[1][0].longitude);
	   $("#latitude").html("Latitude: " + data[1][0].latitude);
                   
     
    }) 
	          
   
  })
  
})