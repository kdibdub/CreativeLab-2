const url = "https://www.amiiboapi.com/api/amiibo/?gameseries=Pokemon";
  fetch(url)
    .then(function(response) {
      return response.json();

    })
    .then(function(json) {
      let result = "";
      for(let i = 0; i < json.amiibo.length; i++) {
      result += '<div id=\"result-item\">';
      result += '<h2>Who\'s that Pokemon? It\'s ' + json.amiibo[i].name + "!</h2>";
      result += "<div class=\"img-item\"><img src=\"" + json.amiibo[i].image + "\"/></div>";
      result += '<p>Amiibo Type: ' + json.amiibo[i].type + ".</p>";
      result += '<p>Amiibo Series: ' + json.amiibo[i].amiiboSeries + ".</p>";
      result += "</div>";
      document.getElementById('amiibo').innerHTML = result;
    }
    });
