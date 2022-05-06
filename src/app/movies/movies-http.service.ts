import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, take, tap } from 'rxjs/operators';
import { MovieDAO} from '../movies.model'
import { MoviesService } from './movies.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesHttpService {

 public movieUrl = 'https://mcuapi.herokuapp.com/api/v1/movies';


  constructor(
    private http: HttpClient,

    ) { }

    getMoviesByIndex() {
      return this.http.get(this.movieUrl).pipe(take(1), map((indexedMovies) => {
        console.log(indexedMovies, "indexedMovies")
        return indexedMovies
      }))
    }

    getMovieDetails(): Observable<MovieDAO> {
      return this.http
      .get<MovieDAO>(this.movieUrl)
      .pipe(
        take(1),
        map((movies: MovieDAO) => {
          console.table(movies);
          return movies;

        }),
      )

    }


    getMovies(): Observable<MovieDAO> {
      let movieUrl = 'https://mcuapi.herokuapp.com/api/v1/movies';
      return this.http
        .get<MovieDAO>(movieUrl)
        .pipe(
          take(1),
          tap((movies: MovieDAO) => {
            const movieList = movies.data;
            console.table(movieList);
            return movieList;
          })
        )
    }
}
