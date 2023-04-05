$(document).ready(function () {
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "93d2ecca4dmsh9899a76c12b88aap1277ebjsna0cd574d5ded",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (response) {
    var cloud_pct = response.cloud_pct;
    var feels_like = response.feels_like;
    var humidity = response.humidity;
    var max_temp = response.max_temp;
    var min_temp = response.min_temp;
    var sunrise = response.sunrise;
    var sunset = response.sunset;
    var temp = response.temp;
    var wind_degrees = response.wind_degrees;
    var wind_speed = response.wind_speed;
    $('#cloud').html(cloud_pct);
    $('#feels').html(feels_like);
    $('#humidity').html(humidity);
    $('#max_temp').html(max_temp);
    $('#min_temp').html(min_temp);
    $('#sunrise').html(sunrise);
    $('#sunset').html(sunset);
    $('#temp').html(temp);
    $('#wind_degree').html(wind_degrees);
    $('#win_speed').html(wind_speed);
  });
  $('#click').click(function(){
    $('.weather').hide();
    var city=$('#city').val();
    const weather = {
        async: true,
        crossDomain: true,
        url: "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "93d2ecca4dmsh9899a76c12b88aap1277ebjsna0cd574d5ded",
          "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
        },
      };
      if(city==""){
        console.log("no data found");
      }
      else{
        $.ajax(weather).done(function (response) {
            var cloud = response.cloud_pct;
            var feels = response.feels_like;
            var hum = response.humidity;
            var m_temp = response.max_temp;
            var min_tem = response.min_temp;
            var sunris = response.sunrise;
            var sunse = response.sunset;
            var tem = response.temp;
            var wind_degree = response.wind_degrees;
            var wind_sp = response.wind_speed;
            $('#search_cloud').html(cloud);
            $('#search_feels').html(feels);
            $('#search_humidity').html(hum);
            $('#search_max_temp').html(m_temp);
            $('#search_min_temp').html(min_tem);
            $('#search_sunrise').html(sunris);
            $('#search_sunset').html(sunse);
            $('#search_temp').html(tem);
            $('#search_wind_degree').html(wind_degree);
            $('#search_win_speed').html(wind_sp);
            $('#search_city').html(city);
          });
      }
      $('.search_weather').show();
  })
});
