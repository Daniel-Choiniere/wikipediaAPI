/*global $*/

// allows the user to hit enter key on keyboard instead of having to press the submit button 
var input = document.getElementById("wikiSearch");
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        $("#wikiSearchButton").click();
    }
});

// Run JQuery
$(document).ready(function() {
    // When search button is clicked run this code
    $('#wikiSearchButton').click(function() {
        // retrieves the search phrase the user submitted
        var wikiSearch = $('#wikiSearch').val();
        // mediaWiki API url with user submitted search parameter, requesting JSON format and using the callback to get past CORS
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + wikiSearch + "&format=json&callback=?";

        $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: "json",
            success: function(data) {
                // clears the search box of previous query
                $('#dataDisplay, #titleDisplay').html('');
                // loop through the search results and build up a list with the title being a link to the wikipedia page. Also displays a paragraph with a short descrition of the search result. 
                $('#titleDisplay').append("Search Results");
                for (var i = 0; i < data[1].length; i++) {
                    $('#dataDisplay').append("<li class='list'><a href= " + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
                }
            },
            error: function(errMessage) {
                alert("Error" + errMessage);
            }
        });
    });
});