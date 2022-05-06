// import { DialogModalComponent } from './../dialog-modal/dialog-modal.component';
// import { GetMoviesService } from './../get-movies.service';
// import { Component, OnInit, ViewChild } from '@angular/core';
// import { ElementRef } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { MoviesService } from '../movies/movies.service';

// @Component({
//   selector: 'app-cards',
//   templateUrl: './cards.component.html',
//   styleUrls: ['./cards.component.css'],
// })
// export class CardsComponent implements OnInit {
//   constructor(public getMovies: MoviesService, public dialog: MatDialog) {}

//   openDialog() {
//     this.dialog.open(DialogModalComponent);
//   }

//   @ViewChild('scrollMe')
//   scrollView!: ElementRef;

//   ngOnInit(): void {
//     this.getMovies.getMoviesList;
//     this.getMovies.movies$;
//     // this.getMovies.getTvShows();
//     // this.getMovies.tvShows$;
//     // this.getMovies.getComics();
//     // this.getMovies.comics;
//   }

//   scrollLeft(): void {
//     const leftScroll = this.scrollView.nativeElement.scrollLeft ?? 0;
//     console.log(leftScroll);
//     this.scrollView.nativeElement.scrollTo({
//       left: leftScroll + 1750,
//       behavior: 'smooth',
//     });
//   }
//   scrollRight(): void {
//     const rightScroll = this.scrollView.nativeElement.scrollLeft ?? 0;
//     console.log(rightScroll);
//     this.scrollView.nativeElement.scrollTo({
//       left: rightScroll - 1750,
//       behavior: 'smooth',
//     });
//   }
// }
