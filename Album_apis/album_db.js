
//This is an example of a GET call to Rapid API to search for a certain song or Artist name
// const options = {
//   method: 'GET',
//   headers: {
//     'x-rapidapi-host': 'shazam.p.rapidapi.com',
//     'X-RapidAPI-Key': '2900b89c69mshc8728a11ce7dfe0p1261e1jsneac4a5f79fc6'
//   }
// };

// fetch('https://shazam.p.rapidapi.com/search', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

async function fetchData() {
	try {

		const collection1 = document.getElementById('collection1').value.toLowerCase();
		const response = await fetch(`https://shazam.p.rapidapi.com/search/${collection1}`);



		if (!response.ok) {
			throw new Error('Cannot fetch resources');
		}

		const data = await response.json();

		console.log(data);



	} catch (error) {
		console.log(error);
	}
}


//  // This is an example of a GET Artist call to Rapid API to search 
//  // for a certain artist with their list of albums (adamid)
// const options_artist = {
//   method: 'GET',
//   headers: {
//     'x-rapidapi-host': 'shazam.p.rapidapi.com',
//     'x-rapidapi-key': '2900b89c69mshc8728a11ce7dfe0p1261e1jsneac4a5f79fc6'
//   }
// };

// fetch('https://shazam.p.rapidapi.com/artists/get-details', options_artist)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

  
//  // This is an example of a GET Album call to Rapid API to search for the 
//  // specified album from the given id value from Artist GET Call
// const options_album = {
//   method: 'GET',
//   headers: {
//     'x-rapidapi-host': 'shazam.p.rapidapi.com',
//     'x-rapidapi-key': '2900b89c69mshc8728a11ce7dfe0p1261e1jsneac4a5f79fc6'
//   }
// };

// fetch('https://shazam.p.rapidapi.com/albums/get-details', optiooptions_albumns)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));