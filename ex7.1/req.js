const fs = require('fs')
require('isomorphic-fetch');

const request = async () => {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const json = await response.json();
  console.log(json);
//    joke1 = json.value[0].joke;
//    document.getElementById("disp").innerHTML = joke1;
}
request();