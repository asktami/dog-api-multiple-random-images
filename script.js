'use strict';

function getDogImages(quantity) {
	let url = `https://dog.ceo/api/breeds/image/random/${quantity}`;

  fetch(url)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => $('.error').html('<h2>Something went wrong. Try again later.</h2>'));
}

function formatImages(imageArray) {
	let output = '<h2>Look at these dogs!</h2>';
	for (let i = 0; i < imageArray.length; i++){
		output += `<img src="${imageArray[i]}" class="results-img">`;
	};
	
	return output;
}

function displayResults(responseJson) {
  console.log(responseJson);
  ///replace the existing image placeholder div contents
  
  // response.message is an array of images
  // use a function to loop thru this array and create a list of images
  let imageArray = responseJson.message;
  $('.results-img').html(formatImages(imageArray));
  
  //display the results section
  $('.results').removeClass('hidden');
}


function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    
    // capture user entered quantity
    let quantity = $('#quantity').val();
    
    getDogImages(quantity);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});