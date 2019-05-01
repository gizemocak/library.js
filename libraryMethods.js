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
        p01: {
            id: "p01",
            name: "Coding Music",
            tracks: ["t01", "t02"]
        },
        p02: {
            id: "p02",
            name: "Other Playlist",
            tracks: ["t03"]
        }
    },
    printPlaylists: function () {
        for (let input in this.playlists) {
            const p0Route = this.playlists[input];
            console.log(
                `${input}: ${p0Route["name"]} - ${p0Route["tracks"].length} tracks`
            );
        }
    },
    printTracks: function () {
        for (let input in this.tracks) {
            const p0Route = this.tracks[input];
            console.log(
                `${input}: ${p0Route["name"]} ${p0Route["artist"]} (${p0Route["album"]})`
            );
        }
    },
    printPlaylist: function (playlistId) {
        var route = this.playlists[playlistId];
        console.log(
            `${playlistId}: ${route.name} - ${route["tracks"].length} tracks`
        );

        for (let input of route.tracks) {
            var tracksRoute = this.tracks[input];
            console.log(
                `${input}: ${tracksRoute.name} by ${tracksRoute.artist} (${
              tracksRoute.album
            })`
            );
        }
    },
    addTrackToPlaylist: function (trackId, playlistId) {
        this.playlists[playlistId].tracks.push(trackId);
    },
    uid: function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    },
    addTrack: function (name, artist, album) {
        this.tracks[uid()] = {
            id: uid(),
            name: name,
            artist: artist,
            album: album
        };
        console.log(this.tracks);
    },
    addPlaylist: function (name) {
        this.playlists[uid()] = {
            id: uid(),
            name: name
        };
        console.log(this.playlists);
    }
};