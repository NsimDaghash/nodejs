
const axios = require('axios').default;
const chuck = async ()=>{
  axios.get('https://api.chucknorris.io/jokes/random')
  .then(res=>{
    console.log(res.data.value);;
  })
  .catch(err=> {
    console.log('Error :',err.message);
  })
}
chuck()