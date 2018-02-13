function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('timeDisplay').innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 500);
}

function quote(){
    quotesGenerate();
}

setTimeout(quote, 0);

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}


$.get("http://ipinfo.io", function (response) {
    $("#address").html(response.city + ", " + response.region);
}, "jsonp");

var queryURL = "https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202487889&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys/";
$.getJSON(queryURL, function (data) {
  var getTemperature = data.query.results.channel.item.condition.temp  
  $('#output').append(getTemperature).append('<sup>o</sup>F');
})

