$(document).ready(function () {
  $("#submit").click( function(){
    
 
    
   
    var code = $("#input").val();
       var url= "http://api.worldbank.org/v2/country/" + code ;
    var testurl= "api.worldbank.org/v2/country/br?format=json";
    $("#cName").html(code);
     console.log("test");
   $.getJSON(testurl, function(data){
     console.log("test2");
     console.log(data);
      $("#cName").html(data.name);
                   
     
    }) 
                 
   
  })
  
})