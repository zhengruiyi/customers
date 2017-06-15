// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element

(function () {
  'use strict';
  // Your Code Goes Here
  for(var i = 0; i < 12; i++){
    fetch('https://randomuser.me/api/')
    .then(function(response){
      return response.json()
    })
    .then(function(json){
      //console.log(json)

      const firstName = json.results[0].name.first;
      const lastName = json.results[0].name.last;
      //console.log(firstName + " " + lastName)
      const email = json.results[0].email;
      // console.log(email);
      const locationStreet = json.results[0].location.street;
      const locationCity = json.results[0].location.city;
      const locationState = json.results[0].location.state;
      // console.log(locationState);
      const locationPostcode = json.results[0].location.postcode;
      const phone = json.results[0].phone;
      const picture = json.results[0].picture.large;
      // console.log(phone);
      const html = `

        <figure class="customer">
          <img src="${picture}" alt="">
          <h4 class="full-name">${firstName} ${lastName}</h4>
          <figcaption class="email">${email}</figcaption>
          <figcaption class="street">${locationStreet}</figcaption>
          <figcaption class="city-state-postcode">${locationCity}. ${locationState} ${locationPostcode}</figcaption>
          <figcaption class="phone">${phone}</figcaption>
        </figure>

      `
      document.querySelector(".customers").insertAdjacentHTML('afterbegin', html)
    })
  }

})()



/*
function fetchPerson() {

  'use strict';
  // Your Code Goes Here
    fetch('https://randomuser.me/api/')
    .then(function(response){
      return response.json()
    })
    .then(function(json){
      console.log("data", json)
    })
    // if (!json.name){
    //   return;
    // }
  };

fetchPerson() */
