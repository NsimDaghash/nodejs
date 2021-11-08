const got = require('got');

const chuck = async ()=>{
  got.get('https://api.chucknorris.io/jokes/random',{responseType : 'json'})
  .then(res=>{
    console.log(res.data.value);;
  })
  .catch(err=> {
    console.log('Error :',err.message);
  })
}

chuck()
