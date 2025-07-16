//This is an example of a GET call to Rapid API to search for a certain Song
// const options = {
//   method: 'GET',
//   headers: {
//     'x-rapidapi-host': 'shazam.p.rapidapi.com',
//     'X-RapidAPI-Key': '2900b89c69mshc8728a11ce7dfe0p1261e1jsneac4a5f79fc6'
//   }
// };

// fetch('https://shazam.p.rapidapi.com/search?term=', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

async function fetchData() {
  try {
    const collection1 = document.getElementById("collection1").value.toLowerCase();

      const options = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "shazam-api6.p.rapidapi.com",
        "x-rapidapi-key": "2900b89c69mshc8728a11ce7dfe0p1261e1jsneac4a5f79fc6",
      },
    };

    const response = await fetch(
      `https://shazam-api6.p.rapidapi.com/shazam/search_track/${collection1}`,
      options
    );

    if (!response.adamid) {
      throw new Error("Cannot fetch resources");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// This is an example of a GET Artist call to Rapid API to search
// for a certain artist with their Artist_id (adamid)
// const options = {
//   method: 'GET',
//   headers: {
//     'x-rapidapi-host': 'shazam-api6.p.rapidapi.com',
//     'x-rapidapi-key': '2900b89c69mshc8728a11ce7dfe0p1261e1jsneac4a5f79fc6'
//   }
// };

// fetch('https://shazam-api6.p.rapidapi.com/shazam/search_artist/?query=', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// This is an example of a GET Artist details call to Rapid API to search for the
// list albums from the given Artist_id(adamid) value from Artist GET Call from there you will get a list of albums
// const url = 'https://shazam-api6.p.rapidapi.com/shazam/about_artist';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '2900b89c69mshc8728a11ce7dfe0p1261e1jsneac4a5f79fc6',
// 		'x-rapidapi-host': 'shazam-api6.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
