/*global $*/
// Run JQuery
$(document).ready(function(){
    // When search button is clicked run this code
    $('#wikiSearchButton').click(function(){
        // retrieves the search phrase the user submitted
        var wikiSearch = $('#wikiSearch').val();
        // mediaWiki API url with user submitted search parameter, requesting JSON format and using the callback to get past CORS
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + wikiSearch + "&format=json&callback=?";
    
        $.ajax({
            type:"GET",
            url:url,
            async:false,
            dataType: "json", 
            success: function(data){
                console.log(url);
            }, 
            error: function(errMessage){
                alert("Error" + errMessage);
            }
        })        
        
    });
});