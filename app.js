new Vue({
    el: "#app",
    data: {
        textSearch: "",
        teams: []
    },
    created() {
        axios({
                "method": "GET",
                "url": "https://free-nba.p.rapidapi.com/teams",
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "free-nba.p.rapidapi.com",
                    "x-rapidapi-key": "4fda4e4c82msh6635b0a91774b70p1a3360jsn1d0d2ab783b9"
                },
                "params": {
                    "page": "0"
                }
            })
            .then((response) => {
                this.teams = response.data.data;
            })
            .catch((error) => {
                console.log(error)
            })

    },
    computed: {
        teamsFilter() {
            this.teams.forEach(team => {
                team.image_url = "http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/" + team.abbreviation.toLowerCase() + ".png";
            });
            var textSearch = this.textSearch;
            return this.teams.filter(function(el) {
                return el.conference.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1;
            });
        }
    }


});


new Vue({
    el: "#app2",
    data: {
        textSearch: "",
        players: []
    },
    created() {
        axios({
                "method": "GET",
                "url": "https://free-nba.p.rapidapi.com/players",
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "free-nba.p.rapidapi.com",
                    "x-rapidapi-key": "6e442364dcmshb440a2786cdbddap15aa49jsn2271087dd077"
                },
                "params": {
                    "page": "0",
                    "per_page": "25"
                }
            })
            .then((response) => {
                this.players = response.data.data;
            })
            .catch((error) => {
                console.log(error)
            })

    },
    computed: {
        playersFilter() {
            var textSearch = this.textSearch;
            return this.players.filter(function(el) {
                return el.first_name.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1;
            });
        }
    }

});

new Vue({
    el: "#app3",
    data: {
        textSearch: "",
        games: []
    },
    created() {
        axios({
                "method": "GET",
                "url": "https://free-nba.p.rapidapi.com/games",
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "free-nba.p.rapidapi.com",
                    "x-rapidapi-key": "6e442364dcmshb440a2786cdbddap15aa49jsn2271087dd077"
                },
                "params": {
                    "page": "0",
                    "per_page": "25"
                }
            })
            .then((response) => {
                this.games = response.data.data;
            })
            .catch((error) => {
                console.log(error)
            })

    },
    computed: {
        gamesFilter() {
            var textSearch = this.textSearch;
            return this.games.filter(function(el) {
                return el.home_team.full_name.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1;
            });
        }
    }

});