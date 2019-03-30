/*global fetch*/



document.getElementById("wikiSearch").addEventListener("click", makeGETRequest);

const ul = document.getElementById('results'); // Get the list where we will place our results
var url = "https://en.wikipedia.org/w/api.php"; // Get 10 random results

// ?action=query&list=search&srsearch=Abe%20Link&format=jsonfm

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}
function makeGETRequest() {
    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            let searchResults = data.results;
            return searchResults.map(function(author) {
                let li = createNode('li'),
                    img = createNode('img'),
                    span = createNode('span');
                img.src = author.picture.medium;
                span.innerHTML = `${author.name.first} ${author.name.last}`;
                append(li, img);
                append(li, span);
                append(ul, li);
            })
        })
        .catch(function(error) {
            console.log(error);
        });
}