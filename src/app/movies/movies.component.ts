import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalComponent } from '../dialog-modal/dialog-modal.component';
import { MoviesModel } from '../movies.model';
import { MoviesHttpService } from './movies-http.service';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  selected: any;
  selectedIndex!: number;
  movie: any
  id!: number;

  constructor(
    private moviesHttp: MoviesHttpService,
    public movieService: MoviesService,
    public dialog: MatDialog
    ) { }

    ngOnInit(): void {
    this.movieService.getMovieDetails();
    this.movieService.movies$

  }

  openDialog(movie: MoviesModel) {
    console.log(movie)
    this.dialog.open(DialogModalComponent, {data: movie});
  }

  selectedMovie(movie: any, index: number) {
    console.table('Selected movie', movie)
    this.selected = movie;
    this.selectedIndex = index;
  }

  @ViewChild('scrollMe')
  scrollView!: ElementRef;

  scrollLeft(): void {
    const leftScroll = this.scrollView.nativeElement.scrollLeft ?? 0;
    console.log(leftScroll);
    this.scrollView.nativeElement.scrollTo({
      left: leftScroll + 1285,
      behavior: 'smooth',
    });
  }
  scrollRight(): void {
    const rightScroll = this.scrollView.nativeElement.scrollLeft ?? 0;
    console.log(rightScroll);
    this.scrollView.nativeElement.scrollTo({
      left: rightScroll - 1450,
      behavior: 'smooth',
    });
  }


}
