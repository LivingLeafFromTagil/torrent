import { makeAutoObservable } from "mobx";

export default class GameStore{
  constructor() {
    this._categories = [
      
    ];
    this._developers = [
      
    ];
    this._years = [

    ];
    this._games = [
      
    ];

    this._users = [

    ];

    this._shortUrl = '';

    this.generateShortUrl = () => {
      let result = 'myUrl.net/';
      for(let i = 0; i<5; i++) {
        result += (Math.round(Math.random()*100)%36).toString(36);
      }
      return result;
    }

    makeAutoObservable(this);
  }


  setCategories(categories) {
    this._categories = categories;
  }

  setYears(years) {
    this._years = years;
  }

  setDevelopers(developers) {
    this._developers = developers;
  }

  setGames(games) {
    this._games = games;
  }

  setUsers(users) {
    this._users = users;
  }

  setShortUrl() {
    let url = this.generateShortUrl();
    this._shortUrl = url;
  }

  get categories() {
    return this._categories;
  }

  get years() {
    return this._years;
  }

  get developers() {
    return this._developers;
  }

  get users() {
    return this._users;
  }

  get games() {
    return this._games;
  }

  get shortUrl() {
    return this._shortUrl;
  }
}