const axios = require('axios').default;
const chuckNorris = ()=>{
    axios.get ('https://api.chucknorris.io/jokes/random')
    .then(function(response){
        console.log(response.data.value);
    })
    .catch(function(error){
        console.log(error);
    })
}

chuckNorris()
