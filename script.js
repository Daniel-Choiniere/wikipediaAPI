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
                // get heading ->  console.log(data[1][0]);
                // get description ->  console.log(data[2][0]);
                // get link ->  console.log(data[3][0]);
                // loop through the search results and build up a list with the title being a link to the wikipedia page. Also displays a paragraph with a short descrition of the search result. 
                for (var i=0; i<data[1].length; i++) {
                    $('#dataDisplay').append("<li><a href= " + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
                    
                }
                
            }, 
            error: function(errMessage){
                alert("Error" + errMessage);
            }
        }) ;       
    });
});