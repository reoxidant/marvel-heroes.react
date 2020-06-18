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
    async getAllCharacters(){
        const {data} = await this.getResource(this._url_heroes + this._api_options);
        return data.results.map(this._transformMarvelCharacter);
    }

    async getCharacterById(id){
        const {data} = await this.getResource(this._url_heroes + `/${id}` + this._api_options);
        return this._transformMarvelCharacter(data.results[0]);
    }
    //comics
    async getAllComics(){
        const {data} = await this.getResource(this._url_heroes + this._api_options);
        return data.results.map(this._transformMarvelComics);
    }

    async getComicsById(id){
        const {data} = await this.getResource(this._url_heroes + `/${id}` + this._api_options);
        return this._transformMarvelComics(data.results[0]);
    }
    //stories
    async getAllStories(){
        const {data} = await this.getResource(this._url_heroes + this._api_options);
        return data.results.map(this._transformMarvelStories());
    }

    async getStoriesById(id){
        const {data} = await this.getResource(this._url_heroes + `/${id}` + this._api_options);
        return this._transformMarvelStories(data.results[0]);
    }
    //series
    async getAllSeries(){
        const {data} = await this.getResource(this._url_heroes + this._api_options);
        return data.results.map(this._transformMarvelSeries());
    }

    async getSeriesById(id){
        const {data} = await this.getResource(this._url_heroes + `/${id}` + this._api_options);
        return this._transformMarvelSeries(data.results[0]);
    }
    //events
    async getAllEvents(){
        const {data} = await this.getResource(this._url_heroes + this._api_options);
        return data.results.map(this._transformMarvelEvents());
    }

    async getEventsById(id){
        const {data} = await this.getResource(this._url_heroes + `/${id}` + this._api_options);
        return this._transformMarvelEvents(data.results[0]);
    }

    _transformMarvelCharacter(char){
        return {
            cardItemImageLink: char.thumbnail.path + "." +char.thumbnail.extension,
            cardItemName: char.name,
            cardItemText: char.description
        }
    }

    _transformMarvelComics(comic){
        return {
            data: comic.data
        }
    }

    _transformMarvelStories(story){
        return {
            data: story.data
        }
    }

    _transformMarvelSeries(series){
        return {
            data: series.data
        }
    }

    _transformMarvelEvents(event){
        return {
            data: event.data
        }
    }
}
