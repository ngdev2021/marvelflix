import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { ComicsModel, MoviesModel } from './movies.model';

interface MovieDAO {
  data: MoviesModel[];
  results: ComicsModel[];
}
@Injectable({
  providedIn: 'root',
})
export class GetMoviesService {
  constructor(
    private http: HttpClient
    ) {}

  private movies = new BehaviorSubject<MoviesModel[]>([]);
  movies$ = this.movies.asObservable
  private tvShows = new BehaviorSubject<MoviesModel[]>([]);
  tvShows$ = this.tvShows.asObservable
  comics = new BehaviorSubject<any[]>([]);
  

  getComics() {
    let comicsUrl =
      'https://gateway.marvel.com/v1/public/comics?ts=1&apikey=b377c6e7d7dbf5d04bc721ad2448a4fe&hash=579ebca700ac2eb1daaa59e17043c3f0';
    return this.http
      .get<MovieDAO>(comicsUrl)
      .pipe(
        take(1),
        tap((comics) => {
          const comicList = comics.data;
          this.comics.next(comicList);
          console.log(comicList);
        })
      )
      .subscribe();
  }

  getTvShows() {
    let tvShowUrl = 'https://mcuapi.herokuapp.com/api/v1/tvshows';
    return this.http
      .get<MovieDAO>(tvShowUrl)
      .pipe(
        take(1),
        tap((tvShows) => {
          const tvShowList = tvShows.data;
          this.tvShows.next(tvShowList);
          console.log(tvShowList);
        })
      )
      .subscribe();
  }


}
