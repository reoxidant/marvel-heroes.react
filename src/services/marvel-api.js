export default class MarvelApi {

    _url_heroes = 'https://gateway.marvel.com/v1/public/characters';

    _api_options = `?&apikey=${process.env.REACT_APP_PUBLIC_API_KEY}`;

    async getResource(url) {

        const response = await fetch(url);

        if(!response.ok){
            throw new Error(`Could not fetch ${url}, received ${response.status}`);
        }

        return await response.json();
    }
    //heroes
    async getAllHeroes(){
        const {data} = await this.getResource(this._url_heroes + this._api_options);
        return data.results;
    }

    async getHeroesById(id){
        const {data} = await this.getResource(this._url_heroes + `/${id}` + this._api_options);
        return data.results[0];
    }
    //comics
    async getAllComics(){
        const {data} = await this.getResource(this._url_heroes + this._api_options);
        return data.results;
    }

    async getComicsById(id){
        const {data} = await this.getResource(this._url_heroes + `/${id}` + this._api_options);
        return data.results[0];
    }
    //stories
    async getAllStories(){
        const {data} = await this.getResource(this._url_heroes + this._api_options);
        return data.results;
    }

    async getStoriesById(id){
        const {data} = await this.getResource(this._url_heroes + `/${id}` + this._api_options);
        return data.results[0];
    }
    //series
    async getAllSeries(){
        const {data} = await this.getResource(this._url_heroes + this._api_options);
        return data.results;
    }

    async getSeriesById(id){
        const {data} = await this.getResource(this._url_heroes + `/${id}` + this._api_options);
        return data.results[0];
    }
    //events
    async getAllEvents(){
        const {data} = await this.getResource(this._url_heroes + this._api_options);
        return data.results;
    }

    async getEventsById(id){
        const {data} = await this.getResource(this._url_heroes + `/${id}` + this._api_options);
        return data.results[0];
    }
}

const marvel = new MarvelApi();

marvel.getAllHeroes().then((heroes) => {
    heroes.map((hero) => {
       // console.log(hero);
    });
});

marvel.getHeroesById(1011334).then((hero) => {
    // console.log(hero);
});
