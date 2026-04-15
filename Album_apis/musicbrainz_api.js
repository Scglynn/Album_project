// MusicBrainz API calls to search for song, artist, and album information
// MusicBrainz is free and requires no API key
// fetchMusicBrainzData();

async function fetchMusicBrainzData() {
  try {
    let collection1 = document.getElementById('collection1').value.toLowerCase(); // song/recording
    let collection2 = document.getElementById('collection2').value.toLowerCase(); // artist
    let collection3 = document.getElementById('collection3').value.toLowerCase(); // album/release

    const options = {
      method: "GET",
      headers: {
        "Accept": "application/json",
        // MusicBrainz requires a User-Agent identifying your app
        "User-Agent": "AlbumProject/1.0 (scglynn22@gmail.com)"
      },
    };

    const baseUrl = "https://musicbrainz.org/ws/2";

    // Search for a recording (song)
    fetch(
      baseUrl + "/recording/?query=" + encodeURIComponent(collection1) + "&fmt=json",
      options
    ).then(response => response.json())
    .then(response => console.log("Recording results:", response))

    // Search for an artist
    fetch(
      baseUrl + "/artist/?query=" + encodeURIComponent(collection2) + "&fmt=json",
      options
    ).then(response2 => response2.json())
    .then(response2 => console.log("Artist results:", response2))

    // Search for a release (album)
    fetch(
      baseUrl + "/release/?query=" + encodeURIComponent(collection3) + "&fmt=json",
      options
    ).then(response3 => response3.json())
    .then(response3 => console.log("Release results:", response3))

  } catch (error) {
    console.log(error);
  }
}
