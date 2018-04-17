var TwitterPackage = require('twitter');

var secret =  require('./secret.json');

var Twitter = new TwitterPackage(secret);

// Twitter.post('statuses/update', {status:`I'm posting from my server!`}, (error, tweet, response) => {
// if(error){

//     console.log(error);
// }
// console.log(tweet);
// console.log(response);
// });

Twitter.stream('statuses/filter', {track:'#UhuruLondonVisit'}, function(stream){
    stream.on('data', function(tweet){
        console.log(tweet.text);
    });

    stream.on('error', function(error){
        console.log(error);
    });
})