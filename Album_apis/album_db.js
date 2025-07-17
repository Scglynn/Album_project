//This is an example of a GET call to Rapid API to search for a certain Song
//fetchData();

async function fetchData() {
  try {
    //const collection1 = 'paint%20it%20black';
    let collection1 = document.getElementById('collection1').value.toLowerCase();
    let collection2 = document.getElementById('collection2').value.toLowerCase();
    let collection3 = document.getElementById('collection3').value;

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "shazam-api6.p.rapidapi.com",
        "x-rapidapi-key": "968c1290efmsh9dbe73847996103p17e33bjsnfc07ebe98661",
      },
    };

     fetch(
      'https://shazam-api6.p.rapidapi.com/shazam/search_track/?query=' + collection1,
      options
    ).then(response => response.json())   
    .then(response => console.log(response))

    fetch(
      'https://shazam-api6.p.rapidapi.com/shazam/search_artist/?query=' + collection2,
      options
    ).then(response2 => response2.json())   
    .then(response2 => console.log(response2))

    fetch(
      'https://shazam-api6.p.rapidapi.com/shazam/about_artist?artist_id=' + collection3,
      options
    ).then(response3 => response3.json())   
    .then(response3 => console.log(response3))

  } catch (error) {
    console.log(error);
  }
}
