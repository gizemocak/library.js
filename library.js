var library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] }
  }
};

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function(library) {
  for (let input in library["playlists"]) {
    const p0Route = library["playlists"][input];
    console.log(
      `${input}: ${p0Route["name"]} - ${p0Route["tracks"].length} tracks`
    );
  }
};
//printPlaylists(library);

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function() {
  for (let input in library["tracks"]) {
    const p0Route = library["tracks"][input];
    console.log(
      `${input}: ${p0Route["name"]} ${p0Route["artist"]} (${p0Route["album"]})`
    );
  }
};
printTracks(library);

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function(playlistId) {
  var route = library["playlists"][playlistId];
  console.log(
    `${playlistId}: ${route.name} - ${route["tracks"].length} tracks`
  );

  for (let input of route.tracks) {
    var tracksRoute = library.tracks[input];
    console.log(
      `${input}: ${tracksRoute.name} by ${tracksRoute.artist} (${
        tracksRoute.album
      })`
    );
  }
};

//printPlaylist('p01');

// adds an existing track to an existing playlist

var addTrackToPlaylist = function(trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
  //console.log(library.playlists)
};
//addTrackToPlaylist('t02','p02');

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

// adds a track to the library

var addTrack = function(name, artist, album) {
  library.tracks[uid()] = {
    id: uid(),
    name: name,
    artist: artist,
    album: album
  };
  console.log(library.tracks);
};

//addTrack('Julia', 'Jimmy', 'Coffee')

// adds a playlist to the library

var addPlaylist = function(name) {
  library.playlists[uid()] = { id: uid(), name: name };
  console.log(library.playlists);
};

//addPlaylist('gizem')

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {
//   for(let str in library.tracks){
//     console.log(library.tracks[str].id)
//     console.log(str)

//   }
// }

// function loop(){
//   for (let item in )
// }

// printSearchResults('coffee')
