
var apiKey = "1b18ce13c84e21faafb19c931bb29331";
var savedSearches = [];

// make list of previously searched cities
var searchHistoryList = function (cityName) {
    $('.past-search:contains("' + cityName + '")').remove();

    // create entry with city name
    var searchHistoryEntry = $("<p>");
    searchHistoryEntry.addClass("past-search");
    searchHistoryEntry.text(cityName);

