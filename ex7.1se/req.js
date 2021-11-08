const request = require('request');

const chuck=async()=>{
  request('https://api.chucknorris.io/jokes/random',(error,response)=>{
    const data = JSON.parse(response.body)
    console.log(data.value);
  })
}
chuck()