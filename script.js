/*global today*/

document.getElementById('wikiSearch').addEventListener('click', loadWikiSearch);

// Load Daily Bitcoin Data
function loadWikiSearch() {
    
    let xhr = new XMLHttpRequest();

    xhr.open('GET', "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=USD&apikey=JCQV2KWHYVU535I7", true);
    
    xhr.onload = function() {
        if (this.status == 200) {
            let wikiData = JSON.parse(this.responseText);
            
            // parsing through data to get what i need
            let name = wikiData["Meta Data"]["3. Digital Currency Name"];
        
            // build the html to display the parsed data on webpage
            let output = '<div class="user">' + 
                        '<ul>' +
                        '<li style="font-size: 30px">' + '<strong>' + name + '</strong>' + '</li>' +
                        '<li>Daily Open: $' + open + '</li>' +
                        '<li>Daily High: $' + high + '</li>' + 
                        '<li>Daily Low: $' + low + '</li>' + 
                        '<li>Daily Close: $' + close + '</li>' + 
                        '<li>Daily Volume: $' + volume + '</li>' + 
                        '<li>Daily Marketcap: $' + marketcap + '</li>' + 
                        '<br>' +
                        '<li><img src="https://images.pexels.com/photos/315788/pexels-photo-315788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100"</li>' +
                        '</ul>' +
                         '</div>';
            
            document.getElementById('dataDisplay').innerHTML = output;
        }    
    };
xhr.send();        
}   