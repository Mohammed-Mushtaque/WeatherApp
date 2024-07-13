// let btn = document.querySelector("button");
let form = document.querySelector('form');
let input = document.querySelector("input");
let temp = document.querySelector('.temp');
let place = document.querySelector('.time_location p');
let timeDate = document.querySelector('.time_location span');
let conditionText = document.querySelector('.weather_condition span');
let conditionImage = document.querySelector('.weather_condition img');

// btn.addEventListener('click', function(){
//     let value = input.value;
//     console.log(value);
// })


form.addEventListener('submit', function(e){
  e.preventDefault();  //it will prevent from page refresh after submitting the form.
  let value = input.value;
  console.log(value);

  let apiURL = 'http://api.weatherapi.com/v1/current.json?key=8c1cfb781221417292d121700231912&q='+value+'&aqi=no';

  
  // Make a GET request
  fetch(apiURL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    temp.innerText = data.current.temp_c;
    place.innerText = data.location.name;
    timeDate.innerText = data.location.localtime;
    conditionText.innerText = data.current.condition.text;
    let imgSrc = data.current.condition.icon;
    // console.log(imgSrc.substring(2));
    conditionImage.src = "https://"+imgSrc.substring(2);
  })
  .catch(error => {
    alert("Sorry, for the incovenience, please try again with correct name");
    console.error('Error:', error);
  });
}) 





