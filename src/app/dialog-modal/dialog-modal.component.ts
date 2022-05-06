import { GetMoviesService } from './../get-movies.service';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MoviesService } from '../movies/movies.service';
import { MoviesDtoModelAdaptor } from '../movies/movies.adaptor';
import { MovieDAO, MoviesModel } from '../movies.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.css'],
})
export class DialogModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: MoviesModel, public movieService: MoviesService, private http: HttpClient, public dialog: MatDialog
  ) {}

  // movielist = new BehaviorSubject<MoviesModel[]>([]);
  // movies$ = this.movielist.asObservable()

  // movieDetails = this.movieService.movies
  // public movieUrl = 'https://mcuapi.herokuapp.com/api/v1/movies';



  ngOnInit(): void {
    console.table(this.data)


  }

  closeDialog() {
    this.dialog.closeAll()
  }

  // getMovieDetails() {
  //   return this.http.get<MoviesModel[]>(this.movieUrl)
  //   .pipe(map(data => {
  //     const newData = data.forEach((newNewData,i) => {
  //       console.log('Im looping through array and I am now at index:', i, 'which has a array Object of value', newNewData)
  //     })
  //     console.log(newData)
  //     this.movielist.next(data)


  //   }))
  //   .subscribe();

  // }



}
