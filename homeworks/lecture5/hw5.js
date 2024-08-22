// change http request into promise-based function

const https = require('https');

// function httpsRequest(url) {
//   const options = {
//     headers: {
//       'User-Agent': 'request'
//     }
//   };
//   const request = https.get(url, options, response => {
//     if (response.statusCode !== 200) {
//       console.error(
//         `Did not get an OK from the server. Code: ${response.statusCode}`
//       );
//       response.resume();
//     }

//     let data = '';
//     response.on('data', chunk => {
//       data += chunk;
//     });
//     response.on('end', () => {
//       try {
//         // When the response body is complete, we can parse it and log it to the console
//         console.log(JSON.parse(data));
//       } catch (e) {
//         // If there is an error parsing JSON, log it to the console and throw the error
//         throw new Error(e.message);
//       }
//     });
//   });
//   request.on('error', err => {
//     console.error(
//       `Encountered an error trying to make a request: ${err.message}`
//     );
//   });
// }

function getJSON(url) {
  // implement your code here
  return new Promise((resolve, reject)=>{
    const request = new XMLHttpRequest()
    request.open('GET',url)
    request.setRequestHeader('User-Agent','request')
    request.onload = function(){
      try{
        if(this.status !==200){
          reject(`Did not get an OK from the server. Code: ${this.status}`)}
        else{
          resolve(JSON.parse(this.response))
        }
      }catch(e){
          reject(e.message)
      }finally{
        console("end")
      }
    }
    request.onerror = function(){
     reject(`Encountered an error trying to make a request: ${this.status}, ${this.statusText}`)  }
    request.send()
  })
}

getJSON('https://api.github.com/search/repositories?q=javascript')
  .then(response => console.log(response.items.length)) // output: 30
  .catch(err => console.log(err)); // if you remove options from https.get parameters, you might see an error
