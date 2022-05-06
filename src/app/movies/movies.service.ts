import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { MovieDAO, MoviesModel } from '../movies.model';
import { MoviesHttpService } from './movies-http.service';
import { MoviesDtoModelAdaptor } from './movies.adaptor';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private movieshttp: MoviesHttpService,
  ) { }

  public movies = new BehaviorSubject<MoviesModel[]>([]);
  movies$ = this.movies.asObservable()




  getMoviesList(): void {
    this.movieshttp
    .getMovies()
    .pipe(take(1),
      map((movieData: MovieDAO) => {
        console.log(movieData)
        return MoviesDtoModelAdaptor.moviesDtoToMoviesModel(movieData)

      })
    ).subscribe((newMovieData: MoviesModel[]) => {
      console.log(newMovieData);
      return this.movies.next(newMovieData)
    })
  }

  getMovieDetails(): void {
    this.movieshttp
    .getMovieDetails()
    .pipe(
      take(1),
      map((movieData: MovieDAO) => {
        console.table(movieData)
        return MoviesDtoModelAdaptor.moviesDtoToMoviesModel(movieData)
      })
    )
    .subscribe((getMovies: MoviesModel[]) => {
      console.table(getMovies)
      return this.movies.next(getMovies);

    })
  }



}
