import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Captain America',  photo: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_ons_mas_mob_02.jpg" },
      { id: 12, name: 'Iron Man',         photo: "https://static.wikia.nocookie.net/disney-marvel-movies/images/e/e9/Iron_Man_AIW_Profile.jpg/revision/latest?cb=20180519210007"},
      { id: 13, name: 'Thor',             photo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor.jpg" },
      { id: 14, name: 'Hulk',             photo: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_ons_mas_mob_02_1.jpg" },
      { id: 15, name: 'Nick Fury',        photo: "https://img.cinemablend.com/filter:scale/cb/a/5/f/8/e/9/a5f8e9765a371839b396ece0a34b3a992bc49fd7752ef235fd17ee0065f7d9e1.jpg?fw=1200" },
      { id: 16, name: 'Black Widow',      photo: "https://upload.wikimedia.org/wikipedia/en/f/f6/Scarlett_Johansson_as_Black_Widow.jpg" },
      { id: 17, name: 'Groot',            photo: "https://cdn.vox-cdn.com/thumbor/Jw5hIp6CEfyD6bDzwcpavbmU4c4=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/8378039/baby-groot-guardians.0.jpg" },
      { id: 18, name: 'Spider Man',       photo: "https://publish.one37pm.net/wp-content/uploads/2020/05/spiderman-mobile.jpg" },
      { id: 19, name: 'Black Panther',    photo: "https://lumiere-a.akamaihd.net/v1/images/h_blackpanther_mobile_19754_57fe2288.jpeg?region=0,0,640,480" },
      { id: 20, name: 'Falcon',           photo: "https://static.wikia.nocookie.net/p__/images/1/1b/SamWilson-CaptainAmerica.png/revision/latest?cb=20210426202032&path-prefix=protagonist" }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}